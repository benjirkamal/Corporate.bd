import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Linkedin,
  Facebook,
  Youtube,
  ShieldCheck,
  Zap,
  Building2,
  Train,
  Car,
  Plane,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Headphones,
  Calendar,
  ExternalLink,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/site-config"
import { ContactFormInteractive } from "@/components/contact-form-interactive"

export const metadata: Metadata = {
  title: "Contact Us | Enterprise IT, Web Development & Legal Advisory Desk",
  description: `Get in touch with ${SITE_CONFIG.name}. Consult with senior software engineers, cloud architects, and corporate legal attorneys at Motijheel C/A, Dhaka. Guaranteed 1-hour response.`,
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  openGraph: {
    title: "Contact Us | Enterprise IT, Web Development & Legal Advisory Desk",
    description:
      "Schedule a consultation with our technology and legal advisory team at Motijheel C/A, Dhaka. Reach out via WhatsApp, phone, or email.",
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
}

const CONTACT_PILLARS = [
  {
    icon: Phone,
    label: "Phone & Hotline",
    primary: SITE_CONFIG.phone,
    secondary: "Sun – Thu, 9:00 AM – 6:00 PM",
    badge: "Direct Line",
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
    ctaText: "Call Now",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp Concierge",
    primary: SITE_CONFIG.whatsapp,
    secondary: "Instant Chat & Project Inquiries",
    badge: "Online Now",
    isOnline: true,
    href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=Hello%20Corporate.bd%20Team!%20I%20would%20like%20to%20inquire%20about%20your%20services.`,
    ctaText: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    label: "Official Email Desks",
    primary: SITE_CONFIG.email,
    secondary: `Sales: ${SITE_CONFIG.salesEmail}`,
    badge: "1-Hour Reply",
    href: `mailto:${SITE_CONFIG.email}`,
    ctaText: "Send Email",
  },
  {
    icon: MapPin,
    label: "Headquarters (HQ)",
    primary: `${SITE_CONFIG.address.line1}`,
    secondary: `${SITE_CONFIG.address.line2}, ${SITE_CONFIG.address.city}`,
    badge: "Metro Station Exit",
    href: "#map-section",
    ctaText: "Get Directions",
  },
]

const QUICK_TOPIC_CHATS = [
  {
    title: "Web & Custom App Development",
    desc: "Discuss architecture, stack & timelines",
    message: "Hi! I would like to discuss a Web / Software Development project.",
  },
  {
    title: "Cloud Hosting & Server NOC",
    desc: "BDIX cloud servers & managed DevOps",
    message: "Hi! I need information regarding Cloud Hosting and Server Infrastructure.",
  },
  {
    title: "Company Formation & Trademark",
    desc: "RJSC incorporation, legal & IP filing",
    message: "Hi! I need consultation regarding Company Formation and Trademark Registration.",
  },
  {
    title: "Dhaka Guided City Tour",
    desc: "Old Dhaka heritage & VIP transit bookings",
    message: "Hi! I would like to book a private Dhaka City Guided Tour.",
  },
]

const CONTACT_FAQS = [
  {
    q: "Is there any fee for the initial project consultation?",
    a: "No. We provide a complimentary 30-minute initial discovery consultation either virtually (via Google Meet / Zoom) or in person at our Motijheel office to assess your requirements and recommend solutions.",
  },
  {
    q: "How fast will I receive a proposal or quotation?",
    a: "For standard services (domain, cloud, legal registration, Dhaka tours), quotations are provided within 2 to 4 business hours. For complex custom web applications and bespoke software, full technical proposals are delivered within 24 to 48 hours.",
  },
  {
    q: "Can we sign a Non-Disclosure Agreement (NDA) before sharing project details?",
    a: "Absolutely. We treat all client concepts, source code, and corporate documentation with utmost confidentiality. We are happy to execute standard or custom mutual NDAs prior to in-depth technical discussions.",
  },
  {
    q: "Where is your office located and how do I get there?",
    a: "Our central office is located at 67 Motijheel Commercial Area, Dhaka-1000. It is situated right beside Motijheel Metro Rail Station (Exit Gate 2), making it easily accessible from anywhere across Dhaka.",
  },
  {
    q: "What payment methods are supported for corporate billing?",
    a: "We support formal corporate bank wire transfers (EFT/RTGS), Cheques, international card payments, bKash/Nagad merchant gateways, and official VAT-compliant PO billing.",
  },
]

export default function ContactPage() {
  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_CONFIG.name}`,
    description: `Get in touch with ${SITE_CONFIG.name} for corporate digital, legal, and IT solutions in Bangladesh.`,
    url: `${SITE_CONFIG.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
        addressLocality: SITE_CONFIG.address.city,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.country,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.7289,
        longitude: 90.4172,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />

      {/* Page Hero */}
      <PageHero
        eyebrow="Enterprise Client Advisory & Support"
        title="Let's Build & Scale Your Next Big Digital Project"
        description="Schedule a consultation with our software architects, legal attorneys, and infrastructure engineers in Motijheel C/A, Dhaka. We provide guaranteed 1-hour response times."
        image="/images/contact/team.jpg"
        imageAlt="Corporate.bd client consulting and enterprise technology team in Dhaka, Bangladesh"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        primaryCta={{
          label: "Book Instant Consultation",
          href: "#inquiry-form",
        }}
        secondaryCta={{
          label: "WhatsApp Support Desk",
          href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`,
        }}
      />

      {/* Response SLA & Trust Banner */}
      <section className="border-b border-border bg-muted/40 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-lg md:text-xl">
                <Clock className="h-5 w-5" />
                <span>&lt; 15 Mins</span>
              </div>
              <p className="text-xs text-muted-foreground">Average WhatsApp Reply</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-primary font-bold text-lg md:text-xl">
                <ShieldCheck className="h-5 w-5" />
                <span>100% NDA</span>
              </div>
              <p className="text-xs text-muted-foreground">Data Privacy Guaranteed</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-primary font-bold text-lg md:text-xl">
                <Train className="h-5 w-5" />
                <span>Metro Gate 2</span>
              </div>
              <p className="text-xs text-muted-foreground">Motijheel Station Access</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-lg md:text-xl">
                <Zap className="h-5 w-5" />
                <span>Free 30-Min</span>
              </div>
              <p className="text-xs text-muted-foreground">Technical Discovery Call</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Interactive Contact Pillars */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Direct Reach Channels
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground">
            How Would You Prefer to Connect?
          </h2>
          <p className="text-sm text-muted-foreground">
            Choose your preferred communication channel for instant advisory or scheduling an office visit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_PILLARS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    {card.isOnline ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {card.badge}
                      </span>
                    ) : (
                      <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {card.label}
                    </h3>
                    <div className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {card.primary}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {card.secondary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Main Interactive Form & Consultation Desk */}
      <section className="bg-muted/30 border-y border-border py-20" id="inquiry-form">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 xl:col-span-8">
              <ContactFormInteractive />
            </div>

            {/* Right: Sidebar Cards */}
            <aside className="lg:col-span-5 xl:col-span-4 space-y-6">
              {/* 1-Click WhatsApp Topics */}
              <div className="rounded-3xl border border-border bg-card p-6 md:p-7 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      Quick WhatsApp Topics
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Click to initiate a pre-filled discussion
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {QUICK_TOPIC_CHATS.map((topic, i) => (
                    <a
                      key={i}
                      href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(topic.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-2xl border border-border bg-muted/40 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all"
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="text-xs font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {topic.title}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          {topic.desc}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Department Direct Email Directory */}
              <div className="rounded-3xl border border-border bg-card p-6 md:p-7 shadow-sm space-y-4">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  Department Directory
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex items-start justify-between pb-3 border-b border-border/60">
                    <div>
                      <span className="font-bold text-foreground block">Enterprise Sales & RFPs</span>
                      <span className="text-muted-foreground">Web, Apps & Infrastructure</span>
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.salesEmail}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {SITE_CONFIG.salesEmail}
                    </a>
                  </div>

                  <div className="flex items-start justify-between pb-3 border-b border-border/60">
                    <div>
                      <span className="font-bold text-foreground block">Legal & Compliance</span>
                      <span className="text-muted-foreground">RJSC, Trademark & IP</span>
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-bold text-foreground block">24/7 NOC Support Desk</span>
                      <span className="text-muted-foreground">Server alerts & emergency SLA</span>
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.supportEmail}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {SITE_CONFIG.supportEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Response SLA Promise */}
              <div className="rounded-3xl bg-primary text-primary-foreground p-6 md:p-7 shadow-md relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute bottom-0 right-0 -mb-6 -mr-6 h-32 w-32 rounded-full bg-accent/20 blur-2xl"
                />
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <Zap className="h-3.5 w-3.5 text-accent" />
                    <span>Our Response Guarantee</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">
                    60-Minute Service SLA
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-primary-foreground/85">
                    Inquiries submitted during standard business hours receive a substantive technical response from an assigned lead specialist within 60 minutes.
                  </p>
                </div>
              </div>

              {/* Social & Professional Connect */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-foreground">Follow Our Updates</div>
                  <div className="text-xs text-muted-foreground">Tech insights & case studies</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" size="icon" className="rounded-xl">
                    <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-xl">
                    <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-xl">
                    <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <Youtube className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Office Directions & Interactive Map */}
      <section id="map-section" className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-12 shadow-sm">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Direction details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Headquarters & In-Person Meetings
                </span>
                <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Visit Our Motijheel C/A Office
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We welcome clients and enterprise partners to our central Dhaka headquarters for detailed project strategy sessions, technical workshops, and signing ceremonies.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Physical Address
                    </div>
                    <div className="text-sm font-semibold text-foreground mt-0.5">
                      {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {SITE_CONFIG.address.city}-{SITE_CONFIG.address.postalCode}, {SITE_CONFIG.address.country}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Train className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Metro Rail Access
                    </div>
                    <div className="text-sm font-semibold text-foreground mt-0.5">
                      Motijheel Metro Station (Exit Gate 2)
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Direct 2-minute walking distance from the station platform
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Car className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Parking & Vehicle Access
                    </div>
                    <div className="text-sm font-semibold text-foreground mt-0.5">
                      Reserved Basement Visitor Parking
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Valet & security assistance available on arrival
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button asChild className="rounded-xl gap-2 font-semibold">
                  <a
                    href="https://maps.google.com/?q=67+Motijheel+C/A+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl gap-2">
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    <span>Call for Reception Guidance</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Map Embed */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted shadow-inner">
                <iframe
                  title="Corporate.bd Motijheel Headquarters Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=90.4100%2C23.7280%2C90.4260%2C23.7380&amp;layer=mapnik&amp;marker=23.7330%2C90.4180"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 rounded-xl bg-background/95 backdrop-blur-xs border border-border p-3 shadow-md max-w-xs text-xs pointer-events-none">
                  <div className="font-bold text-foreground">{SITE_CONFIG.name} HQ</div>
                  <div className="text-muted-foreground">67 Motijheel Commercial Area, Dhaka</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-muted/30 border-t border-border py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Clear & Transparent Answers
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground">
              Everything you need to know about working with us, consultations, NDAs, and payment methods.
            </p>
          </div>

          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-2"
              >
                <h3 className="font-serif font-bold text-base text-foreground flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

