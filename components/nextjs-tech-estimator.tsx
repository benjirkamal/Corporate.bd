"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ArrowRight, Code2, Zap, Shield, Cpu, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TechFeature {
  id: string
  name: string
  category: string
  timeDays: number
  description: string
}

const NEXTJS_FEATURES: TechFeature[] = [
  {
    id: "ssr_seo",
    name: "Server-Side Rendering (SSR) & Dynamic OpenGraph",
    category: "SEO & Speed",
    timeDays: 3,
    description: "Instant indexing on Google, rich social preview cards, and < 1s TTFB.",
  },
  {
    id: "bkash_nagad",
    name: "bKash & Nagad Payment Gateway (Server Actions)",
    category: "Integrations",
    timeDays: 4,
    description: "Secure server-side IPN callbacks, instant refund APIs, and NBR tax compliance.",
  },
  {
    id: "headless_cms",
    name: "Headless CMS (Sanity / Strapi / Payload)",
    category: "Content Management",
    timeDays: 5,
    description: "Non-technical marketing staff can edit text, blogs, and banners without code.",
  },
  {
    id: "auth_rbac",
    name: "Role-Based Auth (NextAuth / Firebase / Supabase)",
    category: "Security",
    timeDays: 4,
    description: "JWT session handling, OAuth 2.0, multi-factor authentication, and user roles.",
  },
  {
    id: "analytics_pwa",
    name: "PWA Offline Mode & GA4 Event Tracking",
    category: "User Experience",
    timeDays: 3,
    description: "Installable web app, offline caching, and automated Google Analytics 4 tracking.",
  },
  {
    id: "realtime_ws",
    name: "Real-Time WebSockets & Live Dashboards",
    category: "Full Stack",
    timeDays: 6,
    description: "Instant notifications, live inventory updates, and interactive data streaming.",
  },
]

export function NextjsTechEstimator() {
  const [selected, setSelected] = useState<string[]>(["ssr_seo", "bkash_nagad", "headless_cms"])

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      if (selected.length > 1) setSelected(selected.filter((item) => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  const selectedFeatures = NEXTJS_FEATURES.filter((f) => selected.includes(f.id))
  const totalDays = Math.max(...selectedFeatures.map((f) => f.timeDays), 5) + Math.min(selectedFeatures.length * 2, 10)

  return (
    <div className="rounded-3xl border border-primary/20 bg-card p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
        <Sparkles className="h-4 w-4 text-emerald-500" />
        Interactive Next.js Scope & Timeline Planner
      </div>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
        Select Your Next.js Stack Features
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Customize your Web Application requirements to view estimated engineering timelines and architecture specs.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {NEXTJS_FEATURES.map((feat) => {
          const isChecked = selected.includes(feat.id)
          return (
            <button
              key={feat.id}
              onClick={() => toggle(feat.id)}
              className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 ${
                isChecked
                  ? "border-emerald-500 bg-emerald-500/10 dark:bg-emerald-950/30 ring-1 ring-emerald-500/30"
                  : "border-border bg-background hover:border-emerald-500/40"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {feat.category}
                </span>
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                    isChecked ? "bg-emerald-600 text-white" : "border border-muted-foreground/30"
                  }`}
                >
                  {isChecked && <Check className="h-3.5 w-3.5" />}
                </div>
              </div>
              <span className="font-semibold text-sm sm:text-base text-foreground mt-2 leading-snug">
                {feat.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1 line-clamp-2">{feat.description}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-muted/60 border border-border p-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
              Estimated Delivery Time
            </div>
            <div className="text-xl sm:text-2xl font-bold font-serif text-foreground">
              {totalDays}–{totalDays + 4} Working Days
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Includes {selectedFeatures.length} core engineering module{selectedFeatures.length > 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
          <Link href={`/contact?stack=nextjs&features=${selected.join(",")}`}>
            Request Next.js Proposal
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
