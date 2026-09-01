import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, Activity, Globe, Headphones, Award, ShieldCheck, CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { DynamicIcon } from "@/components/dynamic-icon"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import type { Service, ServiceCategory } from "@/lib/services-data"
import { SITE_CONFIG } from "@/lib/site-config"

type ServicePageTemplateProps = {
  service: Service
  category: ServiceCategory
}

export function ServicePageTemplate({ service, category }: ServicePageTemplateProps) {
  // Stat cards data for the right side
  const trustStats = [
    { label: "Uptime SLA", value: "99.9%", icon: Activity },
    { label: "On-Time Delivery", value: "100%", icon: Globe },
    { label: "Support Desk", value: "24/7", icon: Headphones },
    { label: "Industry Experience", value: "10+ Years", icon: Award },
  ]

  const shortTitle = service.shortTitle || service.title
  const subtitle = service.subtitle || service.description || ""
  const overviewTitle = service.overviewTitle || service.title
  const overview = service.overview || []
  const benefits = service.benefits || []
  const featuresHeading = service.featuresHeading || "What's Included"
  const features = service.features || []
  const processSteps = service.process || []
  const faqs = service.faqs || []
  const ctaTitle = service.ctaTitle || "Ready to get started?"
  const ctaDescription = service.ctaDescription || "Contact us today to discuss your project requirements."

  // Schema.org Structured Data
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle || service.title,
    description: service.description || subtitle,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
        addressLocality: SITE_CONFIG.address.city,
        addressCountry: SITE_CONFIG.address.country,
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: features.map((f, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: f.title,
          description: f.description,
        },
      })),
    },
  }

  const jsonLdFaq = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } : null

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
      {
        "@type": "ListItem",
        position: 3,
        name: shortTitle,
        item: `${SITE_CONFIG.url}/${category.slug}/${service.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <PageHero
        eyebrow={category.title}
        title={service.title}
        description={subtitle}
        image={service.heroImage || "/placeholder.jpg"}
        imageAlt={`${service.title} - Corporate.bd`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: category.title, href: `/${category.slug}` },
          { label: shortTitle },
        ]}
        primaryCta={{ label: "Request Free Proposal", href: "/contact" }}
        secondaryCta={{ label: "View All Category Services", href: `/${category.slug}` }}
      />

      {/* Overview - REVISED with Trust Cards on the right */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Overview
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
              {overviewTitle}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-pretty">
              {overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Trust Cards (Filling the empty space) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {trustStats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-background shadow-sm hover:border-accent/50 transition-colors text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent mb-3">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
            
            {/* Additional mini-CTA or Trust Text under cards */}
            <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-dashed border-border text-center">
              <p className="text-xs text-muted-foreground">
                Trusted digital partner for enterprise companies across Bangladesh.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Features - rest of your code stays exactly same */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              What&apos;s Included
            </span>
          <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
              {featuresHeading}
          </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Our {service.title.toLowerCase()} package is designed to be comprehensive
              from day one — covering setup, optimization and ongoing operations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-background hover:shadow-md transition">
                <CardHeader className="space-y-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <DynamicIcon name={feature.icon} className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-normal text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>



{/* Why Choose Us - Dynamic Section */}
{service.whyChooseUs && (
  <section className="container mx-auto px-4 py-16 lg:py-20 border-t border-border">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="text-xs font-medium uppercase tracking-wider text-accent">
          Why Partner With Us
        </span>
        <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
          {service.whyChooseUsTitle || "Technical expertise you can trust"}
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          {service.whyChooseUsDescription}
        </p>
        
        <div className="mt-8 space-y-6">
          {service.whyChooseUs.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4">
        {service.stats ? (
          service.stats.map((stat, idx) => (
            <div key={idx} className={`rounded-2xl p-8 text-center border ${idx === 2 ? 'col-span-2 bg-primary text-primary-foreground' : 'bg-muted border-border'}`}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className={`text-sm mt-1 ${idx === 2 ? 'opacity-90' : 'text-muted-foreground'}`}>{stat.label}</div>
            </div>
          ))
        ) : (
          // Default stats fallback
          <>
            <div className="rounded-2xl bg-muted p-8 text-center border border-border">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Conversion Rate</div>
            </div>
            <div className="rounded-2xl bg-accent/5 p-8 text-center border border-accent/10">
              <div className="text-3xl font-bold text-accent">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="col-span-2 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90 mt-1">Clients Served Across BD</div>
            </div>
          </>
        )}
      </div>
    </div>
  </section>
)}



      {/* Process, FAQs, and Related Services sections continue here... */}
      {/* (I've kept them the same as your original code) */}
      {processSteps.length > 0 && (
        <section className="container mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Our Process
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
              How we deliver, step by step
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={step.step || idx} className="relative">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl font-bold text-accent">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {idx < processSteps.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:block absolute top-6 right-0 h-px w-12 bg-border translate-x-1/2"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4 py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  FAQ
                </span>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
                  Common questions about {shortTitle.toLowerCase()}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Don&apos;t see your question here? Our team is happy to help.
                </p>
                <Button asChild variant="outline" className="mt-6 bg-background">
                  <Link href="/contact">
                    Ask a Question <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="lg:col-span-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      )}

      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Explore More
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl">
              Other {category.title.toLowerCase()} services
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href={`/${category.slug}`}>
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.services
            .filter((s: Service) => s.slug !== service.slug)
            .map((related: Service) => (
              <Link
                key={related.slug}
                href={`/${category.slug}/${related.slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:border-primary hover:shadow-md transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <DynamicIcon name={related.icon || "HelpCircle"} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold group-hover:text-primary transition">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {related.subtitle || related.description || ""}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
        </div>
      </section>

      <CTASection
        title={ctaTitle}
        description={ctaDescription}
        primaryLabel="Get a Free Quote"
      />
    </>
  )
}