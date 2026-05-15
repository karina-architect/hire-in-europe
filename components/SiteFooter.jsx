import Link from "next/link";
import Image from "next/image";
import { copy, legalNotice, mandatoryDisclaimers, localizedPath, seoPages, footerLegalLinks, serviceNotice } from "@/lib/content";

export default function SiteFooter({ locale = "en" }) {
  const c = copy[locale] || copy.en;
  const freelancers = seoPages.filter((p) => p.group === "freelancers").slice(0, 6);
  const companies = seoPages.filter((p) => p.group === "companies").slice(0, 6);
  const services = seoPages.filter((p) => p.group === "services").slice(0, 5);

  return (
    <footer className="footer">
      <div className="footerGrid five">
        <div>
          <Image src="/workora-mark.png" alt="Workora" width={54} height={54} className="footerMark" />
          <h3 className="footerBrandText">Workora</h3>
          <p>{c.footer}</p>
          <p className="finePrint">{legalNotice[locale] || legalNotice.en}</p>
          <p className="finePrint">{serviceNotice}</p>
        </div>
        <div><h4>Companies</h4>{companies.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}</div>
        <div><h4>Freelancers</h4>{freelancers.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}</div>
        <div><h4>Legal & compliance</h4>{footerLegalLinks.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.label}</Link>)}<Link href={localizedPath(locale, "tax-calculator")}>EU tax calculator</Link></div>
        <div><h4>Services</h4>{services.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}</div>
      </div>
      <div className="footerLegal">
        {mandatoryDisclaimers.map((item) => <p key={item}>{item}</p>)}
        <p>Immigration and residency outcomes remain subject to local authority approval and applicable legal requirements.</p>
        <p>Certain workforce structures may not be available in specific jurisdictions due to local labor leasing, payroll, tax, immigration or employment regulations.</p>
      </div>
      <div className="footerBottom">© {new Date().getFullYear()} Workora. {c.disclaimer}</div>
    </footer>
  );
}
