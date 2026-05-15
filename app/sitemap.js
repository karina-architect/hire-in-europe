import { site, locales, defaultLocale, seoPages, localizedPath } from "@/lib/content";

export default function sitemap() {
  const routes = ["", "tax-calculator", ...seoPages.map((p)=>p.slug)];
  const urls = [];
  for (const locale of Object.keys(locales)) {
    for (const route of routes) {
      urls.push({ url: `${site.baseUrl}${localizedPath(locale, route)}`, lastModified: new Date(), changeFrequency: route ? "monthly" : "weekly", priority: route ? 0.75 : 1 });
    }
  }
  return urls;
}
