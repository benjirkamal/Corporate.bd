// =====================================================
// SERVICES DATA
// Edit content for every service page in this file
// =====================================================

export type ServiceFeature = {
  title: string
  description: string
  icon: string // lucide-react icon name
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type FAQ = {
  question: string
  answer: string
}

export type WhyChooseUsItem = {
  title: string
  description: string
}

export type ServiceStat = {
  label: string
  value: string
}

export type Service = {
  slug: string
  title: string
  shortTitle?: string
  subtitle?: string
  description?: string
  icon?: string
  heroImage?: string
  overviewTitle?: string
  overview?: string[]
  featuresHeading?: string
  features?: ServiceFeature[]
  benefits?: string[]
  process?: ProcessStep[]
  faqs?: FAQ[]
  ctaTitle?: string
  ctaDescription?: string
  whyChooseUsTitle?: string
  whyChooseUsDescription?: string
  whyChooseUs?: WhyChooseUsItem[]
  stats?: ServiceStat[]
}





export type ServiceCategory = {
  slug: string
  title: string
  shortTitle?: string
  subtitle?: string
  description?: string
  icon?: string
  heroImage?: string
  intro?: string
  services: Service[]
}

export const SERVICE_CATEGORIES: Record<string, ServiceCategory> = {
  // =========================================================
  // 1. DIGITAL INFRASTRUCTURE
  // =========================================================
  "digital-infrastructure": {
    slug: "digital-infrastructure",
    title: "Enterprise Digital Infrastructure, Cloud Hosting & Domain Solutions in Bangladesh",
    shortTitle: "Infrastructure",
    subtitle: "High-speed BDIX cloud hosting, official .BD domain registration, Google Workspace corporate email, and enterprise cyber defense for Bangladeshi businesses.",
    description:
      "Domain registration, corporate email, cloud hosting and SSL security services for businesses across Bangladesh.",
    icon: "Server",
    heroImage: "/images/services/digital-infrastructure.jpg",
    intro:
      "From the moment a customer types your domain to the final byte delivered to their browser, our digital infrastructure keeps your business online, secure and fast. We handle domains, email, hosting and security so your team can focus on growth.",
    services: [
      {
        slug: "domain-services",
        title: "Official .BD Domain Registration & Corporate BTCL Services in Bangladesh",
        shortTitle: "Domains",
        subtitle: "Register, transfer, and protect your .bd, .com.bd, and global corporate domains with automated DNS management and proactive renewal security.",
        description:
          "Register .bd, .com.bd, .com and global domains with DNS management, privacy protection and 24/7 support.",
        icon: "Globe",
        heroImage: "/images/services/bd-domain-services.jpg",
        overviewTitle: "Own the digital address of your brand",
        overview: [
          "Your domain is the front door of your business online. We help Bangladeshi companies secure the right domain names — from country-specific .bd and .com.bd extensions to global TLDs like .com, .io, .org and the new generic gTLDs.",
          "Beyond registration, we offer DNS management, domain transfer, bulk renewal reminders, WHOIS privacy and dispute resolution support so your most valuable digital asset is always protected.",
        ],
    whyChooseUsTitle: "Why Choose Us for Domain Management?", // Why chose us section.
        whyChooseUsDescription: "Your digital presence is the foundation of your business reputation. At Corporate.bd, we go beyond simple registration to provide a comprehensive domain ecosystem. We combine industry-leading security protocols with a streamlined management interface, ensuring your brand stays protected, accessible, and perfectly aligned with your growth strategy—both at home in Bangladesh and across the global market.",
        whyChooseUs: [
    { title: "Enterprise-Grade Security", description: "We prioritize your brand safety with advanced domain locking and privacy protection services." },
    { title: "Easy Management Dashboard", description: "Simplify your life with our intuitive interface, allowing you to manage multiple domains, DNS settings, and renewals in one place." },
    { title: "Proactive Renewal Reminders", description: "Never lose your domain. We provide automated alerts and managed renewal services so your online presence remains uninterrupted." }
  ],
        featuresHeading: "Everything you need to manage your domain portfolio",
        features: [
          {
            title: ".bd & .com.bd Registration",
            description:
              "We coordinate directly with BTCL to register your country-specific domain quickly and correctly.",
            icon: "Flag",
          },
          {
            title: "Global TLD Registration",
            description:
              "Register .com, .net, .org, .io, .co and 300+ extensions through our authorized registrar partners.",
            icon: "Globe",
          },
          {
            title: "DNS Management",
            description:
              "Easy A, CNAME, MX, TXT and SRV record management with low-TTL support for fast propagation.",
            icon: "Network",
          },
          {
            title: "Domain Transfer",
            description:
              "Move your domain from any registrar to us with zero downtime and full record preservation.",
            icon: "ArrowRightLeft",
          },
          {
            title: "WHOIS Privacy",
            description:
              "Protect personal information from public WHOIS databases and reduce spam.",
            icon: "ShieldCheck",
          },
          {
            title: "Renewal Management",
            description:
              "Automated reminders, bulk renewals and grace-period recovery so you never lose a domain.",
            icon: "RefreshCw",
          },
        ],
        benefits: [
          "Authorized partner experience with BTCL and global registrars",
          "Single dashboard to manage all your domains",
          "24/7 local support in Bangla and English",
          "Transparent pricing with no hidden fees",
        ],
        process: [
          {
            step: "01",
            title: "Search & Select",
            description:
              "Use our search tool or talk to a consultant to find the perfect domain.",
          },
          {
            step: "02",
            title: "Verify & Register",
            description:
              "We collect required documents and submit registration with the registry.",
          },
          {
            step: "03",
            title: "Configure DNS",
            description:
              "We point your domain to your hosting, email and other services.",
          },
          {
            step: "04",
            title: "Ongoing Support",
            description:
              "We monitor expiry, renew on time and handle any technical changes.",
          },
        ],
        faqs: [
          {
            question: "How long does .bd domain registration take?",
            answer:
              "Typical .bd registration takes 3 to 7 working days after BTCL receives the required documents. We help prepare paperwork to avoid delays.",
          },
          {
            question: "Can I transfer my existing domain to Corporate.bd?",
            answer:
              "Yes. We support transfers from any registrar with zero downtime. You only need an authorization code from your current provider.",
          },
          {
            question: "Do you offer bulk discounts for multiple domains?",
            answer:
              "Yes, organizations registering 10 or more domains receive volume pricing. Contact our sales team for a custom quote.",
          },
        ],
        ctaTitle: "Ready to claim your domain?",
        ctaDescription:
          "Search availability, lock in your brand and let our team handle the rest.",
      },
      {
        slug: "corporate-email",
        title: "Enterprise Corporate Email Hosting & Google Workspace Solutions in Bangladesh",
        shortTitle: "Email",
        subtitle: "Custom-domain business email hosting with Google Workspace, Microsoft 365, spam filtering, and local BDT invoicing for enterprise teams.",
        description:
          "Business email hosting with you@yourcompany.com, calendar, contacts and enterprise security.",
        icon: "Mail",
        heroImage: "/images/services/corporate-email-services-in-bangladesh.webp",
        overviewTitle: "Why Your Business Needs a Professional Email",
        overview: [
          "Using a generic email address like 'yourcompany@gmail.com' can affect how clients perceive your brand. A custom corporate email (e.g., 'info@yourcompany.com') builds instant trust, ensures professional communication, and creates a lasting impression on your clients and partners.",
          "Every plan includes spam protection, calendar, contacts, mobile sync and admin controls. Migrations from Gmail, Yahoo or any IMAP provider are handled by our team.",
        ],


    whyChooseUsTitle: "Why Choose Corporate.bd for Your Business Email?",
        whyChooseUsDescription: "We make managing your domain portfolio simple, secure, and stress-free.",
        whyChooseUs: [
    { title: "Professional Brand Identity", description: "Replace generic email addresses with a custom domain-based identity (e.g., info@yourcompany.com) to establish instant credibility and build lasting trust with your clients." },
    { title: "Enterprise-Grade Security", description: "Safeguard your sensitive business data with our proactive multi-layer defense, featuring advanced spam filtering, anti-phishing protocols, and robust end-to-end encryption." },
    { title: "Scalable Infrastructure", description: "Designed to grow with you, our flexible platform allows for effortless scaling of user accounts and storage capacity, backed by a 99.9% uptime guarantee to ensure your team stays connected 24/7." }
  ],

        featuresHeading: "Professional Business Email Solutions & Features",
        features: [
          {
            title: "Custom Domain Email",
            description:
              "Unlimited aliases like info@, sales@ and your-name@yourcompany.com.",
            icon: "AtSign",
          },
          {
            title: "Google Workspace & Outlook 365",
            description:
              "Authorized partner for Google Workspace and Microsoft 365 with discounted local billing.",
            icon: "Layers",
          },
          {
            title: "Anti-Spam & Anti-Phishing",
            description:
              "Multi-layer filters block 99.9% of malicious mail before it reaches the inbox.",
            icon: "ShieldAlert",
          },
          {
            title: "Mobile & Desktop Sync",
            description:
              "Works seamlessly across iOS, Android, Outlook, Apple Mail and Thunderbird.",
            icon: "Smartphone",
          },
          {
            title: "Calendar & Contacts",
            description:
              "Shared calendars, room booking and centralized contact directories for your team.",
            icon: "Calendar",
          },
          {
            title: "Email Migration",
            description:
              "Free migration from Gmail, cPanel, Zoho or any IMAP/POP source with zero data loss.",
            icon: "Move",
          },
        ],
        benefits: [
          "Local invoicing in BDT with VAT challan",
          "Onboarding training for your administrators",
          "99.9% uptime SLA",
          "Data residency options for sensitive industries",
        ],
        process: [
          {
            step: "01",
            title: "Plan Selection",
            description:
              "We help you pick between Google, Microsoft or private cloud based on team size and budget.",
          },
          {
            step: "02",
            title: "Domain Verification",
            description:
              "Add MX, SPF, DKIM and DMARC records — we configure them for you.",
          },
          {
            step: "03",
            title: "User Provisioning",
            description:
              "Bulk-create accounts, set passwords and assign permissions.",
          },
          {
            step: "04",
            title: "Migration & Training",
            description:
              "Move existing mail and train your team on the new system.",
          },
        ],
        faqs: [
          {
            question: "What is the cost of corporate email per user?",
            answer:
              "Plans start from BDT 350/user/month for Google Workspace Business Starter. Microsoft 365 and private cloud options are also available.",
          },
          {
            question: "Will my old emails be preserved during migration?",
            answer:
              "Yes. We use proven migration tools that keep folders, dates, attachments and read/unread status intact.",
          },
          {
            question: "Can I add or remove users any time?",
            answer:
              "Absolutely. Licenses are flexible — pay only for what you use, billed monthly or annually.",
          },
        ],
        ctaTitle: "Upgrade to professional email",
        ctaDescription:
          "Move from Gmail and Yahoo to a domain-branded inbox in less than a day.",
      },
      {
        slug: "cloud-hosting",
        title: "High-Speed Managed Cloud Hosting & NVMe SSD Infrastructure in Bangladesh",
        shortTitle: "Hosting",
        subtitle: "Scale your mission-critical applications with lightning-fast BDIX peering, NVMe SSD storage, and guaranteed 99.9% uptime SLA.",
        description:
          "Managed cloud hosting on AWS, DigitalOcean, Vercel and our local Bangladesh data centers.",
        icon: "Cloud",
        heroImage: "/images/services/cloud-hosting.jpg",
        overviewTitle: "Cloud Hosting Built for Enterprise Performance",
        overview: [
          "Slow-loading websites lead to lost opportunities. At Corporate.bd, we host your mission-critical sites and applications on a curated blend of premium global cloud providers and locally peered data centers in Bangladesh.",
          "This hybrid infrastructure ensures sub-second load times and a seamless user experience every time.",
        ],

    whyChooseUsTitle: "Why Choose Corporate.bd for Cloud Hosting?", // Why chose us serction.
        whyChooseUsDescription: "Empower your business with a resilient cloud infrastructure built for speed, security, and effortless growth. We manage the complexity so you can focus on your success.",
        whyChooseUs: [
    { title: "Unmatched Performance", description: "Experience lightning-fast load times powered by NVMe SSD storage and a guaranteed 99.9% uptime for your mission-critical sites."},
    { title: "Enterprise-Grade Security", description: "Protect your assets with advanced firewalls, real-time DDoS mitigation, and automated daily backups for total peace of mind." },
    { title: "Scale with Expert Support", description: "Grow your CPU and RAM instantly as your traffic increases, backed by 24/7 proactive monitoring from our local certified engineers." }
  ],
        featuresHeading: "Everything you need to power your digital infrastructure",
              features: [
          {
            title: "Shared & Reseller Hosting",
            description:
              "cPanel-based shared hosting with LiteSpeed, free SSL and one-click WordPress.",
            icon: "Server",
          },
          {
            title: "VPS & Dedicated Servers",
            description:
              "Linux and Windows VPS with NVMe storage, DDoS protection and full root access.",
            icon: "HardDrive",
          },
          {
            title: "Managed Cloud (AWS, DO)",
            description:
              "We design, deploy and operate your infrastructure on the cloud you choose.",
            icon: "Cloud",
          },
          {
            title: "Kubernetes & Containers",
            description:
              "Production-ready Kubernetes clusters with autoscaling and zero-downtime deploys.",
            icon: "Boxes",
          },
          {
            title: "Daily Backups",
            description:
              "Automated off-site backups with one-click restore and 30-day retention.",
            icon: "DatabaseBackup",
          },
          {
            title: "24/7 Monitoring",
            description:
              "We watch CPU, memory, disk and uptime around the clock and act before issues impact you.",
            icon: "Activity",
          },
        ],
        benefits: [
          "Sub-second TTFB across South Asia",
          "Free site migration from any provider",
          "99.99% uptime SLA on managed plans",
          "Local payment options and VAT-compliant invoicing",
        ],
        process: [
          {
            step: "01",
            title: "Discovery",
            description:
              "We audit your current site, traffic and growth plans.",
          },
          {
            step: "02",
            title: "Architecture",
            description:
              "Pick the right stack — shared, VPS, cloud or serverless.",
          },
          {
            step: "03",
            title: "Migrate & Optimize",
            description:
              "Move your data, tune caching and configure CDN.",
          },
          {
            step: "04",
            title: "Manage & Scale",
            description:
              "Ongoing patching, monitoring and capacity planning.",
          },
        ],
        faqs: [
          {
            question: "Do you host inside Bangladesh?",
            answer:
              "Yes. We have peering and infrastructure with multiple Tier-3 data centers in Dhaka for ultra-low latency local access.",
          },
          {
            question: "Can you migrate my WordPress site for free?",
            answer:
              "Free migration is included with all annual plans. We handle DNS, content and zero-downtime cutover.",
          },
          {
            question: "What if my traffic suddenly spikes?",
            answer:
              "Our managed cloud plans autoscale within seconds. For shared/VPS plans, our team can upgrade you online without rebuilding.",
          },
        ],
        ctaTitle: "Host with the best in Bangladesh",
        ctaDescription:
          "Get a free architecture review and migration plan from our cloud team.",
      },
      {
        slug: "ssl-security",
        title: "Enterprise SSL Certificates, Web Application Firewall & DDoS Defense in Bangladesh",
        shortTitle: "Security",
        subtitle: "Protect transactions and user data with bank-grade SSL/TLS encryption, automated Cloudflare WAF, and 24/7 cyber threat mitigation.",
        description:
          "SSL certificates, web application firewalls, DDoS protection and security audits.",
        icon: "ShieldCheck",
        heroImage: "/images/services/ssl-security.jpg",
        overviewTitle: "Secure Your Business with Trusted SSL Certificates in BD",
        overview: [
          "A green padlock is no longer optional. Modern browsers warn visitors away from sites without HTTPS, and search engines penalize them in rankings. We provide SSL certificates from globally trusted CAs and a full security stack to protect your business.",
          "From DV certificates for blogs to OV/EV certificates for enterprises and wildcard or multi-domain SANs, we install, renew and monitor everything for you.",
        ],

    whyChooseUsTitle: "Expertise in Web Security and Encryption", // Why chose us serction.
        whyChooseUsDescription: "We don't just sell certificates; we provide end-to-end security implementation for your digital assets.",
        whyChooseUs: [
    { title: "Automated Renewal", description: "Never worry about expiry with our proactive renewal alert system." },
    { title: "Expert Installation", description: "Free technical support for CSR generation and SSL installation on any server." },
    { title: "Local Support", description: "Dedicated security experts available in Bangladesh for instant troubleshooting." }
  ],
        featuresHeading: "Why Your Business Needs an SSL Certificate?",

        features: [
          {
            title: "DV, OV & EV Certificates",
            description:
              "Domain, Organization and Extended Validation certificates from Sectigo, DigiCert and GeoTrust.",
            icon: "Lock",
          },
          {
            title: "Wildcard & Multi-Domain",
            description:
              "Secure unlimited subdomains or multiple domains with a single certificate.",
            icon: "Layers",
          },
          {
            title: "Web Application Firewall",
            description:
              "Cloud-based WAF that blocks OWASP Top 10 attacks and bots in real time.",
            icon: "Shield",
          },
          {
            title: "DDoS Protection",
            description:
              "Layer 3, 4 and 7 mitigation with global anycast scrubbing centers.",
            icon: "Zap",
          },
          {
            title: "Security Audit",
            description:
              "Penetration tests, vulnerability scans and compliance gap analysis.",
            icon: "FileSearch",
          },
          {
            title: "Auto-Renewal",
            description:
              "We monitor expiry and renew automatically so your site never goes red.",
            icon: "RefreshCw",
          },
        ],
        benefits: [
          "Trusted CAs accepted by 99.9% of browsers and devices",
          "Same-day issuance for DV certificates",
          "Free installation on managed hosting",
          "Compliance support for PCI-DSS and ISO 27001",
        ],
        process: [
          {
            step: "01",
            title: "Assessment",
            description:
              "Identify domains, subdomains and security gaps.",
          },
          {
            step: "02",
            title: "Issue Certificate",
            description:
              "Generate CSR, validate ownership and issue the certificate.",
          },
          {
            step: "03",
            title: "Install & Test",
            description:
              "Install on your server, force HTTPS and verify with SSL Labs.",
          },
          {
            step: "04",
            title: "Monitor & Renew",
            description:
              "Continuous monitoring with auto-renewal before expiry.",
          },
        ],
        faqs: [
          {
            question: "What's the difference between DV, OV and EV?",
            answer:
              "DV verifies domain ownership only. OV adds organization verification. EV is the strictest — your company name appears in browser details, ideal for banks and e-commerce.",
          },
          {
            question: "Do you provide free Let's Encrypt SSL?",
            answer:
              "Yes. All our managed hosting plans include free Let's Encrypt with auto-renewal. Paid certificates add stronger validation and warranty.",
          },
          {
            question: "Can you secure subdomains too?",
            answer:
              "Yes. Wildcard certificates secure unlimited subdomains under one domain. Multi-domain SAN certificates protect different domains in one cert.",
          },
        ],
        ctaTitle: "Lock down your website today",
        ctaDescription:
          "Talk to a security engineer for a free SSL and WAF assessment.",
      },
      {
        slug: "vps-hosting",
        title: "High-Performance Linux & Windows VPS Hosting in Bangladesh",
        shortTitle: "VPS Hosting",
        subtitle: "Dedicated vCPU, NVMe SSD storage, full root access, and local BDIX connectivity for mission-critical enterprise workloads.",
        description:
          "Managed and unmanaged Linux & Windows VPS servers in Dhaka and global data centers with NVMe SSD, DDoS protection, and 99.9% SLA.",
        icon: "Server",
        heroImage: "/images/services/cloud-hosting.jpg",
        overviewTitle: "Enterprise-Grade Virtual Private Servers (VPS) with BDIX Speed",
        overview: [
          "Virtual Private Servers (VPS) give your business dedicated compute resources — vCPU cores, RAM, and ultra-fast NVMe storage — without the noise or limitations of shared web hosting. Corporate.bd provides high-performance VPS solutions hosted in Tier-3 Dhaka data centers with BDIX peering as well as global cloud locations.",
          "Whether you need an unmanaged Linux VPS for custom software development or a fully managed Windows VPS with cPanel/Plesk and automated daily snapshots, our infrastructure guarantees 99.9% uptime and local BDT invoicing with NBR VAT compliance.",
        ],
        whyChooseUsTitle: "Why Choose Corporate.bd for VPS Hosting in Bangladesh?",
        whyChooseUsDescription: "Uncompromising server performance, local BDIX connectivity, and dedicated 24/7 technical support.",
        whyChooseUs: [
          { title: "Guaranteed Compute Resources", description: "Hardware-level KVM virtualization ensures your allocated vCPU cores, RAM, and NVMe SSD space are 100% reserved for your workload." },
          { title: "Local BDIX & Low Latency", description: "Hosted in Dhaka data centers with direct BDIX peering for sub-10ms response times across all internet service providers in Bangladesh." },
          { title: "Full Root & Admin Control", description: "Complete root access via SSH or GUI access via RDP with your choice of Ubuntu, AlmaLinux, Debian, CentOS, or Windows Server." },
        ],
        featuresHeading: "Enterprise Features Included with Every VPS Server",
        features: [
          {
            title: "NVMe SSD RAID-10 Storage",
            description: "Next-gen enterprise NVMe storage arrays delivering blazing fast I/O operations for heavy database queries.",
            icon: "HardDrive",
          },
          {
            title: "KVM Hardware Virtualization",
            description: "True hardware virtualization isolating your environment for maximum stability and zero neighbor interference.",
            icon: "Cpu",
          },
          {
            title: "BDIX & Global Bandwidth",
            description: "Ultra-high speed BDIX connectivity for local traffic along with redundant multi-gigabit international transit.",
            icon: "Network",
          },
          {
            title: "Automated Snapshots & Backups",
            description: "Automated weekly and daily server snapshots with one-click full system disaster recovery.",
            icon: "DatabaseBackup",
          },
          {
            title: "Hardware DDoS Mitigation",
            description: "Multi-layered network firewalls blocking malicious DDoS traffic, port scans, and brute-force attacks.",
            icon: "ShieldCheck",
          },
          {
            title: "Fully Managed or Self-Managed",
            description: "Choose self-managed or let our certified system engineers handle cPanel setup, security hardening, and OS patches.",
            icon: "Wrench",
          },
        ],
        benefits: [
          "Sub-10ms response latency for Bangladeshi users via BDIX",
          "100% dedicated vCPU and RAM allocation with zero overselling",
          "Free initial server setup and data migration from cPanel/Plesk",
          "Local payment through bKash, Nagad, bank transfer & NBR Mushak 6.3 invoices",
        ],
        process: [
          {
            step: "01",
            title: "Sizing & OS Selection",
            description: "Select your vCPU cores, RAM, NVMe disk, and preferred OS (Ubuntu, AlmaLinux, Windows).",
          },
          {
            step: "02",
            title: "Instant Provisioning",
            description: "Automated server deployment with root credentials delivered securely to your dashboard.",
          },
          {
            step: "03",
            title: "Security & Control Panel",
            description: "Configure firewalls, install cPanel/CyberPanel/Plesk, and harden SSH ports.",
          },
          {
            step: "04",
            title: "24/7 Monitoring & Scaling",
            description: "Our system engineers monitor uptime around the clock and scale resources seamlessly when needed.",
          },
        ],
        faqs: [
          {
            question: "What is the difference between Shared Hosting and VPS Hosting?",
            answer: "Shared hosting shares CPU and RAM with hundreds of other websites. VPS hosting isolates your virtual server with dedicated vCPU and RAM, giving you root access and consistent performance even during heavy traffic spikes.",
          },
          {
            question: "Is your VPS hosted inside Bangladesh with BDIX?",
            answer: "Yes! We offer local Tier-3 Dhaka data center VPS hosting with direct BDIX connectivity for sub-10ms latency across Bangladesh, as well as global locations in Singapore, USA, and Europe.",
          },
          {
            question: "Do you offer Fully Managed VPS support?",
            answer: "Yes, our Fully Managed VPS option includes cPanel/CyberPanel installation, web server optimization, firewall configuration, OS security patching, and automated daily backups.",
          },
          {
            question: "Can I upgrade my VPS resources without losing data?",
            answer: "Absolutely. You can scale vCPU cores, RAM, and NVMe storage online at any time with minimal downtime and zero data loss.",
          },
        ],
        ctaTitle: "Deploy your high-performance VPS today",
        ctaDescription: "Get dedicated vCPU compute power, NVMe speed, and local BDIX peering backed by 24/7 expert support.",
      },
    ],
  },

  // =========================================================
  // 2. WEB DEVELOPMENT
  // =========================================================
  "web-development": {
    slug: "web-development",
    title: "Enterprise Web Development, Custom Software & SaaS Engineering in Bangladesh",
    shortTitle: "Software & Web",
    subtitle: "Custom corporate web design, Next.js web applications, scalable e-commerce systems, ERP/CRM software, and headless CMS development in Dhaka, Bangladesh.",
    description:
      "Custom corporate websites, e-commerce platforms, web applications and CMS solutions built with modern stacks.",
    icon: "Code2",
    heroImage: "/images/services/web-development.jpg",
    intro:
      "We design and build websites and web applications that look beautiful, load fast and convert visitors into customers. Our engineers work with Next.js, React, Laravel, Node.js and headless CMS to deliver scalable, maintainable products.",
    services: [
      {
        slug: "corporate-websites",
        title: "Bespoke Corporate Website Design & Web Development Company in Bangladesh",
        shortTitle: "Corporate Sites",
        subtitle: "Build high-converting, mobile-first, and ultra-fast business websites powered by Next.js and headless CMS to elevate brand authority and lead generation.",
        description:
          "Bespoke corporate websites built on Next.js with CMS, SEO and performance optimization.",
        icon: "Building2",
        heroImage: "/images/services/corporate-websites.jpg",
        overviewTitle: "Premium Business & Corporate Web Solutions in Bangladesh",
        overview: [
          "Your website is often the first interaction prospects have with your company. We design and develop corporate websites that load in under two seconds, score 95+ on Lighthouse, and clearly communicate what you do and why customers should choose you.",
          "Every project includes UX research, modern visual design, copywriting collaboration, accessibility (WCAG 2.1 AA) and a CMS so your marketing team can update content without calling a developer.",
        ],

    whyChooseUsTitle: "Why Top Brands in Bangladesh Choose Us", // Why chose us serction.
        whyChooseUsDescription: "Choosing the right partner is about more than just a website; it’s about a sustainable engine for growth. By combining scalable architecture, conversion-optimized design, and ironclad security, we provide a complete, end-to-end platform. We handle the technical complexities so you can focus on what matters most—running and expanding your business.",
        whyChooseUs: [
    { title: "Modern, Future-Proof Technology", description: "We don't rely on sluggish, outdated platforms. By utilizing cutting-edge frameworks like Next.js and enterprise-grade hosting networks, we ensure your corporate site is blazing-fast, incredibly secure, and built to scale seamlessly as your business grows." },
    { title: "Tailored, Pixel-Perfect Design", description: "First impressions matter in the corporate world. We write custom, clean code using utility-first styling to craft a unique, highly responsive digital identity for your brand. Your website will look flawless on every device, free from the rigid constraints of generic templates." },
    { title: "End-to-End Professional Setup", description: "We provide a complete digital foundation so you can focus on running your business. From integrating advanced technical SEO that drives organic traffic to configuring your custom corporate domains and secure business emails, we deliver a fully integrated, hassle-free solution." }
  ],
        featuresHeading: "Premium Business & Corporate Web Solutions in Bangladesh",

        features: [
          {
            title: "Custom UI/UX Design",
            description:
              "Original designs in Figma, tailored to your brand and audience.",
            icon: "PenTool",
          },
          {
            title: "Next.js & React",
            description:
              "Server-rendered, SEO-friendly and lightning fast on every device.",
            icon: "Code2",
          },
          {
            title: "Headless CMS",
            description:
              "Sanity, Strapi or Contentful so non-technical staff can edit pages.",
            icon: "FileEdit",
          },
          {
            title: "Multilingual Support",
            description:
              "Bangla and English (or any locale) with proper hreflang and SEO.",
            icon: "Languages",
          },
          {
            title: "Analytics & Tracking",
            description:
              "GA4, Meta Pixel, Hotjar and conversion tracking baked in.",
            icon: "BarChart3",
          },
          {
            title: "Lifetime Support",
            description:
              "Free maintenance during warranty plus optional AMC after launch.",
            icon: "LifeBuoy",
          },
        ],
        benefits: [
          "95+ Lighthouse score on launch",
          "Mobile-first responsive design",
          "Editor-friendly content management",
          "On-page SEO and schema markup included",
        ],
        process: [
          {
            step: "01",
            title: "Discover",
            description: "Workshops, audience research and competitor analysis.",
          },
          {
            step: "02",
            title: "Design",
            description:
              "Wireframes, visual design and interactive prototypes in Figma.",
          },
          {
            step: "03",
            title: "Develop",
            description:
              "Frontend, backend, CMS integration and rigorous QA.",
          },
          {
            step: "04",
            title: "Launch & Iterate",
            description:
              "Deploy, monitor performance and ship improvements continuously.",
          },
        ],
        faqs: [
          {
            question: "How long does a corporate website take?",
            answer:
              "Typical timelines are 4 to 8 weeks depending on complexity, content readiness and approval cycles. We can move faster on simpler builds.",
          },
          {
            question: "Will I be able to edit content myself?",
            answer:
              "Yes. We integrate a headless CMS so your team can update text, images, blog posts and team profiles without a developer.",
          },
          {
            question: "Do you offer maintenance after launch?",
            answer:
              "Yes. We provide a free 60-day warranty and offer Annual Maintenance Contracts (AMC) starting at BDT 5,000/month.",
          },
        ],
        ctaTitle: "Build a website that wins business",
        ctaDescription:
          "Book a free consultation and walk away with a roadmap for your new site.",
      },
      {
        slug: "ecommerce-solutions",
        title: "Full-Featured E-Commerce Website Development & Payment Gateway Integration in Bangladesh",
        shortTitle: "E-commerce",
        subtitle: "Launch high-converting, mobile-first online stores with native bKash, Nagad, SSLCommerz checkout, automated courier fulfillment, and multi-channel inventory sync.",
        description:
          "Shopify, WooCommerce and custom e-commerce platforms with local payment gateways and logistics.",
        icon: "ShoppingCart",
        heroImage: "/images/services/ecommerce-solutions.jpg",
        overviewTitle: "Sell more online — across Bangladesh and beyond",
        overview: [
          "We build online stores on the platform that fits your business: Shopify for fast launches, WooCommerce for flexibility, Medusa or Saleor for headless control, or fully custom Next.js commerce for unique workflows.",
          "Every store ships with bKash, Nagad, SSLCommerz, Stripe and card gateway integration, plus connections to Pathao, RedX, Steadfast and Sundarban for last-mile delivery.",
        ],

    whyChooseUsTitle: "The Best Ecommerce Solution for Growing Businesses", // Why chose us serction.
        whyChooseUsDescription: "Choosing the right partner is about more than just a website; it’s about a sustainable engine for growth. By combining scalable architecture, conversion-optimized design, and ironclad security, we provide a complete, end-to-end platform. We handle the technical complexities so you can focus on what matters most—running and expanding your business.",
        whyChooseUs: [
    { title: "Scalable & Custom-Built", description: "Grow without limits! Our tailored ecommerce solutions adapt to your business, easily handling traffic spikes and expanding product catalogs as you scale." },
    { title: "High-Converting Design", description: "Turn clicks into customers. We build lightning-fast, mobile-friendly storefronts with seamless checkout experiences designed to maximize your sales." },
    { title: "Ironclad Security", description: "Build instant buyer trust. Keep your online store safe with secure payment gateways, robust data protection, and reliable uptime." }
  ],
        featuresHeading: "Everything You Need to Sell Online in Bangladesh",


        features: [
          {
            title: "Shopify & WooCommerce",
            description:
              "Certified Shopify partners and senior WooCommerce engineers.",
            icon: "Store",
          },
          {
            title: "Local Payment Gateways",
            description:
              "bKash, Nagad, Rocket, SSLCommerz, AamarPay and international cards.",
            icon: "CreditCard",
          },
          {
            title: "Courier Integration",
            description:
              "Pathao, RedX, Steadfast and Sundarban Courier APIs out of the box.",
            icon: "Truck",
          },
          {
            title: "Inventory Management",
            description:
              "Multi-warehouse, low-stock alerts and barcode/SKU support.",
            icon: "Package",
          },
          {
            title: "Marketing Tools",
            description:
              "Discounts, gift cards, abandoned-cart recovery and email automation.",
            icon: "Megaphone",
          },
          {
            title: "Analytics & Reports",
            description:
              "Sales dashboards, customer LTV, top products and channel attribution.",
            icon: "PieChart",
          },
        ],
        benefits: [
          "Mobile-first, conversion-optimized themes",
          "PCI-DSS compliant payment flows",
          "SEO-friendly product pages with schema",
          "Training for your operations team included",
        ],
        process: [
          {
            step: "01",
            title: "Strategy",
            description:
              "Catalog, pricing, gateway and logistics planning.",
          },
          {
            step: "02",
            title: "Design",
            description: "Branded storefront and conversion-focused UX.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Develop, integrate gateways, couriers and import products.",
          },
          {
            step: "04",
            title: "Launch & Grow",
            description:
              "Go live, run launch campaigns and optimize from data.",
          },
        ],
        faqs: [
          {
            question: "Which platform is best — Shopify or WooCommerce?",
            answer:
              "Shopify is fastest to launch and easiest to maintain. WooCommerce gives total flexibility and lower long-term cost. We help you decide based on catalog size and team skills.",
          },
          {
            question: "Can you integrate bKash and Nagad?",
            answer:
              "Yes. We're certified integrators for bKash PGW, Nagad, Rocket and all major aggregators in Bangladesh.",
          },
          {
            question: "Do you handle product photography?",
            answer:
              "We offer optional product photography and content services through our partner studios in Dhaka.",
          },
        ],
        ctaTitle: "Launch your online store",
        ctaDescription:
          "Get a free e-commerce roadmap with platform, payment and logistics recommendations.",
      },
      {
        slug: "custom-web-apps",
        title: "Enterprise Custom Web Application & Cloud Software Engineering in Bangladesh",
        shortTitle: "Web Apps",
        subtitle: "Scale your business operations with tailor-made, secure, and high-performance custom web applications engineered with Next.js, Node.js, and Python.",
        description:
          "ERP, CRM, SaaS, dashboards and workflow tools built on Next.js, Node.js, Laravel and Python.",
        icon: "AppWindow",
        heroImage: "/images/services/custom-web-apps.jpg",
        overviewTitle: "Bespoke Custom Web Applications Built for Scalability",
        overview: [
          "Transform your unique business ideas into powerful digital solutions.",
          "We design and develop high-performance web apps that streamline operations and drive innovation.",
        ],
    whyChooseUsTitle: "Why Choose Corporate.bd for Custom Web Application Development?", // Why chose us serction.
        whyChooseUsDescription: "Unlock operational efficiency with a web application designed exclusively for your business. We bridge the gap between complex technology and user-centric design to deliver solutions that are secure, scalable, and future-ready.",
        whyChooseUs: [
    { title: "Tailor-Made Solutions", description: "We don't believe in one-size-fits-all. Our apps are built from the ground up based on your specific workflows, ensuring 100% alignment with your business goals." },
    { title: "Robust Security & Architecture", description: "Using modern frameworks like Laravel and React, we ensure your application is fortified against vulnerabilities and can handle thousands of concurrent users with ease" },
    { title: "Agile Development & Support", description: "Our iterative process keeps you involved at every stage. Plus, our local team provides 24/7 proactive maintenance to ensure your application stays ahead of the curve." }
  ],
        featuresHeading: "Everything you need to build and scale your custom web application",

        features: [
          {
            title: "Modern Tech Stack",
            description:
              "Next.js, React, Node.js, Laravel, Python, PostgreSQL and MongoDB.",
            icon: "Cpu",
          },
          {
            title: "API-First Architecture",
            description:
              "REST and GraphQL APIs that integrate with your existing systems.",
            icon: "Plug",
          },
          {
            title: "Role-Based Access",
            description:
              "Granular permissions, SSO and audit logs for compliance.",
            icon: "Users",
          },
          {
            title: "Cloud Native",
            description:
              "Deployed on AWS, GCP or Vercel with autoscaling and HA.",
            icon: "Cloud",
          },
          {
            title: "Real-Time Features",
            description:
              "WebSockets, push notifications and live dashboards.",
            icon: "Radio",
          },
          {
            title: "DevOps Included",
            description:
              "CI/CD pipelines, monitoring, alerting and disaster recovery.",
            icon: "Workflow",
          },
        ],
        benefits: [
          "You own the source code and database",
          "Agile sprints with weekly demos",
          "Automated testing and code reviews",
          "Documentation and training for your team",
        ],
        process: [
          {
            step: "01",
            title: "Discovery",
            description:
              "Workshops to map workflows, users and success metrics.",
          },
          {
            step: "02",
            title: "Prototype",
            description:
              "Clickable Figma prototype validated with real users.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Two-week sprints with continuous deployment.",
          },
          {
            step: "04",
            title: "Operate",
            description:
              "Ongoing support, new features and infrastructure scaling.",
          },
        ],
        faqs: [
          {
            question: "Do you sign NDAs and confidentiality agreements?",
            answer:
              "Yes, we sign NDAs before any discovery work. Your IP, data and business logic remain fully yours.",
          },
          {
            question: "How do you price custom applications?",
            answer:
              "Either fixed-price for well-defined scope or time-and-materials for evolving products. We share detailed estimates after a free discovery call.",
          },
          {
            question: "Can you take over an existing project?",
            answer:
              "Yes. We perform a code audit, document the existing system and onboard our team to continue development.",
          },
        ],
        ctaTitle: "Bring your software idea to life",
        ctaDescription:
          "Book a discovery session and receive a free architecture and pricing proposal.",
      },
      {
        slug: "cms-management",
        title: "Managed CMS Solutions, Headless Architecture & WordPress Maintenance in Bangladesh",
        shortTitle: "CMS",
        subtitle: "High-performance WordPress, headless Sanity, and Strapi CMS development with automated security patches, speed tuning, and zero editor friction.",
        description:
          "Stop worrying about technical updates or security patches. Get a high-performance Content Management System that gives you the power to update your site in seconds.",
        icon: "FileEdit",
        heroImage: "/images/services/cms-management.jpg",
        overviewTitle: "Scale Your Content Velocity with Expert CMS Management",
        overview: [
          "We help marketing and editorial teams publish faster on the CMS that fits their stack. From classic WordPress to modern headless platforms like Sanity, Strapi, Contentful and Payload, our team handles setup, theme/plugin development, security hardening and day-to-day operations.",
          "Stop worrying about plugin conflicts, security patches and slow editor experiences — let us run your CMS while you focus on great content.",
        ],

    whyChooseUsTitle: "The Future of High-Velocity Content Management is Here", // Why chose us serction.
        whyChooseUsDescription: "We don't just install a CMS; we build a secure, optimized ecosystem. Our approach focuses on giving your team full autonomy over content while our experts handle the underlying performance and security infrastructure.",
        whyChooseUs: [
    { title: "Zero-Technical Friction", description: "Our CMS setups are customized so that even a non-technical person can update text, images, and videos without accidentally breaking the site layout." },
    { title: "Hardened Security & Backups", description: "CMS platforms are frequent targets for hackers. We implement enterprise-level security layers and automated daily backups to keep your content safe 24/7." },
    { title: "Performance First (Speed Optimization)", description: "We eliminate 'bloat' by using lean coding and premium optimization tools, ensuring your WordPress or Joomla site loads instantly on any device." }
  ],
        featuresHeading: "Everything you need to build and scale your custom web application",        

        features: [
          {
            title: "WordPress Expertise",
            description:
              "Custom themes, Gutenberg blocks, ACF, WooCommerce and multilingual setups.",
            icon: "FileCode",
          },
          {
            title: "Headless CMS",
            description:
              "Sanity, Strapi, Contentful and Payload integrated with Next.js or Nuxt.",
            icon: "Layers",
          },
          {
            title: "Plugin Development",
            description:
              "Bespoke plugins and integrations when off-the-shelf isn't enough.",
            icon: "Puzzle",
          },
          {
            title: "Security Hardening",
            description:
              "WAF, malware scans, login protection and automated patching.",
            icon: "Shield",
          },
          {
            title: "Performance Tuning",
            description:
              "Object caching, image optimization and CDN configuration.",
            icon: "Gauge",
          },
          {
            title: "Editor Training",
            description:
              "Hands-on training and SOPs so your team is fully self-sufficient.",
            icon: "GraduationCap",
          },
        ],
        benefits: [
          "Faster pages and happier editors",
          "Predictable monthly cost",
          "Free emergency support during downtime",
          "Quarterly performance and security reports",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Full audit of your current CMS, plugins and content workflow.",
          },
          {
            step: "02",
            title: "Improve",
            description:
              "Apply security patches, performance fixes and editor improvements.",
          },
          {
            step: "03",
            title: "Manage",
            description:
              "Daily backups, monitoring and content publishing support.",
          },
          {
            step: "04",
            title: "Evolve",
            description:
              "Quarterly roadmap reviews and new feature rollouts.",
          },
        ],
        faqs: [
          {
            question: "Do you support both WordPress and headless CMS?",
            answer:
              "Yes. We have specialists in both. We help you choose the right one based on team skills and product requirements.",
          },
          {
            question: "Can you migrate from WordPress to a headless CMS?",
            answer:
              "Absolutely. We migrate posts, media, taxonomies and redirects with zero SEO loss.",
          },
          {
            question: "Will my content team need to learn new tools?",
            answer:
              "We provide training and standard operating procedures. Most editors are productive within a single session.",
          },
        ],
        ctaTitle: "Hand off your CMS to experts",
        ctaDescription:
          "Free CMS audit and improvement plan within 48 hours.",
      },
      {
        slug: "custom-erp-crm",
        title: "Enterprise Custom ERP & CRM Software Development Company in Bangladesh",
        shortTitle: "ERP & CRM",
        subtitle: "Architect bespoke ERP and CRM systems tailored to your exact business workflow with zero per-user licensing fees, automated sales pipelines, and executive dashboards.",
        description:
          "Tailored ERP and CRM systems that streamline operations, automate sales funnels, and centralize company data.",
        icon: "Database",
        heroImage: "/images/services/custom-web-apps.jpg",
        overviewTitle: "Enterprise ERP & CRM Tailored to Your Business Goals",
        overview: [
          "Generic off-the-shelf software forces your enterprise into rigid boxes. Our custom ERP and CRM solutions are architected around your exact organizational structure, supply chain, and sales workflows.",
          "From multi-department resource allocation to pipeline management and real-time executive analytics, we build secure, scalable enterprise software.",
        ],
        whyChooseUsTitle: "Why Leading Enterprises Choose Our Custom ERP & CRM Solutions",
        whyChooseUsDescription: "Built with modern frameworks like Next.js, Node.js, and PostgreSQL, our solutions scale effortlessly without expensive user license seats.",
        whyChooseUs: [
          { title: "Zero Per-Seat Licensing Fees", description: "Own your platform completely. Scale from 10 to 10,000 employees without paying recurring SaaS license costs." },
          { title: "Deep Local & Global Integration", description: "Seamlessly connect with local banking, VAT/TIN compliance, SMS gateways, and global cloud infrastructure." },
          { title: "Ironclad Security & Audit Logs", description: "Role-based access controls, automated encrypted backups, and comprehensive audit logs for governance." }
        ],
        featuresHeading: "Core Capabilities of Our Custom ERP & CRM Platform",
        features: [
          { title: "Pipeline & Lead Management", description: "Automated lead tracking, deal stages, and conversion analytics.", icon: "Target" },
          { title: "Resource & Task Allocation", description: "Cross-department project tracking, milestones, and workload balancing.", icon: "Layers" },
          { title: "Custom BI & Reporting", description: "Real-time executive dashboards with PDF and Excel export capabilities.", icon: "BarChart3" },
          { title: "Automated Communication", description: "Email and WhatsApp trigger workflows for client engagement.", icon: "Mail" },
        ],
        benefits: [
          "Complete code and data ownership",
          "Automated sales and operations workflows",
          "Role-based security with audit trail",
          "24/7 dedicated enterprise SLA support",
        ],
        process: [
          { step: "01", title: "Workflow Mapping", description: "In-depth analysis of your current operational bottlenecks." },
          { step: "02", title: "Architecture Design", description: "Database schema, security specs, and UI wireframes." },
          { step: "03", title: "Agile Build", description: "Iterative sprint deployments with end-user feedback loops." },
          { step: "04", title: "Deployment & Training", description: "On-premise or cloud hosting setup and staff training." },
        ],
        faqs: [
          { question: "Can you migrate data from our existing legacy system?", answer: "Yes, we handle complete data extraction, cleaning, and migration from legacy SQL, Excel, or older ERP systems." },
          { question: "Where will our enterprise data be hosted?", answer: "You can choose cloud hosting (AWS, GCP, Azure) or secure on-premise servers within Bangladesh." },
        ],
        ctaTitle: "Transform Your Enterprise Operations",
        ctaDescription: "Schedule an architecture consultation with our senior enterprise software architects.",
      },
      {
        slug: "hr-payroll",
        title: "Automated HR & Payroll Management Software Solutions in Bangladesh",
        shortTitle: "HR & Payroll",
        subtitle: "Automate biometric attendance, employee shift rosters, salary disbursement, festival bonuses, and NBR tax compliance with 100% precision.",
        description:
          "End-to-end HR and payroll automation software customized for Bangladeshi corporate and factory compliance.",
        icon: "Users",
        heroImage: "/images/services/custom-web-apps.jpg",
        overviewTitle: "Streamline Human Capital & Compliant Payroll Processing",
        overview: [
          "Managing employee attendance, shift rosters, leave calculations, festival bonuses, and tax deductions manually creates administrative overhead and risk.",
          "Our HR & Payroll platform automates attendance biometric sync, salary slips, provident fund, gratuity, and NBR tax certificates effortlessly.",
        ],
        whyChooseUsTitle: "Why Corporate HR Leaders Trust Our Payroll System",
        whyChooseUsDescription: "Engineered specifically for Bangladesh labor laws and tax regulations, supporting corporate offices and large manufacturing plants alike.",
        whyChooseUs: [
          { title: "Bangladesh Labor Law Compliant", description: "Built-in calculations for overtime, festival bonus, provident fund, and income tax slabs." },
          { title: "Biometric & Mobile Check-In", description: "Direct integration with ZKAccess, Hikvision biometric devices, and geo-fenced mobile attendance." },
          { title: "Automate Bank Salary Disbursal", description: "One-click generation of bank advice letters and bKash/Nagad salary disbursement files." }
        ],
        featuresHeading: "Comprehensive HR & Payroll Automation Features",
        features: [
          { title: "Employee Self-Service Portal", description: "Staff can request leave, download pay slips, and submit tax documents.", icon: "UserCheck" },
          { title: "Automated Tax Calculation", description: "Instant tax slab calculation and NBR Form 108 report generation.", icon: "Calculator" },
          { title: "Shift & Roster Management", description: "Flexible shift scheduling for offices, factories, and remote teams.", icon: "Clock" },
          { title: "Performance Evaluation", description: "KPI tracking, quarterly reviews, and appraisal management.", icon: "Award" },
        ],
        benefits: [
          "90% reduction in monthly payroll processing time",
          "Instant digital pay slip distribution via email/SMS",
          "Zero manual calculation errors",
          "100% compliant with NBR and Bangladesh Labor Act",
        ],
        process: [
          { step: "01", title: "Policy Setup", description: "Configuring leave rules, tax slabs, and bonus formulas." },
          { step: "02", title: "Device Integration", description: "Connecting biometric machines and mobile apps." },
          { step: "03", title: "Parallel Run", description: "Running side-by-side with your existing payroll for 1 month." },
          { step: "04", title: "Full Go-Live", description: "Full launch with staff onboarding and support." },
        ],
        faqs: [
          { question: "Does it support biometric attendance machines?", answer: "Yes, we integrate with ZKTeco, Hikvision, Realtime, and any REST API biometric hardware." },
          { question: "Is the employee data stored securely?", answer: "All employee records are encrypted in transit and at rest using AES-256 standards." },
        ],
        ctaTitle: "Automate Your HR & Payroll Today",
        ctaDescription: "Get a free live demo customized to your employee count.",
      },
      {
        slug: "inventory-sales-tracking",
        title: "Multi-Warehouse Inventory & Point-of-Sale (POS) Software in Bangladesh",
        shortTitle: "Inventory & Sales",
        subtitle: "Gain real-time visibility over multi-branch stock levels, barcode scanning, order fulfillment, and omnichannel retail sales tracking.",
        description:
          "Cloud-based inventory and sales tracking applications for retail, wholesale, and distributor networks.",
        icon: "Package",
        heroImage: "/images/services/custom-web-apps.jpg",
        overviewTitle: "Full Visibility Over Stock, Orders & Sales Channels",
        overview: [
          "Prevent stockouts, reduce inventory holding costs, and track every product from warehouse entry to point-of-sale customer delivery.",
          "Our inventory & sales tracking platform gives business owners real-time alerts, barcode scanning, and multi-warehouse synchronization.",
        ],
        whyChooseUsTitle: "Why Retailers & Distributors Rely on Our Inventory Software",
        whyChooseUsDescription: "Fast, reliable, offline-ready POS and cloud inventory architecture designed for high-volume transactions.",
        whyChooseUs: [
          { title: "Multi-Warehouse Sync", description: "Track stock transfers across multiple branches, godowns, and outlets in real time." },
          { title: "Low Stock & Expiry Alerts", description: "Automated notifications when inventory reaches reorder thresholds." },
          { title: "Omnichannel POS Integration", description: "Sync physical shop POS sales instantly with your online e-commerce catalog." }
        ],
        featuresHeading: "Powerful Inventory & Sales Management Capabilities",
        features: [
          { title: "Barcode & QR Code Scanning", description: "Instant stock intake, dispatch, and physical audit scanning.", icon: "QrCode" },
          { title: "Batch & Expiry Tracking", description: "FIFO/LIFO stock movement rules for perishable goods.", icon: "CheckSquare" },
          { title: "Sales Channel Analytics", description: "Identify top-selling items, store performance, and profit margins.", icon: "TrendingUp" },
          { title: "Supplier & Purchase Orders", description: "Generate POs and monitor supplier delivery reliability.", icon: "Truck" },
        ],
        benefits: [
          "Real-time stock counts across all locations",
          "Eliminate inventory shrinkage and theft",
          "Integrated POS for fast store checkout",
          "Comprehensive profit & margin analytics",
        ],
        process: [
          { step: "01", title: "Catalog Structuring", description: "Setting up SKUs, categories, and warehouse layouts." },
          { step: "02", title: "POS & Hardware Setup", description: "Connecting barcode scanners, printers, and terminals." },
          { step: "03", title: "Staff Training", description: "Hands-on training for store managers and warehouse staff." },
          { step: "04", title: "Go Live & Monitor", description: "Continuous monitoring and live support." },
        ],
        faqs: [
          { question: "Does the POS work when the internet is down?", answer: "Yes, our POS application supports offline mode and automatically syncs sales when connectivity resumes." },
        ],
        ctaTitle: "Master Your Inventory & Boost Sales",
        ctaDescription: "Request a custom demo tailored to your retail or wholesale business.",
      },
      {
        slug: "nextjs-react-apps",
        title: "Next.js & React Web Application Development Company in Bangladesh",
        shortTitle: "Next.js & React",
        subtitle: "High-performance, sub-second, SEO-optimized enterprise web applications engineered on Next.js 15+ App Router and React",
        description:
          "Custom full-stack web applications built with Next.js, React, Tailwind CSS, TypeScript, and bKash/Nagad payment gateways.",
        icon: "Code2",
        heroImage: "/images/services/web-development.jpg",
        overviewTitle: "Build Sub-Second Web Applications for High Conversion",
        overview: [
          "Next.js is the modern gold standard for building modern, high-speed web platforms. Combining Server-Side Rendering (SSR), Static Site Generation (SSG), and Server Actions, we deliver lightning-fast applications.",
          "Whether you need an enterprise SaaS application, a dynamic news portal, or a customer portal, our engineers write clean, maintainable TypeScript.",
        ],
        whyChooseUsTitle: "Why Next.js & React are Superior Choice for Digital Leaders",
        whyChooseUsDescription: "We leverage the latest Next.js 15+ App Router, React Server Components, and optimized edge deployment.",
        whyChooseUs: [
          { title: "Sub-Second Page Load Speeds", description: "Server components reduce client bundle size for instant page transitions." },
          { title: "First-Class SEO Architecture", description: "Dynamic open-graph images, canonical URLs, and automated schema markup." },
          { title: "Edge Deployment & Autoscaling", description: "Deploy on global edge networks with zero downtime and instant scaling." }
        ],
        featuresHeading: "Full-Stack Next.js & React Engineering Features",
        features: [
          { title: "Next.js App Router & SSR", description: "Server-side rendering for optimal performance and search indexing.", icon: "Cpu" },
          { title: "State-of-the-Art UI", description: "Tailwind CSS, Framer Motion, and accessible component design.", icon: "Layout" },
          { title: "TypeScript Type Safety", description: "Robust codebase reducing production errors and enabling long-term scale.", icon: "ShieldCheck" },
          { title: "API Routes & Server Actions", description: "Secure server-side logic hiding sensitive keys and DB connections.", icon: "Server" },
        ],
        benefits: [
          "95+ Google Lighthouse performance score guaranteed",
          "Enhanced conversion rates driven by sub-second response times",
          "Top rankings in search engines with native SSR",
          "Seamless responsiveness across mobile, tablet, and desktop",
        ],
        process: [
          { step: "01", title: "Figma Prototype", description: "Interactive wireframes and component architecture." },
          { step: "02", title: "Next.js Engineering", description: "Clean TypeScript code with modular component structure." },
          { step: "03", title: "Performance Tuning", description: "Core Web Vitals auditing and asset optimization." },
          { step: "04", title: "Edge Launch", description: "Global deployment with SSL, CDN, and analytics." },
        ],
        faqs: [
          { question: "Why choose Next.js over traditional React SPA?", answer: "Next.js provides Server-Side Rendering (SSR) which enables search engines to crawl all your content easily, resulting in far superior SEO rankings and faster initial load times." },
        ],
        ctaTitle: "Build Your Next.js Application",
        ctaDescription: "Talk with our lead Next.js architects to plan your product engineering.",
      },
      {
        slug: "custom-portal-development",
        title: "Enterprise Custom Portal Development, Client Portals & B2B Dashboards in Bangladesh",
        shortTitle: "Custom Portals",
        subtitle: "Build secure client portals, vendor management systems, and partner extranets with multi-tenant architecture, SSO authentication, and encrypted file sharing.",
        description:
          "Enterprise web portals with multi-tenant architecture, role-based access, and secure document sharing.",
        icon: "Globe",
        heroImage: "/images/services/custom-web-apps.jpg",
        overviewTitle: "Secure Digital Portals for Clients, Suppliers & Partners",
        overview: [
          "Self-service portals empower clients, suppliers, and distributors to interact with your organization securely 24/7.",
          "We build client portals, vendor portals, and internal employee portals with SSO authentication, encrypted document vaults, and automated notification loops.",
        ],
        whyChooseUsTitle: "Why Leading Organizations Build Portals With Us",
        whyChooseUsDescription: "High-security portal architectures built with granular permission controls and intuitive UX.",
        whyChooseUs: [
          { title: "Role-Based Access Control (RBAC)", description: "Define exact permission levels for administrators, clients, vendors, and staff." },
          { title: "Secure Document Repository", description: "Encrypted file sharing, digital signature integration, and version history." },
          { title: "Single Sign-On (SSO) Support", description: "OAuth 2.0, SAML, Google Workspace, and Microsoft Azure AD integration." }
        ],
        featuresHeading: "Enterprise Portal Capabilities",
        features: [
          { title: "Real-Time Activity Feeds", description: "Monitor portal logins, document views, and active status.", icon: "Activity" },
          { title: "Custom Dashboard Analytics", description: "Tailored dashboard views for each user group or client.", icon: "PieChart" },
          { title: "Secure Payment Gateway", description: "Instant invoice payments inside the portal via bKash, SSLCommerz, or Stripe.", icon: "CreditCard" },
          { title: "Automated Notifications", description: "In-app alerts, email triggers, and SMS notifications.", icon: "Bell" },
        ],
        benefits: [
          "Eliminate endless back-and-forth email attachments",
          "24/7 self-service convenience for clients and partners",
          "Bank-grade security and document encryption",
          "Seamless integration with internal ERPs and CRMs",
        ],
        process: [
          { step: "01", title: "User Persona Research", description: "Defining access requirements for each user group." },
          { step: "02", title: "Security Specification", description: "Authentication protocols and encryption standards." },
          { step: "03", title: "UI/UX & Portal Build", description: "Responsive portal layout development." },
          { step: "04", title: "UAT & Deployment", description: "User acceptance testing and security auditing." },
        ],
        faqs: [
          { question: "Can clients sign contracts digitally inside the portal?", answer: "Yes, we integrate electronic signature solutions directly inside document workflows." },
        ],
        ctaTitle: "Launch Your Custom Enterprise Portal",
        ctaDescription: "Schedule a portal architecture consultation with our engineering team.",
      },
      {
        slug: "payloadcms-backend",
        title: "PayloadCMS Backend Architecture, Headless CMS & API Engineering in Bangladesh",
        shortTitle: "PayloadCMS",
        subtitle: "Architect enterprise TypeScript-first headless CMS, GraphQL/REST APIs, and database collections with complete editorial control and zero plugin bloat.",
        description:
          "Enterprise PayloadCMS backend development with Next.js integration, custom admin dashboards, and database controls.",
        icon: "Server",
        heroImage: "/images/services/cms-management.jpg",
        overviewTitle: "Next-Generation Headless Content Management with PayloadCMS",
        overview: [
          "PayloadCMS is the ultimate developer-first, TypeScript-native headless CMS built for modern Next.js and React applications.",
          "Say goodbye to clunky CMS admin panels and slow API responses. We architect PayloadCMS backends that give content editors total control while providing developers clean, fully typed code.",
        ],
        whyChooseUsTitle: "Why PayloadCMS is Revolutionizing Backend Content Delivery",
        whyChooseUsDescription: "Engineered in pure TypeScript, running natively inside Node.js and Next.js applications.",
        whyChooseUs: [
          { title: "100% Type-Safe Content Schema", description: "Auto-generated TypeScript interfaces for bug-free frontend data fetching." },
          { title: "Lightning-Fast REST & GraphQL", description: "Native REST and GraphQL endpoints generated automatically from schema." },
          { title: "Tailored Admin Panel UI", description: "Sleek, customizable admin control panel designed for editorial velocity." }
        ],
        featuresHeading: "PayloadCMS Architecture Features",
        features: [
          { title: "Custom Field Components", description: "Bespoke editor blocks, rich text, and media management.", icon: "FileEdit" },
          { title: "Granular Access Control", description: "Field-level and document-level security rules.", icon: "Lock" },
          { title: "Database Flexibility", description: "Support for PostgreSQL, MongoDB, and SQLite.", icon: "Database" },
          { title: "Localization & i18n", description: "Multi-language content management with Bangla & English.", icon: "Globe" },
        ],
        benefits: [
          "Zero plugin bloat or security vulnerabilities",
          "Fully typed data structures matching your frontend",
          "Infinite scalability with Next.js edge deployment",
          "Easy content management for marketing teams",
        ],
        process: [
          { step: "01", title: "Schema Modeling", description: "Defining collections, fields, and access rules." },
          { step: "02", title: "PayloadCMS Setup", description: "Configuring database connection and admin layout." },
          { step: "03", title: "Next.js Integration", description: "Connecting Payload API directly with frontend components." },
          { step: "04", title: "Launch & Support", description: "Deploying to production and training content managers." },
        ],
        faqs: [
          { question: "Can PayloadCMS run inside our existing Next.js project?", answer: "Yes! PayloadCMS can run directly inside the Next.js App Router or as an independent headless backend." },
        ],
        ctaTitle: "Upgrade to PayloadCMS Architecture",
        ctaDescription: "Get a free demonstration of PayloadCMS content velocity.",
      },
      {
        slug: "scalable-headless-ecommerce",
        title: "High-Performance Headless E-Commerce Development with Next.js & MedusaJS",
        shortTitle: "Headless E-Com",
        subtitle: "Blazing-fast sub-second storefronts, localized bKash & Nagad one-click checkout, and automated courier fulfillment API integration.",
        description:
          "Custom headless e-commerce platforms using Next.js, MedusaJS, Shopify Storefront API, or PayloadCMS.",
        icon: "ShoppingCart",
        heroImage: "/images/services/ecommerce-solutions.jpg",
        overviewTitle: "Unleash Conversion Speed with Headless E-Commerce",
        overview: [
          "Traditional e-commerce platforms struggle under heavy flash sale traffic and slow mobile rendering. Headless e-commerce decouples the frontend storefront from the backend commerce engine.",
          "We build ultra-fast storefronts that load instantly, score 98+ on Lighthouse, and seamlessly process payments via bKash, Nagad, cards, and courier delivery APIs.",
        ],
        whyChooseUsTitle: "Why High-Growth Brands Switch to Headless Commerce",
        whyChooseUsDescription: "Combine global e-commerce performance with local Bangladeshi payment and courier ecosystems.",
        whyChooseUs: [
          { title: "Instant Page Transitions", description: "Sub-second product pages and instant filtering that increase checkout completion." },
          { title: "Local Payment Gateways", description: "Native integration with bKash, Nagad, Rocket, SSLCommerz, and Stripe." },
          { title: "Automated Courier Fulfillment", description: "Direct API dispatch to Pathao, RedX, Steadfast, and Sundarban." }
        ],
        featuresHeading: "Headless Commerce Platform Features",
        features: [
          { title: "Instant Catalog Search", description: "Algolia or Typesense powered instant search and multi-facet filters.", icon: "Search" },
          { title: "One-Click Mobile Checkout", description: "Streamlined checkout designed for mobile buyers in Bangladesh.", icon: "Smartphone" },
          { title: "Inventory & ERP Sync", description: "Synchronize stock levels across physical stores and online.", icon: "RefreshCw" },
          { title: "Abandoned Cart Recovery", description: "Automated WhatsApp and SMS reminders for uncompleted orders.", icon: "MessageSquare" },
        ],
        benefits: [
          "3x faster product page load speed than traditional stores",
          "25%+ increase in online checkout conversions",
          "Seamless handling of massive traffic spikes during promotional campaigns",
          "Full mobile responsiveness across all smartphone devices",
        ],
        process: [
          { step: "01", title: "Store Strategy", description: "Architecture planning for frontend storefront and backend engine." },
          { step: "02", title: "Custom UI Design", description: "Conversion-optimized product pages and cart flow." },
          { step: "03", title: "Integration Build", description: "Gateway, courier, and inventory API setup." },
          { step: "04", title: "Launch & Growth", description: "Performance auditing, go-live, and analytics." },
        ],
        faqs: [
          { question: "Can we use our existing Shopify backend with a Next.js frontend?", answer: "Yes! We can connect Next.js via Shopify's GraphQL Storefront API for a headless storefront." },
        ],
        ctaTitle: "Scale Your E-Commerce Revenue",
        ctaDescription: "Consult with our headless e-commerce specialists for a custom architecture plan.",
      },
      {
        slug: "rest-graphql-api",
        title: "Enterprise REST & GraphQL API Development & Microservices in Bangladesh",
        shortTitle: "API Solutions",
        subtitle: "Architect high-throughput, sub-50ms REST and GraphQL APIs with OAuth 2.0 security, Redis caching, rate limiting, and automated OpenAPI documentation.",
        description:
          "Secure, high-performance RESTful and GraphQL API development with rate-limiting, documentation, and SDKs.",
        icon: "Plug",
        heroImage: "/images/services/web-development.jpg",
        overviewTitle: "Connect Systems, Mobile Apps & Partners with Secure APIs",
        overview: [
          "Modern software ecosystems rely on fast, robust API architecture. We design, build, and maintain enterprise REST and GraphQL APIs that connect web platforms, mobile apps, third-party services, and legacy databases.",
          "Our engineers enforce strict security standards, rate-limiting, Swagger/OpenAPI documentation, and automated testing.",
        ],
        whyChooseUsTitle: "Why Enterprise Teams Choose Our API Engineering",
        whyChooseUsDescription: "Built with Node.js, Go, or Python for high concurrency and sub-50ms API response times.",
        whyChooseUs: [
          { title: "Sub-50ms Response Times", description: "Optimized database queries, redis caching, and edge routing." },
          { title: "Bank-Grade API Security", description: "OAuth 2.0, JWT tokens, rate-limiting, and CORS protection." },
          { title: "Interactive OpenAPI Specs", description: "Automated Swagger documentation and Postman collections for developers." }
        ],
        featuresHeading: "API Engineering Capabilities",
        features: [
          { title: "GraphQL Schema Design", description: "Fetch precisely the data needed without over-fetching or under-fetching.", icon: "Share2" },
          { title: "Microservices Architecture", description: "Decoupled services for independent scaling and deployment.", icon: "Boxes" },
          { title: "Third-Party Connectors", description: "Integrations for CRM, ERP, payment, and logistics APIs.", icon: "Workflow" },
          { title: "Webhooks & Real-Time Sync", description: "Event-driven webhooks for instant data synchronization.", icon: "Zap" },
        ],
        benefits: [
          "Unified backend serving mobile apps and web platforms",
          "High concurrency handling millions of requests daily",
          "Comprehensive documentation reducing onboarding time",
          "Real-time monitoring and uptime SLAs",
        ],
        process: [
          { step: "01", title: "API Specification", description: "Defining endpoints, payloads, and authentication." },
          { step: "02", title: "Development & Testing", description: "Writing modular code with automated unit and integration tests." },
          { step: "03", title: "Gateway & Caching", description: "Configuring Redis cache, API gateway, and rate limits." },
          { step: "04", title: "Deployment & Monitoring", description: "Monitoring latency, errors, and throughput in real time." },
        ],
        faqs: [
          { question: "Should we choose REST or GraphQL for our mobile app?", answer: "GraphQL is often ideal for mobile apps to minimize payload sizes, while REST is great for simple web services. We help you choose or combine both." },
        ],
        ctaTitle: "Architect Your Enterprise API",
        ctaDescription: "Speak with our senior API architects today.",
      },
      {
        slug: "enterprise-ui-ux",
        title: "Enterprise Product UI/UX Design & Figma Prototyping Agency in Bangladesh",
        shortTitle: "UI/UX Design",
        subtitle: "Design intuitive, conversion-focused user interfaces, interactive Figma design prototypes, and WCAG AA accessible software design systems.",
        description:
          "Transform complex software into intuitive visual experiences with user research, Figma prototypes, and design systems.",
        icon: "PenTool",
        heroImage: "/images/services/web-development.jpg",
        overviewTitle: "User-Centered UI/UX Design for Complex Digital Products",
        overview: [
          "Great visual design is more than aesthetics; it is about user productivity, speed, and conversion efficiency.",
          "Our UI/UX designers turn complex corporate workflows, SaaS products, and mobile apps into clean, intuitive, accessible interfaces through rigorous user testing and Figma prototyping.",
        ],
        whyChooseUsTitle: "Why Top Brands Partner With Our UX Studio",
        whyChooseUsDescription: "Combining cognitive psychology, modern typography, and rigorous user testing.",
        whyChooseUs: [
          { title: "User Research & Journey Mapping", description: "Deep dive into end-user behavior, pain points, and usability goals." },
          { title: "High-Fidelity Interactive Figma", description: "Pixel-perfect Figma prototypes that mirror the final working software." },
          { title: "WCAG 2.1 AA Accessibility", description: "High contrast, screen-reader friendly, and inclusive UI components." }
        ],
        featuresHeading: "End-to-End UI/UX Design Process Features",
        features: [
          { title: "Wireframing & Information Architecture", description: "Structuring user flows and navigation hierarchies.", icon: "Layout" },
          { title: "Design Systems & Tokens", description: "Reusable color palettes, typography, and UI component sets.", icon: "Palette" },
          { title: "Usability Testing & Iteration", description: "Validating wireframes with actual end-users before coding.", icon: "CheckCircle" },
          { title: "Developer Handoff Support", description: "Exporting clean CSS tokens and component specs for engineers.", icon: "Code" },
        ],
        benefits: [
          "Dramatically reduced user training time",
          "Higher conversion rates and user retention",
          "Consistent visual brand identity across platforms",
          "Faster development handoff with organized Figma assets",
        ],
        process: [
          { step: "01", title: "Empathize", description: "Stakeholder interviews and user persona mapping." },
          { step: "02", title: "Wireframe", description: "Building low-fidelity layout structures." },
          { step: "03", title: "Visual UI", description: "Crafting polished visual design in Figma." },
          { step: "04", title: "Prototype & Test", description: "Interactive click-through testing." },
        ],
        faqs: [
          { question: "Do we get full access to the Figma design files?", answer: "Yes, you receive 100% ownership of all Figma source files, components, and design assets." },
        ],
        ctaTitle: "Elevate Your Product UI/UX",
        ctaDescription: "Schedule a UX audit or product design workshop with our design lead.",
      },
      {
        slug: "web-performance-core-web-vitals",
        title: "Website Speed Optimization & Google Core Web Vitals Audit in Bangladesh",
        shortTitle: "Core Web Vitals",
        subtitle: "Audit and optimize LCP, INP, CLS, and page rendering speeds to achieve 95+ Google Lighthouse scores and dominate organic search rankings.",
        description:
          "Audit and fix web performance bottlenecks, script bloat, and Core Web Vitals for maximum speed.",
        icon: "Gauge",
        heroImage: "/images/services/web-development.jpg",
        overviewTitle: "Pass Core Web Vitals & Supercharge Search Engine Rankings",
        overview: [
          "Google uses Core Web Vitals (LCP, INP, CLS) as a direct search ranking factor. Slow sites lose both organic rankings and customer conversions.",
          "Our performance engineers audit JavaScript execution, image compression, server response times, and rendering paths to achieve 95+ Lighthouse scores.",
        ],
        whyChooseUsTitle: "Why Speed Matters for Your Bottom Line",
        whyChooseUsDescription: "Every 100ms improvement in page speed increases conversion rates by up to 7%.",
        whyChooseUs: [
          { title: "Fix Largest Contentful Paint (LCP)", description: "Optimize server response times, critical CSS, and image loading." },
          { title: "Eliminate Interaction to Next Paint (INP)", description: "Reduce heavy JavaScript main-thread blocking for instant clicks." },
          { title: "Stop Cumulative Layout Shift (CLS)", description: "Ensure stable visual layouts that prevent annoying content jumps." }
        ],
        featuresHeading: "Technical Speed Optimization Capabilities",
        features: [
          { title: "JavaScript Bundle Shrinking", description: "Code splitting, tree shaking, and removing unused scripts.", icon: "Scissors" },
          { title: "Next-Gen Image & Video Assets", description: "AVIF/WebP conversion, responsive srcsets, and lazy loading.", icon: "Image" },
          { title: "CDN & Edge Caching", description: "Cloudflare/Vercel edge caching for global sub-100ms delivery.", icon: "Cloud" },
          { title: "Database Query Optimization", description: "Indexing slow SQL queries and implementing Redis caching.", icon: "Zap" },
        ],
        benefits: [
          "Pass all Google Core Web Vitals checks",
          "Boost organic search positions on Google",
          "Lower bounce rates and higher sales conversions",
          "Detailed before-and-after performance audit report",
        ],
        process: [
          { step: "01", title: "Diagnostic Audit", description: "Comprehensive Lighthouse and Chrome UX Report profiling." },
          { step: "02", title: "Code Optimization", description: "Refactoring critical rendering paths and script execution." },
          { step: "03", title: "Server & Caching Setup", description: "Configuring CDN edge caching and compression." },
          { step: "04", title: "Verification", description: "Validating fixes across PageSpeed Insights and Google Search Console." },
        ],
        faqs: [
          { question: "How long does a performance optimization project take?", answer: "Most web performance optimizations are completed within 5 to 10 business days." },
        ],
        ctaTitle: "Speed Up Your Website Today",
        ctaDescription: "Get a free 24-hour Core Web Vitals assessment.",
      },
      {
        slug: "design-system-component-library",
        title: "Enterprise Design Systems & Reusable React Component Libraries in Bangladesh",
        shortTitle: "Design Systems",
        subtitle: "Unify digital brand identity, accelerate development cycles 3x, and build accessible, themeable React/Tailwind component libraries with Storybook.",
        description:
          "Build scalable, accessible component libraries and design systems for enterprise software consistency.",
        icon: "Layers",
        heroImage: "/images/services/web-development.jpg",
        overviewTitle: "Unify Enterprise Software Design Across Teams & Products",
        overview: [
          "As organizations grow, inconsistent UI components create visual clutter, code duplication, and slow development velocity.",
          "We build customized design systems and reusable React/Tailwind component libraries with Storybook documentation that empower engineering teams to ship features 3x faster.",
        ],
        whyChooseUsTitle: "Why Enterprise Product Teams Invest in Design Systems",
        whyChooseUsDescription: "Ensure 100% brand consistency across all web products, portals, and internal tools.",
        whyChooseUs: [
          { title: "3x Faster Product Feature Delivery", description: "Engineers assemble pages quickly using pre-tested, accessible components." },
          { title: "Design Token Architecture", description: "Centralized color, spacing, and typography tokens syncing Figma and code." },
          { title: "Storybook Interactive Docs", description: "Live, documented component playground for designers and developers." }
        ],
        featuresHeading: "Design System Engineering Features",
        features: [
          { title: "Accessible Component Suite", description: "Buttons, modals, tables, forms, and navigation built to WCAG AA standards.", icon: "CheckSquare" },
          { title: "Dark & Light Mode Support", description: "Seamless theme switching using CSS variables and Tailwind.", icon: "Moon" },
          { title: "NPM Package Distribution", description: "Publish internal private UI package for instant multi-repo import.", icon: "Package" },
          { title: "Automated Visual Testing", description: "Detect unwanted UI regressions before code merges into production.", icon: "Shield" },
        ],
        benefits: [
          "Consistent user experience across all corporate web applications",
          "Significant reduction in frontend code duplication",
          "Accelerated onboarding for new developers and designers",
          "Future-proof brand updates applied globally with a single version bump",
        ],
        process: [
          { step: "01", title: "UI Inventory", description: "Auditing existing visual components and codebases." },
          { step: "02", title: "Token Definition", description: "Standardizing color palettes, typography, and spacing scales." },
          { step: "03", title: "Component Engineering", description: "Building accessible React components with Tailwind CSS." },
          { step: "04", title: "Storybook & NPM Setup", description: "Publishing live documentation and internal package." },
        ],
        faqs: [
          { question: "Can the component library be used across multiple tech stacks?", answer: "Yes, design tokens can be exported to CSS variables, React, Vue, or Web Components." },
        ],
        ctaTitle: "Build Your Enterprise Design System",
        ctaDescription: "Schedule a design system strategy session with our lead architects.",
      },
    ],
  },

  // =========================================================
  // 3. LEGAL COMPLIANCE
  // =========================================================
  "legal-compliance": {
    slug: "legal-compliance",
    title: "Corporate Legal Compliance, RJSC Registration & Tax Advisory in Bangladesh",
    shortTitle: "Legal",
    subtitle: "Complete business registration, RJSC company incorporation, trade licensing, NBR tax & VAT filing, and trademark protection under one roof.",
    description:
      "Establish your presence in the Bangladeshi market with a partner that understands global standards. Our Legal Compliance framework provides the structural integrity your business needs to thrive in Dhaka’s elite commercial zones. From BIDA approvals to comprehensive Business Advisory, we deliver the precision and transparency required for multi-national success.",
    icon: "Scale",
    heroImage: "/images/services/legal-compliance.jpg",
    intro:
      "Navigating the regulatory intricacies of the Bangladeshi market demands a partner with elite precision. Our Legal Compliance ecosystem is architected for those who prioritize structural integrity and long-term security. From high-authority RJSC filings and NBR tax advisory to comprehensive labor law frameworks, we provide the Managed Services and Business Advisory required to keep your operations audit-ready. Whether you are an MNC establishing a foothold in Motijheel or scaling across Dhaka’s financial and commercial hubs, we offer tailored solutions that align with the highest global standards of corporate governance.",
    services: [
      {
        slug: "company-formation",
        title: "Company Formation, RJSC Registration & Foreign Investment (BIDA) in Bangladesh",
        shortTitle: "Company Setup",
        subtitle: "Incorporate Private Limited companies, register Foreign Branch Offices, and secure BIDA investment approvals in Dhaka with 100% legal precision.",
        description:
          "Start your business the right way. We provide end-to-end company formation services in Bangladesh, including RJSC registration, trade licenses, and tax compliance.",
        icon: "Building",
        heroImage: "/images/services/company-formation.jpg",
        overviewTitle: "Launch Your Business with Confidence and Legal Precision",
        overview: [
          "From initial registration to full regulatory compliance, we simplify the complex process of setting up your company in Bangladesh so you can focus on growth.",
          "Foreign investors get additional support with BIDA registration, work permit and FDI compliance.",
        ],
        
    whyChooseUsTitle: "Why Corporate.bd for Legal Compliance?", // Why chose us serction.
        whyChooseUsDescription: "Registering a company is just the beginning. Our mission is to protect your business from future legal hurdles through meticulous planning and a deep understanding of Bangladesh's Companies Act.",
        whyChooseUs: [
    { title: "Expert Legal Counsel", description: "Our team consists of seasoned consultants who understand the nuances of the Registrar of Joint Stock Companies (RJSC) and BIDA regulations." },
    { title: "Post-Registration Care", description: "We don't just hand you the papers; we stay with you for annual returns, tax filings, and ongoing compliance audits." },
    { title: "Tailored Structuring", description: "Whether it’s a Private Limited, Partnership, or Sole Proprietorship, we help you choose the legal structure that minimizes liability and maximizes profit." }
  ],
        featuresHeading: "Building the Legal Foundation for Your Future Enterprise",
        features: [
          {
            title: "Name Clearance",
            description:
              "Search, propose and clear your company name with RJSC..",
            icon: "Search",
          },
          {
            title: "MOA & AOA Drafting",
            description:
              "Customized Memorandum and Articles of Association for your business objects.",
            icon: "FileText",
          },
          {
            title: "RJSC Registration",
            description:
              "Submit, track and complete the certificate of incorporation.",
            icon: "Stamp",
          },
          {
            title: "TIN & BIN",
            description:
              "Tax Identification and Business Identification Numbers from NBR.",
            icon: "Hash",
          },
          {
            title: "Bank Account Opening",
            description:
              "Coordination with leading banks for fast company account setup.",
            icon: "Landmark",
          },
          {
            title: "Foreign Investor Support",
            description:
              "BIDA, work permit, share repatriation and FDI compliance.",
            icon: "Plane",
          },
        ],
        benefits: [
          "Fixed transparent pricing — no surprises",
          "Average completion in 10–15 working days",
          "Senior legal counsel on every engagement",
          "Bilingual (Bangla/English) documentation",
        ],
        process: [
          {
            step: "01",
            title: "Consultation",
            description:
              "Choose entity type, capital structure and shareholders.",
          },
          {
            step: "02",
            title: "Documentation",
            description:
              "Prepare MOA, AOA, Form IX, Form X and other required documents.",
          },
          {
            step: "03",
            title: "Registration",
            description:
              "File with RJSC, NBR and obtain incorporation certificate.",
          },
          {
            step: "04",
            title: "Bank & Operations",
            description:
              "Open corporate bank account and complete post-registration formalities.",
          },
        ],
        faqs: [
          {
            question: "What is the minimum capital for a Private Limited?",
            answer:
              "There is no statutory minimum, but practical capital starts from BDT 100,000 to make banking and licensing smooth.",
          },
          {
            question: "Can foreigners own 100% of a Bangladeshi company?",
            answer:
              "Yes, in most sectors 100% foreign ownership is permitted. Some restricted sectors require local partners — we advise on a case-by-case basis.",
          },
          {
            question: "How long does company registration take?",
            answer:
              "On average 10 to 15 working days from name clearance to certificate of incorporation, assuming all documents are ready.",
          },
        ],
        ctaTitle: "Start your company today",
        ctaDescription:
          "Book a free 30-minute consultation with our company formation experts.",
      },
      {
        slug: "trade-license",
        title: "Fast-Track Trade License Issuance, Renewal & Municipal Permits in Bangladesh",
        shortTitle: "Trade License",
        subtitle: "Procure and renew corporate trade licenses, e-Trade licenses, and specialized commercial permits across DSCC, DNCC, and City Corporations nationwide.",
        description:
          "Get your business legally authorized with ease. From new applications to annual renewals, Corporate.bd provides expert assistance for Trade License procurement in Bangladesh.",
        icon: "ScrollText",
        heroImage: "/images/services/trade-license.jpg",
        overviewTitle: "Legally Authorize Your Business with Zero Hassle",
        overview: [
          "A trade license is mandatory for every business in Bangladesh. We handle new applications, renewals, amendments and transfers across DSCC, DNCC, CCC, KCC and other municipal authorities.",
          "We also help with specialized licenses — environmental clearance from DOE, fire safety, factory license, drug license, food license and import-export registration certificates (IRC/ERC).",
        ],
    whyChooseUsTitle: "Redefining Trade License Procurement", // Why chose us serction.
        whyChooseUsDescription: "Registering a company is just the beginning. Our mission is to protect your business from future legal hurdles through meticulous planning and a deep understanding of Bangladesh's Companies Act.",
        whyChooseUs: [
    { title: "Jurisdictional Expertise", description: "We understand the specific requirements of every City Corporation and Union Parishad in Bangladesh, ensuring your application is filed correctly the first time." },
    { title: "Rapid Processing", description: "Our deep network and streamlined documentation process reduce the typical waiting time, helping you get your license book in record speed." },
    { title: "Automated Renewal Tracking", description: "Never worry about penalties again. We keep track of your license validity and notify you well in advance of the June-July renewal window." }
  ],
        featuresHeading: "Building the Legal Foundation for Your Future Enterprise",

        features: [
          {
            title: "New Trade License",
            description:
              "Application, document preparation and follow-up until issuance.",
            icon: "FilePlus",
          },
          {
            title: "Renewal Service",
            description:
              "Annual renewal reminders and end-to-end processing.",
            icon: "RefreshCw",
          },
          {
            title: "Amendment & Transfer",
            description:
              "Change of address, ownership, trade category or company name.",
            icon: "FileEdit",
          },
          {
            title: "IRC & ERC",
            description:
              "Import and Export Registration Certificates from CCI&E.",
            icon: "Truck",
          },
          {
            title: "Environmental Clearance",
            description:
              "DOE clearance for industrial and manufacturing units.",
            icon: "Leaf",
          },
          {
            title: "Fire & Factory License",
            description:
              "Fire Service and Factory Inspectorate licenses for plants.",
            icon: "Flame",
          },
        ],
        benefits: [
          "Skip the queue — we handle it all",
          "Same-day pickup in many municipalities",
          "Annual renewal calendar with auto-reminders",
          "Compliance audits to identify missing licenses",
        ],
        process: [
          {
            step: "01",
            title: "Eligibility",
            description: "Confirm trade category, location and required documents.",
          },
          {
            step: "02",
            title: "Documentation",
            description:
              "Prepare application, NID, rent agreement, photos, etc.",
          },
          {
            step: "03",
            title: "Submission",
            description: "File with the relevant authority and pay fees.",
          },
          {
            step: "04",
            title: "Pickup",
            description:
              "Collect the original certificate and digital copy.",
          },
        ],
        faqs: [
          {
            question: "How much does a trade license cost?",
            answer:
              "Government fees vary by city and trade category — typically BDT 1,000 to BDT 50,000. Our service fee is fixed and disclosed upfront.",
          },
          {
            question: "When should I renew?",
            answer:
              "Renewals are due each Bangla calendar year (Boishakh). We send reminders 30 days in advance and process renewal automatically if you opt in.",
          },
          {
            question: "Can you handle businesses outside Dhaka?",
            answer:
              "Yes. We have agents in all major cities and Upazillas across Bangladesh.",
          },
        ],
        ctaTitle: "Get your trade license sorted",
        ctaDescription:
          "Talk to a compliance specialist for a free document checklist.",
      },
      {
        slug: "tax-vat",
        title: "Corporate Tax Planning, VAT (BIN) Registration & NBR Compliance in Bangladesh",
        shortTitle: "Tax & VAT",
        subtitle: "Maximize tax efficiency and ensure 100% compliance with monthly Mushak VAT returns, TDS filings, and annual corporate income tax submissions.",
        description:
          "Income tax, VAT registration, monthly returns, audits and tax planning by chartered accountants.",
        icon: "Calculator",
        heroImage: "/images/services/tax-vat.jpg",
        overviewTitle: "Navigate Complex Fiscal Laws with Absolute Precision",
        overview: [
          "Tax and VAT compliance isn't just about avoiding penalties—it's about building a sustainable and transparent financial future.",
          "At Corporate.bd, we transform complex NBR regulations into clear, actionable strategies that protect your bottom line and ensure your business remains in good standing with the law.",
        ],

    whyChooseUsTitle: "Simplify Your Taxation—Focus on Your Business, Not the Paperwork", // Why chose us serction.
        whyChooseUsDescription: "Registering a company is just the beginning. Our mission is to protect your business from future legal hurdles through meticulous planning and a deep understanding of Bangladesh's Companies Act.",
        whyChooseUs: [
    { title: "Risk-Free Documentation", description: "We perform rigorous internal audits before any government submission to eliminate errors that could lead to heavy fines." },
    { title: "Strategic Tax Planning", description: "We don’t just record your past; we plan your future by identifying legitimate ways to optimize your tax structure according to the Income Tax Act." },
    { title: "Local NBR Expertise", description: "Our consultants have deep-rooted experience with the National Board of Revenue (NBR) protocols, ensuring your files move smoothly through the system." }
  ],
        featuresHeading: "Building the Legal Foundation for Your Future Enterprise",


        features: [
          {
            title: "VAT Registration (BIN)",
            description:
              "VAT 2.1 registration, BIN issuance and Mushak setup.",
            icon: "Hash",
          },
          {
            title: "Monthly VAT Returns",
            description:
              "Mushak 9.1, 4.3, 6.3 preparation and online submission.",
            icon: "CalendarCheck",
          },
          {
            title: "Income Tax Returns",
            description:
              "Annual return filing for individuals, partnerships and companies.",
            icon: "FileText",
          },
          {
            title: "Withholding Tax",
            description:
              "TDS calculation, deposit and quarterly statements.",
            icon: "Percent",
          },
          {
            title: "Tax Planning",
            description:
              "Legal strategies to reduce tax liability and improve cash flow.",
            icon: "TrendingDown",
          },
          {
            title: "Audit Support",
            description:
              "NBR audits, appeals and representation by senior CAs.",
            icon: "ShieldCheck",
          },
        ],
        benefits: [
          "Chartered accountants on every engagement",
          "Cloud-based document management",
          "Automated reminders before every deadline",
          "Year-end tax planning to minimize liability",
        ],
        process: [
          {
            step: "01",
            title: "Onboarding",
            description:
              "Review books, contracts and previous filings.",
          },
          {
            step: "02",
            title: "Setup",
            description:
              "Register BIN, configure Mushak and accounting software.",
          },
          {
            step: "03",
            title: "File",
            description:
              "Monthly VAT, quarterly TDS and annual income tax returns.",
          },
          {
            step: "04",
            title: "Plan",
            description:
              "Quarterly review meetings to optimize tax position.",
          },
        ],
        faqs: [
          {
            question: "Do startups need to file VAT returns?",
            answer:
              "If your annual turnover exceeds BDT 30 lakh you must register and file VAT returns. We help determine eligibility and timing.",
          },
          {
            question: "What is the corporate income tax rate in Bangladesh?",
            answer:
              "Rates range from 22.5% for listed companies to 27.5% for non-listed and higher for banks and tobacco. We help with exact computation.",
          },
          {
            question: "Can you handle our entire accounting?",
            answer:
              "Yes. We offer full bookkeeping, payroll and management reporting in addition to tax compliance.",
          },
        ],
        ctaTitle: "Outsource your tax & VAT to experts",
        ctaDescription:
          "Get a free compliance review and tax savings estimate.",
      },
      {
        slug: "intellectual-property",
        title: "Trademark Registration, Patent Filing & Copyright Law Services in Bangladesh",
        shortTitle: "IP Services",
        subtitle: "Protect brand assets, logos, software source code, and industrial inventions with DPDT registration and aggressive anti-counterfeit IP defense.",
        description:
          "Protect your brand’s unique identity. We provide expert services for Trademark, Patent, Copyright, and Industrial Design registration in Bangladesh to safeguard your intellectual assets.",
        icon: "Copyright",
        heroImage: "/images/services/intellectual-property.jpg",
        overviewTitle: "The Gold Standard in Intellectual Property Defense & Strategy",
        overview: [
          "Don't let others profit from your hard work. Secure your brand identity, inventions, and creative works with our comprehensive Intellectual Property registration and enforcement services.",
          "We also handle infringement disputes, opposition proceedings, licensing agreements and IP due diligence for M&A.",
        ],
    whyChooseUsTitle: "Your Strategic Partners in Brand Sovereignty", // Why chose us serction.
        whyChooseUsDescription: "Registering a company is just the beginning. Our mission is to protect your business from future legal hurdles through meticulous planning and a deep understanding of Bangladesh's Companies Act.",
        whyChooseUs: [
    { title: "Proactive IP Auditing", description: "We don't just file applications; we analyze your entire business to identify unprotected assets that could be at risk." },
    { title: "Global Standard Enforcement", description: "Our team understands both local DPDT (Department of Patents, Designs and Trademarks) protocols and international IP standards." },
    { title: "Infringement Monitoring", description: "We provide ongoing support to detect and challenge unauthorized use of your IP, including issuing legal cease-and-desist notices." }
  ],
        featuresHeading: "Comprehensive Intellectual Property Solutions",
        features: [
          {
            title: "Trademark Registration",
            description:
              "Search, file and prosecute trademarks with DPDT in 45 classes.",
            icon: "BadgeCheck",
          },
          {
            title: "Copyright Registration",
            description:
              "Software, literary, musical and artistic works with the Copyright Office.",
            icon: "BookOpen",
          },
          {
            title: "Patent Filing",
            description:
              "Utility and design patent drafting and prosecution.",
            icon: "Lightbulb",
          },
          {
            title: "Industrial Design",
            description:
              "Protect product shapes, configurations and ornamental design.",
            icon: "Palette",
          },
          {
            title: "International IP",
            description:
              "Madrid Protocol, PCT and Paris Convention filings.",
            icon: "Globe",
          },
          {
            title: "Enforcement",
            description:
              "Cease & desist, opposition, infringement litigation and DMCA takedowns.",
            icon: "Gavel",
          },
        ],
        benefits: [
          "Registered IP attorneys on staff",
          "Free trademark availability search",
          "Annual renewal management",
          "International filings via partner network",
        ],
        process: [
          {
            step: "01",
            title: "Search",
            description: "Comprehensive availability search and risk analysis.",
          },
          {
            step: "02",
            title: "Application",
            description: "Drafting and filing with the appropriate registry.",
          },
          {
            step: "03",
            title: "Prosecution",
            description:
              "Respond to office actions, oppositions and examinations.",
          },
          {
            step: "04",
            title: "Maintenance",
            description: "Renewals, recordals and ongoing IP portfolio management.",
          },
        ],
        faqs: [
          {
            question: "How long does trademark registration take in Bangladesh?",
            answer:
              "From filing to registration certificate typically takes 18 to 30 months. Protection rights begin from filing date once registered.",
          },
          {
            question: "Should I file copyright for my software?",
            answer:
              "Yes. While copyright exists automatically, registration provides strong evidence in disputes and is essential for enforcement.",
          },
          {
            question: "Can you file trademarks in other countries?",
            answer:
              "Yes. We file in 100+ jurisdictions through the Madrid Protocol or directly via local agents.",
          },
        ],
        ctaTitle: "Protect your intellectual property",
        ctaDescription:
          "Free trademark search and IP strategy session with our attorneys.",
      },
    ],
  },

  // =========================================================
  // 4. MANAGED IT SERVICES
  // =========================================================
  "managed-it-services": {
    slug: "managed-it-services",
    title: "Managed IT Services, Corporate IT AMC & Server Administration in Bangladesh",
    shortTitle: "Managed IT",
    subtitle: "Enterprise IT support, Annual Maintenance Contracts (AMC), 24/7 Linux/Windows server administration, and workflow AI automation in Dhaka.",
    description:
      "Annual maintenance contracts, server administration, AI automation and IT consultancy for businesses of every size.",
    icon: "Settings",
    heroImage: "/images/services/managed-it.jpg",
    intro:
      "Hiring a full IT team is expensive. We give you a senior, on-demand IT department for a predictable monthly fee — covering everything from desktops and printers to servers, networks, cloud and AI automation.",
    services: [
      {
        slug: "amc",
        title: "Enterprise IT Annual Maintenance Contract (AMC) & Network Support in Bangladesh",
        shortTitle: "AMC",
        subtitle: "Guaranteed SLA-backed corporate IT support, preventative hardware maintenance, multi-branch network troubleshooting, and 24/7 helpdesk.",
        description:
          "Keep your business running 24/7 with our Managed IT AMC. We provide proactive hardware maintenance, network support, and emergency IT troubleshooting for enterprises.",
        icon: "Wrench",
        heroImage: "/images/services/amc.jpg",
        overviewTitle: "Eliminate Downtime with Proactive IT Maintenance",
        overview: [
          "Focus on growing your business while we ensure your IT infrastructure never skips a beat. Reliable, scalable, and expert-led Annual Maintenance Contracts (AMC) tailored for your needs.",
          "AMC packages are available for SMEs, large enterprises, schools, hospitals and government offices, with optional 24/7 coverage.",
        ],

     whyChooseUsTitle: "Beyond Reactive Repair: The Corporate.bd Advantage", // Why chose us serction.
      whyChooseUsDescription: "Registering a company is just the beginning. Our mission is to protect your business from future legal hurdles through meticulous planning and a deep understanding of Bangladesh's Companies Act.",
      whyChooseUs: [
    { title: "SLA-Driven Reliability", description: "We don't just promise help; we guarantee it. Our Service Level Agreements (SLA) ensure your issues are prioritized and resolved within a fixed timeframe." },
    { title: "Quarterly System Health Reports", description: "Transparency is key. You receive detailed reports every quarter showing the performance and health score of your IT environment." },
    { title: "Scalable Support Models", description: "Whether you are a small startup with 10 computers or a large enterprise with multiple servers, our AMC packages scale with your growth." }
  ],
          featuresHeading: "Our Managed IT Support & Infrastructure Maintenance Framework",
        features: [
          {
            title: "Helpdesk & Ticketing",
            description:
              "Email, phone and chat helpdesk with ITIL-grade ticketing.",
            icon: "Headphones",
          },
          {
            title: "On-Site Visits",
            description:
              "Scheduled and emergency on-site visits across Dhaka and major cities.",
            icon: "MapPin",
          },
          {
            title: "Remote Support",
            description:
              "Secure remote access with TeamViewer, AnyDesk and RDP.",
            icon: "Monitor",
          },
          {
            title: "Preventive Maintenance",
            description:
              "Quarterly cleaning, patching and performance tuning.",
            icon: "ShieldCheck",
          },
          {
            title: "Asset Management",
            description:
              "Inventory of every device, license and warranty in one dashboard.",
            icon: "Database",
          },
          {
            title: "SLA-Backed Response",
            description:
              "Guaranteed response and resolution times based on severity.",
            icon: "Timer",
          },
        ],
        benefits: [
          "Predictable monthly cost — no hourly billing",
          "Senior engineers, not first-line agents",
          "Quarterly executive reports",
          "Vendor management for ISP, electricity and SaaS",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Inventory hardware, software and pain points.",
          },
          {
            step: "02",
            title: "Onboard",
            description:
              "Install monitoring agents and document SOPs.",
          },
          {
            step: "03",
            title: "Operate",
            description:
              "Daily helpdesk, monthly maintenance and quarterly reviews.",
          },
          {
            step: "04",
            title: "Improve",
            description:
              "Identify automation and modernization opportunities.",
          },
        ],
        faqs: [
          {
            question: "What is the minimum contract length?",
            answer:
              "AMC contracts are typically annual with quarterly billing options. Pilot engagements of 3 months are available.",
          },
          {
            question: "Do you cover hardware replacement?",
            answer:
              "Labor, diagnostics and configuration are included. Replacement parts are billed at cost or covered under separate hardware AMCs.",
          },
          {
            question: "Can you support multiple branches?",
            answer:
              "Yes. We have engineers in 12+ cities and partner networks across Bangladesh for nationwide coverage.",
          },
        ],
        ctaTitle: "Switch to predictable IT costs",
        ctaDescription:
          "Get a free IT health audit and customized AMC proposal.",
      },
      {
        slug: "server-administration",
        title: "24/7 Linux & Windows Server Administration & Cloud Infrastructure in Bangladesh",
        shortTitle: "Servers",
        subtitle: "Maximize server uptime and security with expert Linux (Ubuntu/RHEL) & Windows administration, CIS hardening, automated disaster backups, and cloud DevOps.",
        description:
          "Ensure 100% uptime and robust security. We provide professional Windows/Linux server administration, cloud management, and proactive monitoring for your business infrastructure.",
        icon: "Server",
        heroImage: "/images/services/server-administration.jpg",
        overviewTitle: "The Backbone of Your Digital Enterprise, Managed by Experts",
        overview: [
          "From cloud migration to on-premise hardware optimization, we ensure your servers are fast, secure, and always available. Experience seamless performance with our 24/7 server administration.",
          "We support Linux (Ubuntu, RHEL, CentOS, Debian), Windows Server, web servers (Nginx, Apache, IIS), databases (MySQL, PostgreSQL, MS SQL, MongoDB) and container platforms (Docker, Kubernetes).",
        ],

      whyChooseUsTitle: "Why Choose Our Server Administration & Management Services?", // Why chose us serction.
      whyChooseUsDescription: "To protect the digital backbone of your business, we go beyond basic maintenance by utilizing high-level engineering and real-time monitoring to ensure peak system performance. Our core mission is to eliminate downtime and provide ironclad security for your critical data.",
      whyChooseUs: [
    { title: "Proactive Monitoring and Security", description: "Our Network Operations Center (NOC) monitors system metrics in real-time to resolve issues before they impact operations, while advanced intrusion detection and vulnerability patching provide security that exceeds standard firewalls." },
    { title: "Engineering and Compliance", description: "We utilize high-level engineering to eliminate performance bottlenecks and ensure all server configurations meet international ISO standards and local data privacy regulations." },
    { title: "Disaster Readiness", description: "We implement fail-safe backup strategies, such as the 3-2-1 rule, to guarantee data integrity and enable rapid recovery in the event of a system failure." }
  ],
          featuresHeading: "End-to-End Server Administration & Managed Infrastructure Solutions",
        features: [
          {
            title: "Provisioning & Setup",
            description:
              "Install, harden and document new servers using Infrastructure-as-Code.",
            icon: "Hammer",
          },
          {
            title: "Patching & Updates",
            description:
              "Scheduled OS, kernel and application updates with rollback plans.",
            icon: "RefreshCw",
          },
          {
            title: "24/7 Monitoring",
            description:
              "Zabbix, Prometheus and Datadog with on-call escalation.",
            icon: "Activity",
          },
          {
            title: "Backup & DR",
            description:
              "Automated, encrypted, off-site backups with tested restore procedures.",
            icon: "DatabaseBackup",
          },
          {
            title: "Performance Tuning",
            description:
              "Database indexing, query optimization and capacity planning.",
            icon: "Gauge",
          },
          {
            title: "Security Hardening",
            description:
              "CIS benchmarks, fail2ban, SELinux and intrusion detection.",
            icon: "ShieldCheck",
          },
        ],
        benefits: [
          "RHCE and Microsoft-certified engineers",
          "Defined RTO and RPO for every server",
          "Monthly compliance and security reports",
          "Pay-per-server pricing with no minimums",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Inventory servers, services and current security posture.",
          },
          {
            step: "02",
            title: "Harden",
            description:
              "Apply CIS benchmarks, configure backups and monitoring.",
          },
          {
            step: "03",
            title: "Operate",
            description:
              "24/7 monitoring, incident response and routine maintenance.",
          },
          {
            step: "04",
            title: "Optimize",
            description:
              "Quarterly performance reviews and modernization roadmap.",
          },
        ],
        faqs: [
          {
            question: "Do you support both Linux and Windows servers?",
            answer:
              "Yes. We have certified specialists in Red Hat, Ubuntu, Debian, Windows Server 2016/2019/2022 and all major hypervisors.",
          },
          {
            question: "What is your incident response time?",
            answer:
              "Critical incidents are acknowledged within 15 minutes and engineers begin work within 30 minutes, 24/7.",
          },
          {
            question: "Can you migrate on-prem servers to the cloud?",
            answer:
              "Yes. Cloud migration is a core competency — we plan, execute and optimize migrations to AWS, Azure or GCP.",
          },
        ],
        ctaTitle: "Hand off your servers to the pros",
        ctaDescription:
          "Free server audit with prioritized recommendations within 5 days.",
      },
      {
        slug: "ai-automation",
        title: "Enterprise AI Automation, Custom LLM Agents & Workflow Bots in Bangladesh",
        shortTitle: "AI Automation",
        subtitle: "Automate repetitive business operations with custom RAG chatbots, Bengali NLP models, intelligent invoice extraction, and CRM automation.",
        description:
          "Custom AI agents, RAG chatbots, document automation and workflow automation using OpenAI, Anthropic and open-source models.",
        icon: "Bot",
        heroImage: "/images/services/ai-automation.jpg",
        overviewTitle: "Let AI handle the repetitive work",
        overview: [
          "Modern AI can read, write, summarize and reason — and it works tirelessly. We build production-grade AI solutions: customer support chatbots, document processing pipelines, sales agents, content generation and full workflow automation.",
          "Our team specializes in OpenAI, Anthropic, Google Gemini, Llama and open-source models, plus orchestration with LangChain, LlamaIndex and the Vercel AI SDK.",
        ],
        features: [
          {
            title: "Custom AI Chatbots",
            description:
              "Multilingual (Bangla/English) RAG chatbots trained on your knowledge base.",
            icon: "MessageSquare",
          },
          {
            title: "Document Automation",
            description:
              "Extract, classify and process invoices, contracts and forms automatically.",
            icon: "FileScan",
          },
          {
            title: "Sales & Support Agents",
            description:
              "AI agents that qualify leads, answer FAQs and escalate to humans intelligently.",
            icon: "Bot",
          },
          {
            title: "Content Generation",
            description:
              "Automated product descriptions, social posts and email campaigns.",
            icon: "PenTool",
          },
          {
            title: "Workflow Automation",
            description:
              "Trigger-based automation across Slack, email, CRM and ERP.",
            icon: "Workflow",
          },
          {
            title: "Private LLM Deployment",
            description:
              "Self-hosted Llama, Mistral and Phi for sensitive data.",
            icon: "Lock",
          },
        ],
        benefits: [
          "ROI within 90 days on most projects",
          "Bilingual Bangla & English support",
          "Data privacy with self-hosted options",
          "Continuous fine-tuning and evaluation",
        ],
        process: [
          {
            step: "01",
            title: "Discover",
            description:
              "Identify highest-impact processes for automation.",
          },
          {
            step: "02",
            title: "Prototype",
            description:
              "Build a working pilot in 2–4 weeks to prove value.",
          },
          {
            step: "03",
            title: "Deploy",
            description:
              "Production rollout with guardrails and monitoring.",
          },
          {
            step: "04",
            title: "Improve",
            description:
              "Measure outcomes and iterate on prompts and data.",
          },
        ],
        faqs: [
          {
            question: "Do you support Bangla language AI?",
            answer:
              "Yes. We've shipped multiple Bangla chatbots and document processors using GPT-4o, Claude 3.5 and fine-tuned open models.",
          },
          {
            question: "Is my data safe with AI providers?",
            answer:
              "We use enterprise APIs with no-training clauses, or deploy private models on your infrastructure for full data control.",
          },
          {
            question: "What's the typical project cost?",
            answer:
              "Pilot projects start from BDT 2 lakh. Production rollouts vary based on integrations and data volume — we share fixed quotes after discovery.",
          },
        ],
        ctaTitle: "Find your first AI win",
        ctaDescription:
          "Free AI opportunity assessment with prioritized use cases.",
      },
      {
        slug: "it-consultancy",
        title: "Strategic IT Consultancy, CTO-as-a-Service & Digital Transformation in Bangladesh",
        shortTitle: "Consultancy",
        subtitle: "Scale your organization with vendor-neutral technology audits, cloud migration roadmaps, security compliance, and fractional CTO leadership.",
        description:
          "Technology strategy, digital transformation, vendor selection, audits and CTO-as-a-Service for SMEs and enterprises.",
        icon: "Briefcase",
        heroImage: "/images/services/it-consultancy.jpg",
        overviewTitle: "Make better technology decisions",
        overview: [
          "Choosing the wrong stack, vendor or architecture costs years and crores. Our consultants — former CTOs, architects and security leaders — help you choose the right path with vendor-neutral, evidence-backed advice.",
          "Engagements range from one-day workshops to fractional CTO partnerships. Outputs include strategy documents, RFPs, vendor scorecards, architecture diagrams and quarterly board updates.",
        ],
        features: [
          {
            title: "Technology Strategy",
            description:
              "3-year tech roadmap aligned with business goals.",
            icon: "Map",
          },
          {
            title: "Digital Transformation",
            description:
              "Modernize legacy systems and processes for cloud and AI era.",
            icon: "Sparkles",
          },
          {
            title: "Vendor Selection",
            description:
              "RFP design, vendor scoring and contract negotiation.",
            icon: "ListChecks",
          },
          {
            title: "Security Audits",
            description:
              "ISO 27001, PCI-DSS and GDPR readiness assessments.",
            icon: "ShieldCheck",
          },
          {
            title: "Architecture Review",
            description:
              "Evaluate scalability, cost and resilience of existing systems.",
            icon: "Network",
          },
          {
            title: "CTO as a Service",
            description:
              "Fractional CTO leadership for startups and SMEs.",
            icon: "UserCog",
          },
        ],
        benefits: [
          "Vendor-neutral advice you can trust",
          "Senior consultants, not junior staff",
          "Fixed-fee or retainer engagement models",
          "NDAs and IP protection guaranteed",
        ],
        process: [
          {
            step: "01",
            title: "Discovery",
            description:
              "Understand business goals, current systems and constraints.",
          },
          {
            step: "02",
            title: "Diagnose",
            description:
              "Audit, benchmark and identify gaps and opportunities.",
          },
          {
            step: "03",
            title: "Recommend",
            description:
              "Deliver prioritized roadmap with cost and ROI estimates.",
          },
          {
            step: "04",
            title: "Execute",
            description:
              "Optionally lead or oversee execution with your team.",
          },
        ],
        faqs: [
          {
            question: "What's a CTO-as-a-Service engagement?",
            answer:
              "A senior CTO works 1–3 days per week with your team, owning technology strategy, hiring and architecture decisions for a fixed monthly fee.",
          },
          {
            question: "Do you implement what you recommend?",
            answer:
              "Yes, optionally. You're free to take the strategy and execute internally or with another vendor. We give vendor-neutral advice.",
          },
          {
            question: "How much does a strategy engagement cost?",
            answer:
              "Workshops start at BDT 75,000. Multi-month strategy engagements are quoted based on scope after a free consultation.",
          },
                    {
            question: "How much does a strategy engagement cost?",
            answer:
              "Workshops start at BDT 75,000. Multi-month strategy engagements are quoted based on scope after a free consultation.",
          },
        ],
        ctaTitle: "Get senior IT advice",
        ctaDescription:
          "Book a free 60-minute strategy session with a senior consultant.",
      },
    ],
  },

  // =========================================================
  // 5. SEO
  // =========================================================
  seo: {
    slug: "seo",
    title: "Enterprise SEO, Local Map Pack Domination & Digital Growth in Bangladesh",
    shortTitle: "SEO",
    subtitle: "Drive high-intent buyer traffic, secure Google #1 rankings, dominate Google Maps 3-Pack, and scale organic revenue with data-driven SEO.",
    description:
      "Local SEO, product SEO, content strategy and social media management for businesses targeting Bangladesh and global markets.",
    icon: "TrendingUp",
    heroImage: "/images/services/seo.jpg",
    intro:
      "Paid ads stop the moment you stop paying. SEO compounds month after month, building a moat that competitors can't easily catch up to. Our SEO team has helped 200+ Bangladeshi brands rank #1 for high-value keywords.",
    services: [
      {
        slug: "local-seo",
        title: "Local SEO, Google Business Profile (GBP) & Google Maps 3-Pack Optimization in Bangladesh",
        shortTitle: "Local SEO",
        subtitle: "Dominate local 'near me' searches across Dhaka, Chittagong, and major cities with verified GBP management, geo-citations, and local authority backlinks.",
        description:
          "Turn nearby searches into loyal customers. We specialize in Google Business Profile optimization, local citations, and hyper-local SEO to boost your foot traffic and sales.",
        icon: "MapPin",
        heroImage: "/images/services/local-seo.jpg",
        overviewTitle: "Turn Local Searches Into Real Foot Traffic",
        overview: [
          "When people in your area search for your services, do they find you or your competitors? Dominate Google Maps and the Local 3-Pack with our targeted Local SEO strategies.",
          "We optimize your Google Business Profile, build authoritative local citations, manage reviews and create Bangla + English content that earns top rankings city by city.",
        ],

      whyChooseUsTitle: "The Corporate.bd Local Advantage", // Why chose us serction.
      whyChooseUsDescription: "To protect the digital backbone of your business, we go beyond basic maintenance by utilizing high-level engineering and real-time monitoring to ensure peak system performance. Our core mission is to eliminate downtime and provide ironclad security for your critical data.",
      whyChooseUs: [
    { title: "Competitor Spam Fighting", description: "We actively monitor and report fake competitor listings on Google Maps that are unfairly pushing your business down." },
    { title: "Data-Driven Geo-Targeting", description: "We analyze local search volumes down to specific neighborhoods and thanas (e.g., Gulshan, Banani, Dhanmondi) to capture the most relevant traffic." },
    { title: "Omnichannel Local Presence", description: "We don't just stop at Google. We optimize your presence on Apple Maps, Bing Places, and local social media check-ins." }
  ],
          featuresHeading: "Hyper-Local SEO Strategies That Drive Sales",

        features: [
          {
            title: "Google Business Profile",
            description:
              "Setup, verification, optimization and weekly post management.",
            icon: "MapPin",
          },
          {
            title: "Local Citations",
            description:
              "Listings on 50+ Bangladeshi and global business directories.",
            icon: "ListOrdered",
          },
          {
            title: "Review Management",
            description:
              "Reputation strategy, review generation and intelligent responses.",
            icon: "Star",
          },
          {
            title: "Local Keyword Research",
            description:
              "Targeted Bangla and English keywords for every service area.",
            icon: "Search",
          },
          {
            title: "Location Pages",
            description:
              "Dedicated pages per city/area with unique content and schema.",
            icon: "FileText",
          },
          {
            title: "Local Backlinks",
            description:
              "Earned mentions from Bangladeshi news, blogs and partners.",
            icon: "Link",
          },
        ],
        benefits: [
          "Rank in Google Map Pack and \"near me\" searches",
          "Bangla + English content that converts locally",
          "Monthly transparent reporting",
          "More phone calls and direction requests",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Local visibility audit and competitor benchmarking.",
          },
          {
            step: "02",
            title: "Optimize",
            description:
              "Profile, citations, on-page and schema optimization.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Reviews, local content and authoritative backlinks.",
          },
          {
            step: "04",
            title: "Report",
            description:
              "Monthly reports on rankings, traffic and conversions.",
          },
        ],
        faqs: [
          {
            question: "How long until I see results?",
            answer:
              "Most clients see Map Pack improvements within 60–90 days. Significant traffic and lead growth typically arrives in 4–6 months.",
          },
          {
            question: "Do you handle Bangla SEO?",
            answer:
              "Yes. Bangla content, transliteration, schema and on-page SEO is one of our core specialties.",
          },
          {
            question: "Will you guarantee #1 rankings?",
            answer:
              "No reputable agency can guarantee specific rankings. We commit to KPIs like rankings improvements, traffic growth and conversions — and we hit them.",
          },
        ],
        ctaTitle: "Win local search in your city",
        ctaDescription:
          "Free local SEO audit with prioritized 90-day action plan.",
      },
      {
        slug: "product-seo",
        title: "E-Commerce Product SEO, Category Hierarchy & Conversion Rate Optimization in Bangladesh",
        shortTitle: "Product SEO",
        subtitle: "Outrank competitors for high-intent purchase searches with structured JSON-LD schema, technical Core Web Vitals fixes, and category keyword mapping.",
        description:
          "Turn your product pages into 24/7 sales engines. We specialize in E-commerce SEO, product schema, and conversion-focused optimization to skyrocket your online sales.",
        icon: "Tag",
        heroImage: "/images/services/product-seo.jpg",
        overviewTitle: "Turn Your Product Pages Into 24/7 Sales Engines",
        overview: [
          "In the e-commerce world, ranking on the second page of Google means zero sales. At Corporate.bd, we don’t just drive random traffic; we drive buyers.",
          "We optimize your category architectures, product descriptions, and technical back-end to align with high-intent search queries, ensuring your products appear exactly when customers have their credit cards ready.",
        ],
        
      whyChooseUsTitle: "Why Choose Us For SEO Services?", // Why chose us serction.
      whyChooseUsDescription: "To protect the digital backbone of your business, we go beyond basic maintenance by utilizing high-level engineering and real-time monitoring to ensure peak system performance. Our core mission is to eliminate downtime and provide ironclad security for your critical data.",
      whyChooseUs: [
    { title: "Platform-Specific Expertise", description: "Whether you are on WooCommerce, Shopify, Magento, or a custom build, we know the specific SEO loopholes and advantages of your platform." },
    { title: "Conversion Rate Focus (CRO)", description: "Getting traffic is only half the battle. We analyze user behavior to suggest layout and copy improvements that turn visitors into paying customers." },
    { title: "Out-of-Stock Management Strategy", description: "We ensure you don't lose SEO juice or frustrate customers when products go out of stock, using smart redirects and waitlist strategies instead of dead 404 pages." }
  ],
          featuresHeading: "Strategic Product SEO Framework to Drive Organic Sales",
        features: [
          {
            title: "Keyword Strategy",
            description:
              "Long-tail, transactional and modifier-rich keyword maps.",
            icon: "Search",
          },
          {
            title: "Technical SEO",
            description:
              "Core Web Vitals, indexation, canonicals, hreflang and sitemaps.",
            icon: "Cog",
          },
          {
            title: "Schema Markup",
            description:
              "Product, Offer, Review and BreadcrumbList JSON-LD.",
            icon: "Code",
          },
          {
            title: "On-Page Optimization",
            description:
              "Title tags, meta, H1-H6, alt text and internal linking.",
            icon: "FileEdit",
          },
          {
            title: "Content Expansion",
            description:
              "Buyer guides, comparisons and category content that rank.",
            icon: "BookOpen",
          },
          {
            title: "Link Building",
            description:
              "Editorial backlinks from relevant publishers and bloggers.",
            icon: "Link",
          },
        ],
        benefits: [
          "More qualified, ready-to-buy traffic",
          "Higher-than-paid-search ROAS over time",
          "Detailed monthly reporting on revenue impact",
          "Schema-rich snippets in Google results",
        ],
        process: [
          {
            step: "01",
            title: "Research",
            description:
              "Map keywords to product pages and search intent.",
          },
          {
            step: "02",
            title: "Optimize",
            description:
              "Implement technical, on-page and schema improvements.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Earn editorial backlinks and expand content footprint.",
          },
          {
            step: "04",
            title: "Measure",
            description:
              "Attribute rankings and traffic to revenue with analytics.",
          },
        ],
        faqs: [
          {
            question: "Will SEO replace our paid ads?",
            answer:
              "Often it can replace 60–80% of paid spend over 12 months while keeping branded ads for capture. We model the trade-off in your audit.",
          },
          {
            question: "How is product SEO different from regular SEO?",
            answer:
              "Product SEO focuses on transactional keywords, faceted navigation, schema and conversion design — not just blog content.",
          },
          {
            question: "Do you optimize for Daraz and other marketplaces?",
            answer:
              "Yes. Marketplace SEO (Daraz, Amazon, Pickaboo) is a separate specialty we offer with platform-specific tactics.",
          },
        ],
        ctaTitle: "Turn searches into sales",
        ctaDescription:
          "Free product SEO audit and revenue projection in 7 days.",
      },
      {
        slug: "content-strategy",
        title: "Topical Authority, Content Strategy & SEO Copywriting in Bangladesh",
        shortTitle: "Content Strategy",
        subtitle: "Establish industry leadership with semantic topic cluster modeling, in-depth bilingual pillar articles, and conversion-focused copywriting.",
        description:
          "Topical authority, content calendars, blog production and content distribution for brands serious about organic growth.",
        icon: "BookOpen",
        heroImage: "/images/services/content-strategy.jpg",
        overviewTitle: "Become the answer your customers are looking for",
        overview: [
          "Great content earns rankings, builds trust and shortens sales cycles. Our content team designs topical authority maps, builds editorial calendars and produces high-quality articles, guides, case studies and videos that perform.",
          "Every piece is research-backed, originally written (no AI fluff), edited by senior editors and optimized for search and human readability.",
        ],
        features: [
          {
            title: "Topical Authority Maps",
            description:
              "Cluster-and-pillar architecture that signals expertise to Google.",
            icon: "Network",
          },
          {
            title: "Editorial Calendar",
            description:
              "Quarterly calendar with briefs, owners and deadlines.",
            icon: "Calendar",
          },
          {
            title: "Long-Form Articles",
            description:
              "1,500–4,000 word pillar guides written by domain experts.",
            icon: "FileText",
          },
          {
            title: "Bangla Content",
            description:
              "Native Bangla writers and editors for local audiences.",
            icon: "Languages",
          },
          {
            title: "Case Studies",
            description:
              "Customer-driven stories that convert mid-funnel readers.",
            icon: "Trophy",
          },
          {
            title: "Distribution",
            description:
              "Email, social, syndication and PR amplification.",
            icon: "Send",
          },
        ],
        benefits: [
          "Original content, no AI-generated filler",
          "Senior editors and SEO strategists on every piece",
          "Bangla and English production",
          "Monthly performance and topic gap analysis",
        ],
        process: [
          {
            step: "01",
            title: "Strategy",
            description:
              "Topical authority map and 12-month content roadmap.",
          },
          {
            step: "02",
            title: "Brief",
            description:
              "Detailed briefs with target keywords, intent and outline.",
          },
          {
            step: "03",
            title: "Produce",
            description:
              "Writing, editing, design and approval workflow.",
          },
          {
            step: "04",
            title: "Distribute",
            description:
              "Publish, distribute and measure performance.",
          },
        ],
        faqs: [
          {
            question: "Who writes the content?",
            answer:
              "Vetted writers with domain expertise, edited by our senior editorial team. We share writer profiles before assignment.",
          },
          {
            question: "Do you use AI to generate articles?",
            answer:
              "We use AI for research and outlining only. Final content is human-written and human-edited for quality and accuracy.",
          },
          {
            question: "How many articles per month do I need?",
            answer:
              "Most clients start with 4–8 long-form pieces per month. Volume scales with the size of your topical authority gap.",
          },
        ],
        ctaTitle: "Start a content engine that scales",
        ctaDescription:
          "Free topical authority audit and 90-day content plan.",
      },
      {
        slug: "social-media-management",
        title: "Full-Funnel Social Media Management & Performance Marketing in Bangladesh",
        shortTitle: "Social Media",
        subtitle: "Scale your brand with strategic omnichannel content calendars, short-form video production, community moderation, and high-ROI Meta & TikTok ads.",
        description:
          "Elevate your brand’s digital presence. We provide end-to-end social media management, creative content strategy, and data-driven ad campaigns to grow your community and ROI.",
        icon: "Share2",
        heroImage: "/images/services/social-media.jpg",
        overviewTitle: "Transform Your Social Presence into a Revenue Engine",
        overview: [
          "Beyond likes and shares, we focus on building meaningful connections. From thumb-stopping visuals to strategic community management, we handle your social media while you grow your business.",
          "We work across Facebook, Instagram, LinkedIn, YouTube and TikTok with monthly content calendars, on-brand design, video production and reporting that ties back to business outcomes.",
        ],
        
      whyChooseUsTitle: "Data-Driven Creativity for Maximum Impact", // Why chose us serction.
      whyChooseUsDescription: "To protect the digital backbone of your business, we go beyond basic maintenance by utilizing high-level engineering and real-time monitoring to ensure peak system performance. Our core mission is to eliminate downtime and provide ironclad security for your critical data.",
      whyChooseUs: [
    { title: "Competitor Benchmarking", description: "We don't work in a vacuum. We analyze your top competitors to find gaps and opportunities where your brand can win." },
    { title: "Monthly Performance Insights", description: "No more guessing. You receive detailed reports showing growth, engagement rates, and the actual business impact of our activities." },
    { title: "Agile Content Calendar", description: "We stay ahead of trends. Our flexible scheduling ensures your brand participates in viral moments while maintaining a consistent long-term message." }
  ],
          featuresHeading: "Strategic Social Media Management to Turn Engagement into Leads",


        features: [
          {
            title: "Strategy & Calendar",
            description:
              "Quarterly strategy, monthly calendar and weekly publishing.",
            icon: "Calendar",
          },
          {
            title: "Creative Production",
            description:
              "Static design, motion graphics and short-form video editing.",
            icon: "Film",
          },
          {
            title: "Community Management",
            description:
              "DM, comment and review responses in Bangla and English.",
            icon: "MessagesSquare",
          },
          {
            title: "Paid Social",
            description:
              "Facebook, Instagram, LinkedIn and TikTok ads with creative testing.",
            icon: "Target",
          },
          {
            title: "Influencer Marketing",
            description:
              "Curated influencer campaigns from nano to macro tiers.",
            icon: "Users",
          },
          {
            title: "Reporting",
            description:
              "Monthly dashboards tying engagement to leads and sales.",
            icon: "BarChart3",
          },
        ],
        benefits: [
          "Always-on creative team — no scrambling",
          "Bangla and English copy that resonates",
          "Paid + organic working together",
          "Transparent reporting tied to business KPIs",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Brand, audience and competitor audit on each platform.",
          },
          {
            step: "02",
            title: "Plan",
            description:
              "Pillars, calendar and creative direction.",
          },
          {
            step: "03",
            title: "Produce",
            description:
              "Daily/weekly creative, scheduling and engagement.",
          },
          {
            step: "04",
            title: "Optimize",
            description:
              "Test, learn and double down on what works.",
          },
        ],
        faqs: [
          {
            question: "Do you create video content?",
            answer:
              "Yes. We produce short-form video for Reels, TikTok and Shorts plus long-form YouTube content with our in-house team.",
          },
          {
            question: "Can you manage paid ads too?",
            answer:
              "Yes. Most clients combine organic management with paid amplification. We're certified Meta and TikTok partners.",
          },
          {
            question: "What platforms do you cover?",
            answer:
              "Facebook, Instagram, LinkedIn, YouTube, TikTok and X. We can advise on regional platforms based on your audience.",
          },
        ],
        ctaTitle: "Build a social presence that sells",
        ctaDescription:
          "Get a free social audit and 90-day creative roadmap.",
      },
    ],
  },
}

export const SERVICE_CATEGORY_SLUGS = Object.keys(SERVICE_CATEGORIES)

export function getCategory(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES[slug]
}

export function getService(
  categorySlug: string,
  serviceSlug: string
): { service: Service; category: ServiceCategory } | undefined {
  const category = SERVICE_CATEGORIES[categorySlug]
  if (!category) return undefined
  const service = category.services.find((s: Service) => s.slug === serviceSlug)
  if (!service) return undefined
  return { service, category }
}
