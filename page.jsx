import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/SeoLandingPage";
import { seoPages, getPageBySlug, pageMeta, SITE_URL } from "@/lib/content";
export function generateStaticParams(){return seoPages.map(p=>({slug:p.slug}))}
export function generateMetadata({params}){const page=getPageBySlug(params.slug); if(!page) return {}; const {title,description}=pageMeta(page,"en"); return {title,description,alternates:{canonical:`${SITE_URL}/${page.slug}`}}}
export default function Page({params}){const page=getPageBySlug(params.slug); if(!page) notFound(); return <SeoLandingPage page={page} locale="en" />}
