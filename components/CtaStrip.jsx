import Link from "next/link";
import { copy, localizedPath } from "@/lib/content";
export default function CtaStrip({ locale="en" }) {
 const c=copy[locale]||copy.en;
 return <section className="ctaStrip"><div><span className="eyebrow">Next step</span><h2>{c.leadTitle}</h2><p>{c.leadSub}</p></div><Link className="primaryBtn" href="#lead-capture">{c.cta}</Link></section>;
}
