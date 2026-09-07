import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Sparkles, Star, ShieldCheck, Phone, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Breadcrumb = {
  label: string
  href?: string
}

type PageHeroProps = {
  eyebrow?: string
  title: string
  description: string
  image: string
  imageAlt: string
  breadcrumbs?: Breadcrumb[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  badgeText?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  badgeText,
}: PageHeroProps) {
  const isWhatsApp = primaryCta?.href?.includes("wa.me")
  const isPhone = secondaryCta?.href?.includes("tel:")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a192f] to-slate-900 text-white py-14 sm:py-20 lg:py-24">
      {/* Modern Ambient Lighting and Subtle Grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none"
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb">
                <ol className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-slate-300 backdrop-blur-md">
                  {breadcrumbs.map((crumb, idx) => {
                    const isLast = idx === breadcrumbs.length - 1
                    return (
                      <li key={`${crumb.label}-${idx}`} className="flex items-center gap-1.5">
                        {crumb.href && !isLast ? (
                          <Link
                            href={crumb.href}
                            className="hover:text-amber-400 transition-colors font-medium"
                          >
                            {crumb.label}
                          </Link>
                        ) : (
                          <span className="text-white font-semibold">{crumb.label}</span>
                        )}
                        {!isLast && <ChevronRight className="h-3 w-3 text-slate-500" />}
                      </li>
                    )
                  })}
                </ol>
              </nav>
            )}

            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 border border-amber-400/30 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-balance text-white">
              {title}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-300 font-normal max-w-2xl text-pretty">
              {description}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {primaryCta && (
                  <Button
                    asChild
                    size="lg"
                    className="h-12 px-6 rounded-xl font-bold text-sm shadow-lg shadow-emerald-950/40 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 border border-emerald-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <a
                      href={primaryCta.href}
                      target={primaryCta.href.startsWith("http") ? "_blank" : undefined}
                      rel={primaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2"
                    >
                      {isWhatsApp ? (
                        <MessageSquare className="h-4 w-4 fill-current text-emerald-100" />
                      ) : (
                        <Sparkles className="h-4 w-4 text-amber-200" />
                      )}
                      <span>{primaryCta.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-80" />
                    </a>
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 px-5 rounded-xl font-semibold text-sm border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:border-white/40 backdrop-blur-md transition-all duration-200"
                  >
                    <a href={secondaryCta.href} className="inline-flex items-center gap-2">
                      {isPhone && <Phone className="h-4 w-4 text-amber-400" />}
                      <span>{secondaryCta.label}</span>
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Modern Image Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Glow behind image */}
            <div
              aria-hidden
              className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-teal-500/20 blur-xl opacity-70"
            />

            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Floating Badge - Top Right */}
                <div className="absolute top-3.5 right-3.5">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20 shadow-md">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9/5 Guest Rating</span>
                  </div>
                </div>

                {/* Floating Badge - Bottom Left */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <div className="flex items-center justify-between gap-2 rounded-xl bg-black/65 backdrop-blur-md p-2.5 border border-white/15 text-white shadow-lg">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-white leading-tight truncate">
                          {badgeText || "100% Private AC Vehicles"}
                        </p>
                        <p className="text-[10px] text-slate-300 leading-tight">
                          Licensed English Guides & Hotel Pickup
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

