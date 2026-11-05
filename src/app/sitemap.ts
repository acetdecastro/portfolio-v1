import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL("/", siteUrl).href },
    ...projects.map((project) => ({
      url: new URL(`/work/${project.slug}/`, siteUrl).href,
    })),
  ];
}
