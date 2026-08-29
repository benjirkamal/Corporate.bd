import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
  ShieldCheck,
  Building2,
  Globe,
  Layers,
  Award,
  Check,
  X,
  ShoppingBag,
  Shirt,
  Landmark,
  HeartPulse,
  Home,
  Rocket,
  Search,
  FileCheck2,
  Lock,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { DynamicIcon } from "@/components/dynamic-icon"
import { SITE_CONFIG } from "@/lib/site-config"
import { SERVICE_CATEGORIES, Service } from "@/lib/services-data"
import { HomeFAQ } from "@/components/home-faq"
import { HOME_FAQS } from "@/lib/faqs"
import { SolutionEstimator } from "@/components/solution-estimator"

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Enterprise Digital, Legal & IT Solutions in Bangladesh`,
  description:
    "Corporate.bd is Bangladesh's leading partner for RJSC company registration, .bd domain acquisition, Next.js web development, bKash/Nagad payment gateways, managed IT services, and corporate SEO.",
  keywords: [
    "Corporate.bd",
    "Company Registration Bangladesh",
    "RJSC Firm Registration Dhaka",
    ".BD Domain Registration",
    "Next.js Web Development Bangladesh",
    "bKash Payment Gateway Integration",
    "Nagad Merchant API",
    "Managed IT Support Dhaka",
    "Local SEO Services Bangladesh",
    "BTRC ISP License",
    "NBR VAT TAX Consultancy",
  ],
  alternates: { canonical: "/" },
}

const categories = Object.values(SERVICE_CATEGORIES)

const HOME_VALUE_PROPS = [
  "RJSC, BTRC & NBR Savvy Legal Experts",
  "End-to-End Digital + Cloud Infrastructure",
  "Senior Consultants on Every Project",
  "24/7 Bangla & English Executive Support",
]

const ACCREDITATIONS = [
  { name: "BTCL & BTRC Partner", label: "Official .BD Domain & Telecom Routing" },
  { name: "RJSC Legal Desk", label: "Company Incorporation & Licensing" },
  { name: "NBR VAT & TAX", label: "Mushak 6.3 Tax Compliant Invoicing" },
  { name: "bKash & Nagad API", label: "Instant Merchant Payment Gateway" },
  { name: "ISO 27001 Security", label: "Bank-Grade Encryption Standards" },
  { name: "Next.js & AWS Cloud", label: "High Performance Cloud Hosting" },
]

const INDUSTRIES = [
  {
    title: "E-Commerce & Retail",
    icon: ShoppingBag,
    desc: "Custom storefronts with bKash/Nagad checkout, courier API integration, inventory sync, and conversion SEO.",
  },
  {
    title: "RMG & Apparel Exporters",
    icon: Shirt,
    desc: "Compliance management, international buyer portal development, ERP setup, and global IP protection.",
  },
  {
    title: "Fintech & Financial",
    icon: Landmark,
    desc: "Bank-grade cloud infrastructure, PCI-DSS compliant API gateways, and regulatory BTRC/Central Bank filings.",
  },
  {
    title: "Healthcare & Diagnostics",
    icon: HeartPulse,
    desc: "Online appointment portals, lab result management, HIPAA-aligned patient data security, and local SEO.",
  },
  {
    title: "Real Estate & Construction",
    icon: Home,
    desc: "Property management software, RJSC land holding legal clearances, VR virtual tour integration, and lead gen.",
  },
  {
    title: "Startups & Tech Ventures",
    icon: Rocket,
    desc: "Rapid MVP development, venture incorporation, IP trademark filing, and cloud infrastructure scale-up.",
  },
]

const COMPARISON_ITEMS = [
  { feature: "Single Point of Accountability", corporate: true, traditional: false, freelancer: false },
  { feature: "In-House RJSC, BTRC & NBR Legal Team", corporate: true, traditional: false, freelancer: false },
  { feature: "Modern Next.js & Cloud Tech Stack", corporate: true, traditional: "Partial", freelancer: "Varies" },
  { feature: "NBR-Compliant VAT Invoice (Mushak 6.3)", corporate: true, traditional: true, freelancer: false },
  { feature: "Dedicated Senior Project Manager", corporate: true, traditional: false, freelancer: false },
  { feature: "24/7 SLA-Backed Emergency Support", corporate: true, traditional: false, freelancer: false },
]

const TESTIMONIALS = [
  {
    quote:
      "Corporate.bd took us from a single-page brochure to a full e-commerce platform with full legal compliance and bKash integration — all in under 60 days.",
    name: "Tahmina Rahman",
    role: "CEO, Riverine Apparels Ltd.",
  },
  {
    quote:
      "Their managed IT and AI automation team has cut our back-office workload by nearly 40%. Best technology and legal partner we have ever engaged in Dhaka.",
    name: "Imran Hossain",
    role: "Director, BD Logistics Group",
  },
  {
    quote:
      "From trade license and RJSC filing to product SEO, one team handled everything under one contract. Highly recommended for any serious business.",
    name: "Sadia Karim",
    role: "Founder, Karim Organics",
  },
]

export default function HomePage() {
  // Structured Data for Schema.org (JSON-LD)
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
    ],
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
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
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container relative mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent border border-accent/20">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted Enterprise Partner Since {SITE_CONFIG.founded}
            </span>

            <h1 className="mt-5 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Enterprise Digital Infrastructure, Custom Software & Legal Compliance in Bangladesh.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-primary-foreground/85 text-pretty">
              From official .BD domain registration and RJSC company incorporation to custom Next.js web applications, bKash payment gateways, and 24/7 managed IT support — Corporate.bd powers your complete digital ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg font-semibold"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {HOME_VALUE_PROPS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-2xl">
              <Image
                src="/images/home/team.jpg"
                alt="Corporate.bd enterprise technology and legal consulting team in Motijheel, Dhaka"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md rounded-xl p-3.5 border border-white/20 text-foreground flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">99.98% Service SLA Guaranteed</span>
                </div>
                <span className="text-xs text-muted-foreground font-semibold">Motijheel, Dhaka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto grid grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
          {[
            { label: "Enterprise Clients", value: SITE_CONFIG.stats.clients },
            { label: "Projects Delivered", value: SITE_CONFIG.stats.projects },
            { label: "Global Markets", value: SITE_CONFIG.stats.countries },
            { label: "In-House Specialists", value: SITE_CONFIG.stats.teamSize },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 bg-background px-4 py-8 text-center"
            >
              <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Solution Estimator */}
      <section className="container mx-auto px-4 py-16">
        <SolutionEstimator />
      </section>

      {/* Service Pillars */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Core Practice Areas
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Five specialized practices. One accountable delivery team.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Instead of managing multiple fragmented agencies for hosting, legal registration, web development, IT, and SEO, Corporate.bd integrates everything under unified project leadership with clear SLAs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <DynamicIcon name={category.icon || "HelpCircle"} className="h-6 w-6" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {category.subtitle}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-border/60 pt-3">
                      {category.services.slice(0, 4).map((s: Service) => (
                        <li
                          key={s.slug}
                          className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span>{s.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">
                      Explore {category.shortTitle || category.title}
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Custom Consultation Card */}
            <Link
              href="/contact"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary bg-primary p-6 text-primary-foreground hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-serif text-xl font-bold">Custom Enterprise Architecture</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-primary-foreground/85">
                    Need an integrated package combining domain, RJSC legal clearance, e-commerce, and managed IT? Talk to our senior directors.
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-primary-foreground/20 pt-3">
                    <li className="flex items-center gap-2 text-xs text-primary-foreground/90 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      Free 30-minute discovery call
                    </li>
                    <li className="flex items-center gap-2 text-xs text-primary-foreground/90 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      Detailed scope & proposal in 48 hrs
                    </li>
                    <li className="flex items-center gap-2 text-xs text-primary-foreground/90 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      Bangla & English executive team
                    </li>
                  </ul>
                  <div className="mt-auto pt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent">
                    Schedule Free Discovery Call
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Tailored Industry Solutions
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
            Specialized for Key Bangladeshi Industries
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            We understand the regulatory compliance and technological demands unique to each sector.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">{ind.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why Us / Comparison Matrix */}
      <section className="bg-muted/40 py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              The Corporate.bd Advantage
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Why leading Bangladeshi brands choose us over traditional vendors
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-lg">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-border bg-muted/60 text-xs font-bold uppercase tracking-wider text-foreground">
                  <th className="p-4 sm:p-5">Feature & Service Standard</th>
                  <th className="p-4 sm:p-5 text-primary text-center bg-primary/5">Corporate.bd</th>
                  <th className="p-4 sm:p-5 text-center text-muted-foreground">Traditional Agencies</th>
                  <th className="p-4 sm:p-5 text-center text-muted-foreground">Individual Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {COMPARISON_ITEMS.map((item) => (
                  <tr key={item.feature} className="hover:bg-muted/20">
                    <td className="p-4 sm:p-5 font-semibold text-foreground">{item.feature}</td>
                    <td className="p-4 sm:p-5 text-center bg-primary/5">
                      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                        <Check className="h-4 w-4" />
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {item.traditional === true ? (
                        <Check className="h-4 w-4 mx-auto text-emerald-600" />
                      ) : item.traditional === "Partial" ? (
                        <span className="text-xs font-medium text-amber-600">Partial</span>
                      ) : (
                        <X className="h-4 w-4 mx-auto text-rose-500" />
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {item.freelancer === true ? (
                        <Check className="h-4 w-4 mx-auto text-emerald-600" />
                      ) : item.freelancer === "Varies" ? (
                        <span className="text-xs font-medium text-amber-600">Varies</span>
                      ) : (
                        <X className="h-4 w-4 mx-auto text-rose-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Our Proven Engagement Process
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
            A structured, predictable execution path
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery & Analysis",
              description: "A 30-minute consultation to review your technical, legal, and commercial goals.",
            },
            {
              step: "02",
              title: "Fixed Scope Proposal",
              description: "A comprehensive roadmap, timeline, and NBR-compliant fixed-fee proposal within 48 hours.",
            },
            {
              step: "03",
              title: "Sprint Execution",
              description: "Agile 2-week execution sprints with weekly status updates and dedicated PM communication.",
            },
            {
              step: "04",
              title: "Go-Live & SLA Support",
              description: "Full compliance audit, staff onboarding, and 24/7 SLA-backed managed maintenance.",
            },
          ].map((step) => (
            <div key={step.step} className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <span className="font-serif text-4xl font-extrabold text-accent">{step.step}</span>
              <h3 className="mt-3 font-serif text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Everything You Need to Know About Doing Business with Us
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear answers regarding RJSC incorporation, .bd domains, bKash payments, and IT services in Bangladesh.
            </p>
          </div>

          <HomeFAQ />
        </div>
      </section>

      {/* In-depth SEO Content Block: Bangladesh Ecosystem Article */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <Globe className="h-4 w-4" />
            Corporate.bd Knowledge & Local Expertise
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-snug">
            Empowering Bangladesh&apos;s Corporate & Tech Ecosystem with Accountable Delivery
          </h2>

          <div className="grid gap-6 md:grid-cols-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              In Bangladesh&apos;s fast-evolving business landscape, enterprise success requires a seamless harmony between official regulatory compliance and high-performance technology. Navigating the Registrar of Joint Stock Companies and Firms (RJSC), securing official BTCL .bd domain assets, integrating local MFS payment gateways like bKash and Nagad, and optimizing for Google search engines present complex challenges for expanding companies.
            </p>
            <p>
              Corporate.bd bridges these traditionally separated domains. By combining veteran legal strategists, cloud infrastructure engineers, Next.js web architects, and SEO professionals under one roof, we eliminate vendor friction. Whether you are incorporating a new private limited company in Dhaka or scaling a cross-border e-commerce brand, our team ensures 100% NBR-compliant invoicing and guaranteed SLAs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Client Testimonials
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Trusted by Founders and CXOs Across Bangladesh
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-background p-6 shadow-xs flex flex-col justify-between"
              >
                <blockquote className="text-xs sm:text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-bold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Enterprise Foundation?"
        description="Schedule a free 30-minute discovery session with our senior consultants in Dhaka. Receive a clear execution roadmap and transparent proposal within 48 hours."
        primaryLabel="Book Free Discovery Call"
      />
    </>
  )
}
