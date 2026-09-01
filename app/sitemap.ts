import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/site-config"
import { SERVICE_CATEGORIES, Service } from "@/lib/services-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/tour/dhaka-tour`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = Object.values(SERVICE_CATEGORIES).map(
    (cat) => ({
      url: `${baseUrl}/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  )

  const serviceRoutes: MetadataRoute.Sitemap = Object.values(SERVICE_CATEGORIES).flatMap(
    (cat) =>
      cat.services.map((service: Service) => ({
        url: `${baseUrl}/${cat.slug}/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
  )

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes]
}
