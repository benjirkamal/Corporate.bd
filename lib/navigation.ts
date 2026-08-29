// =====================================================
// NAVIGATION STRUCTURE
// সকল মেনু এবং সাব-মেনু এখানে এডিট করুন
// =====================================================

export type NavItem = {
  label: string
  href: string
  description?: string
  children?: NavItem[]
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Domain",
    href: "/digital-infrastructure",
    description: "Domains, email, hosting and security for your business.",
    children: [
      {
        label: "Domain Services",
        href: "/digital-infrastructure/domain-services",
        description: "Register and manage .bd, .com and global domains.",
      },
      {
        label: "Corporate Email",
        href: "/digital-infrastructure/corporate-email",
        description: "Professional email with your own domain.",
      },
      {
        label: "Cloud Hosting",
        href: "/digital-infrastructure/cloud-hosting",
        description: "Reliable, scalable cloud hosting solutions.",
      },
      {
        label: "VPS Hosting",
        href: "/digital-infrastructure/vps-hosting",
        description: "High-performance Linux & Windows VPS with NVMe SSD.",
      },
      {
        label: "SSL & Security",
        href: "/digital-infrastructure/ssl-security",
        description: "Encrypt and protect your online assets.",
      },
    ],
  },
  {
    label: "Software & Web Apps",
    href: "/web-development",
    description: "Enterprise software, modern web applications, e-commerce and UI/UX solutions.",
    children: [
      {
        label: "Custom Enterprise Software",
        href: "/web-development#custom-enterprise-software",
        description: "Tailored enterprise software for core business operations.",
        children: [
          {
            label: "Custom ERP & CRM Systems",
            href: "/web-development/custom-erp-crm",
            description: "Tailored resource planning and customer relationship systems.",
          },
          {
            label: "HR & Payroll Management Software",
            href: "/web-development/hr-payroll",
            description: "Automated attendance, leave, salary and tax management.",
          },
          {
            label: "Inventory & Sales Tracking Apps",
            href: "/web-development/inventory-sales-tracking",
            description: "Real-time stock control, POS and sales analytics.",
          },
        ],
      },
      {
        label: "Modern Web Platforms",
        href: "/web-development#modern-web-platforms",
        description: "Full-stack Next.js, React and corporate portal platforms.",
        children: [
          {
            label: "Next.js & React Web Applications",
            href: "/web-development/nextjs-react-apps",
            description: "Fast, SEO-optimized web applications with modern UX.",
          },
          {
            label: "High-Performance Corporate Websites",
            href: "/web-development/corporate-websites",
            description: "Conversion-optimized corporate sites with 95+ Lighthouse scores.",
          },
          {
            label: "Custom Portal Development",
            href: "/web-development/custom-portal-development",
            description: "Secure client portals, vendor dashboards and partner portals.",
          },
        ],
      },
      {
        label: "Headless & E-Commerce",
        href: "/web-development#headless-ecommerce",
        description: "PayloadCMS architecture, headless commerce and API solutions.",
        children: [
          {
            label: "PayloadCMS Backend Architecture",
            href: "/web-development/payloadcms-backend",
            description: "Modern TypeScript-first CMS and database architecture.",
          },
          {
            label: "Scalable Headless E-Commerce",
            href: "/web-development/scalable-headless-ecommerce",
            description: "High-speed storefronts with bKash, Nagad and courier APIs.",
          },
          {
            label: "REST & GraphQL API Solutions",
            href: "/web-development/rest-graphql-api",
            description: "High-throughput API design, integrations and microservices.",
          },
        ],
      },
      {
        label: "UI/UX & Frontend Experience",
        href: "/web-development#ui-ux-frontend",
        description: "Product design, Core Web Vitals and design systems.",
        children: [
          {
            label: "Enterprise Product UI/UX Design",
            href: "/web-development/enterprise-ui-ux",
            description: "User research, wireframing and interactive Figma prototypes.",
          },
          {
            label: "Web Performance & Core Web Vitals Optimization",
            href: "/web-development/web-performance-core-web-vitals",
            description: "Speed, INP/LCP optimization for search performance.",
          },
          {
            label: "Design System & Component Library",
            href: "/web-development/design-system-component-library",
            description: "Scalable UI component libraries and brand styleguides.",
          },
        ],
      },
    ],
  },
  {
    label: "Legal",
    href: "/legal-compliance",
    description: "Company formation, licenses, tax and IP services.",
    children: [
      {
        label: "Company Formation",
        href: "/legal-compliance/company-formation",
        description: "Register your company with RJSC.",
      },
      {
        label: "Trade License",
        href: "/legal-compliance/trade-license",
        description: "Acquire and renew trade licenses.",
      },
      {
        label: "Tax & VAT",
        href: "/legal-compliance/tax-vat",
        description: "Income tax, VAT registration and filing.",
      },
      {
        label: "Intellectual Property",
        href: "/legal-compliance/intellectual-property",
        description: "Trademark, copyright and patent services.",
      },
    ],
  },
  {
    label: "IT Services",
    href: "/managed-it-services",
    description: "End-to-end IT support and automation.",
    children: [
      {
        label: "AMC (Annual Maintenance)",
        href: "/managed-it-services/amc",
        description: "Annual contracts that keep IT running.",
      },
      {
        label: "Server Administration",
        href: "/managed-it-services/server-administration",
        description: "Linux and Windows server management.",
      },
      {
        label: "AI Automation",
        href: "/managed-it-services/ai-automation",
        description: "Automate workflows with modern AI.",
      },
      {
        label: "IT Consultancy",
        href: "/managed-it-services/it-consultancy",
        description: "Strategic advice from senior engineers.",
      },
    ],
  },
  {
    label: "SEO",
    href: "/seo",
    description: "Search and content marketing that grows revenue.",
    children: [
      {
        label: "Local SEO",
        href: "/seo/local-seo",
        description: "Rank in your city and across Bangladesh.",
      },
      {
        label: "Product SEO",
        href: "/seo/product-seo",
        description: "Optimize product pages for buyers.",
      },
      {
        label: "Content Strategy",
        href: "/seo/content-strategy",
        description: "Editorial planning that earns traffic.",
      },
      {
        label: "Social Media Management",
        href: "/seo/social-media-management",
        description: "Grow brand visibility on social channels.",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
]
