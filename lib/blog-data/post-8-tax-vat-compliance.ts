import { BlogPostDetail } from "./types"

export const post8TaxVatCompliance: BlogPostDetail = {
  id: "8",
  slug: "trade-license-and-vat-filing-requirements",
  title: "Corporate Tax, Trade License Renewals, and Monthly VAT Filing in Bangladesh",
  excerpt:
    "An indispensable legal compliance handbook for business owners and CFOs in Bangladesh. Navigate the annual municipal trade licensing cycle, monthly VAT Form 9.1 filings, corporate income tax deadlines, and NBR withholding audits.",
  category: "business-legal",
  categoryLabel: "Legal & Corporate",
  date: "January 20, 2026",
  isoDate: "2026-01-20T10:00:00+06:00",
  readTime: "10 min read",
  image: "/images/blog/tax-vat.jpg",
  imageAlt: "Corporate Tax and VAT filing in Bangladesh compliance guide",
  author: {
    name: "Advocate Nazmul Huda",
    role: "Senior Corporate Legal Counsel, Corporate.bd",
  },
  seoKeywords: [
    "trade license renewal Dhaka",
    "VAT return filing Bangladesh 9.1",
    "corporate income tax return NBR",
    "tax compliance Dhaka",
    "DNCC DSCC trade license fees",
    "withholding tax TDS Bangladesh",
    "VAT audit preparation NBR",
    "annual corporate compliance checklist",
  ],
  metaDescription:
    "Stay 100% compliant with NBR and City Corporations in Bangladesh. Learn about the annual trade license renewal cycle, monthly VAT 9.1 returns, corporate income tax deductions, and avoiding punitive legal penalties.",
  keyTakeaways: [
    "Municipal Trade Licenses must be renewed annually before September 30 to prevent municipal late surcharges and sealing of premises.",
    "VAT Form 9.1 must be submitted by the 15th of every month through the e-VAT portal, even if zero commercial transactions occurred.",
    "Non-compliance with monthly VAT filings incurs an automatic statutory fine of BDT 10,000 per missing return.",
    "Corporate income tax returns must be accompanied by audited financial statements certified by an ICAB-registered Chartered Accountancy firm.",
  ],
  tableOfContents: [
    { id: "corporate-compliance-calendar", title: "The Annual Corporate Compliance Calendar in Bangladesh" },
    { id: "trade-license-renewals", title: "Municipal Trade License: Categorization, Fees & Renewal Process" },
    { id: "vat-act-fundamentals", title: "The VAT & Supplementary Duty Act 2012: Core Foundations" },
    { id: "monthly-vat-91-workflow", title: "Filing Monthly VAT Return Form 9.1 via e-VAT Portal" },
    { id: "tds-vds-deductions", title: "Tax & VAT Deducted at Source (TDS & VDS) Obligations" },
    { id: "corporate-income-tax", title: "Corporate Income Tax (CIT) Rates, Audits & Tax Day Filing" },
    { id: "penalties-enforcement", title: "Statutory Penalties, Bank Account Freezes & Legal Recourse" },
  ],
  sections: [
    {
      id: "corporate-compliance-calendar",
      heading: "The Annual Corporate Compliance Calendar in Bangladesh",
      paragraphs: [
        "Operating an incorporated business or commercial entity in Bangladesh requires continuous adherence to statutory calendars administered by three distinct regulatory pillars: the City Corporations (governing Trade Licenses), the National Board of Revenue (governing Direct Income Tax and Indirect VAT), and the Registrar of Joint Stock Companies and Firms (governing Corporate Governance).",
        "Many promising ventures suffer severe financial disruptions—including frozen bank accounts, import license cancellations, and municipal penalty notices—not because of commercial insolvency, but due to basic administrative negligence surrounding statutory compliance deadlines. Maintaining an organized, proactive compliance schedule is essential for protecting your corporate veil and ensuring uninterrupted banking operations.",
        "Under current fiscal regulations, compliance operates across three overlapping rhythms: monthly indirect tax filings (VAT 9.1), quarterly withholding tax statements, and annual commercial renewals (Trade License, Tax Day income returns, and RJSC Annual General Meetings).",
      ],
      highlightBox: {
        type: "tip",
        text: "Designating a professional corporate legal and tax advisory retainer like Corporate.bd guarantees that all municipal deadlines, VAT filings, and withholding returns are lodged ahead of statutory deadlines with zero late penalties.",
      },
    },
    {
      id: "trade-license-renewals",
      heading: "Municipal Trade License: Categorization, Fees & Renewal Process",
      paragraphs: [
        "Issued under the City Corporation / Municipal Taxation Rules, a Trade License is the statutory authorization permitting a business to operate from a designated physical jurisdiction in Bangladesh. In metropolitan Dhaka, licensing is divided between Dhaka North City Corporation (DNCC) and Dhaka South City Corporation (DSCC).",
        "Every Trade License corresponds to a specific fiscal year (July 1 to June 30). The statutory renewal window commences on July 1 and officially closes on September 30. Renewals submitted after September 30 attract progressive monthly surcharge penalties and may subject premises to surprise enforcement raids by municipal executive magistrates.",
        "To renew a Trade License online through the DNCC/DSCC e-Trade License portal, businesses must submit: (1) Copy of previous year's trade license book, (2) Current holding tax or commercial lease agreement, (3) Clean utility bill receipt, (4) Corporate e-TIN, and (5) Prescribed municipal fee challan calculated based on capital investment and business classification.",
      ],
    },
    {
      id: "vat-act-fundamentals",
      heading: "The VAT & Supplementary Duty Act 2012: Core Foundations",
      paragraphs: [
        "The Value Added Tax and Supplementary Duty Act, 2012 (effective since July 2019) transformed indirect taxation in Bangladesh into a modern, transaction-level digital ecosystem. Every business entity with an annual turnover exceeding BDT 50 Lakh (or operating in specified mandatory registration sectors like consulting, IT, restaurants, or manufacturing) must hold an active 9-digit Business Identification Number (BIN/VAT Certificate).",
        "The standard VAT rate is 15%, with reduced tranches of 5%, 7.5%, and 10% applicable to specific prioritized goods and services. A central mechanic of the VAT Act is the Input Tax Credit (ITC) rebate system: businesses can claim rebates on VAT paid on purchases and raw materials, provided valid Mushak-6.3 tax invoices are issued and maintained in statutory purchase ledgers (Mushak-6.1).",
      ],
    },
    {
      id: "monthly-vat-91-workflow",
      heading: "Filing Monthly VAT Return Form 9.1 via e-VAT Portal",
      paragraphs: [
        "Under Section 64 of the VAT Act, every VAT-registered entity is legally obligated to submit a Monthly VAT Return (Form Mushak-9.1) by the 15th day of the succeeding month through the centralized National Board of Revenue portal (vat.gov.bd).",
        "Crucially, even if a company conducted zero sales or commercial activities during a calendar month, submitting a 'Nil Return' is mandatory. Filing a Nil Return informs the tax authority that the entity is active but had no transactions. Failure to submit Form 9.1 by the 15th triggers an automatic, non-negotiable statutory fine of BDT 10,000 per month of default, alongside compounding monthly interest on any outstanding VAT payable.",
      ],
      highlightBox: {
        type: "warning",
        text: "Statutory Warning: If a company defaults on three consecutive monthly VAT returns, the NBR's automated system automatically suspends the Business Identification Number (BIN). A locked BIN prevents the company from clearing customs imports, participating in tenders, or releasing commercial payments from scheduled banks.",
      },
    },
    {
      id: "tds-vds-deductions",
      heading: "Tax & VAT Deducted at Source (TDS & VDS) Obligations",
      paragraphs: [
        "Corporate entities in Bangladesh act as statutory withholding agents on behalf of the National Board of Revenue. When procuring services, renting commercial office space, or paying suppliers, companies are legally mandated to deduct Tax at Source (TDS) under the Income Tax Act 2023 and VAT Deducted at Source (VDS) under the VDS Rules.",
        "The withholding entity must deposit the deducted tax into the government treasury via e-Challan within the prescribed statutory timeframe and issue an official VDS Certificate (Mushak-6.6) to the supplier. Failure to deduct or deposit TDS/VDS renders the entire underlying corporate expense disallowed during annual income tax assessments, resulting in substantial retroactive tax liabilities and penalties.",
      ],
    },
    {
      id: "corporate-income-tax",
      heading: "Corporate Income Tax (CIT) Rates, Audits & Tax Day Filing",
      paragraphs: [
        "Under the Finance Act and Income Tax Act 2023, standard corporate income tax rates for non-publicly traded private limited companies stand at 27.5%. However, companies that fulfill specific compliance conditions—namely conducting all corporate receipts and expense disbursements above statutory thresholds through formal banking channels—benefit from a reduced corporate tax rate of 22.5%.",
        "All Private Limited Companies must engage an independent Chartered Accountancy firm registered with the Institute of Chartered Accountants of Bangladesh (ICAB) to perform a comprehensive annual statutory financial audit. The audited financial statements—incorporating the Balance Sheet, Profit & Loss Statement, and Cash Flow Statement bearing a valid Document Verification Code (DVC)—must be appended to Corporate Tax Return Form 36 and lodged before Tax Day (the fifteenth day of the seventh month following the end of the fiscal income year).",
      ],
    },
    {
      id: "penalties-enforcement",
      heading: "Statutory Penalties, Bank Account Freezes & Legal Recourse",
      paragraphs: [
        "The National Board of Revenue and municipal corporations hold sweeping statutory enforcement powers to recover unpaid tax and licensing dues. Section 214 of the Income Tax Act and the Public Demands Recovery Act empower tax authorities to issue garnishee orders directly freezing commercial bank accounts, confiscate commercial inventory, and restrict international travel of defaulting company directors.",
        "If your company receives a Demand Notice, Show Cause Notice, or Audit Assessment Order from the NBR or City Corporation, immediate legal representation is vital. Corporate.bd's senior tax attorneys represent corporations before the Taxes Appellate Tribunal, National Board of Revenue, and High Court Division to achieve structured settlements, penalty waivers, and stay orders against unjustified assessments.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the penalty if I miss the September 30 trade license renewal deadline?",
      answer:
        "City Corporations impose a monthly surcharge penalty (typically 10% to 25% of the base fee) for late renewals. If unrenewed for over six months, municipal magistrates can issue sealing notices against the business premises.",
    },
    {
      question: "Can VAT return Form 9.1 be submitted after the 15th of the month?",
      answer:
        "The e-VAT portal allows late submissions, but automatically levies a BDT 10,000 penalty and 1% monthly interest on unpaid taxes. You can also apply for a formal time extension with your Circle Revenue Officer before the deadline.",
    },
    {
      question: "What is a DVC and why is it mandatory for corporate tax returns in Bangladesh?",
      answer:
        "DVC stands for Document Verification Code, an automated cryptographic code issued by the Institute of Chartered Accountants of Bangladesh (ICAB) to verify that an audit report was genuinely conducted by a licensed Chartered Accountant.",
    },
    {
      question: "Do software and IT companies enjoy corporate income tax exemptions in Bangladesh?",
      answer:
        "Historically, designated IT and ITES sectors enjoyed tax holidays. Under recent Finance Acts, qualifying IT firms must maintain active BASIS membership, transparent banking records, and file timely annual returns to claim applicable statutory tax exemptions.",
    },
    {
      question: "How does Corporate.bd assist businesses with annual compliance?",
      answer:
        "We offer comprehensive retainer packages covering trade license renewals, monthly VAT 9.1 preparation, quarterly withholding returns, annual CA audits, and corporate income tax return filing.",
    },
  ],
  relatedService: {
    title: "Hassle-Free Corporate Legal & Tax Retainer",
    description:
      "Retain our corporate attorneys and chartered tax consultants for automated monthly VAT filings, trade license renewals, and NBR tax compliance.",
    href: "/legal-compliance/tax-vat-advisory",
    cta: "Consult Tax Advisors",
  },
}
