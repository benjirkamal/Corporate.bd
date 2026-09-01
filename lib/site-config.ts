// =====================================================
// SITE CONFIGURATION
// All site-wide information can be edited here
// =====================================================

export const SITE_CONFIG = {
  name: "Corporate.bd",
  shortName: "Corporate",
  domain: "corporate.bd",
  url: "https://corporate.bd",
  tagline: "Enterprise Digital Solutions for Bangladesh",
  description:
    "Corporate.bd delivers end-to-end digital infrastructure, web development, legal compliance, managed IT, and SEO services for businesses across Bangladesh.",
  email: "info @ corporate.bd",
  supportEmail: "support @ corporate.bd",
  salesEmail: "sales @ corporate.bd",
  phone: "+880 1721-333633",
  whatsapp: "+880 1721-333633",
  address: {
    line1: "67, Motijheel C/A",
    line2: "(Nearest Metro Station)",
    city: "Dhaka",
    postalCode: "1000",
    country: "Bangladesh",
  },
  workingHours: "Sun – Thu, 9:00 AM – 6:00 PM",
  social: {
    facebook: "https://facebook.com/corporatebd",
    linkedin: "https://linkedin.com/company/corporatebd",
    twitter: "https://twitter.com/corporatebd",
    youtube: "https://youtube.com/@corporatebd",
  },
  founded: 2018,
  stats: {
    clients: "500+",
    projects: "1,200+",
    countries: "12+",
    teamSize: "60+",
  },
}

export type SiteConfig = typeof SITE_CONFIG
