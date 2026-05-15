import Link from "next/link";
import Image from "next/image";
import { copy, legalNotice, localizedPath, seoPages } from "@/lib/content";

export default function SiteFooter({ locale = "en" }) {
  const c = copy[locale] || copy.en;
  const freelancers = seoPages.filter((p) => p.group === "freelancers");
  const companies = seoPages.filter((p) => p.group === "companies");
  const services = seoPages.filter((p) => p.group === "services");
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <Image src="/workora-logo.png" alt="Workora" width={180} height={75} className="footerLogo" />
          <p>{c.footer}</p>
          <p className="finePrint">{legalNotice[locale] || legalNotice.en}</p>
        </div>
        <div>
          <h4>Freelancers</h4>
          {freelancers.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}
        </div>
        <div>
          <h4>Companies</h4>
          {companies.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}
        </div>
        <div>
          <h4>Services</h4>
          {services.map((p) => <Link key={p.slug} href={localizedPath(locale, p.slug)}>{p.intent}</Link>)}
          <Link href={localizedPath(locale, "tax-calculator")}>EU tax calculator</Link>
        </div>
      </div>
      <div className="footerBottom">© {new Date().getFullYear()} Workora. {c.disclaimer}</div>
    </footer>
  );
}
