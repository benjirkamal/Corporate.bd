import type { Metadata } from "next"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Linkedin,
  Facebook,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SITE_CONFIG } from "@/lib/site-config"
import { MAIN_NAV } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE_CONFIG.name}. Email, call, WhatsApp or visit our Dhaka office. We respond to most inquiries within one business hour.`,
  alternates: { canonical: "/contact" },
}

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    primary: SITE_CONFIG.email,
    secondary: SITE_CONFIG.salesEmail,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    primary: SITE_CONFIG.phone,
    secondary: "WhatsApp available",
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Office",
    primary: `${SITE_CONFIG.address.line1} ${SITE_CONFIG.address.line2}`,
    secondary: `${SITE_CONFIG.address.city}-${SITE_CONFIG.address.postalCode}, Bangladesh`,
    href: "#map",
  },
  {
    icon: Clock,
    label: "Working Hours",
    primary: SITE_CONFIG.workingHours,
    secondary: "Emergency support 24/7",
    href: "#",
  },
]

const serviceOptions = MAIN_NAV.filter((n) => n.children?.length).flatMap(
  (cat) =>
    cat.children!.map((c) => ({
      value: c.href,
      label: `${cat.label} — ${c.label}`,
    }))
)

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
          closes: "19:00",
        },
      ],
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
        name: "Contact Us",
        item: `${SITE_CONFIG.url}/contact`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <PageHero
        eyebrow="Get in touch"
        title="Contact Bangladesh's Trusted Enterprise IT, Web Development & Legal Compliance Partner"
        description="Schedule a consultation with our senior software engineers, legal compliance attorneys, and cloud architects in Motijheel C/A, Dhaka. We respond to inquiries within 1 business hour."
        image="/images/contact/team.jpg"
        imageAlt="Corporate.bd client consulting and enterprise technology team in Dhaka, Bangladesh"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Contact cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <card.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {card.label}
              </div>
              <div className="mt-1 font-semibold text-foreground">
                {card.primary}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {card.secondary}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-3 lg:py-20">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-background p-6 md:p-10">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Project enquiry
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Tell us what you need
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Share a few details and we&apos;ll come back with the right specialist
                and a clear set of next steps.
              </p>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" name="name" placeholder="Md. Karim Hossain" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Acme Ltd." />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+880 1XXX-XXXXXX" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="service">Service of interest</Label>
                  <Select name="service">
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="budget">Approximate budget (optional)</Label>
                  <Select name="budget">
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1l">Under BDT 1 lakh</SelectItem>
                      <SelectItem value="1-5l">BDT 1 – 5 lakh</SelectItem>
                      <SelectItem value="5-15l">BDT 5 – 15 lakh</SelectItem>
                      <SelectItem value="15l-plus">BDT 15 lakh+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Goals, timelines, constraints, anything that helps us prepare a thoughtful response."
                    required
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  By submitting this form you agree to our team contacting you about your enquiry. We never share your data with third parties.
                </p>

                <Button type="submit" size="lg" className="sm:w-fit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold">
                Prefer instant chat?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Our consultants are available on WhatsApp during working hours.
                Most messages get a reply in under 15 minutes.
              </p>
              <Button asChild className="mt-5 w-full">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-serif text-lg font-semibold">Follow us</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get our latest insights and updates.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Button asChild variant="outline" size="icon">
                  <Link href={SITE_CONFIG.social.linkedin} aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href={SITE_CONFIG.social.facebook} aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-primary text-primary-foreground p-6">
              <h3 className="font-serif text-lg font-semibold">
                Response promise
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                Inquiries received during working hours get a substantive reply
                within 60 minutes. Otherwise, the next morning by 10:00 AM.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="container mx-auto px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Visit us
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
                Drop by our Motijheel office
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We love meeting clients in person. Our office is located at 67 Motijheel Commercial Area, right by the Motijheel Metro Rail Station, with accessible parking available.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                  <span>
                    {SITE_CONFIG.address.line1} {SITE_CONFIG.address.line2},{" "}
                    {SITE_CONFIG.address.city}-{SITE_CONFIG.address.postalCode},{" "}
                    {SITE_CONFIG.address.country}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{SITE_CONFIG.workingHours}</span>
                </li>
              </ul>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted">
              <iframe
                title="Corporate.bd office map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=90.4100%2C23.7280%2C90.4260%2C23.7380&amp;layer=mapnik&amp;marker=23.7330%2C90.4180"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
