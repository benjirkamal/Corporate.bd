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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BLOG_POSTS_DATA, getBlogPostWordCount, type BlogPostDetail } from "@/lib/blog-data"

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

      {/* Featured Article */}
      {selectedCategory === "all" && !searchQuery && featuredPost && (
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
                  {featuredPost.date}
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

      {/* Grid of Articles */}
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
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
                      {post.date}
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
      )}

      {/* Consultation & Support Banner */}
      <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Knowledge to Execution
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground max-w-xl mx-auto">
          Need Expert Guidance on Your Next Project or Tour?
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          From full-stack web platforms and RJSC legal registration to guided private Dhaka tours, our consultants are ready to assist you.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="rounded-xl font-semibold">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl font-semibold">
            <Link href="/tour/dhaka-tour">Explore Dhaka Tour Packages</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
