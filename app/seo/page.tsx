import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CategoryPageTemplate } from "@/components/category-page-template"
import { getCategory } from "@/lib/services-data"

const CATEGORY_SLUG = "seo"

export function generateMetadata(): Metadata {
  const category = getCategory(CATEGORY_SLUG)
  if (!category) return {}
  const title = `${category.title} in Bangladesh`
  const description = category.subtitle || category.description || ""
  const canonicalUrl = `/${CATEGORY_SLUG}`
  const ogImage = category.heroImage || "/images/og-image.jpg"

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} | Corporate.bd`,
      description,
      url: canonicalUrl,
      siteName: "Corporate.bd",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Corporate.bd`,
      description,
      images: [ogImage],
    },
  }
}

export default function Page() {
  const category = getCategory(CATEGORY_SLUG)
  if (!category) notFound()
  return <CategoryPageTemplate category={category} />
}
