"use client"

import { useState } from "react"
import {
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Clock,
  Building2,
  FileText,
  Laptop,
  Scale,
  Compass,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SITE_CONFIG } from "@/lib/site-config"

const INQUIRY_TYPES = [
  { id: "web-software", label: "Web & Software Dev", icon: Laptop },
  { id: "cloud-it", label: "Cloud & Managed IT", icon: Building2 },
  { id: "legal-tax", label: "Legal, RJSC & Tax", icon: Scale },
  { id: "dhaka-tour", label: "Dhaka Tour & VIP Transit", icon: Compass },
  { id: "seo-digital", label: "SEO & Digital Growth", icon: Sparkles },
  { id: "general", label: "General Enterprise Inquiry", icon: Headphones },
]

const BUDGET_RANGES = [
  { id: "under-1l", label: "Under 1 Lakh BDT" },
  { id: "1-5l", label: "1 – 5 Lakh BDT" },
  { id: "5-15l", label: "5 – 15 Lakh BDT" },
  { id: "15l-plus", label: "15+ Lakh BDT" },
  { id: "flexible", label: "Flexible / Hourly" },
]

const TIMELINE_OPTIONS = [
  { id: "urgent", label: "Urgent (< 1 Week)" },
  { id: "1-month", label: "Within 1 Month" },
  { id: "flexible", label: "Planning / Flexible" },
]

export function ContactFormInteractive() {
  const [selectedType, setSelectedType] = useState("web-software")
  const [selectedBudget, setSelectedBudget] = useState("1-5l")
  const [selectedTimeline, setSelectedTimeline] = useState("1-month")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  const handleWhatsAppDirect = () => {
    const serviceName =
      INQUIRY_TYPES.find((t) => t.id === selectedType)?.label || "Services"
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.name}! I am interested in *${serviceName}*.\nName: ${formData.name || "Client"}\nCompany: ${formData.company || "N/A"}\nBudget: ${selectedBudget}\nTimeline: ${selectedTimeline}\nMessage: ${formData.message || "I would like to request a consultation."}`
    )
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=${text}`,
      "_blank"
    )
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 md:p-12 text-center space-y-6 animate-in fade-in duration-500">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            Thank You, {formData.name || "Valued Client"}!
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your project inquiry has been received by our lead consultant. You will receive a substantive proposal and direct follow-up within <strong>1 business hour</strong>.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="rounded-full"
          >
            Send Another Inquiry
          </Button>
          <Button
            onClick={handleWhatsAppDirect}
            className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Connect on WhatsApp Now</span>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm relative overflow-hidden">
      {/* Background Accent Pill */}
      <div
        aria-hidden
        className="absolute top-0 right-0 -mt-8 -mr-8 h-40 w-40 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Project Discovery & Consultation
          </span>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-bold text-foreground">
            Send an Enterprise Request
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Consultants Online • Avg Reply &lt; 15 mins</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-7">
        {/* Category Selector */}
        <div className="space-y-3">
          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            1. Select Area of Interest *
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {INQUIRY_TYPES.map((type) => {
              const Icon = type.icon
              const isSelected = selectedType === type.id
              return (
                <button
                  type="button"
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground shadow-xs"
                      : "border-border bg-muted/40 hover:bg-muted text-foreground"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                  <span className="truncate">{type.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Contact Info Fields */}
        <div className="space-y-3">
          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            2. Your Information *
          </Label>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="contact-name" className="text-xs">Full Name *</Label>
              <Input
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Md. Ashraful Islam"
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-company" className="text-xs">Company / Organization</Label>
              <Input
                id="contact-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Nexus Tech Ltd."
                className="bg-background"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="contact-email" className="text-xs">Business Email *</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-phone" className="text-xs">Phone / WhatsApp *</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 17XX-XXXXXX"
                required
                className="bg-background"
              />
            </div>
          </div>
        </div>

        {/* Budget & Timeline Selectors */}
        <div className="grid gap-6 sm:grid-cols-2 pt-1">
          <div className="space-y-2.5">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Estimated Budget
            </Label>
            <div className="flex flex-wrap gap-2">
              {BUDGET_RANGES.map((b) => (
                <button
                  type="button"
                  key={b.id}
                  onClick={() => setSelectedBudget(b.id)}
                  className={`text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all ${
                    selectedBudget === b.id
                      ? "border-primary bg-primary/10 text-primary font-bold"
                      : "border-border bg-background hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Expected Timeline
            </Label>
            <div className="flex flex-wrap gap-2">
              {TIMELINE_OPTIONS.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setSelectedTimeline(t.id)}
                  className={`text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all ${
                    selectedTimeline === t.id
                      ? "border-primary bg-primary/10 text-primary font-bold"
                      : "border-border bg-background hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            3. Project Details & Goals *
          </Label>
          <Textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your project requirements, goals, current challenges, or specific questions..."
            required
            className="bg-background resize-y"
          />
        </div>

        {/* Trust Badges & Guarantees */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground bg-muted/50 p-3.5 rounded-xl border border-border">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>Guaranteed 1-Hour Reply</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            <span>Non-Disclosure Agreement (NDA) Protected</span>
          </span>
          <span className="flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-accent shrink-0" />
            <span>Free 30-Min Discovery Call</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="gap-2 rounded-xl flex-1 font-semibold"
          >
            <Send className="h-4 w-4" />
            <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Project Inquiry"}</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleWhatsAppDirect}
            className="gap-2 rounded-xl border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 font-semibold"
          >
            <MessageSquare className="h-4 w-4 text-emerald-500" />
            <span>Instant WhatsApp Chat</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
