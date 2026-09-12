import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Share2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  User,
  ExternalLink,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getBlogPostWordCount,
} from "@/lib/blog-data"
import { SITE_CONFIG } from "@/lib/site-config"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found | Corporate.bd",
    }
  }

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`
  const imageUrl = `${SITE_CONFIG.url}${post.image}`

  return {
    title: `${post.title} | Corporate.bd Insights`,
    description: post.metaDescription,
    keywords: post.seoKeywords.join(", "),
    alternates: {
      canonical: postUrl,
    },
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: postUrl,
      siteName: SITE_CONFIG.name,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category)
  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`
  const imageUrl = `${SITE_CONFIG.url}${post.image}`
  const wordCount = getBlogPostWordCount(post)

  // Comprehensive JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: imageUrl,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    wordCount: wordCount,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.svg`,
      },
    },
    keywords: post.seoKeywords.join(", "),
  }

  const breadcrumbSchema = {
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
        name: "Blog",
        item: `${SITE_CONFIG.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
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
      {/* Schema.org Scripts for SEO and AI Grounding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="min-h-screen pb-20">
        {/* Header & Breadcrumb Container */}
        <header className="border-b border-border/80 bg-muted/25 py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-4xl space-y-6">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground transition">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/blog" className="hover:text-foreground transition">
                Blog
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary font-medium truncate max-w-[280px]">
                {post.categoryLabel}
              </span>
            </nav>

            {/* Category & Metadata */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="h-3 w-3" />
                {post.categoryLabel}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5 bg-muted/60 px-2.5 py-0.5 rounded-full border border-border/70">
                <FileText className="h-3.5 w-3.5 text-primary" />
                {wordCount.toLocaleString()} words
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-2 border-t border-border/60">
              <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">
                  {post.author.name}
                </p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="container mx-auto px-4 max-w-4xl pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-md">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 max-w-4xl pt-10">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main Article Body */}
            <div className="lg:col-span-8 space-y-10">
              {/* Executive Summary / Key Takeaways Box (SEO & AI Overview grounder) */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Sparkles className="h-4 w-4" />
                  <span>Key Takeaways & Executive Summary</span>
                </div>
                <ul className="space-y-2 text-sm text-foreground/90">
                  {post.keyTakeaways.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Table of Contents */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>In This Guide</span>
                </div>
                <nav className="space-y-2 text-sm">
                  {post.tableOfContents.map((toc, index) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-muted-foreground hover:text-primary transition-colors py-0.5"
                    >
                      <span className="text-primary font-mono text-xs mr-2">
                        {index + 1}.
                      </span>
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Content Sections */}
              <div className="space-y-12 text-foreground/90">
                {post.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 space-y-4"
                  >
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-base sm:text-lg leading-relaxed text-muted-foreground"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Bullet points if any */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2.5 pl-2 pt-2">
                        {section.bulletPoints.map((bp, bidx) => (
                          <li
                            key={bidx}
                            className="flex items-start gap-2 text-sm sm:text-base text-foreground leading-relaxed"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Callout Box */}
                    {section.highlightBox && (
                      <div
                        className={`rounded-xl p-4 sm:p-5 border text-sm leading-relaxed flex items-start gap-3 my-4 ${
                          section.highlightBox.type === "tip"
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200"
                            : section.highlightBox.type === "warning"
                            ? "bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200"
                            : "bg-primary/10 border-primary/30 text-primary-foreground/90"
                        }`}
                      >
                        {section.highlightBox.type === "warning" ? (
                          <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        ) : (
                          <Sparkles className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        )}
                        <p>{section.highlightBox.text}</p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Frequently Asked Questions */}
              {post.faqs.length > 0 && (
                <div className="pt-8 border-t border-border space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      Common Queries
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {post.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-border bg-card p-5 space-y-2"
                      >
                        <h4 className="font-serif text-base font-bold text-foreground flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio Box */}
              <div className="rounded-2xl border border-border bg-muted/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                  <User className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-foreground">{post.author.name}</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md font-semibold">
                      Verified Author
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                  <p className="text-xs text-muted-foreground pt-1">
                    Published on Corporate.bd Knowledge Hub • Specialized in Bangladesh corporate compliance, infrastructure and digital strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Column */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Related Service CTA Card */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 space-y-4 lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  Expert Assistance
                </span>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {post.relatedService.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {post.relatedService.description}
                </p>
                <div className="pt-2 space-y-2">
                  <Button asChild className="w-full rounded-xl font-semibold gap-2">
                    <Link href={post.relatedService.href}>
                      <span>{post.relatedService.cta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-xl text-xs"
                  >
                    <Link href="/contact">Inquire via WhatsApp / Phone</Link>
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/60 text-[11px] text-muted-foreground space-y-1.5">
                  <p>📍 Motijheel Commercial Area, Dhaka-1000</p>
                  <p>⚡ Guaranteed 1-hour corporate consultation response</p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-4 max-w-5xl pt-20 border-t border-border mt-16">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Further Reading
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Related Articles & Guides
                </h3>
              </div>
              <Button asChild variant="outline" className="rounded-xl text-xs gap-1.5">
                <Link href="/blog">
                  <span>View All Articles</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  href={`/blog/${rPost.slug}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[11px] font-semibold text-primary">
                        {rPost.categoryLabel}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition">
                        {rPost.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {rPost.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 border-t border-border/40 mt-3 flex items-center justify-between text-xs text-primary font-semibold">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
