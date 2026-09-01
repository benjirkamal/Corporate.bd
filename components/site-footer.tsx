import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

const FOOTER_COLUMNS = [
  {
    title: "Domain & Hosting",
    links: [
      { label: "Domain Services", href: "/digital-infrastructure/domain-services" },
      { label: "Corporate Email", href: "/digital-infrastructure/corporate-email" },
      { label: "Cloud Hosting", href: "/digital-infrastructure/cloud-hosting" },
      { label: "VPS Hosting", href: "/digital-infrastructure/vps-hosting" },
      { label: "SSL & Security", href: "/digital-infrastructure/ssl-security" },
    ],
  },
  {
    title: "Software & Web",
    links: [
      { label: "Custom ERP & CRM", href: "/web-development/custom-erp-crm" },
      { label: "HR & Payroll Software", href: "/web-development/hr-payroll" },
      { label: "E-Commerce Solutions", href: "/web-development/ecommerce-solutions" },
      { label: "Custom Web Apps", href: "/web-development/custom-web-apps" },
      { label: "Corporate Websites", href: "/web-development/corporate-websites" },
    ],
  },
  {
    title: "Legal Compliance",
    links: [
      { label: "Company Formation", href: "/legal-compliance/company-formation" },
      { label: "Trade License", href: "/legal-compliance/trade-license" },
      { label: "Tax & VAT Services", href: "/legal-compliance/tax-vat" },
      { label: "Intellectual Property", href: "/legal-compliance/intellectual-property" },
      { label: "Legal Advisory", href: "/legal-compliance" },
    ],
  },
  {
    title: "IT & Tours",
    links: [
      { label: "IT AMC Support", href: "/managed-it-services/amc" },
      { label: "Server Administration", href: "/managed-it-services/server-administration" },
      { label: "AI & Workflow Bots", href: "/managed-it-services/ai-automation" },
      { label: "Dhaka City Guided Tour", href: "/tour/dhaka-tour" },
      { label: "Enterprise SEO Services", href: "/seo" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground font-sans text-sm font-bold shadow-sm">
                  C.
                </div>
                {SITE_CONFIG.name}
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                End-to-end digital infrastructure, custom software, legal compliance, managed IT, and SEO for high-growth businesses in Bangladesh.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Leveled Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h3 className="font-serif font-semibold text-xs tracking-wider uppercase text-accent h-6 flex items-center">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label} className="leading-tight">
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/75 hover:text-primary-foreground hover:underline underline-offset-4 transition whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Reach Us Column - Perfectly Leveled with other columns */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-serif font-semibold text-xs tracking-wider uppercase text-accent h-6 flex items-center">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2 leading-tight">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  {SITE_CONFIG.address.line1} {SITE_CONFIG.address.line2}, {SITE_CONFIG.address.city}-{SITE_CONFIG.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2 leading-tight">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 leading-tight">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 leading-tight">
                <Clock className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-xs text-primary-foreground/75">
                  {SITE_CONFIG.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-6 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="hover:text-primary-foreground transition">
              Contact
            </Link>
            <span className="opacity-70">{SITE_CONFIG.workingHours}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
