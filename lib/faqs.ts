export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export const HOME_FAQS: FAQItem[] = [
  {
    question: "How long does RJSC Company Registration take in Bangladesh?",
    answer:
      "With Corporate.bd, standard private limited company registration via RJSC (Registrar of Joint Stock Companies and Firms) typically takes 5 to 7 working days once name clearance and drafted MOA/AOA documents are approved. We handle name clearance, digital certificate generation, TIN, Trade License, and e-BIN registration seamlessly.",
    category: "Legal & Compliance",
  },
  {
    question: "Can Corporate.bd assist in acquiring .bd and .com.bd domain names?",
    answer:
      "Yes! As a recognized digital infrastructure provider, we coordinate directly with BTCL (Bangladesh Telecommunications Company Limited) to register, renew, and configure official .bd and .com.bd domain names. We manage the official paperwork, NID verification, and DNS routing for you.",
    category: "Infrastructure",
  },
  {
    question: "Do you integrate local payment gateways like bKash, Nagad, and Rocket?",
    answer:
      "Absolutely. We build custom e-commerce and web applications with direct integration for bKash Merchant API, Nagad Payment Gateway, Rocket, SSLCommerz, Shurjopay, and international card processing (Visa/Mastercard) with automated instant IPN callback handling.",
    category: "Web & E-Commerce",
  },
  {
    question: "What managed IT services do you provide for offices in Dhaka and across BD?",
    answer:
      "We provide 24/7 server monitoring, cloud backup automation, email hosting (Google Workspace / Microsoft 365 / Zoho), network setup, cybersecurity audits, and SLA-backed on-site and remote IT troubleshooting for corporate offices across Bangladesh.",
    category: "Managed IT",
  },
  {
    question: "How does Corporate.bd help improve search engine rankings (SEO) in Bangladesh?",
    answer:
      "Our SEO team specializes in local Bangladesh SEO, Core Web Vitals optimization, technical site audits, Google Business Profile optimization, and targeted English & Bangla content strategies to help your brand rank #1 on Google for high-intent corporate queries.",
    category: "SEO & Growth",
  },
  {
    question: "Are your legal and web consultancy fees tax and VAT compliant?",
    answer:
      "Yes, Corporate.bd provides official NBR-compliant VAT invoices (Mushak 6.3) for all services, enabling seamless corporate accounting, tax deductions, and audit compliance for your finance department.",
    category: "Compliance",
  },
]
