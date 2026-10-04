"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Zap,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  Eye,
  Server,
  Activity,
  ShoppingBag,
  CreditCard,
  Truck,
  RotateCcw,
  SlidersHorizontal,
  ChevronRight,
  Quote,
  Lock,
  Copy,
  Check,
  RefreshCw,
  Globe,
  Maximize2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import type { PortfolioProject } from "@/lib/services-data"

type EcommercePortfolioShowcaseProps = {
  projects: PortfolioProject[]
  heading?: string
  subheading?: string
}

interface LiveFrameSite {
  id: "sineen" | "amicart"
  name: string
  url: string
  displayUrl: string
  tagline: string
  industry: string
  description: string
  image: string
  metrics: { label: string; value: string }[]
  tech: string[]
}

const LIVE_FRAME_SITES: LiveFrameSite[] = [
  {
    id: "sineen",
    name: "Sineen.bd",
    url: "https://www.sineen.bd/",
    displayUrl: "https://www.sineen.bd/",
    tagline: "Consumer Electronics, Appliances & Gadget Accessories",
    industry: "Appliances & Gadgets E-Commerce",
    description: "Official Bangladeshi online store for smart watch chargers, high-capacity power banks, USB hubs, travel luggage, and home appliances with fast nationwide delivery.",
    image: "/images/portfolio/sineen-store.jpg",
    metrics: [
      { label: "Page Load Speed", value: "0.34s" },
      { label: "Mobile Checkout", value: "+48%" },
      { label: "Core Web Vitals", value: "99/100" },
      { label: "Coverage", value: "64 Districts" },
    ],
    tech: ["Next.js 15 App Router", "bKash & Nagad Tokenized", "Steadfast & Pathao Courier API", "Cloudflare Edge CDN"],
  },
  {
    id: "amicart",
    name: "AmiCart BD",
    url: "https://www.amicartbd.com/",
    displayUrl: "https://www.amicartbd.com/",
    tagline: "Organic Superfoods, Health & Wellness Marketplace",
    industry: "Health, Wellness & FMCG",
    description: "Leading health e-commerce storefront for organic rolled oats, nutrient-rich black garlic, superfoods, and daily wellness essentials with 1-click Cash on Delivery.",
    image: "/images/portfolio/amicart-store.jpg",
    metrics: [
      { label: "Page Load Speed", value: "0.29s" },
      { label: "Conversion Rate", value: "5.2%" },
      { label: "Repeat Buyers", value: "68%" },
      { label: "Mobile Traffic", value: "91%" },
    ],
    tech: ["Next.js 15 App Router", "Decoupled E-Commerce Engine", "Cash on Delivery OTP", "Pathao & RedX Logistics"],
  },
]

export function EcommercePortfolioShowcase({
  projects,
  heading = "Featured Headless E-Commerce Portfolio",
  subheading = "Live high-performance online stores engineered by Corporate.bd with sub-second page transitions, tokenized bKash checkout, and automated courier fulfillment.",
}: EcommercePortfolioShowcaseProps) {
  // Live Frame state
  const [activeFrameId, setActiveFrameId] = useState<"sineen" | "amicart">("sineen")
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [frameLoading, setFrameLoading] = useState<boolean>(true)
  const [frameKey, setFrameKey] = useState<number>(0)
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false)
  const [viewMode, setViewMode] = useState<"iframe" | "mockup">("iframe")

  // Portfolio list state
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  const activeSite = LIVE_FRAME_SITES.find((s) => s.id === activeFrameId) || LIVE_FRAME_SITES[0]

  // Trigger loading effect when switching sites or refreshing
  useEffect(() => {
    setFrameLoading(true)
    const timer = setTimeout(() => {
      setFrameLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [activeFrameId, frameKey, viewMode])

  const handleRefresh = () => {
    setFrameLoading(true)
    setFrameKey((prev) => prev + 1)
  }

  const handleCopyUrl = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(activeSite.url)
      setCopiedUrl(true)
      setTimeout(() => setCopiedUrl(false), 2000)
    }
  }

  const categories = [
    { id: "all", label: "All Flagship Stores", count: projects.length },
    { id: "electronics", label: "Tech & Gadgets", count: projects.filter((p) => p.category === "electronics").length },
    { id: "grocery", label: "Grocery & FMCG", count: projects.filter((p) => p.category === "grocery").length },
    { id: "fashion", label: "Fashion & Lifestyle", count: projects.filter((p) => p.category === "fashion").length },
    { id: "leather", label: "Artisan Leather & Export", count: projects.filter((p) => p.category === "leather").length },
    { id: "beauty", label: "Clean Beauty & Cosmetics", count: projects.filter((p) => p.category === "beauty").length },
    { id: "footwear", label: "Athletic Footwear", count: projects.filter((p) => p.category === "footwear").length },
  ]

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-gradient-to-b from-background via-muted/20 to-background border-t border-border py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Live Client Deployments & Interactive Viewport
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl text-foreground text-balance">
            {heading}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-balance text-base md:text-lg">
            {subheading}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. DEDICATED LIVE WEBSITE LOADING VIEW FRAME (Sineen & AmiCart) */}
        {/* ============================================================== */}
        <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-card p-4 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Frame Top Header & Client Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                <Globe className="h-3.5 w-3.5" />
                Live Website Loading View Frame
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mt-1">
                Explore Live Client Storefronts in Real Time
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Switch between live client websites below and preview interactive storefront responsiveness across Desktop, Tablet, and Mobile.
              </p>
            </div>

            {/* Storefront Switcher Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-muted rounded-xl border border-border self-start md:self-center">
              {LIVE_FRAME_SITES.map((site) => (
                <button
                  key={site.id}
                  onClick={() => setActiveFrameId(site.id)}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeFrameId === site.id
                      ? "bg-background text-foreground shadow-sm border border-border"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      activeFrameId === site.id ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/50"
                    }`}
                  />
                  <span>{site.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Browser Chrome Controls Bar */}
          <div className="mt-6 rounded-t-2xl bg-muted/80 border border-border px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Window Traffic Lights & Refresh */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block shadow-sm" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRefresh}
                className="h-7 w-7 text-muted-foreground hover:text-foreground"
                title="Reload Storefront Frame"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${frameLoading ? "animate-spin text-primary" : ""}`} />
              </Button>
            </div>

            {/* Simulated URL Bar */}
            <div className="flex-1 max-w-xl mx-auto flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-background border border-border shadow-inner text-xs font-mono">
              <div className="flex items-center gap-2 truncate">
                <Lock className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                <span className="text-foreground truncate">{activeSite.displayUrl}</span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handleCopyUrl}
                  className="p-1 text-muted-foreground hover:text-foreground rounded"
                  title="Copy URL"
                >
                  {copiedUrl ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                </button>
                <a
                  href={activeSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-primary hover:text-primary/80 rounded"
                  title="Open in new window"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Viewport Width Controls & View Mode Toggle */}
            <div className="flex items-center gap-2">
              {/* Desktop / Tablet / Mobile Toggle */}
              <div className="hidden sm:flex items-center gap-1 bg-background/80 p-1 rounded-lg border border-border">
                <button
                  onClick={() => setViewportMode("desktop")}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    viewportMode === "desktop" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Desktop View (100%)"
                >
                  <Monitor className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setViewportMode("tablet")}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    viewportMode === "tablet" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setViewportMode("mobile")}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    viewportMode === "mobile" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Mobile View (375px)"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Toggle iFrame vs HD Mockup */}
              <div className="flex items-center gap-1 bg-background/80 p-1 rounded-lg border border-border text-[11px] font-medium">
                <button
                  onClick={() => setViewMode("iframe")}
                  className={`px-2 py-1 rounded transition-colors ${
                    viewMode === "iframe" ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  Live View
                </button>
                <button
                  onClick={() => setViewMode("mockup")}
                  className={`px-2 py-1 rounded transition-colors ${
                    viewMode === "mockup" ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  HD Mockup
                </button>
              </div>
            </div>
          </div>

          {/* Browser Viewport Frame Container */}
          <div className="relative w-full rounded-b-2xl border-x border-b border-border bg-muted/30 overflow-hidden flex justify-center min-h-[580px] lg:min-h-[660px]">
            {/* Simulated Animated Loading Bar */}
            {frameLoading && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted z-30 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 via-primary to-emerald-500 animate-pulse w-full" />
              </div>
            )}

            {/* Viewport Frame with Responsive Width */}
            <div
              className={`w-full transition-all duration-300 relative flex flex-col ${
                viewportMode === "mobile"
                  ? "max-w-[390px] border-x-2 border-border shadow-2xl my-2 rounded-xl overflow-hidden bg-background"
                  : viewportMode === "tablet"
                  ? "max-w-[768px] border-x-2 border-border shadow-2xl my-2 rounded-xl overflow-hidden bg-background"
                  : "max-w-full bg-background"
              }`}
            >
              {/* Mode A: Live Interactive iFrame */}
              {viewMode === "iframe" ? (
                <div className="relative w-full h-[580px] lg:h-[660px] bg-background">
                  {frameLoading && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm gap-3">
                      <div className="h-10 w-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                      <div className="text-center space-y-1">
                        <p className="text-sm font-semibold text-foreground">
                          Connecting to {activeSite.name} ({activeSite.displayUrl})...
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Loading high-speed storefront across edge CDN servers
                        </p>
                      </div>
                    </div>
                  )}

                  <iframe
                    key={`${activeSite.id}-${frameKey}`}
                    src={activeSite.url}
                    title={`${activeSite.name} Live Viewport`}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                    loading="lazy"
                    onLoad={() => setFrameLoading(false)}
                  />

                  {/* Fallback Helper Bar if X-Frame-Options or CSP blocks external framing */}
                  <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded-xl bg-background/95 backdrop-blur-md border border-border shadow-lg flex flex-wrap items-center justify-between gap-3 text-xs z-10">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-muted-foreground">
                        Live Preview Mode active for <strong className="text-foreground">{activeSite.name}</strong>.
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setViewMode("mockup")}
                        className="h-7 text-xs font-medium text-accent"
                      >
                        Switch to HD Mockup
                      </Button>
                      <Button asChild size="sm" className="h-7 text-xs font-semibold gap-1 bg-primary text-primary-foreground">
                        <a href={activeSite.url} target="_blank" rel="noopener noreferrer">
                          Open Live Fullsite <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Mode B: High-Definition Architectural Mockup */
                <div className="relative w-full h-[580px] lg:h-[660px] overflow-hidden bg-background group">
                  <Image
                    src={activeSite.image}
                    alt={`${activeSite.name} E-Commerce Showcase`}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                    <Badge variant="outline" className="w-fit bg-emerald-500 text-white font-mono text-xs border-0 mb-3">
                      ✓ Active Production Client
                    </Badge>
                    <h4 className="text-2xl md:text-3xl font-bold font-serif drop-shadow-md">
                      {activeSite.name} - {activeSite.tagline}
                    </h4>
                    <p className="mt-2 text-sm text-gray-200 max-w-2xl leading-relaxed">
                      {activeSite.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeSite.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded bg-white/20 backdrop-blur-sm text-xs font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild className="bg-primary text-primary-foreground font-semibold">
                        <a href={activeSite.url} target="_blank" rel="noopener noreferrer">
                          Visit {activeSite.name} Live <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                        </a>
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setViewMode("iframe")}
                        className="bg-white/90 text-black hover:bg-white"
                      >
                        Try Live Viewport Frame
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar Under Frame */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-muted/40 border border-border">
            {activeSite.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl md:text-2xl font-bold font-mono text-foreground">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. FULL PORTFOLIO SHOWCASE GRID (Filtered by Category)        */}
        {/* ============================================================== */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Comprehensive Portfolio Catalog
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              All Client E-Commerce Projects & Case Studies
            </h3>
            <p className="text-sm text-muted-foreground">
              Filter by industry to explore custom headless e-commerce architectures developed by Corporate.bd.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all flex items-center gap-2 border ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-sm scale-105"
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted/80 border-border"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    activeCategory === cat.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                {/* Browser Mockup Chrome Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-muted/70 border-b border-border text-xs text-muted-foreground select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] opacity-75 hidden sm:inline">
                      {project.liveUrl || `${project.id}.corporate.bd`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Production
                    </span>
                    <Badge variant="outline" className="text-[10px] uppercase font-mono tracking-wider">
                      {project.industry}
                    </Badge>
                  </div>
                </div>

                {/* Project Image Preview */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Headless Storefront by Corporate.bd`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />

                  {/* Floating Badges on Image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-semibold shadow-md flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-emerald-300 font-mono">
                      {project.clientName}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight leading-snug drop-shadow-sm">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 space-y-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* 4-Item Performance Metric Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/80">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col text-center">
                        <span className="text-lg font-bold tracking-tight text-foreground font-mono">
                          {metric.value}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {metric.label}
                        </span>
                        {metric.trend && (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium font-mono mt-0.5">
                            {metric.trend}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Architecture Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5 text-accent" />
                      Engineered Capabilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-foreground/90">
                      {project.architectureHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                      Decoupled Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs font-medium bg-background"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="h-3.5 w-3.5 text-primary" />
                        Case Study & Specs
                      </Button>

                      {project.liveUrl && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-xs text-accent"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Visit Site <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>

                    <Button
                      asChild
                      size="sm"
                      className="gap-1.5 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={`/contact?service=headless-ecommerce&project=${project.id}`}>
                        Build Similar Store
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monolith vs Headless Performance Benchmark Table */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Architecture Comparison
            </span>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Why High-Growth Bangladeshi Brands Migrate to Headless
            </h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Monolithic platforms like standard WooCommerce or Magento bundle the backend and frontend together, creating slow database bottlenecks during flash promotions. Here is how Corporate.bd&apos;s decoupled Next.js 15 architecture compares:
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="py-3.5 px-4 font-semibold text-foreground">Performance Parameter</th>
                  <th className="py-3.5 px-4 font-semibold text-muted-foreground">Traditional Monolith (Woo/Magento)</th>
                  <th className="py-3.5 px-4 font-semibold text-primary">Corporate.bd Headless (Next.js 15)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-foreground flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    Mobile Page Load Speed
                  </td>
                  <td className="py-3.5 px-4 text-red-500 font-mono">3.5s - 5.8s (High latency)</td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                    0.28s - 0.45s (Sub-second)
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-foreground flex items-center gap-2">
                    <Activity className="h-4 w-4 text-accent" />
                    Google Core Web Vitals
                  </td>
                  <td className="py-3.5 px-4 text-yellow-600 dark:text-yellow-400 font-mono">
                    35 - 58 Score (Fails CWV)
                  </td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                    98 - 100 Score (Perfect Green)
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-foreground flex items-center gap-2">
                    <Server className="h-4 w-4 text-accent" />
                    Eid / Flash Sale Stability
                  </td>
                  <td className="py-3.5 px-4 text-red-500">
                    Frequent 504 gateway timeouts & database locks
                  </td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">
                    100,000+ concurrent shoppers with edge CDN caching
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-foreground flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-accent" />
                    bKash / Nagad Checkout
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Multiple page reloads & redirection drops
                  </td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">
                    1-Click in-context tokenized checkout modal
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-foreground flex items-center gap-2">
                    <Truck className="h-4 w-4 text-accent" />
                    Courier Dispatch (Pathao/Steadfast)
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    Manual export/import or buggy third-party plugins
                  </td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">
                    Instant automated API consignment creation & SMS tracking
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-foreground flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    Mobile Conversion Rate
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground font-mono">1.1% - 1.8% average</td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                    3.8% - 5.4% average (+40% lift)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-muted/40 border border-border text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <h4 className="font-serif text-xl font-bold tracking-tight text-foreground">
              Ready to Upgrade Your E-Commerce Storefront?
            </h4>
            <p className="text-sm text-muted-foreground">
              Whether you are scaling Sineen-style gadget catalogs, AmiCart-style FMCG grocery operations, or high-fashion lookbooks, our senior software architects in Dhaka engineer platforms that maximize conversions and eliminate checkout delays.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href="/contact?service=headless-ecommerce">
                  Request Free Architecture Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="tel:+8801912959885">
                  Direct Line: +880 1912-959885
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study & Technical Specs Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
            {/* Modal Header with Project Banner */}
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-black">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-top opacity-85"
                sizes="(max-width: 768px) 100vw, 800px"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs font-mono mb-2">
                  {selectedProject.industry}
                </Badge>
                <DialogTitle className="text-xl md:text-2xl font-bold font-serif text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-1">
                  Client: <strong className="text-foreground">{selectedProject.clientName}</strong>
                </DialogDescription>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-bold font-mono text-primary">{m.value}</div>
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                    {m.trend && (
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                        {m.trend}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Challenge & Solution Case Study */}
              <div className="space-y-4">
                <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-destructive flex items-center gap-1.5">
                    The Business Challenge
                  </h4>
                  <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    The Corporate.bd Headless Solution
                  </h4>
                  <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Measured Results */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  Key Business Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.results.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                        ✓
                      </span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Cpu className="h-4 w-4 text-primary" />
                  Production Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-mono font-medium border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 relative">
                <Quote className="h-8 w-8 text-accent/20 absolute top-3 right-3" />
                <p className="text-sm italic text-foreground leading-relaxed pr-6">
                  &ldquo;{selectedProject.caseStudy.clientQuote.text}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold font-serif">
                    {selectedProject.caseStudy.clientQuote.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">
                      {selectedProject.caseStudy.clientQuote.author}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {selectedProject.caseStudy.clientQuote.designation}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialog CTA Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs"
                >
                  Close Case Study
                </Button>

                <div className="flex items-center gap-2">
                  {selectedProject.liveUrl && (
                    <Button asChild variant="outline" className="text-xs gap-1">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        Visit Live Site <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  <Button asChild className="bg-primary text-primary-foreground text-xs">
                    <Link href={`/contact?service=headless-ecommerce&ref=${selectedProject.id}`}>
                      Discuss Similar Project
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
