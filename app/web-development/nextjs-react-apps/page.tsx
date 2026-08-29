import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Code2,
  ShieldCheck,
  Cpu,
  Globe,
  Gauge,
  Lock,
  Search,
  Server,
  Layers,
  Check,
  HelpCircle,
  FileCode2,
  Smartphone,
  BarChart3,
  Terminal,
  Activity,
  Award,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { PageHero } from "@/components/page-hero"
import { NextjsTechEstimator } from "@/components/nextjs-tech-estimator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SITE_CONFIG } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Next.js & React Web Application Development Company in Bangladesh | Corporate.bd",
  description:
    "Hire senior Next.js and React developers in Dhaka, Bangladesh. We engineer sub-second, SEO-optimized enterprise web applications on Next.js 15+ App Router, React Server Components, bKash/Nagad payment gateways, and cloud edge infrastructure.",
  keywords: [
    "Next.js Development Company Bangladesh",
    "React Web Application Developers Dhaka",
    "Next.js 15 App Router Agency",
    "Full-Stack React Developers Bangladesh",
    "Next.js bKash Payment Gateway Integration",
    "Headless E-Commerce Next.js Bangladesh",
    "React Server Components Company BD",
    "Core Web Vitals Optimization Dhaka",
  ],
  alternates: {
    canonical: "/web-development/nextjs-react-apps",
  },
  openGraph: {
    title: "Next.js & React Web Application Development Company in Bangladesh",
    description:
      "Engineered for sub-second page loads, 100/100 Lighthouse performance, and #1 Google SEO rankings. Partner with Bangladesh's premier Next.js architects.",
    url: "/web-development/nextjs-react-apps",
    siteName: SITE_CONFIG.name,
    images: [{ url: "/images/services/web-development.jpg", width: 1200, height: 630 }],
  },
}

const NEXTJS_FAQS = [
  {
    question: "Why should my business choose Next.js over traditional WordPress or PHP?",
    answer:
      "Next.js combines Server-Side Rendering (SSR), Static Site Generation (SSG), and edge execution to deliver sub-second page load times. Unlike monolithic PHP or WordPress sites that bloat with plugins, Next.js applications score 95+ on Google Core Web Vitals, provide superior security against database injection attacks, and rank significantly higher on Google search results.",
  },
  {
    question: "How do you integrate local payment gateways like bKash and Nagad in Next.js?",
    answer:
      "We utilize Next.js Server Actions and API Routes to interact directly with bKash Merchant API, Nagad PGW, and SSLCommerz. Because execution happens entirely server-side, your secret API keys, app secrets, and payment tokens remain 100% hidden from client-side browser inspect tools, guaranteeing bank-grade security.",
  },
  {
    question: "Will non-technical staff be able to edit website content in a Next.js app?",
    answer:
      "Absolutely. We pair Next.js with headless Content Management Systems (CMS) such as Sanity, Strapi, or Payload CMS. Your marketing team gets an intuitive visual dashboard to publish blogs, alter banners, and update product pricing without writing a single line of code.",
  },
  {
    question: "What is the typical timeline for a Next.js web application project in Dhaka?",
    answer:
      "A standard corporate website or custom web portal built on Next.js 15+ typically takes 2 to 4 weeks from Figma wireframe approval to production edge deployment. Complex enterprise SaaS platforms or e-commerce portals with multi-vendor integrations take 4 to 8 weeks.",
  },
  {
    question: "Do you provide source code ownership and local NBR VAT compliant invoices?",
    answer:
      "Yes. Upon completion, 100% source code ownership is transferred to your GitHub or GitLab organization. Furthermore, as an established Bangladeshi enterprise, Corporate.bd provides official NBR Mushak 6.3 VAT-compliant invoices for seamless corporate tax filing.",
  },
]

const FRAMEWORK_COMPARISON = [
  { metric: "Google Core Web Vitals (LCP / FID)", nextjs: "0.6s (Instant)", traditionalPhp: "3.2s (Slow)", legacyReactSpa: "2.1s (Delayed)" },
  { metric: "Search Engine SEO Indexability", nextjs: "Native Server-Side SSR", traditionalPhp: "Good", legacyReactSpa: "Poor (Client Rendered)" },
  { metric: "Security & Vulnerability Exposure", nextjs: "Zero Database Exposure", traditionalPhp: "High Plugin Exploit Risk", legacyReactSpa: "Client API Key Risk" },
  { metric: "Mobile Performance on 4G/3G BD Networks", nextjs: "Ultra Lightweight", traditionalPhp: "Heavy Server Overhead", legacyReactSpa: "Large Bundle JS Loading" },
  { metric: "Scalability for Concurrent Users", nextjs: "Infinite Edge Scaling", traditionalPhp: "Server Bottlenecks", legacyReactSpa: "Browser Memory Intensive" },
]

export default function NextJsServicePage() {
  // Schema.org Structured Data
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js & React Web Application Development Bangladesh",
    operatingSystem: "Cloud, Web Browser",
    applicationCategory: "BusinessApplication",
    description:
      "Enterprise Next.js and React web application development in Bangladesh. High performance, sub-second speed, bKash integration, and SEO optimization.",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: NEXTJS_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero Section */}
      <PageHero
        eyebrow="Enterprise Next.js 15+ & React 19 Engineering"
        title="Next.js & React Web Application Development in Bangladesh"
        description="We engineer sub-second, SEO-optimized enterprise web applications on Next.js App Router, React Server Components, bKash payment gateways, and cloud edge infrastructure for industry leaders in Dhaka and worldwide."
        image="/images/services/web-development.jpg"
        imageAlt="Next.js and React Web Application Development in Bangladesh"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Software & Web Apps", href: "/web-development" },
          { label: "Next.js & React Apps" },
        ]}
        primaryCta={{ label: "Request Tech Proposal", href: "/contact" }}
        secondaryCta={{ label: "Call Senior Architect", href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}` }}
      />


      {/* Main Value Overview & Key Pillars */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Architectural Superiority
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Why Next.js is the #1 Engine for Corporate & E-Commerce Growth in Bangladesh
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                In today&apos;s competitive digital market, page speed is directly tied to revenue. Studies show that a 1-second delay in page load drops conversions by up to 20%. Traditional monolithic content systems like WordPress or legacy PHP templates struggle with slow database queries and heavy plugin bloat.
              </p>
              <p>
                At Corporate.bd, our senior software architects specialize in <strong>Next.js 15+ App Router</strong>, <strong>React Server Components (RSC)</strong>, and <strong>TypeScript</strong>. By shifting rendering logic to the edge and streaming UI components dynamically, we deliver instant page transitions, bank-grade API key security, and top organic rankings on Google.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Sub-second page loading speeds across 4G/3G BD networks",
                "Built-in Server-Side Rendering (SSR) for #1 Google rankings",
                "Bank-grade API key protection with Next.js Server Actions",
                "Seamless integration with Headless CMS (Sanity, Strapi, Payload)",
                "Native bKash, Nagad, and SSLCommerz payment callback APIs",
                "100% source code ownership with zero recurring user license fees",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Gauge className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">Core Web Vitals Guarantee</h3>
                  <p className="text-xs text-muted-foreground">Certified performance for Bangladeshi users</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-muted/50 border border-border text-center">
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-serif">&lt; 0.6s</div>
                  <div className="text-xs text-muted-foreground font-semibold mt-0.5">Largest Contentful Paint</div>
                </div>
                <div className="p-4 rounded-2xl bg-muted/50 border border-border text-center">
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-serif">100/100</div>
                  <div className="text-xs text-muted-foreground font-semibold mt-0.5">SEO Indexability Score</div>
                </div>
                <div className="p-4 rounded-2xl bg-muted/50 border border-border text-center">
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-serif">0.00</div>
                  <div className="text-xs text-muted-foreground font-semibold mt-0.5">Cumulative Layout Shift</div>
                </div>
                <div className="p-4 rounded-2xl bg-muted/50 border border-border text-center">
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-serif">100%</div>
                  <div className="text-xs text-muted-foreground font-semibold mt-0.5">Accessibility Rating</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-primary shrink-0" />
                <span>Audited on Google PageSpeed Insights and WebPageTest before every client handoff.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Comparison Matrix */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Technology Benchmark
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Next.js vs Traditional Monolithic PHP & Legacy Client SPAs
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              See why forward-thinking enterprises in Bangladesh are replacing old CMS installations with Next.js architecture.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-lg">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-border bg-muted/60 text-xs font-bold uppercase tracking-wider text-foreground">
                  <th className="p-4 sm:p-5">Performance & Security Metric</th>
                  <th className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 text-center bg-emerald-500/10 font-extrabold">Next.js 15+ App Router</th>
                  <th className="p-4 sm:p-5 text-center text-muted-foreground">Traditional PHP / WordPress</th>
                  <th className="p-4 sm:p-5 text-center text-muted-foreground">Legacy Client React SPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {FRAMEWORK_COMPARISON.map((row) => (
                  <tr key={row.metric} className="hover:bg-muted/20">
                    <td className="p-4 sm:p-5 font-semibold text-foreground">{row.metric}</td>
                    <td className="p-4 sm:p-5 text-center bg-emerald-500/5 font-bold text-emerald-600 dark:text-emerald-400">
                      {row.nextjs}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-muted-foreground">{row.traditionalPhp}</td>
                    <td className="p-4 sm:p-5 text-center text-muted-foreground">{row.legacyReactSpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Scope & Timeline Estimator */}
      <section className="container mx-auto px-4 py-16">
        <NextjsTechEstimator />
      </section>

      {/* Core Engineering Features */}
      <section className="bg-muted/40 py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Capabilities & Solutions
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              What We Build with Next.js & React
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              End-to-end full-stack web applications customized for Bangladesh and global enterprise clients.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Enterprise SaaS Platforms",
                icon: Cpu,
                desc: "Scalable multi-tenant web applications with role-based access control, automated billing, and real-time user management.",
              },
              {
                title: "Headless E-Commerce Stores",
                icon: ShoppingBagIcon,
                desc: "High-converting storefronts built on Next.js + Medusa/Shopify with native bKash, Nagad, and courier API callbacks.",
              },
              {
                title: "Dynamic Corporate Web Apps",
                icon: Globe,
                desc: "Blazing fast corporate platforms integrated with Headless CMS (Sanity, Strapi, Payload) for instant marketing agility.",
              },
              {
                title: "Real-Time Executive Dashboards",
                icon: BarChart3,
                desc: "Live analytics dashboards with WebSockets streaming, interactive charting, and automated PDF report generation.",
              },
              {
                title: "API-First Microservices",
                icon: Server,
                desc: "RESTful and GraphQL API backends running on Node.js/Next.js edge functions with strict TypeScript type safety.",
              },
              {
                title: "PWA Mobile-Optimized Frontends",
                icon: Smartphone,
                desc: "Installable Progressive Web Apps with offline sync, push notifications, and app-like mobile responsiveness.",
              },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-all duration-200"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Code Architecture Showcase: Security Pattern */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-border bg-zinc-950 text-zinc-100 p-6 md:p-10 shadow-2xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                <Terminal className="h-4 w-4" />
                Clean Code Standard & Server Actions Security
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                How We Protect Your Secret Keys & Local Gateways
              </h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
              TypeScript / Next.js 15
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                A common flaw in junior web development is exposing API secrets in client-side bundles. At Corporate.bd, all sensitive logic (such as bKash payment verification or database operations) is wrapped in <strong>Next.js Server Actions</strong> or server-only API endpoints.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-zinc-200 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  Strict TypeScript interfaces eliminate runtime exceptions.
                </li>
                <li className="flex items-center gap-2 text-zinc-200 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  Zero expose of `process.env.BKASH_APP_SECRET` to browser DevTools.
                </li>
                <li className="flex items-center gap-2 text-zinc-200 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  Automated input validation using Zod schema sanitization.
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 font-mono text-xs overflow-x-auto text-zinc-300 shadow-inner">
              <div className="flex items-center justify-between text-zinc-500 text-[10px] pb-2 border-b border-zinc-800 mb-3">
                <span>app/api/payment/bkash/route.ts</span>
                <span className="text-emerald-400">Server Side Execution</span>
              </div>
              <pre className="leading-relaxed">
                <span className="text-purple-400">import</span> {"{"} NextRequest, NextResponse {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;next/server&quot;</span>;{"\n"}
                <span className="text-purple-400">import</span> {"{"} GoogleGenAI {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;@google/genai&quot;</span>;{"\n\n"}
                <span className="text-blue-400">export async function</span> <span className="text-yellow-300">POST</span>(req: NextRequest) {"{"}{"\n"}
                {"  "}<span className="text-purple-400">const</span> {"{"} amount, orderId {"}"} = <span className="text-purple-400">await</span> req.json();{"\n"}
                {"  "}<span className="text-zinc-500">// Secret credentials remain safely on Cloud Server</span>{"\n"}
                {"  "}<span className="text-purple-400">const</span> bkashSecret = process.env.BKASH_APP_SECRET;{"\n"}
                {"  "}<span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> fetch(<span className="text-emerald-300">&quot;https://checkout.pay.bkash.com/v1.2.0-beta/...&quot;</span>);{"\n"}
                {"  "}<span className="text-purple-400">return</span> NextResponse.json({"{"} success: <span className="text-orange-400">true</span>, token {"}"});{"\n"}
                {"}"}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Technical Article for SEO Ranking */}
      <section className="bg-muted/30 py-20 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              SEO & Technical Leadership
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Why Corporate.bd is the Premier Next.js & React Agency in Dhaka
            </h2>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              As Bangladeshi businesses accelerate their digital transformation, having an ordinary website is no longer sufficient. Modern web applications demand search engine dominance, high conversion rates, and robust security. By choosing Corporate.bd as your Next.js engineering partner, you gain access to an elite team of senior full-stack developers based in Dhaka.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground">
              1. Unmatched Search Engine Visibility (SEO)
            </h3>
            <p>
              Search engines prioritize websites that load instantly and provide structured data markup. Next.js delivers native Server-Side Rendering (SSR) and Static Site Generation (SSG), allowing Google search bots to parse your HTML content immediately without execution delays. Combined with automated open-graph tags and canonical URLs, our Next.js websites consistently rank #1 on competitive keywords.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground">
              2. Seamless Local Bangladesh Integrations
            </h3>
            <p>
              We understand the local ecosystem. Our engineering team builds custom integrations for local mobile financial services (MFS) like bKash, Nagad, and Rocket, as well as SSLCommerz card gateways. Additionally, we integrate logistics APIs for Pathao, RedX, and Steadfast courier services for instant automated order shipping and tracking.
            </p>

            <h3 className="font-serif text-xl font-bold text-foreground">
              3. Full NBR Tax & Compliance Support
            </h3>
            <p>
              Corporate.bd is an officially registered corporation in Bangladesh. We provide official NBR Mushak 6.3 VAT-compliant invoices, helping corporate finance departments streamline accounting, claim tax deductions, and fulfill audit mandates effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Got Questions?
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions About Next.js Development
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear answers regarding Next.js engineering, timelines, security, and local payments in Bangladesh.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {NEXTJS_FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="rounded-2xl border border-border bg-card px-5 py-2">
                <AccordionTrigger className="text-left font-serif text-base font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Next.js Web Application?"
        description="Book a free 30-minute discovery call with our lead Next.js architects in Dhaka. Receive a complete technical roadmap and transparent NBR-compliant quote within 48 hours."
        primaryLabel="Schedule Free Tech Session"
      />
    </>
  )
}

function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
