import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { DynamicIcon } from "@/components/dynamic-icon"
import type { ServiceCategory, Service, ServiceFeature } from "@/lib/services-data"
import { SITE_CONFIG } from "@/lib/site-config"

type CategoryPageTemplateProps = {
  category: ServiceCategory
}

export function CategoryPageTemplate({ category }: CategoryPageTemplateProps) {
  const jsonLdCategory = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.title} Services in Bangladesh`,
    description: category.subtitle || category.description,
    url: `${SITE_CONFIG.url}/${category.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: category.services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${SITE_CONFIG.url}/${category.slug}/${service.slug}`,
        description: service.subtitle || service.description,
      })),
    },
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title,
        item: `${SITE_CONFIG.url}/${category.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCategory) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <PageHero
        eyebrow="Services"
        title={category.title}
        description={category.subtitle || category.description || ""}
        image={category.heroImage || "/placeholder.jpg"}
        imageAlt={`${category.title} Services - Corporate.bd`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: category.title },
        ]}
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      />

      {/* Intro */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              About this practice
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
              {category.title} that scale with your business
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg text-pretty">
              {category.intro}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                `${SITE_CONFIG.stats.clients} clients served`,
                `${SITE_CONFIG.stats.projects} projects delivered`,
                "Senior engineers and consultants",
                "Bangla & English support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src={category.heroImage || "/placeholder.svg"}
                alt={`${category.title} team at work`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Service Lineup
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
              Choose the service that fits your need
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Each {category.title.toLowerCase()} service can be engaged independently or as
              part of a bundled package. Click into any card for the full breakdown.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {category.services.map((service: Service) => (
              <Link
                key={service.slug}
                href={`/${category.slug}/${service.slug}`}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-background p-6 hover:border-primary hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <DynamicIcon name={service.icon || "HelpCircle"} className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.subtitle || service.description || ""}
                  </p>
                </div>

                <ul className="mt-2 space-y-1.5">
                  {(service.features || []).slice(0, 3).map((feature: ServiceFeature) => (
                    <li key={feature.title} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {feature.title}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-border text-sm font-medium text-primary">
                  Explore service
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Why teams choose us
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
            Senior expertise, transparent pricing, local presence
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Senior practitioners",
              description:
                "Every engagement is led by senior consultants and engineers — not interns or first-line staff.",
              icon: "Award",
            },
            {
              title: "Transparent pricing",
              description:
                "Fixed-fee proposals or clear hourly rates. No hidden charges, no surprise invoices.",
              icon: "BadgeDollarSign",
            },
            {
              title: "Local + global",
              description:
                "On-the-ground presence in Bangladesh combined with global standards and tooling.",
              icon: "Globe",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <DynamicIcon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title={`Ready to upgrade your ${category.title.toLowerCase()}?`}
        description="Book a free 30-minute consultation and walk away with a clear roadmap and pricing."
      />
    </>
  )
}
