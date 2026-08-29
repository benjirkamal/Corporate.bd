"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ArrowRight, Calculator, Clock, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceOption {
  id: string
  name: string
  category: string
  days: number
  description: string
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "domain", name: ".BD / Corporate Domain & Email", category: "Infrastructure", days: 2, description: "Official .bd acquisition, NID verification & Google Workspace setup" },
  { id: "rjsc", name: "RJSC Company Incorporation", category: "Legal & Legal", days: 7, description: "Name clearance, MOA/AOA drafting, TIN & Trade License" },
  { id: "webapp", name: "Modern Web App / E-Commerce", category: "Development", days: 14, description: "Next.js frontend, bKash/Nagad gateway, product catalog & SEO base" },
  { id: "it", name: "Managed IT & Cloud Backups", category: "Managed IT", days: 3, description: "24/7 SLA monitoring, cloud backup automation & office IT setup" },
  { id: "seo", name: "Local SEO & Core Web Vitals", category: "SEO Growth", days: 10, description: "Google Business Profile, speed optimization & top ranking strategy" },
  { id: "btrc", name: "BTRC / ISP License Compliance", category: "Legal & Legal", days: 12, description: "Regulatory filings, license application & compliance documentation" },
]

export function SolutionEstimator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["domain", "webapp"])

  const toggleOption = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id))
      }
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const selectedServices = SERVICE_OPTIONS.filter((s) => selectedIds.includes(s.id))
  const estimatedDays = Math.max(...selectedServices.map((s) => s.days), 5) + Math.min(selectedServices.length * 2, 8)

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
        <Calculator className="h-4 w-4" />
        Interactive Solution Planner
      </div>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
        Build Your Custom Package & Get Instant Timeline
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Select the services your business requires to estimate project execution time and recommended engagement model.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_OPTIONS.map((opt) => {
          const isSelected = selectedIds.includes(opt.id)
          return (
            <button
              key={opt.id}
              onClick={() => toggleOption(opt.id)}
              className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 relative ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/30"
                  : "border-border bg-background hover:border-primary/40 hover:bg-muted/30"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{opt.category}</span>
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                    isSelected ? "bg-primary text-primary-foreground" : "border border-muted-foreground/30"
                  }`}
                >
                  {isSelected && <Check className="h-3.5 w-3.5" />}
                </div>
              </div>
              <span className="font-semibold text-sm sm:text-base text-foreground mt-2">{opt.name}</span>
              <span className="text-xs text-muted-foreground mt-1 line-clamp-2">{opt.description}</span>
            </button>
          )
        })}
      </div>

      {/* Summary Box */}
      <div className="mt-8 rounded-2xl bg-muted/60 border border-border p-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
              Estimated Delivery Time
            </div>
            <div className="text-xl sm:text-2xl font-bold font-serif text-foreground">
              {estimatedDays}–{estimatedDays + 5} Working Days
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Includes {selectedServices.length} integrated service module{selectedServices.length > 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={`/contact?services=${selectedIds.join(",")}`}>
              Request Tailored Proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
