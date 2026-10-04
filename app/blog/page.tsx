import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { BlogFeed } from "@/components/blog-feed"
import { BlogFaqAccordion } from "@/components/blog-faq-accordion"
import { SITE_CONFIG } from "@/lib/site-config"

const BLOG_HUB_FAQS = [
  {
    question: "How frequently are your regulatory, legal, and technical guides updated?",
    answer:
      "All regulatory playbooks (including RJSC incorporation, trade licensing, NBR income tax, VAT Form 9.1 filings, and DPDT trademark registration) are audited quarterly by our Dhaka-based corporate compliance team to reflect statutory amendments, circular notices, and updated government portal workflows.",
  },
  {
    question: "Are the technical code architectures and payment gateway samples production-ready?",
    answer:
      "Yes. The code architectures demonstrated across our guides—such as bKash Tokenized Checkout, Nagad Direct Merchant API, SSLCOMMERZ webhooks, and Next.js App Router performance optimizations—are derived from live, production-grade enterprise deployments operating at scale across Bangladesh.",
  },
  {
    question: "Can Corporate.bd execute the services and implementation covered in these articles?",
    answer:
      "Absolutely. Beyond publishing deep-dive educational resources, Corporate.bd is an end-to-end consulting and technology agency. We provide full-cycle RJSC company formation, BTCL .bd domain registrations, custom software and mobile app engineering, e-commerce development, and guided heritage city tours in Dhaka.",
  },
  {
    question: "How do I request a custom guide, legal analysis, or enterprise case study?",
    answer:
      "If your organisation is navigating a specialized regulatory transition, cross-border corporate structure, or complex technical stack, reach out via our contact page. Our senior consultants and engineers frequently produce dedicated advisory frameworks tailored to specific commercial requirements.",
  },
  {
    question: "How can I access and use the downloadable compliance checklists and toolkits?",
    answer:
      "Each blog post features actionable key takeaways and verified toolkits (such as the RJSC Incorporation Checklist, NBR Corporate Tax Calendar, and E-Commerce Launch Architecture). You can preview and copy these directly into your team's project management or compliance tracking systems.",
  },
]

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BLOG_HUB_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

      {/* Blog & Advisory FAQs Accordion */}
      <section className="border-t border-border/70 py-16 bg-muted/20" id="blog-faqs">
        <div className="container mx-auto px-4 max-w-4xl">
          <BlogFaqAccordion
            eyebrow="Knowledge Base FAQ"
            title="Blog & Publication FAQs"
            subtitle="Frequently asked questions regarding our editorial standards, regulatory compliance guides, code architectures, and consulting services in Bangladesh."
            faqs={BLOG_HUB_FAQS}
          />
        </div>
      </section>
    </>
  )
}
