"use client"

import React from "react"
import { MessageSquare } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

export function FloatingWhatsApp() {
  const cleanNumber = SITE_CONFIG.whatsapp.replace(/\D/g, "")
  const message = encodeURIComponent(
    "Hello Corporate.bd! I would like to inquire about your corporate digital, software & legal services."
  )
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap border border-slate-700/50">
        Chat on WhatsApp: {SITE_CONFIG.whatsapp}
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Corporate.bd"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Pulse beacon */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white" />
        </span>

        {/* WhatsApp Icon (SVG for perfect WhatsApp brand representation) */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
          className="text-white fill-current"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.22C8.87 7.22 8.6 7.28 8.38 7.53C8.15 7.78 7.5 8.39 7.5 9.61C7.5 10.83 8.39 12.01 8.51 12.18C8.63 12.35 10.26 14.85 12.74 15.93C14.81 16.83 15.23 16.65 15.68 16.61C16.13 16.57 17.13 16.02 17.33 15.43C17.54 14.85 17.54 14.35 17.47 14.24C17.41 14.14 17.25 14.07 17.01 13.95C16.77 13.84 15.59 13.25 15.37 13.17C15.15 13.09 14.99 13.05 14.82 13.29C14.66 13.54 14.19 14.09 14.05 14.25C13.91 14.41 13.77 14.43 13.53 14.31C13.29 14.2 12.27 13.86 11.06 12.78C10.12 11.94 9.48 10.9 9.3 10.59C9.12 10.28 9.28 10.12 9.4 10C9.51 9.89 9.65 9.71 9.77 9.57C9.89 9.43 9.93 9.33 10.01 9.17C10.09 9.01 10.05 8.87 9.99 8.75C9.93 8.63 9.44 7.42 9.24 6.94C9.04 6.45 8.83 6.52 8.68 6.51C8.54 6.51 8.38 6.5 8.21 6.5L9.04 7.22Z" />
        </svg>
      </a>
    </div>
  )
}
