import { site } from "@/lib/content";
export default function robots(){return{rules:{userAgent:"*",allow:"/"},sitemap:`${site.baseUrl}/sitemap.xml`,host:site.baseUrl};}
