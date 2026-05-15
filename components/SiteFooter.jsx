import Link from "next/link";
import Image from "next/image";
import { copy, legalNotice, mandatoryDisclaimers, localizedPath, seoPages } from "@/lib/content";

export default function SiteFooter({ locale = "en" }) {
  const c = copy[locale] || copy.en;
  const freelancers = seoPages.filter((p) => p.group === "freelancers").slice(0, 6);
  const companies = seoPages.filter((p) => p.group === "companies").slice(0, 6);
  const compliance = seoPages.filter((p) => p.group === "compliance");
  const services = seoPages.filter((p) => p.group === "services").slice(0, 5);
  return (
    <footer className="footer">
      <div className="footerGrid five">
        <div>
          <Image src="/workora-logo.png" alt="Workora" width={220} height={70} className="footerLogo" />
          <p>{c.footer}</p>
          <p className="finePrint">{legalNotice[locale] || legalNotice.en}</p>
        </div>
        <div><h4>Companies</h4>{companies.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}</div>
        <div><h4>Freelancers</h4>{freelancers.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}</div>
        <div><h4>Compliance</h4>{compliance.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}<Link href={localizedPath(locale, "tax-calculator")}>EU tax calculator</Link></div>
        <div><h4>Services</h4>{services.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}</div>
      </div>
      <div className="footerLegal">
        {mandatoryDisclaimers.map((item) => <p key={item}>{item}</p>)}
      </div>
      <div className="footerBottom">© {new Date().getFullYear()} Workora. {c.disclaimer}</div>
    </footer>
  );
}
