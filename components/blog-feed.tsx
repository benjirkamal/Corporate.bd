"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  Sparkles,
  BookOpen,
  Compass,
  Laptop,
  Scale,
  Cloud,
  TrendingUp,
  FileText,
  ChevronLeft,
  ChevronRight,
  Mail,
  CheckCircle2,
  Download,
  Check,
  ShieldCheck,
  FileCheck2,
  FileSpreadsheet,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BLOG_POSTS_DATA, getBlogPostWordCount, type BlogPostDetail } from "@/lib/blog-data"

const POSTS_PER_PAGE = 6

const CATEGORIES = [
  { id: "all", label: "All Insights", icon: BookOpen },
  { id: "web-tech", label: "Web & Tech", icon: Laptop },
  { id: "business-legal", label: "Legal & Corporate", icon: Scale },
  { id: "tours-culture", label: "Dhaka Tours", icon: Compass },
  { id: "cloud-domains", label: "Domains & Cloud", icon: Cloud },
  { id: "seo-growth", label: "SEO & Growth", icon: TrendingUp },
]

export function BlogFeed() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const gridTopRef = React.useRef<HTMLDivElement>(null)

  const filteredPosts = React.useMemo(() => {
    return BLOG_POSTS_DATA.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.categoryLabel.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Reset to page 1 whenever category or search changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages)

  const startIndex = (validCurrentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const [selectedToolkit, setSelectedToolkit] = React.useState<{
    id: string
    title: string
    category: string
    description: string
    icon: typeof FileCheck2
    items: string[]
    actionLabel: string
  } | null>(null)

  const [newsletterEmail, setNewsletterEmail] = React.useState("")
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([
    "RJSC & Corporate Law",
    "Web Tech & Next.js",
  ])
  const [isSubscribed, setIsSubscribed] = React.useState(false)
  const [copiedItem, setCopiedItem] = React.useState<string | null>(null)

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes("@")) return
    setIsSubscribed(true)
  }

  const cleanDate = (dateStr: string) => dateStr.replace(/,?\s*2026/g, "")

  const TOOLKITS = [
    {
      id: "rjsc-checklist",
      title: "RJSC Company Formation Checklist",
      category: "Corporate & Legal",
      description:
        "Statutory document requirements, digital name clearance protocols, bank encashment certificates, and post-incorporation trade license roadmap.",
      icon: FileCheck2,
      actionLabel: "View Compliance Checklist",
      items: [
        "Digital Name Clearance approval via RJSC portal (valid for 30 days)",
        "Drafting customized Memorandum (MOA) and Articles of Association (AOA)",
        "Collection of NID copies, e-TINs, and passport photographs of all directors",
        "Temporary bank account opening for foreign or institutional share deposit",
        "Encashment Certificate verification from scheduled commercial bank in Bangladesh",
        "Submission of Form I, Form VI (Registered Office), Form IX (Consent to Act), and Form XII (Directors)",
        "Payment of government stamp duty and statutory filing fees via designated bank",
        "Collection of Certificate of Incorporation with digital QR authentication",
        "Immediate post-incorporation: City Corporation Trade License and 13-digit Business Identification Number (BIN/VAT)",
      ],
    },
    {
      id: "vat-tax-calendar",
      title: "NBR Corporate Tax & VAT Calendar",
      category: "Tax & Compliance",
      description:
        "Comprehensive annual timeline for monthly VAT Musak-9.1 returns, quarterly advance income tax (AIT), and annual corporate returns.",
      icon: FileSpreadsheet,
      actionLabel: "View Tax Deadlines",
      items: [
        "15th of Every Month: Filing of monthly VAT Return (Musak-9.1) for previous month sales and VDS",
        "15th of Every Month: Deposit of Withholding Tax (TDS) deducted from vendors and staff payroll",
        "September 15: 1st installment of Advance Income Tax (AIT) for applicable corporate entities",
        "December 15: 2nd installment of Advance Income Tax (AIT)",
        "January 15: Annual filing of Form 108 (Statement of employee tax deduction at source)",
        "March 15: 3rd installment of Advance Income Tax (AIT)",
        "June 15: 4th installment of Advance Income Tax (AIT) before fiscal year-end",
        "July 15: Filing of Annual RJSC Annual Return (Form 23B / Schedule X)",
        "January 15 (Next Fiscal): Submission of audited company income tax return under Section 166",
      ],
    },
    {
      id: "medical-digital-playbook",
      title: "Specialist Doctor & Clinic Digital Playbook",
      category: "Healthcare & Web",
      description:
        "Architectural specifications for BDIX low-latency hosting, BMDC ethical advertising compliance, and automated chamber serial integration.",
      icon: ShieldCheck,
      actionLabel: "View Architecture Playbook",
      items: [
        "Next.js App Router with server-side rendering for Core Web Vitals (sub-second load)",
        "BDIX local peering connectivity ensuring seamless access on GP, Banglalink, Robi, and Teletalk networks",
        "Prominent verification of BMDC registration number and accredited postgraduate credentials",
        "Multi-chamber dynamic scheduling grid with accurate geographic GPS pins for Dhanmondi, Uttara, etc.",
        "Automated chamber serial ticketing with SMS and WhatsApp confirmation triggers",
        "Optional tokenized bKash and Nagad advance fee deposit to slash patient no-shows by 40%+",
        "Strict adherence to BMDC Medical Ethics Code: no sensationalized cure claims or unverified awards",
        "Structured MedicalBusiness and Physician JSON-LD schema for Google Local 3-Pack and Knowledge Graph ranking",
      ],
    },
  ]

  const featuredPost = BLOG_POSTS_DATA.find((p) => p.featured) || BLOG_POSTS_DATA[0]

  return (
    <div className="space-y-12">
      {/* Category Pills & Search Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 rounded-2xl bg-muted/50 border border-border">
        {/* Category tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles & guides..."
            className="h-9 pl-9 text-xs rounded-xl bg-background border-border/80"
          />
        </div>
      </div>

      {/* Featured Article (Only on page 1 of All Insights without active search) */}
      {selectedCategory === "all" && !searchQuery && validCurrentPage === 1 && featuredPost && (
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:border-primary/50 transition duration-300">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 md:p-8">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border lg:col-span-6 block group"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-sm">
                  <Sparkles className="h-3 w-3" />
                  Featured Article
                </span>
              </div>
            </Link>

            <div className="space-y-4 lg:col-span-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-semibold">
                  {featuredPost.categoryLabel}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {cleanDate(featuredPost.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {featuredPost.readTime}
                </span>
                <span className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded text-[11px] font-medium border border-border/60">
                  <FileText className="h-3 w-3 text-primary" />
                  {getBlogPostWordCount(featuredPost).toLocaleString()} words
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-snug group-hover:text-primary transition">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-foreground">{featuredPost.author.name}</p>
                  <p className="text-[11px] text-muted-foreground">{featuredPost.author.role}</p>
                </div>
                <Button asChild className="rounded-xl gap-2">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <span>Read Guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles - 3:3 Grid (3 columns, 2 rows = 6 per page) */}
      <div ref={gridTopRef} className="scroll-mt-24 space-y-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-border">
            <BookOpen className="h-10 w-10 mx-auto text-muted-foreground mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-foreground">No articles found</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords or explore another category.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("all")
                setSearchQuery("")
              }}
              className="mt-4 rounded-xl text-xs"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    {/* Image */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative aspect-[16/10] w-full overflow-hidden bg-muted block"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-background/90 backdrop-blur-xs text-foreground border border-border/80 shadow-xs">
                          <Tag className="h-2.5 w-2.5 text-primary" />
                          {post.categoryLabel}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {cleanDate(post.date)}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-foreground/80 font-medium">
                          <FileText className="h-2.5 w-2.5 text-primary" />
                          {getBlogPostWordCount(post).toLocaleString()} words
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-serif text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-0 border-t border-border/40 mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-foreground">{post.author.name}</p>
                      <p className="text-[10px] text-muted-foreground">{post.author.role}</p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <nav
                aria-label="Blog pagination"
                className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border"
              >
                <div className="text-xs text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{startIndex + 1}</span>–
                  <span className="font-semibold text-foreground">
                    {Math.min(endIndex, filteredPosts.length)}
                  </span>{" "}
                  of <span className="font-semibold text-foreground">{filteredPosts.length}</span> articles
                </div>

                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(validCurrentPage - 1)}
                    disabled={validCurrentPage <= 1}
                    className="h-9 px-3 text-xs rounded-xl gap-1"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Previous</span>
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isActive = pageNum === validCurrentPage
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`h-9 min-w-[36px] px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-xs"
                              : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                          aria-label={`Page ${pageNum}`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(validCurrentPage + 1)}
                    disabled={validCurrentPage >= totalPages}
                    className="h-9 px-3 text-xs rounded-xl gap-1"
                    aria-label="Next page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </nav>
            )}
          </>
        )}
      </div>

      {/* Executive Toolkits & Research Resources */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-border pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Executive Practical Resources
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-1">
              Bangladesh Business & Technology Toolkits
            </h2>
          </div>
          <p className="text-xs text-muted-foreground max-w-md">
            Interactive statutory checklists, NBR compliance schedules, and high-performance engineering blueprints prepared by our advisory team.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TOOLKITS.map((toolkit) => {
            const Icon = toolkit.icon
            return (
              <div
                key={toolkit.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
                      {toolkit.category}
                    </span>
                    <div className="h-8 w-8 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {toolkit.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {toolkit.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-border/60">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedToolkit(toolkit)}
                    className="w-full text-xs font-semibold rounded-xl gap-1.5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all"
                  >
                    <span>{toolkit.actionLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* The Sunday Executive Dispatch (Newsletter & Intelligence Digest) */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-8 md:p-12 shadow-xs">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Mail className="h-3.5 w-3.5" />
            <span>Weekly Executive Intelligence</span>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              The Sunday Executive Dispatch
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Stay ahead with curated analysis on Bangladesh RJSC legal shifts, NBR tax and VAT circulars, Next.js engineering patterns, and local search algorithms. Delivered once every Sunday morning.
            </p>
          </div>

          {/* Topic Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {[
              "RJSC & Corporate Law",
              "Web Tech & Next.js",
              "SEO & Local Search",
              "Tax, VAT & Compliance",
            ].map((topic) => {
              const active = selectedTopics.includes(topic)
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => toggleTopic(topic)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                    active
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "bg-muted text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {active && <Check className="h-3 w-3" />}
                  <span>{topic}</span>
                </button>
              )
            })}
          </div>

          {/* Subscription Form or Confirmation State */}
          {isSubscribed ? (
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-2 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-base font-bold text-foreground">
                You are successfully subscribed!
              </h4>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                Thank you for joining. Your first executive briefing along with our digital compliance toolkit links will arrive in your inbox this coming Sunday morning.
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsSubscribed(false)
                  setNewsletterEmail("")
                }}
                className="text-xs text-primary hover:underline mt-2"
              >
                Register another email address
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your executive email..."
                    className="pl-10 h-11 text-xs rounded-xl bg-background border-border"
                  />
                </div>
                <Button type="submit" className="h-11 px-5 text-xs font-semibold rounded-xl shrink-0">
                  Subscribe to Dispatch
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Zero Spam Guarantee
                </span>
                <span>•</span>
                <span>One email every Sunday</span>
                <span>•</span>
                <span>1-Click Unsubscribe</span>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Interactive Toolkit Modal */}
      {selectedToolkit && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedToolkit(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-xl p-6 md:p-8 space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div>
                <span className="text-[11px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
                  {selectedToolkit.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground mt-2">
                  {selectedToolkit.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {selectedToolkit.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedToolkit(null)}
                className="h-8 w-8 rounded-full border border-border bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Checklist items */}
            <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
              {selectedToolkit.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl border border-border/60 bg-muted/30 text-xs text-foreground/90 leading-relaxed"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Modal Footer Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
              <div className="text-[11px] text-muted-foreground">
                {copiedItem ? (
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Checklist copied to clipboard!
                  </span>
                ) : (
                  <span>Verified for current Bangladesh regulatory standards</span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const textContent = `${selectedToolkit.title}\n\n` +
                      selectedToolkit.items.map((it, i) => `${i + 1}. ${it}`).join("\n")
                    navigator.clipboard?.writeText(textContent)
                    setCopiedItem(selectedToolkit.id)
                    setTimeout(() => setCopiedItem(null), 2500)
                  }}
                  className="text-xs rounded-xl gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Copy Complete Checklist</span>
                </Button>

                <Button
                  size="sm"
                  onClick={() => setSelectedToolkit(null)}
                  className="text-xs rounded-xl"
                >
                  Close Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
