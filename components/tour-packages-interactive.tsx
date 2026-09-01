"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  Car,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  ArrowRight,
  Utensils,
  Camera,
  Landmark,
  Building2,
  Check,
  Plus,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/site-config"

export interface TourPackageItem {
  id: string
  title: string
  badge: string
  category: "all" | "heritage" | "architecture" | "food" | "excursion" | "vip"
  duration: string
  pickup: string
  transport: string
  image: string
  alt: string
  priceEstimate: string
  overview: string
  highlights: string[]
  spotsIncluded: string[]
  idealFor: string
}

export const DHAKA_PACKAGES_DATA: TourPackageItem[] = [
  {
    id: "old-dhaka-heritage",
    title: "Old Dhaka Mughal Heritage & Buriganga River Cruise Day Tour",
    badge: "⭐ Top Rated Sightseeing",
    category: "heritage",
    duration: "Full Day (8:30 AM – 5:30 PM)",
    pickup: "Complimentary Hotel / Residence Pickup in Dhaka",
    transport: "Private AC Vehicle + Rickshaw + Wooden Boat",
    image: "/images/tour/lalbagh-fort.jpg",
    alt: "Old Dhaka Mughal Heritage and Buriganga River Cruise Full Day Tour Lalbagh Fort Ahsan Manzil",
    priceEstimate: "$60 / 6,500 BDT per person",
    overview:
      "A complete day journey through the 400-year-old Mughal heart of Dhaka. Includes Lalbagh Fort, the Pink Palace (Ahsan Manzil), traditional Buriganga wooden boat cruise, Star Mosque, and authentic Royal Kacchi Biryani lunch.",
    spotsIncluded: ["Lalbagh Fort", "Ahsan Manzil (Pink Palace)", "Buriganga River Cruise", "Star Mosque", "Shakharibazar"],
    highlights: [
      "17th-Century Mughal Fortress: Lalbagh Fort & Pari Bibi's Marble Mausoleum",
      "Ahsan Manzil (The Pink Palace) riverside museum & Nawab history",
      "Buriganga River wooden country boat cruise near Sadarghat",
      "Historic Star Mosque (Tara Masjid) & Armenian Church",
      "Traditional Shakharibazar artisan lane rickshaw ride",
      "Authentic Old Dhaka Royal Kacchi Biryani lunch & Borhani included",
    ],
    idealFor: "First-time visitors, international tourists, history lovers & families",
  },
  {
    id: "dhaka-highlights-architecture",
    title: "Dhaka City Highlights & Louis Kahn Modern Architecture Tour",
    badge: "🏛️ Architectural & Cultural",
    category: "architecture",
    duration: "Full Day (9:00 AM – 6:00 PM)",
    pickup: "Complimentary Hotel / Office Pickup across Dhaka",
    transport: "Executive AC Sedan / HiAce Van",
    image: "/images/tour/national-parliament.jpg",
    alt: "Dhaka City Highlights and Louis Kahn Modern Architecture Guided Tour National Parliament Curzon Hall",
    priceEstimate: "$65 / 7,000 BDT per person",
    overview:
      "Explore the stunning contrast between British colonial red-brick heritage and 20th-century modernist wonder. Features Louis Kahn's world-famous National Parliament, Curzon Hall, Shahid Minar, and Liberation War Museum.",
    spotsIncluded: ["National Parliament (Louis Kahn)", "Curzon Hall", "Shahid Minar", "National Museum", "Dhanmondi Lake"],
    highlights: [
      "National Parliament Building (Jatiya Sangsad Bhaban by Louis I. Kahn)",
      "Curzon Hall (Dhaka University Indo-Saracenic colonial campus)",
      "Shahid Minar & Language Movement national monument",
      "Guided walk inside Liberation War Museum / National Museum",
      "Bangladeshi traditional restaurant lunch buffet included",
      "Visit to Aarong flagship handicraft and cultural center",
    ],
    idealFor: "Architects, researchers, expats, photographers & corporate guests",
  },
  {
    id: "sonargaon-panam-city",
    title: "Sonargaon Ancient Capital & Panam Nagar Day Trip from Dhaka",
    badge: "🏰 Ancient Heritage Excursion",
    category: "excursion",
    duration: "Full Day (8:00 AM – 5:00 PM)",
    pickup: "Doorstep Pickup & Drop anywhere in Dhaka",
    transport: "Private AC Vehicle via Express Highway",
    image: "/images/tour/panam-city.jpg",
    alt: "Sonargaon Ancient Capital and Panam Nagar Ghost City Day Trip from Dhaka Private AC Tour",
    priceEstimate: "$70 / 7,500 BDT per person",
    overview:
      "Step into Bengal's medieval golden age 30 km from Dhaka. Walk through the ghost city of Panam Nagar, the 16th-century Goaldi Mosque, and the scenic Folk Art Foundation.",
    spotsIncluded: ["Panam City (Lost Ghost Town)", "Folk Art & Craft Museum", "Goaldi Sultanate Mosque", "Meghna River (Optional)"],
    highlights: [
      "52 Preserved Colonial-Era Merchant Mansions in Panam Ghost City",
      "Sonargaon Folk Art & Craft Museum (Zainul Abedin Palace grounds)",
      "Historic Goaldi Mosque (1519 AD Sultanate era masterpiece)",
      "Express highway comfortable private AC vehicle transit",
      "Traditional Bengali lunch with fresh fish, bhortas & lentils",
    ],
    idealFor: "Heritage buffs, photographers, weekend day-trippers & families",
  },
  {
    id: "old-dhaka-food-photography",
    title: "Old Dhaka Authentic Street Food & Photography Walking Tour",
    badge: "🍲 Culinary & Evening Walk",
    category: "food",
    duration: "Half Day (3:00 PM – 8:00 PM)",
    pickup: "Central Dhaka Meeting Point / Hotel Drop",
    transport: "AC Drop + Guided Walking + Rickshaw",
    image: "/images/tour/old-dhaka-kacchi.jpg",
    alt: "Old Dhaka Authentic Street Food Tasting Trail and Evening Photography Walking Tour",
    priceEstimate: "$45 / 4,800 BDT per person",
    overview:
      "A guided evening food and photo adventure through Nazira Bazar and Chawkbazar. Taste iconic Kacchi, Beauty Lassi, Bakarkhani, and capture vibrant sunset street scenes.",
    spotsIncluded: ["Nazira Bazar Food Alley", "Chawkbazar", "Beauty Lassi", "Sadarghat Sunset", "Mughal Haveli Terraces"],
    highlights: [
      "Authentic Nazira Bazar food trail with 6+ signature tastings",
      "Beauty Lassi, royal Faluda & special spiced Borhani",
      "Freshly baked Bakarkhani & traditional Seekh Kebabs",
      "Golden hour photo-shoot at Sadarghat launch riverfront",
      "Safe food handling, bottled mineral water & sanitizer kit provided",
    ],
    idealFor: "Food lovers, bloggers, photographers, solo travelers & youth",
  },
  {
    id: "corporate-vip-tour",
    title: "VIP Corporate Dhaka City Sightseeing & Executive Day Transit",
    badge: "💼 Executive Luxury Service",
    category: "vip",
    duration: "Customizable (4 to 10 Hours)",
    pickup: "Airport / 5-Star Hotel / Corporate Office",
    transport: "Luxury AC SUV / Executive HiAce with Chauffeur",
    image: "/images/tour/curzon-hall.jpg",
    alt: "VIP Corporate Dhaka City Sightseeing Tour and Diplomatic Executive Airport Transit",
    priceEstimate: "Custom Corporate Quote (With Official VAT Invoice)",
    overview:
      "Tailored for foreign executives, diplomats, and international conference guests with tight schedules. Enjoy zero-line entries, 5-star hotel lunch, onboard Wi-Fi, and executive billing.",
    spotsIncluded: ["Custom Selection", "National Parliament", "Lalbagh / Pink Palace VIP", "Aarong Flagship", "5-Star Dining"],
    highlights: [
      "Flexible schedule precisely mapped to flight & business meetings",
      "Senior multilingual licensed tourist guide & private security escort if requested",
      "5-Star international buffet lunch at InterContinental / Westin Dhaka",
      "VIP expedited entries with no waiting at monument gates",
      "High-speed onboard vehicle Wi-Fi, snacks & premium refreshments",
      "Official corporate invoicing with VAT receipt for company reimbursement",
    ],
    idealFor: "International corporate delegates, embassy dignitaries & MNC leaders",
  },
]

export function TourPackagesInteractive() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [selectedPkgId, setSelectedPkgId] = useState<string>("old-dhaka-heritage")

  const filteredPackages =
    activeTab === "all"
      ? DHAKA_PACKAGES_DATA
      : DHAKA_PACKAGES_DATA.filter((p) => p.category === activeTab)

  const activePackage =
    DHAKA_PACKAGES_DATA.find((p) => p.id === selectedPkgId) ||
    DHAKA_PACKAGES_DATA[0]

  return (
    <div className="space-y-10">
      {/* Category Tabs for Fast Discovery */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-muted/60 border border-border max-w-3xl mx-auto">
        {[
          { id: "all", label: "All Packages (5)" },
          { id: "heritage", label: "🏛️ Old Dhaka Heritage" },
          { id: "architecture", label: "🏢 Architecture & Modern" },
          { id: "excursion", label: "🏰 Sonargaon Day Trip" },
          { id: "food", label: "🍲 Food & Photography" },
          { id: "vip", label: "💼 Corporate VIP" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-background/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Package Cards Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {filteredPackages.map((pkg) => {
          const isSelected = pkg.id === activePackage.id
          return (
            <article
              key={pkg.id}
              id={pkg.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between bg-card ${
                isSelected
                  ? "border-primary ring-2 ring-primary/20 shadow-lg"
                  : "border-border shadow-xs hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <div>
                {/* Image Header with Badges */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-muted">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    width={700}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-background/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-primary shadow-md border border-border/60">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-emerald-600 text-white px-3.5 py-1.5 text-xs font-bold shadow-md">
                      {pkg.priceEstimate.split(" / ")[0]}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95">
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                      <Clock className="h-3.5 w-3.5 text-emerald-400" />
                      {pkg.duration.split(" (")[0]}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                      <Car className="h-3.5 w-3.5 text-emerald-400" />
                      {pkg.transport.split("+")[0]}
                    </span>
                  </div>
                </div>

                {/* Package Core Body */}
                <div className="p-6 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-tight">
                      {pkg.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {pkg.overview}
                  </p>

                  {/* Sightseeing spots tags */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      Key Sightseeing Spots:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.spotsIncluded.map((spot, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-lg"
                        >
                          <Check className="h-3 w-3" />
                          <span>{spot}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-3 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      Tour Inclusions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-foreground/90">
                      {pkg.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 space-y-3">
                <div className="text-[11px] text-muted-foreground bg-muted/50 p-2.5 rounded-xl flex items-center justify-between">
                  <span>🚗 <strong>Doorstep Pickup:</strong> Hotel / Residence</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">All Tickets Included</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 text-xs"
                  >
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=Hello!%20I%20want%20to%20book%20the%20*${encodeURIComponent(pkg.title)}*.%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-xl font-semibold text-xs gap-1"
                  >
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=Hello!%20I%20want%20to%20customise%20the%20itinerary%20for%20*${encodeURIComponent(pkg.title)}*.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Custom Request</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
