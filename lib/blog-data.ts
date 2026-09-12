import { BlogPostDetail } from "./blog-data/types"
import { post1BdDomain } from "./blog-data/post-1-bd-domain"
import { post2RjscCompany } from "./blog-data/post-2-rjsc-company"
import { post3DhakaTour } from "./blog-data/post-3-dhaka-tour"
import { post4NextjsWeb } from "./blog-data/post-4-nextjs-web"
import { post5LocalSeo } from "./blog-data/post-5-local-seo"
import { post6AiAutomation } from "./blog-data/post-6-ai-automation"
import { post7PaymentGateways } from "./blog-data/post-7-payment-gateways"
import { post8TaxVatCompliance } from "./blog-data/post-8-tax-vat-compliance"
import { post9TrademarkProtection } from "./blog-data/post-9-trademark-protection"
import { post10DoctorWebsite } from "./blog-data/post-10-doctor-website"

export * from "./blog-data/types"

const RAW_BLOG_POSTS: BlogPostDetail[] = [
  post10DoctorWebsite,
  post1BdDomain,
  post2RjscCompany,
  post3DhakaTour,
  post4NextjsWeb,
  post5LocalSeo,
  post6AiAutomation,
  post7PaymentGateways,
  post8TaxVatCompliance,
  post9TrademarkProtection,
]

// Always sort newest first (descending by isoDate)
export const BLOG_POSTS_DATA: BlogPostDetail[] = [...RAW_BLOG_POSTS].sort(
  (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
)

export function getAllBlogPosts(): BlogPostDetail[] {
  return BLOG_POSTS_DATA
}

export function getBlogPostBySlug(slug: string): BlogPostDetail | undefined {
  return BLOG_POSTS_DATA.find((p) => p.slug === slug)
}

export function getRelatedBlogPosts(currentSlug: string, category: string): BlogPostDetail[] {
  return BLOG_POSTS_DATA.filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, 3)
}

/**
 * Calculates the exact total word count of a blog post including:
 * Title, Excerpt, Key Takeaways, Section Headings, Paragraphs, Bullet Points, Callouts, and FAQs.
 */
export function getBlogPostWordCount(post: BlogPostDetail): number {
  let text = `${post.title} ${post.excerpt} ${post.keyTakeaways.join(" ")} `

  for (const s of post.sections) {
    text += `${s.heading} `
    if (s.subheading) text += `${s.subheading} `
    text += s.paragraphs.join(" ") + " "
    if (s.bulletPoints) text += s.bulletPoints.join(" ") + " "
    if (s.highlightBox) text += s.highlightBox.text + " "
  }

  for (const f of post.faqs) {
    text += `${f.question} ${f.answer} `
  }

  const words = text.trim().split(/\s+/).filter(Boolean)
  return words.length
}
