"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Layers,
  Globe,
  Search,
  Mail,
  Server,
  Cpu,
  Cloud,
  Building2,
  Database,
  Users,
  Package,
  Code2,
  ShoppingCart,
  Plug,
  PenTool,
  Gauge,
  Lock,
  FileText,
  Calculator,
  LayoutGrid,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MAIN_NAV } from "@/lib/navigation"

function getNavIcon(label: string) {
  const l = label.toLowerCase()
  if (l.includes("erp") || l.includes("crm") || l.includes("database")) return Database
  if (l.includes("hr") || l.includes("payroll") || l.includes("users")) return Users
  if (l.includes("inventory") || l.includes("sales") || l.includes("package") || l.includes("stock")) return Package
  if (l.includes("next") || l.includes("react") || l.includes("code")) return Code2
  if (l.includes("corporate") || l.includes("website") || l.includes("building")) return Building2
  if (l.includes("portal")) return LayoutGrid
  if (l.includes("payload") || l.includes("cms") || l.includes("backend") || l.includes("server")) return Server
  if (l.includes("e-commerce") || l.includes("cart") || l.includes("shop")) return ShoppingCart
  if (l.includes("api") || l.includes("graphql") || l.includes("rest")) return Plug
  if (l.includes("ui") || l.includes("ux") || l.includes("design")) return PenTool
  if (l.includes("performance") || l.includes("vitals") || l.includes("speed")) return Gauge
  if (l.includes("system") || l.includes("library") || l.includes("component")) return Layers
  if (l.includes(".bd") || l.includes("search") || l.includes("acquisition")) return Search
  if (l.includes("domain") || l.includes("registration") || l.includes("global")) return Globe
  if (l.includes("mail") || l.includes("email") || l.includes("workspace") || l.includes("zoho")) return Mail
  if (l.includes("hosting") || l.includes("cloud") || l.includes("bdix") || l.includes("vps")) return Cloud
  if (l.includes("ssl") || l.includes("security") || l.includes("lock")) return Lock
  if (l.includes("company") || l.includes("formation") || l.includes("trade")) return FileText
  if (l.includes("tax") || l.includes("vat")) return Calculator
  return Cpu
}
import { SITE_CONFIG } from "@/lib/site-config"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = React.useState<string | null>(null)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 180)
  }

  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpenDropdown(null)
  }

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target.closest("[data-nav-item]")) {
        closeDropdown()
      }
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top contact bar */}
      <div className="hidden md:block border-b border-border/60 bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-9 items-center justify-between gap-6 px-4 text-xs">
          <p className="opacity-90">
            Enterprise digital services for Bangladesh — since {SITE_CONFIG.founded}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="opacity-90 hover:opacity-100 transition hidden sm:inline"
            >
              {SITE_CONFIG.email}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition font-medium"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp: {SITE_CONFIG.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="relative h-17 w-60">
            <Image 
              src="/logo.svg" 
              alt={SITE_CONFIG.name} 
              fill 
              className="object-contain object-left" 
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {MAIN_NAV.map((item) => {
            const hasChildren = item.children && item.children.length > 0
            const isOpen = openDropdown === item.label
            const isMegaMenu = hasChildren && item.children!.some((child) => child.children && child.children.length > 0)

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition"
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <div
                key={item.label}
                data-nav-item
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (isOpen) {
                      closeDropdown()
                    } else {
                      handleMouseEnter(item.label)
                    }
                  }}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium transition",
                    isOpen
                      ? "text-foreground"
                      : "text-foreground/80 hover:text-foreground group-hover:text-foreground"
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {hasChildren && (
                  <div
                    className={cn(
                      "absolute top-full pt-3 z-50 transition-all duration-200 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto",
                      isOpen && "opacity-100 visible pointer-events-auto",
                      isMegaMenu
                        ? "left-1/2 -translate-x-1/2 w-[1000px] lg:w-[1080px] xl:w-[1160px] max-w-[calc(100vw-2rem)]"
                        : "left-0 w-80"
                    )}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isMegaMenu ? (
                      <div className="w-full rounded-2xl border border-border/80 bg-popover/98 backdrop-blur-xl p-5 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
                        {/* Mega Menu 4 Columns */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                          {item.children!.map((subCategory) => (
                            <div key={subCategory.label} className="space-y-2.5 min-w-0">
                              <div className="flex items-center gap-2 font-bold text-xs text-primary uppercase tracking-wider pb-2 border-b border-border/60">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block shrink-0" />
                                <span className="truncate">{subCategory.label}</span>
                              </div>
                              <ul className="space-y-1.5">
                                {subCategory.children ? (
                                  subCategory.children.map((child) => {
                                    const NavIcon = getNavIcon(child.label)
                                    return (
                                      <li key={child.label}>
                                        <Link
                                          href={child.href}
                                          onClick={closeDropdown}
                                          className="group/item flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl hover:bg-emerald-50/70 dark:hover:bg-emerald-950/30 border border-transparent hover:border-emerald-200/60 dark:hover:border-emerald-800/40 transition-all min-w-0"
                                        >
                                          <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all shadow-2xs">
                                            <NavIcon className="h-4 w-4" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <span className="text-xs sm:text-[13px] font-semibold text-foreground group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors leading-tight block truncate">
                                              {child.label}
                                            </span>
                                          </div>
                                        </Link>
                                      </li>
                                    )
                                  })
                                ) : (
                                  <li>
                                    {(() => {
                                      const NavIcon = getNavIcon(subCategory.label)
                                      return (
                                        <Link
                                          href={subCategory.href}
                                          onClick={closeDropdown}
                                          className="group/item flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl hover:bg-emerald-50/70 dark:hover:bg-emerald-950/30 border border-transparent hover:border-emerald-200/60 dark:hover:border-emerald-800/40 transition-all min-w-0"
                                        >
                                          <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all shadow-2xs">
                                            <NavIcon className="h-4 w-4" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <span className="text-xs sm:text-[13px] font-semibold text-foreground group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors leading-tight block truncate">
                                              {subCategory.label}
                                            </span>
                                          </div>
                                        </Link>
                                      )
                                    })()}
                                  </li>
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="w-80 rounded-2xl border border-border/80 bg-popover/98 backdrop-blur-xl p-2.5 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 space-y-1">
                        <Link
                          href={item.href}
                          onClick={closeDropdown}
                          className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/30 transition group/sub"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                            <Layers className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-xs sm:text-sm text-foreground group-hover/sub:text-emerald-600 transition">
                              All {item.label}
                            </div>
                            {item.description && (
                              <div className="text-[11px] text-muted-foreground line-clamp-1">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </Link>
                        <div className="my-1 h-px bg-border/60" />
                        {item.children!.map((child) => {
                          const NavIcon = getNavIcon(child.label)
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeDropdown}
                              className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/30 transition group/sub"
                            >
                              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover/sub:bg-emerald-600 group-hover/sub:text-white transition">
                                <NavIcon className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-xs sm:text-sm text-foreground group-hover/sub:text-emerald-600 dark:group-hover/sub:text-emerald-400 transition line-clamp-1">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {MAIN_NAV.map((item) => {
                const hasChildren = item.children && item.children.length > 0
                const isExpanded = openMobileMenu === item.label

                return (
                  <li key={item.label}>
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMobileMenu(isExpanded ? null : item.label)
                          }
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-medium hover:bg-muted transition"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </button>
                        {isExpanded && (
                          <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                            <li>
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md px-3 py-2 text-xs font-semibold text-primary uppercase tracking-wider hover:bg-muted transition"
                              >
                                All {item.label}
                              </Link>
                            </li>
                            {item.children!.map((child) => {
                              const hasSubChildren = child.children && child.children.length > 0
                              if (hasSubChildren) {
                                return (
                                  <li key={child.label} className="mt-2 space-y-1">
                                    <div className="px-3 text-xs font-semibold text-primary uppercase tracking-wider">
                                      {child.label}
                                    </div>
                                    <ul className="ml-2 border-l border-border/60 pl-2 space-y-0.5">
                                      {child.children!.map((subChild) => (
                                        <li key={subChild.label}>
                                          <Link
                                            href={subChild.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition"
                                          >
                                            {subChild.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                )
                              }
                              return (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-3 text-sm font-medium hover:bg-muted transition"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
