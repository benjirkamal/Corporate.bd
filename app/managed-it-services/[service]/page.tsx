import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/service-page-template"
import { getCategory, getService, Service } from "@/lib/services-data"

const CATEGORY_SLUG = "managed-it-services"

type Params = Promise<{ service: string }>

export async function generateStaticParams() {
  const category = getCategory(CATEGORY_SLUG)
  return category?.services.map((s: Service) => ({ service: s.slug })) ?? []
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const result = getService(CATEGORY_SLUG, serviceSlug)
  if (!result) return {}
  const { service } = result
  const title = service.title
  const description = service.subtitle || service.description || ""
  const canonicalUrl = `/${CATEGORY_SLUG}/${service.slug}`
  const ogImage = service.heroImage || "/images/og-image.jpg"

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

export default async function Page({ params }: { params: Params }) {
  const { service: serviceSlug } = await params
  const result = getService(CATEGORY_SLUG, serviceSlug)
  if (!result) notFound()
  return <ServicePageTemplate service={result.service} category={result.category} />
}
