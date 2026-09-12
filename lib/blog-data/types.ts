export type BlogPostDetail = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: "cloud-domains" | "business-legal" | "tours-culture" | "web-tech" | "seo-growth"
  categoryLabel: string
  date: string
  isoDate: string
  readTime: string
  image: string
  imageAlt: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  featured?: boolean
  seoKeywords: string[]
  metaDescription: string
  keyTakeaways: string[]
  tableOfContents: { id: string; title: string }[]
  sections: {
    id: string
    heading: string
    subheading?: string
    paragraphs: string[]
    bulletPoints?: string[]
    highlightBox?: {
      type: "tip" | "warning" | "note"
      text: string
    }
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedService: {
    title: string
    description: string
    href: string
    cta: string
  }
}
