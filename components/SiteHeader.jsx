import Image from "next/image";
import Link from "next/link";
import { copy, locales, localizedPath, seoPages } from "@/lib/content";

export default function SiteHeader({ locale = "en" }) {
  const c = copy[locale] || copy.en;
  return (
    <header className="siteHeader">
      <Link className="brand" href={localizedPath(locale)} aria-label="Workora home">
        <Image src="/workora-logo.png" alt="Workora" width={168} height={70} priority className="brandLogo" />
      </Link>
      <nav className="desktopNav" aria-label="Main navigation">
        <Link href={localizedPath(locale, seoPages[0].slug)}>{c.nav.freelancers}</Link>
        <Link href={localizedPath(locale, "hire-employees-in-europe")}>{c.nav.companies}</Link>
        <Link href={localizedPath(locale, "work-permit-europe")}>{c.nav.services || "Services"}</Link>
        <Link href={localizedPath(locale, "tax-calculator")}>{c.nav.calculator}</Link>
        <a href="#pricing">{c.nav.pricing}</a>
        <a href="#compliance">{c.nav.compliance}</a>
      </nav>
      <div className="languageLinks" aria-label="Language links">
        {Object.keys(locales).map((l) => <Link key={l} href={localizedPath(l)}>{l.toUpperCase()}</Link>)}
      </div>
      <Link className="headerCta" href="#lead-capture">{c.nav.contact}</Link>
    </header>
  );
}
