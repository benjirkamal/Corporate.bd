"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { HOME_FAQS, FAQItem } from "@/lib/faqs"

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="space-y-4">
      {HOME_FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={faq.question}
            className="rounded-2xl border border-border bg-card transition-all duration-200 hover:border-primary/50 overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-base sm:text-lg font-semibold text-foreground"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/50 bg-muted/20">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
