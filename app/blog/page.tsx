import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { BlogFeed } from "@/components/blog-feed"
import { SITE_CONFIG } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Blog & Insights | Technology, Business Legal, Domains & Dhaka Tours | Corporate.bd",
  description:
    "Explore expert articles, technical guides, legal compliance tutorials, and Dhaka tourism itineraries published by the Corporate.bd consulting team.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: {
    title: "Blog & Insights | Technology, Business Legal & Dhaka Tours",
    description:
      "Articles, guides, and strategic insights on software engineering, RJSC corporate legal processes, .bd domains, and guided Dhaka city tours.",
    url: `${SITE_CONFIG.url}/blog`,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
}

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_CONFIG.name} Blog & Knowledge Hub`,
    description:
      "Authoritative guides, enterprise software insights, legal compliance advice, and Dhaka tour guides.",
    url: `${SITE_CONFIG.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.svg`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Corporate.bd Knowledge Hub"
        title="Articles, Guides & Industry Insights"
        description="Practical resources on software development, cloud infrastructure, RJSC compliance, trade licenses, and guided Dhaka tourism."
        image="/images/blog/editorial.jpg"
        imageAlt="Corporate.bd Blog & Knowledge Hub"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        primaryCta={{ label: "Explore Articles", href: "#articles" }}
        secondaryCta={{ label: "Contact Authors", href: "/contact" }}
        badgeText="Updated Weekly"
      />

      <main id="articles" className="container mx-auto px-4 py-12 md:py-16">
        <BlogFeed />
      </main>
    </>
  )
}
