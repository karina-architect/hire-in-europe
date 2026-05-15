import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { copy, legalNotice, pricing, revenueStreams, seoPages, faq, localizedPath, site, servicePortfolio, serviceNotice } from "@/lib/content";
import Link from "next/link";

export default function HomePage() { return <WorkoraHome locale="en" />; }

export function WorkoraHome({ locale = "en" }) {
  const c = copy[locale] || copy.en;
  const freelancers = seoPages.filter((p) => p.group === "freelancers");
  const companies = seoPages.filter((p) => p.group === "companies");
  const services = seoPages.filter((p) => p.group === "services");
  const orgSchema = { "@context":"https://schema.org", "@type":"Organization", name:"Workora", url:site.baseUrl, logo:`${site.baseUrl}/workora-logo.png`, description:"Compliance-driven workforce infrastructure for Europe" };
  const faqSchema = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: faq.map(([q,a])=>({"@type":"Question", name:q, acceptedAnswer:{"@type":"Answer", text:a}})) };
  return (
    <main className="pageShell">
      <JsonLd data={orgSchema}/><JsonLd data={faqSchema}/>
      <SiteHeader locale={locale}/>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <span className="pill">{c.badge}</span>
            <h1>{c.h1}</h1>
            <p>{c.subtitle}</p>
            <div className="heroActions"><a className="primaryBtn" href="#lead-capture">{c.cta}</a><Link className="secondaryBtn" href={localizedPath(locale,"tax-calculator")}>{c.cta2}</Link></div>
            <div className="proofGrid">{c.proof.map((x)=><div className="proofItem" key={x}>✓ {x}</div>)}</div>
          </div>
          <div className="heroPanel">
            <span className="eyebrow">Workforce governance</span>
            <h3>{c.complianceTitle}</h3>
            <p>{c.complianceBody}</p>
            <div className="complianceSeal">{legalNotice[locale] || legalNotice.en}</div>
          </div>
        </div>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Platform focus</span><h2 className="sectionTitle">{c.segmentTitle}</h2><p className="sectionSub">{c.segmentSub}</p>
        <div className="grid3">
          <div className="featureCard"><div className="featureIcon">1</div><h3>Compliance assessment</h3><p>Every engagement is assessed against local labor, tax, social security, payroll, immigration and operational-control rules.</p></div>
          <div className="featureCard"><div className="featureIcon">2</div><h3>Operational substance</h3><p>Workora highlights HR administration, onboarding, payroll operations, lifecycle support, documentation and governance responsibilities.</p></div>
          <div className="featureCard"><div className="featureIcon">3</div><h3>Client responsibility framework</h3><p>Supervision, deliverables, workplace tools and day-to-day control must be clearly understood before any structure is proposed.</p></div>
        </div>
      </section>

      <section className="darkSection" id="compliance"><div className="container sectionPad grid2">
        <div><span className="eyebrow">Legal defensibility</span><h2 className="sectionTitle">Compliance-first language built into the offer</h2><p>Workora is not marketed as a shortcut, wrapper or immigration guarantee. The website now presents a workforce operations platform with jurisdiction-specific review, not an artificial freelancer-to-employee mechanism.</p></div>
        <div className="grid2">
          {[
            ["Anti-misclassification policy","Operational reality, supervision, dependency and local employment rules are reviewed before structuring."],
            ["Immigration boundaries","Workora does not guarantee visas, residency or work authorization approvals."],
            ["No artificial employment","No disguised self-employment, payroll-only wrappers or circumvention structures."],
            ["Country limitations","Services vary by jurisdiction and are subject to local labor leasing, payroll and tax restrictions."]
          ].map(([h,p])=><div className="darkCard" key={h}><h3>{h}</h3><p>{p}</p></div>)}
        </div>
      </div></section>

      <section className="container sectionPad" id="consultants">
        <span className="eyebrow">Professional transition support</span><h2 className="sectionTitle">Freelancer positioning, made safer</h2><p className="sectionSub">Workora supports eligible professionals through structured workforce transition and client-continuity support where the operating reality can be made compliant. This avoids risky “bring your own client” or “same work, only payroll changes” narratives.</p>
        <div className="grid2">
          <div className="featureCard"><h3>Existing Client Transition Support</h3><p>For qualified professionals with an existing international engagement requiring a defensible structure, documentation, payroll pathway or work authorization review.</p></div>
          <div className="featureCard"><h3>Managed Workforce Transition</h3><p>For companies that need to move contractor-like relationships into reviewed, documented and jurisdiction-appropriate workforce operations.</p></div>
        </div>
      </section>

      <section className="comparisonSection" id="comparison"><div className="container sectionPad">
        <span className="eyebrow">Positioning</span><h2 className="sectionTitle">Not a generic EOR. Not a payroll wrapper.</h2><p className="sectionSub">Workora is compliance-driven workforce infrastructure adapted to local jurisdictional requirements.</p>
        <div className="comparisonTable"><div className="comparisonHead"><div>Dimension</div><div>Generic EOR only</div><div>Payroll-only wrapper</div><div>Workora</div></div>
        {[["Primary narrative","Convenience","Administration","Compliance and operations"],["Worker classification","Limited front-end depth","Often unclear","Assessment-led"],["Immigration optics","May vary","High risk if used as shortcut","No guarantees; eligibility reviewed"],["Operational substance","Platform dependent","Weak","HR, payroll and governance visible"],["Jurisdiction fit","Standardized","Thin","Country-specific limitations"]].map((r)=><div className="comparisonRow" key={r[0]}>{r.map((x,i)=><div className={i===3?"highlighted":""} key={x}>{x}</div>)}</div>)}
        </div>
      </div></section>

      <section className="container sectionPad" id="services">
        <span className="eyebrow">Extended services</span>
        <h2 className="sectionTitle">Residence, work permit and relocation support — within a compliance-first framework</h2>
        <p className="sectionSub">Workora can coordinate adjacent mobility and professional-support workflows such as residence card assistance, work permit preparation, family relocation planning and access to independent legal, tax, immigration and payroll specialists. These services are support and coordination services, not approval guarantees.</p>
        <div className="grid3">
          {servicePortfolio.map((service)=>(
            <div className="featureCard" key={service.name}>
              <div className="featureIcon">✓</div>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
              <Link href={localizedPath(locale, service.slug)}>Explore service →</Link>
            </div>
          ))}
        </div>
        <p className="disclaimer">{serviceNotice}</p>
      </section>

      <section className="container sectionPad" id="pricing"><span className="eyebrow">Pricing</span><h2 className="sectionTitle">{c.pricingTitle}</h2><div className="grid3">{pricing.map((p)=><div className="priceCard" key={p.name}><h3>{p.name}</h3><div className="price">{p.price}</div><p>{p.text}</p><ul>{p.points.map((x)=><li key={x}>{x}</li>)}</ul></div>)}</div><p className="disclaimer">Pricing is indicative and subject to country, role, employment model, legal review, payroll provider fees and scope of service.</p></section>

      <section className="container sectionPad"><span className="eyebrow">Business model</span><h2 className="sectionTitle">{c.revenueTitle}</h2><div className="grid3">{revenueStreams.map(([h,p])=><div className="revenueCard" key={h}><h3>{h}</h3><p>{p}</p></div>)}</div></section>

      <section className="container sectionPad"><span className="eyebrow">Search architecture</span><h2 className="sectionTitle">{c.guideTitle}</h2><p className="sectionSub">{c.guideSub}</p><div className="guideHub three"><div><h3>Freelancers and consultants</h3>{freelancers.map((p)=><div className="guideCard" key={p.slug}><h3>{p.intent}</h3><p>{p.meta}</p><Link href={localizedPath(locale,p.slug)}>Read guide →</Link></div>)}</div><div><h3>Companies</h3>{companies.map((p)=><div className="guideCard" key={p.slug}><h3>{p.intent}</h3><p>{p.meta}</p><Link href={localizedPath(locale,p.slug)}>Read guide →</Link></div>)}</div><div><h3>Mobility and advisory services</h3>{services.map((p)=><div className="guideCard" key={p.slug}><h3>{p.intent}</h3><p>{p.meta}</p><Link href={localizedPath(locale,p.slug)}>Read guide →</Link></div>)}</div></div></section>

      <section className="container sectionPad"><div className="seoCard"><span className="eyebrow">SEO implementation</span><h2 className="sectionTitle smallTop">Search intent is handled by page architecture, not homepage keyword clutter</h2><p className="sectionSub">The raw keyword cloud has been removed from the public homepage experience. Ranking signals are now placed into focused URLs, metadata, FAQ schema, breadcrumbs, internal links, sitemap, robots and page-level content.</p></div></section>

      <section className="container sectionPad" id="lead-capture"><div className="leadGrid"><div><span className="eyebrow">Assessment request</span><h2 className="sectionTitle">{c.leadTitle}</h2><p className="sectionSub">{c.leadSub}</p><div className="statusBar">{legalNotice[locale] || legalNotice.en}</div></div><LeadForm locale={locale} source="homepage"/></div></section>

      <section className="container sectionPad" id="faq"><span className="eyebrow">FAQ</span><h2 className="sectionTitle">Frequently asked compliance questions</h2><div className="grid2">{faq.map(([q,a])=><div className="featureCard" key={q}><h3>{q}</h3><p>{a}</p></div>)}</div></section>
      <SiteFooter locale={locale}/>
    </main>
  );
}
