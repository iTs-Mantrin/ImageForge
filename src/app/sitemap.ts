import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";

const baseUrl = "https://imageforge.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...tools.map((tool) => ({ url: `${baseUrl}/${tool.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: tool.popular ? 0.9 : 0.75 }))
  ];
}
