"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, ChevronsUpDown, Sparkles } from "lucide-react"

export interface BlogFAQ {
  question: string
  answer: string
}

interface BlogFaqAccordionProps {
  faqs: BlogFAQ[]
  title?: string
  subtitle?: string
  eyebrow?: string
  defaultOpenFirst?: boolean
  className?: string
}

export function BlogFaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Expert answers to common queries regarding regulatory compliance, technical implementation, and best practices.",
  eyebrow = "Common Queries",
  defaultOpenFirst = true,
  className = "",
}: BlogFaqAccordionProps) {
  // Store open state as a Set so users can expand multiple or collapse all
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set(defaultOpenFirst && faqs.length > 0 ? [0] : [])
  )

  if (!faqs || faqs.length === 0) return null

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  const allOpen = openIndices.size === faqs.length
  const toggleAll = () => {
    if (allOpen) {
      setOpenIndices(new Set())
    } else {
      setOpenIndices(new Set(faqs.map((_, i) => i)))
    }
  }

  return (
    <div className={`space-y-6 ${className}`} id="faqs-accordion">
      {/* Header with Title & Expand All toggle */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
        <div className="space-y-1.5">
          {eyebrow && (
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {eyebrow}
              </span>
            </div>
          )}
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {faqs.length > 1 && (
          <button
            type="button"
            id="toggle-all-faqs-btn"
            onClick={toggleAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border/80 transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
            aria-label={allOpen ? "Collapse all FAQs" : "Expand all FAQs"}
          >
            <ChevronsUpDown className="h-3.5 w-3.5 text-primary" />
            <span>{allOpen ? "Collapse All" : "Expand All"}</span>
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.has(idx)
          const panelId = `faq-panel-${idx}`
          const buttonId = `faq-trigger-${idx}`

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-primary/40 bg-card shadow-sm ring-1 ring-primary/10"
                  : "border-border bg-card/70 hover:border-border hover:bg-card"
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-base sm:text-lg font-semibold text-foreground cursor-pointer transition-colors"
                >
                  <span className="flex items-start gap-3.5">
                    <span
                      className={`inline-flex items-center justify-center h-6 w-6 rounded-md text-xs font-mono font-bold shrink-0 mt-0.5 transition-colors ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}
                    >
                      Q{idx + 1}
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-primary/10 text-primary rotate-180"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
              </h3>

              {/* Collapsible Panel with smooth CSS Grid transition */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-1 border-t border-border/50 bg-muted/20">
                    <div className="flex items-start gap-3 pt-2">
                      <HelpCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
