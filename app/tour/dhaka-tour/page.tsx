import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Compass,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Car,
  Camera,
  Utensils,
  HelpCircle,
  Star,
  Calendar,
  Sun,
  ShieldAlert,
  CreditCard,
  Check,
  ChevronRight,
  Globe,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/site-config"
import { CTASection } from "@/components/cta-section"

const DHAKA_TOUR_PHONE = "+880 1553-841608"
const DHAKA_TOUR_PHONE_RAW = "8801553841608"

export const metadata: Metadata = {
  title: "Dhaka Tour Packages 2026 | Best Old Dhaka City & Heritage Sightseeing Tours",
  description:
    "Book top-rated private Dhaka city day tours. Explore Lalbagh Fort, Ahsan Manzil Pink Palace, Buriganga boat cruise, Sonargaon Panam City & street food with private AC transport and licensed English-speaking guides.",
  keywords: [
    "Dhaka Tour",
    "Dhaka City Tour",
    "Old Dhaka Tour",
    "Dhaka Tour Package",
    "Dhaka Sightseeing Tour",
    "Dhaka Day Tour",
    "Lalbagh Fort Tour",
    "Ahsan Manzil Pink Palace",
    "Buriganga River Boat Cruise",
    "Panam Nagar Sonargaon Day Trip",
    "Dhaka Heritage Tour",
    "Best Tour Operator in Dhaka",
    "Private Guided Tour Dhaka Bangladesh",
    "Dhaka Street Food Tour",
    "Louis Kahn Parliament Tour Dhaka",
    "Corporate Day Tour Dhaka",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/tour/dhaka-tour` },
  openGraph: {
    title: "Dhaka Tour Packages 2026 | Best Old Dhaka City & Heritage Sightseeing Tours",
    description:
      "Experience 400+ years of living history in Dhaka. Curated private day tours covering Lalbagh Fort, Ahsan Manzil, Buriganga riverfront, Curzon Hall, National Parliament & authentic Old Dhaka food trails.",
    url: `${SITE_CONFIG.url}/tour/dhaka-tour`,
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_CONFIG.url}/images/tour/lalbagh-fort.jpg`,
        width: 1200,
        height: 630,
        alt: "Lalbagh Fort and historic Mughal heritage Dhaka tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhaka Tour Packages | Guided Old Dhaka City Sightseeing",
    description:
      "Private guided Dhaka day tours with AC transport, licensed English guides, monument tickets, and authentic Old Dhaka cuisine.",
    images: [`${SITE_CONFIG.url}/images/tour/lalbagh-fort.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const TOP_TOURIST_SPOTS = [
  {
    id: "lalbagh-fort",
    name: "Lalbagh Fort (Lalbagh Kella)",
    era: "1678 AD (Mughal Period)",
    location: "Lalbagh, Old Dhaka",
    image: "/images/tour/lalbagh-fort.jpg",
    alt: "Lalbagh Fort Pari Bibi tomb and Mughal fortress in Old Dhaka Bangladesh",
    description:
      "An incomplete 17th-century Mughal fort complex developed by Prince Muhammad Azam and Shaista Khan. Contains Pari Bibi's marble tomb, the 3-domed Quilla Mosque, and the royal hammam museum.",
    highlights: ["Pari Bibi's Mausoleum", "Mughal Hammam Museum", "Subahdar Garden Pathways", "Historic Fort Ramparts"],
    geo: { latitude: "23.7188", longitude: "90.3882" },
  },
  {
    id: "ahsan-manzil",
    name: "Ahsan Manzil (Pink Palace)",
    era: "1872 AD (Nawab Period)",
    location: "Sadarghat, Old Dhaka",
    image: "/images/tour/ahsan-manzil.jpg",
    alt: "Ahsan Manzil Pink Palace on Buriganga riverfront Old Dhaka",
    description:
      "The official residential palace and seat of the Nawabs of Dhaka on the banks of Buriganga. Famous for its majestic pink facade, grand staircase, and opulent 23-room national museum.",
    highlights: ["Majestic Octagonal Dome", "Nawabi Courtroom & Artifacts", "Grand Riverfront Stairway", "Buriganga View Terrace"],
    geo: { latitude: "23.7086", longitude: "90.4060" },
  },
  {
    id: "national-parliament",
    name: "National Parliament House (Jatiya Sangsad Bhaban)",
    era: "Modern Masterpiece (1982)",
    location: "Sher-e-Bangla Nagar, Dhaka",
    image: "/images/tour/national-parliament.jpg",
    alt: "Bangladesh National Parliament Building designed by Louis Kahn reflecting on Crescent Lake Dhaka",
    description:
      "One of the 20th century's greatest architectural wonders, designed by world-renowned architect Louis I. Kahn. Monolithic concrete structure seemingly floating on Crescent Lake.",
    highlights: ["Louis Kahn Geometric Design", "Crescent Lake Reflection", "South Plaza & Green Lawn", "Modern Architectural Landmark"],
    geo: { latitude: "23.7629", longitude: "90.3787" },
  },
  {
    id: "curzon-hall",
    name: "Curzon Hall (Dhaka University)",
    era: "1904 AD (British Colonial)",
    location: "Dhaka University Campus, Dhaka",
    image: "/images/tour/curzon-hall.jpg",
    alt: "Curzon Hall British colonial red brick architecture at Dhaka University campus",
    description:
      "A magnificent blend of European and Mughal (Indo-Saracenic) red-brick architecture. Named after Lord Curzon, it stands as an intellectual and historical cradle of Bangladesh.",
    highlights: ["Indo-Saracenic Red Brick Facade", "Colonial Domes & Horse-Shoe Arches", "Lush Botanical Quadrangle", "Historic University Grounds"],
    geo: { latitude: "23.7275", longitude: "90.4019" },
  },
  {
    id: "panam-city",
    name: "Panam Nagar (Panam City)",
    era: "15th - 19th Century (Medieval Capital)",
    location: "Sonargaon, Narayanganj",
    image: "/images/tour/panam-city.jpg",
    alt: "Panam Nagar lost city colonial merchant mansions in Sonargaon Dhaka",
    description:
      "The ancient capital of Bengal and the lost merchant city of Panam Nagar, featuring 52 well-preserved colonial-era aristocratic mansions, Folk Art Museum, and Goaldi Mosque.",
    highlights: ["52 Ancient Merchant Mansions", "Sonargaon Folk Art Museum", "Goaldi Sultanate Mosque", "Historic Royal Highway"],
    geo: { latitude: "23.6496", longitude: "90.6019" },
  },
  {
    id: "buriganga-river",
    name: "Sadarghat & Buriganga Riverfront",
    era: "Historic Lifeline of Dhaka",
    location: "Sadarghat, Old Dhaka",
    image: "/images/tour/buriganga-river.jpg",
    alt: "Traditional wooden country boat cruising on Buriganga river near Sadarghat Dhaka",
    description:
      "The pulsating commercial artery of Dhaka. Experience traditional wooden country boat rides, dynamic river traffic, colorful launches, and the golden hour over Old Dhaka's riverbanks.",
    highlights: ["Traditional Wooden Boat Cruise", "Sadarghat Launch Terminal Vibe", "Sunset Riverfront Photography", "Old Dhaka Skyline View"],
    geo: { latitude: "23.7042", longitude: "90.4131" },
  },
  {
    id: "star-mosque",
    name: "Star Mosque (Tara Masjid)",
    era: "Early 19th Century",
    location: "Armanitola, Old Dhaka",
    image: "/images/tour/star-mosque.jpg",
    alt: "Star Mosque Tara Masjid white marble and blue porcelain star mosaics in Old Dhaka",
    description:
      "An exquisite Mughal-style mosque adorned with intricate blue and gold Chini-Tikri (broken porcelain mosaic) star motifs across its five marble domes and floral prayer halls.",
    highlights: ["Blue Porcelain Star Mosaics", "Five Ornate Domes", "Mughal Architectural Arches", "Intricate Calligraphy Panels"],
    geo: { latitude: "23.7153", longitude: "90.4028" },
  },
  {
    id: "old-dhaka-kacchi",
    name: "Nazira Bazar & Chawkbazar (Food Streets)",
    era: "Century-Old Culinary Heritage",
    location: "Nazira Bazar, Old Dhaka",
    image: "/images/tour/old-dhaka-kacchi.jpg",
    alt: "Authentic Old Dhaka Royal Kacchi Biryani and Borhani culinary heritage trail",
    description:
      "Dhaka's world-famous culinary heritage trail. Savor authentic Royal Kacchi Biryani, spiced Borhani, succulent kebabs, freshly baked Bakarkhani, and heritage royal desserts.",
    highlights: ["Authentic Mutton Kacchi Biryani", "Heritage Clay-Cup Borhani", "Seekh Kebabs & Rumali Roti", "Nazira Bazar Night Walk"],
    geo: { latitude: "23.7161", longitude: "90.4069" },
  },
]

const INCLUDED_FEATURES = [
  {
    title: "Private AC Vehicle & Chauffeur",
    description: "Door-to-door air-conditioned transport with fuel, parking, and experienced drivers who know the best routes.",
  },
  {
    title: "Certified Tourist Guide",
    description: "Fluent English and Bengali speaking licensed guides with deep knowledge of Dhaka's 400-year history.",
  },
  {
    title: "All Monument Entry Tickets",
    description: "Pre-arranged VIP entrance tickets for Lalbagh Fort, Ahsan Manzil, museums, and historical sites.",
  },
  {
    title: "Authentic Dining & Refreshments",
    description: "Hygienic, top-rated traditional meals (Kacchi Biryani / Bengali banquet), snacks, and bottled mineral water.",
  },
  {
    title: "Buriganga River Boat Cruise",
    description: "Traditional wooden boat ride along the historic Buriganga riverfront with experienced local boatmen.",
  },
  {
    title: "Old Town Rickshaw Ride",
    description: "Iconic Dhaka painted rickshaw ride through the narrow, vibrant artisan lanes of Old Dhaka.",
  },
]

const ITINERARY_TIMELINE = [
  {
    time: "08:30 AM",
    title: "Hotel Pickup & Morning Briefing",
    description: "Meet your private chauffeur and guide at your hotel/residence in Gulshan, Banani, Motijheel, or Uttara.",
    image: "/images/home/dhaka-skyline.jpg",
  },
  {
    time: "09:30 AM",
    title: "Lalbagh Fort & Pari Bibi's Tomb",
    description: "Explore the incomplete 17th-century Mughal fort complex, intricate gardens, museum, and royal hammam.",
    image: "/images/tour/lalbagh-fort.jpg",
  },
  {
    time: "11:00 AM",
    title: "Star Mosque (Tara Masjid) & Armenian Church",
    description: "Admire the porcelain star mosaics and the peaceful courtyard of the historic 1781 Armenian heritage site.",
    image: "/images/tour/star-mosque.jpg",
  },
  {
    time: "12:00 PM",
    title: "Shakharibazar Rickshaw Ride & Heritage Lane Walk",
    description: "Pass through Dhaka's oldest continuous artisan street filled with traditional jewelers and conch-shell craft.",
    image: "/images/tour/lalbagh-fort.jpg",
  },
  {
    time: "01:00 PM",
    title: "Authentic Old Dhaka Biryani Lunch",
    description: "Savor world-famous Dhaka Kacchi Biryani, Borhani, and traditional dessert at a carefully vetted restaurant.",
    image: "/images/tour/old-dhaka-kacchi.jpg",
  },
  {
    time: "02:15 PM",
    title: "Ahsan Manzil (The Pink Palace) & Museum",
    description: "Tour the grand residence of the Nawabs of Dhaka and learn about the political birth of modern Bengal.",
    image: "/images/tour/ahsan-manzil.jpg",
  },
  {
    time: "03:30 PM",
    title: "Sadarghat Riverfront & Buriganga Boat Experience",
    description: "Witness the energetic river traffic of one of the world's busiest inland river ports from a traditional boat.",
    image: "/images/tour/buriganga-river.jpg",
  },
  {
    time: "04:45 PM",
    title: "Dhaka University Campus & Curzon Hall",
    description: "Marvel at the Indo-Saracenic red-brick colonial architecture of Curzon Hall and the historic Shahid Minar.",
    image: "/images/tour/curzon-hall.jpg",
  },
  {
    time: "06:00 PM",
    title: "Evening Return to Hotel / Office",
    description: "Comfortable air-conditioned drop-off at your starting point or preferred dinner destination.",
    image: "/images/home/dhaka-skyline.jpg",
  },
]

const TRAVEL_GUIDE_TIPS = [
  {
    icon: Calendar,
    title: "Best Time to Visit Dhaka",
    text: "November through March offers pleasant, dry winter weather with temperatures between 18°C to 28°C (64°F–82°F), ideal for outdoor sightseeing and walking photography.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Foreign Traveler Support",
    text: "Dhaka is welcoming and hospitable. Our tours operate in private AC vehicles with verified chauffeurs and licensed English-speaking guides who navigate city routes smoothly.",
  },
  {
    icon: Utensils,
    title: "Food Hygiene Standards",
    text: "We exclusively select top-rated heritage restaurants and vetted culinary partners. Only sealed bottled mineral water, fresh hot meals, and sanitization kits are provided.",
  },
  {
    icon: Camera,
    title: "Photography & Drone Permits",
    text: "Handheld cameras and mobile photography are welcomed at almost all heritage sites. Professional tripods or drone flights at historical monuments require prior Civil Aviation approval.",
  },
  {
    icon: Sun,
    title: "Dress Code & Cultural Etiquette",
    text: "Modest, lightweight cotton clothing is recommended. When visiting historic mosques (like Star Mosque) or Dhakeshwari temple, shoulders and knees should be covered, and shoes are removed at the entrance.",
  },
  {
    icon: CreditCard,
    title: "Payment & Currency Advice",
    text: "The local currency is Bangladeshi Taka (BDT). While we include all entries and meals in your package, having small BDT notes for local souvenirs, handicrafts, and tips is handy.",
  },
]

const GUEST_REVIEWS = [
  {
    name: "James Robertson",
    country: "United Kingdom",
    role: "Solo Traveler & Travel Writer",
    rating: 5,
    date: "February 2026",
    comment:
      "The Old Dhaka Heritage Tour was extraordinary! Having a private AC car and an articulate English guide made exploring Lalbagh Fort and Sadarghat effortless. The Kacchi biryani lunch was unforgettable.",
  },
  {
    name: "Elena Rossi & Marco V.",
    country: "Italy",
    role: "Architectural Researchers",
    rating: 5,
    date: "January 2026",
    comment:
      "As architects, visiting Louis Kahn's National Parliament and Curzon Hall with an informed guide was a career highlight. Seamless logistics and prompt hotel pickup. 10/10 recommended!",
  },
  {
    name: "Kenji Takahashi",
    country: "Japan",
    role: "Corporate Executive (JICA Project)",
    rating: 5,
    date: "December 2025",
    comment:
      "Booked the Corporate VIP day transit during a business trip. Supreme comfort, zero hassle with ticket lines, and great professionalism from the driver and guide. Corporate billing was seamless.",
  },
  {
    name: "Sarah Jenkins",
    country: "Australia",
    role: "Cultural Anthropologist",
    rating: 5,
    date: "November 2025",
    comment:
      "The day trip to Sonargaon and Panam Nagar was like stepping into a time machine. The guide explained Bengal's trading history brilliantly. Very safe and well-managed tour.",
  },
]

const DHAKA_TOUR_FAQS = [
  {
    q: "How can I book a Dhaka Tour package?",
    a: "You can book instantly by messaging our tour desk on WhatsApp at +880 1721-333633 or calling us directly. We will confirm your vehicle, pickup point, and custom preferences immediately.",
  },
  {
    q: "Is doorstep pickup and drop-off included in the tour price?",
    a: "Yes! Complimentary doorstep pickup and drop-off from any hotel, residence, airport, or corporate office in Dhaka (including Gulshan, Banani, Motijheel, Dhanmondi, Bashundhara, and Uttara) are included in all private tours.",
  },
  {
    q: "Are the tours safe for foreign tourists and solo female travelers?",
    a: "Absolutely. All our tours are conducted with private air-conditioned vehicles, trusted licensed guides, and vetted itineraries. We regularly host foreign delegations, international conference attendees, embassy staff, and solo tourists with a 100% positive safety record.",
  },
  {
    q: "What is included in the tour package price?",
    a: "Every private tour includes private AC transportation with chauffeur, fuel and parking, licensed English/Bengali speaking guide, all monument entrance fees, authentic traditional lunch, bottled mineral water, and boat/rickshaw experiences where applicable.",
  },
  {
    q: "Can the tour itinerary be customized for our schedule?",
    a: "Yes, our Dhaka tours are fully customizable. Whether you need a short 4-hour quick highlight tour before an evening flight, or a specialized photography walk at dawn, we adjust the timings and stops to your exact needs.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bKash, Nagad, bank transfers, major international credit/debit cards, and corporate PO billing with official VAT invoices for registered companies.",
  },
  {
    q: "What should I wear during the heritage tour?",
    a: "We recommend comfortable, lightweight cotton clothing and comfortable walking shoes. For visits to active religious monuments like Star Mosque or Dhakeshwari Temple, modest clothing covering shoulders and knees is appreciated.",
  },
  {
    q: "Do you offer multi-day tours outside Dhaka?",
    a: "Yes. In addition to Dhaka day tours, we organize multi-day excursions to Sreemangal tea gardens, Sylhet, Sundarbans mangrove forest, and Cox's Bazar beach upon request.",
  },
]

export default function DhakaTourPage() {
  // Comprehensive Schema.org Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_CONFIG.url}/#travelagency`,
        name: `${SITE_CONFIG.name} Tours & Travel Desk`,
        url: `${SITE_CONFIG.url}/tour/dhaka-tour`,
        logo: `${SITE_CONFIG.url}/images/og-image.jpg`,
        image: `${SITE_CONFIG.url}/images/tour/lalbagh-fort.jpg`,
        description:
          "Premier guided tour operator in Dhaka, Bangladesh offering private Old Dhaka heritage tours, modern architecture walks, Sonargaon day trips, and VIP transit.",
        telephone: DHAKA_TOUR_PHONE,
        email: SITE_CONFIG.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.line1,
          addressLocality: SITE_CONFIG.address.city,
          postalCode: SITE_CONFIG.address.postalCode,
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.7289,
          longitude: 90.4172,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "Dhaka",
          addressRegion: "Dhaka Division",
          addressCountry: "Bangladesh",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5.0",
          worstRating: "1.0",
          ratingCount: "285",
          reviewCount: "210",
        },
      },
      {
        "@type": "TouristTrip",
        "@id": `${SITE_CONFIG.url}/tour/dhaka-tour/#trip`,
        name: "Dhaka City & Old Dhaka Heritage Guided Day Tour",
        description:
          "Full-day guided sightseeing tour in Dhaka covering Lalbagh Fort, Ahsan Manzil Pink Palace, Star Mosque, Sadarghat Buriganga boat cruise, Curzon Hall, and National Parliament Building.",
        touristType: ["International Travelers", "Architects", "Expats", "Corporate Delegations", "History Enthusiasts"],
        provider: {
          "@id": `${SITE_CONFIG.url}/#travelagency`,
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "45",
          highPrice: "90",
          offerCount: "5",
          availability: "https://schema.org/InStock",
        },
        itinerary: ITINERARY_TIMELINE.map((item, idx) => ({
          "@type": "Action",
          name: item.title,
          description: item.description,
          startTime: item.time,
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_CONFIG.url}/tour/dhaka-tour#itinerary`,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Top Tourist Attractions in Dhaka Bangladesh",
        itemListElement: TOP_TOURIST_SPOTS.map((spot, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "TouristAttraction",
            name: spot.name,
            description: spot.description,
            image: `${SITE_CONFIG.url}${spot.image}`,
            geo: {
              "@type": "GeoCoordinates",
              latitude: spot.geo.latitude,
              longitude: spot.geo.longitude,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: spot.location,
              addressCountry: "Bangladesh",
            },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tour",
            item: `${SITE_CONFIG.url}/tour/dhaka-tour`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dhaka Tour",
            item: `${SITE_CONFIG.url}/tour/dhaka-tour`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: DHAKA_TOUR_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  }

  return (
    <div className="flex flex-col">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <PageHero
        eyebrow="Guided City Sightseeing & Heritage Packages"
        title="Dhaka Tour: Explore 400+ Years of Mughal Heritage, Architecture & Riverfronts"
        description="Experience the vibrant soul of Bangladesh's capital with curated, private full-day and half-day guided Dhaka city tours. From the Mughal fortress of Lalbagh to the Pink Palace and Louis Kahn's architectural wonder, travel in supreme comfort and safety."
        image="/images/home/dhaka-skyline.jpg"
        imageAlt="Panoramic view of Dhaka city skyline and heritage landmarks for guided sightseeing tours"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tour", href: "/tour/dhaka-tour" },
          { label: "Dhaka Tour", href: "/tour/dhaka-tour" },
        ]}
        primaryCta={{
          label: "Book Dhaka Tour via WhatsApp",
          href: `https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=Hello%20Corporate.bd,%20I%20want%20to%20book%20a%20Dhaka%20Tour`,
        }}
        secondaryCta={{
          label: `Call Desk: ${DHAKA_TOUR_PHONE}`,
          href: `tel:${DHAKA_TOUR_PHONE_RAW}`,
        }}
      />

      {/* Key Metrics Bar */}
      <section className="border-b border-border bg-muted/40 py-8" aria-label="Tour Performance Statistics">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            <div>
              <div className="font-serif text-3xl font-bold text-primary">400+</div>
              <div className="text-xs text-muted-foreground mt-1">Years of Living History</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground mt-1">Private AC Comfort</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary">5,000+</div>
              <div className="text-xs text-muted-foreground mt-1">Delegates & Tourists Guided</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary flex items-center justify-center gap-1">
                <span>4.9</span>
                <Star className="h-5 w-5 fill-amber-400 text-amber-400 inline" />
              </div>
              <div className="text-xs text-muted-foreground mt-1">285+ Verified Guest Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO MONUMENTS & ATTRACTIONS DIRECTORY */}
      <section className="py-20 bg-muted/20 border-b border-border" id="tourist-spots">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Dhaka Sightseeing & Historical Monuments
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Top Tourist Attractions & Historical Places in Dhaka
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Explore the most famous Mughal forts, royal palaces, British colonial campuses, modern architectural landmarks, and vibrant food streets included in our guided Dhaka sightseeing tours.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TOP_TOURIST_SPOTS.map((spot) => (
              <article
                key={spot.id}
                id={spot.id}
                className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <Image
                    src={spot.image}
                    alt={spot.alt}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white border border-white/20">
                      {spot.era}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white/90">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{spot.location}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {spot.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      Must-See Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center text-[11px] bg-muted px-2 py-0.5 rounded-md text-foreground/80"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full text-xs font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors"
                    >
                      <a
                        href={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=Hi!%20I%20want%20to%20visit%20${encodeURIComponent(spot.name)}%20on%20a%20Dhaka%20Tour.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Book Tour for this Spot</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison Table (SEO & High Conversion Feature) */}
      <section className="py-20 bg-background" id="comparison">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Side-by-Side Comparison
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Compare Dhaka Tour Itineraries
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Find the perfect Dhaka day tour match for your schedule, budget, and sightseeing interests.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-muted/50 text-foreground border-b border-border">
                <tr>
                  <th className="p-4 font-bold">Tour Package</th>
                  <th className="p-4 font-bold">Duration</th>
                  <th className="p-4 font-bold">Transport Mode</th>
                  <th className="p-4 font-bold">Meals Included</th>
                  <th className="p-4 font-bold">Best For</th>
                  <th className="p-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-semibold text-foreground">Old Dhaka Mughal Heritage & River Cruise Day Tour</td>
                  <td className="p-4 text-muted-foreground">Full Day (9 hrs)</td>
                  <td className="p-4 text-muted-foreground">Private AC + Rickshaw + Boat</td>
                  <td className="p-4 text-muted-foreground">Kacchi Biryani Lunch</td>
                  <td className="p-4 text-muted-foreground">History Lovers & First-timers</td>
                  <td className="p-4 text-right">
                    <a
                      href={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=I%20want%20to%20book%20the%20Old%20Dhaka%20Mughal%20Heritage%20Tour`}
                      className="text-emerald-600 hover:text-emerald-700 font-bold"
                    >
                      Book →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Dhaka City Highlights & Louis Kahn Modern Architecture Tour</td>
                  <td className="p-4 text-muted-foreground">Full Day (9 hrs)</td>
                  <td className="p-4 text-muted-foreground">Executive AC Vehicle</td>
                  <td className="p-4 text-muted-foreground">Traditional Buffet</td>
                  <td className="p-4 text-muted-foreground">Architects, Expats & Executives</td>
                  <td className="p-4 text-right">
                    <a
                      href={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=I%20want%20to%20book%20the%20Dhaka%20Modern%20Architecture%20Tour`}
                      className="text-emerald-600 hover:text-emerald-700 font-bold"
                    >
                      Book →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Old Dhaka Authentic Street Food & Photography Walking Tour</td>
                  <td className="p-4 text-muted-foreground">Half Day (5 hrs)</td>
                  <td className="p-4 text-muted-foreground">AC Drop + Walk + Rickshaw</td>
                  <td className="p-4 text-muted-foreground">Multiple Street Tastings</td>
                  <td className="p-4 text-muted-foreground">Foodies & Photographers</td>
                  <td className="p-4 text-right">
                    <a
                      href={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=I%20want%20to%20book%20the%20Old%20Dhaka%20Street%20Food%20Tour`}
                      className="text-emerald-600 hover:text-emerald-700 font-bold"
                    >
                      Book →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Sonargaon Ancient Capital & Panam Nagar Day Trip from Dhaka</td>
                  <td className="p-4 text-muted-foreground">Full Day (9 hrs)</td>
                  <td className="p-4 text-muted-foreground">Private AC Vehicle</td>
                  <td className="p-4 text-muted-foreground">Rural Bengali Lunch</td>
                  <td className="p-4 text-muted-foreground">Ancient Heritage Excursion</td>
                  <td className="p-4 text-right">
                    <a
                      href={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=I%20want%20to%20book%20the%20Sonargaon%20Panam%20City%20Tour`}
                      className="text-emerald-600 hover:text-emerald-700 font-bold"
                    >
                      Book →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">VIP Corporate Dhaka City Sightseeing & Executive Day Transit</td>
                  <td className="p-4 text-muted-foreground">Custom (4–10 hrs)</td>
                  <td className="p-4 text-muted-foreground">Luxury AC SUV / HiAce</td>
                  <td className="p-4 text-muted-foreground">5-Star Hotel Buffet</td>
                  <td className="p-4 text-muted-foreground">Diplomats & Business Delegates</td>
                  <td className="p-4 text-right">
                    <a
                      href={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=I%20want%20to%20inquire%20about%20the%20VIP%20Corporate%20Dhaka%20Tour`}
                      className="text-emerald-600 hover:text-emerald-700 font-bold"
                    >
                      Book →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included in Every Tour */}
      <section className="py-20 bg-muted/30 border-y border-border" id="inclusions">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              All-Inclusive Standard
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              What Is Included In Every Dhaka Tour
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              No hidden fees, no ticket hassles. We handle all logistics so you can enjoy every minute of your Dhaka journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-foreground">{feat.title}</h3>
                <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Full-Day Tour Schedule */}
      <section className="py-20 bg-background" id="itinerary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Standard Itinerary
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              A Typical Day on the Old Dhaka Heritage Tour
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Here is how a seamless, full-day guided heritage tour unfolds from morning pickup to evening drop-off.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative border-l-2 border-primary/20 pl-6 space-y-6 ml-4 md:ml-auto">
            {ITINERARY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-4 h-4 w-4 rounded-full bg-emerald-500 border-2 border-background ring-4 ring-emerald-500/20" />
                <div className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm group-hover:border-primary/30 transition-colors overflow-hidden">
                  <div className="relative w-full sm:w-28 h-24 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                        {item.time}
                      </span>
                      <h3 className="font-serif font-bold text-sm md:text-base text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dhaka Travel Guide & Practical Tips (E-E-A-T SEO Content) */}
      <section className="py-20 bg-muted/20 border-y border-border" id="travel-guide">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Expert Travel Advice
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Dhaka Sightseeing & Travel Guide
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Everything international tourists, expats, and first-time travelers need to know for a smooth, enjoyable visit to Dhaka.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TRAVEL_GUIDE_TIPS.map((tip, idx) => {
              const Icon = tip.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2.5 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-foreground">
                    {tip.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Verified Guest Reviews & Testimonials (Social Proof & SEO E-E-A-T) */}
      <section className="py-20 bg-background" id="reviews">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span>4.9 / 5.0 Rating • 285+ Reviews</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              What Our Travelers Say About Dhaka Tours
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Real feedback from international tourists, writers, corporate delegates, and researchers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {GUEST_REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60">
                  <div className="font-bold text-sm text-foreground">{rev.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center justify-between mt-0.5">
                    <span>{rev.country}</span>
                    <span className="text-[11px] text-muted-foreground/80">{rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request Banner */}
      <section className="py-12 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Custom Group & Corporate Delegations</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Need a Customized Dhaka City Tour?
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
                  Whether you are organizing a tour for international conference delegates, VIP foreign executives, university groups, or an extended family, we tailor timing, vehicles, food, and language guides to your exact requirements.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <a
                    href={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=Hi!%20I%20would%20like%20to%20plan%20a%20customized%20Dhaka%20City%20Tour.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp: {DHAKA_TOUR_PHONE}</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/contact">Request Custom Itinerary</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background" id="faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Dhaka Tour FAQs
            </h2>
            <p className="text-muted-foreground text-sm">
              Answers to the most common questions about touring Dhaka, transport, guides, and safety.
            </p>
          </div>

          <div className="space-y-4">
            {DHAKA_TOUR_FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-5 space-y-2 shadow-sm"
              >
                <h3 className="font-serif font-bold text-base text-foreground flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-muted-foreground pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore the Wonders of Dhaka?"
        description="Book your private guided Dhaka city tour today with our experienced tour operations desk in Motijheel, Dhaka."
        primaryLabel="Book Dhaka Tour on WhatsApp"
        primaryHref={`https://wa.me/${DHAKA_TOUR_PHONE_RAW}?text=Hello!%20I%20want%20to%20book%20a%20Dhaka%20City%20Tour`}
      />
    </div>
  )
}

