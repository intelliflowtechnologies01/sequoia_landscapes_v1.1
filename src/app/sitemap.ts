import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sequoialandscapesolutions.com";
  return ["", "/services", "/gallery", "/our-story", "/contact"].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path ? 0.8 : 1 }));
}
