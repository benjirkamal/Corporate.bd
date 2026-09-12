"use client"

import { useState } from "react"
import {
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Phone,
  Mail,
  User,
  HelpCircle,
  Clock,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SITE_CONFIG } from "@/lib/site-config"

const SERVICE_OPTIONS = [
  "Web & Software Development",
  "Cloud Hosting & IT Services",
  "Legal, RJSC & Trademark",
  "Dhaka Guided City Tour",
  "SEO & Digital Marketing",
  "General Inquiry",
]

export function ContactFormInteractive() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.name}!\nName: ${formData.name || "Client"}\nService: ${formData.service}\nPhone: ${formData.phone || "N/A"}\nMessage: ${formData.message || "I would like to request more information."}`
    )
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=${text}`,
      "_blank"
    )
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 md:p-12 text-center space-y-5 animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Thank You, {formData.name || "Valued Client"}!
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your message has been received successfully. Our team will get in touch with you within <strong>1 business hour</strong>.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: "",
                email: "",
                phone: "",
                service: SERVICE_OPTIONS[0],
                message: "",
              })
            }}
            variant="outline"
            className="rounded-xl"
          >
            Send Another Message
          </Button>
          <Button
            onClick={handleWhatsAppDirect}
            className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-9 shadow-sm relative">
      {/* Header */}
      <div className="space-y-1.5 pb-6 border-b border-border/60">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Get in Touch</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
          Send Us a Message
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground">
          Fill in your details below and we will get back to you promptly.
        </p>
      </div>

      {/* Simple Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Name & Email Row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="contact-name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Your Name *</span>
            </Label>
            <Input
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Md. Ashraful Islam"
              required
              className="h-11 rounded-xl bg-background"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-email" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Email Address *</span>
            </Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
              className="h-11 rounded-xl bg-background"
            />
          </div>
        </div>

        {/* Phone & Service Row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="contact-phone" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Phone / WhatsApp *</span>
            </Label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+880 17XX-XXXXXX"
              required
              className="h-11 rounded-xl bg-background"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contact-service" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Service of Interest</span>
            </Label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="contact-message" className="text-xs font-semibold text-foreground">
            Your Message *
          </Label>
          <Textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us briefly about your requirements or inquiry..."
            required
            className="rounded-xl bg-background resize-y"
          />
        </div>

        {/* Trust Guarantees */}
        <div className="flex flex-wrap items-center justify-between gap-2 py-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-emerald-500" />
            <span>Guaranteed 1-hour response</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>100% confidential & privacy protected</span>
          </span>
        </div>

        {/* Submit Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="flex-1 h-11 rounded-xl font-semibold gap-2 shadow-sm"
          >
            <Send className="h-4 w-4" />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleWhatsAppDirect}
            className="h-11 rounded-xl border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 font-semibold gap-2"
          >
            <MessageSquare className="h-4 w-4 text-emerald-500" />
            <span>WhatsApp</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

