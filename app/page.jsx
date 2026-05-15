import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import {
  copy,
  legalNotice,
  mandatoryDisclaimers,
  complianceFramework,
  responsibilities,
  pricing,
  revenueStreams,
  seoPages,
  faq,
  localizedPath,
  site,
  servicePortfolio,
  serviceNotice,
  responsibilitySplit,
  operationalLifecycle
} from "@/lib/content";

export default function HomePage() {
  return <WorkoraHome locale="en" />;
}

export function WorkoraHome({ locale = "en" }) {
  const c = copy[locale] || copy.en;
  const freelancers = seoPages.filter((p) => p.group === "freelancers");
  const companies = seoPages.filter((p) => p.group === "companies");
  const services = seoPages.filter((p) => p.group === "services");
  const compliance = seoPages.filter((p) => p.group === "compliance");
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Workora",
    url: site.baseUrl,
    logo: `${site.baseUrl}/workora-logo.png`,
    description: "Compliance-driven global workforce operations and payroll infrastructure for Europe"
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };

  return (
    <main className="pageShell">
      <JsonLd data={orgSchema} />
      <JsonLd data={faqSchema} />
      <SiteHeader locale={locale} />

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <span className="pill">{c.badge}</span>
            <h1>{c.h1}</h1>
            <p>{c.subtitle}</p>
            <div className="heroActions">
              <a className="primaryBtn" href="#lead-capture">{c.cta}</a>
              <Link className="secondaryBtn" href={localizedPath(locale, "tax-calculator")}>{c.cta2}</Link>
            </div>
            <div className="proofGrid">
              {c.proof.map((x) => <div className="proofItem" key={x}>✓ {x}</div>)}
            </div>
          </div>
          <div className="heroPanel">
            <span className="eyebrow">Compliance governance</span>
            <h3>{c.complianceTitle}</h3>
            <p>{c.complianceBody}</p>
            <div className="complianceSeal"><strong>Legal positioning:</strong> {legalNotice[locale] || legalNotice.en}</div>
          </div>
        </div>
      </section>

      <section className="container sectionPad" id="compliance">
        <span className="eyebrow">Compliance & Legal Framework</span>
        <h2 className="sectionTitle">Visible legal protection built into the platform</h2>
        <p className="sectionSub">Workora is presented as a global workforce operations and compliance platform, not an employment shortcut, freelancer payroll wrapper or immigration workaround.</p>
        <div className="mandatoryGrid">
          {mandatoryDisclaimers.map((item, index) => (
            <div className="mandatoryCard" key={item}>
              <strong>Mandatory disclaimer {index + 1}</strong>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="darkSection">
        <div className="container sectionPad grid2">
          <div>
            <span className="eyebrow">Anti-misclassification framework</span>
            <h2 className="sectionTitle">Worker Classification & Compliance</h2>
            <p>Every workforce engagement is assessed before any structure is proposed. The framework reviews contractor status, operational independence, economic dependency, supervision, local labor rules, tax, payroll, social security and immigration eligibility.</p>
            <div className="heroActions">
              <Link className="primaryBtn" href={localizedPath(locale, "worker-classification-compliance")}>Read classification policy</Link>
              <Link className="secondaryBtn" href={localizedPath(locale, "compliance-legal-framework")}>Read compliance framework</Link>
            </div>
          </div>
          <div className="grid2">
            {complianceFramework.slice(1, 7).map(([h, p]) => (
              <div className="darkCard" key={h}><h3>{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Worker classification depth</span>
        <h2 className="sectionTitle">Operational classification review before any workforce structure</h2>
        <p className="sectionSub">Workora explicitly reviews the factors regulators examine during worker-classification investigations. Structures are not proposed when the facts create unacceptable misclassification, labor leasing, payroll, immigration or tax risk.</p>
        <div className="grid3">
          {[
            ["Economic dependency assessment", "Revenue concentration, single-client dependency and employment-like dependency indicators are reviewed."],
            ["Operational independence review", "Autonomy, decision-making, professional independence and integration into the client organization are assessed."],
            ["Multi-client analysis", "Multi-client activity, market-facing independence and commercial-risk indicators are checked."],
            ["Supervision analysis", "Day-to-day control, schedule control, approval lines and managerial authority are documented."],
            ["Equipment/control assessment", "Tools, systems, working hours, workplace rules and operational control indicators are reviewed."],
            ["Local law classification analysis", "Local labor law, tax, social security, payroll, immigration and labor leasing restrictions are assessed or escalated."],
          ].map(([h, p]) => <div className="featureCard" key={h}><h3>{h}</h3><p>{p}</p></div>)}
        </div>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Client vs Workora responsibilities</span>
        <h2 className="sectionTitle">Who controls what — documented before launch</h2>
        <p className="sectionSub">This separation is designed to avoid shell-employer optics and clarify operational reality. Workora administers workforce governance and HR/payroll workflows where permitted; the client remains responsible for project delivery context and truthful operating information.</p>
        <div className="splitMatrix">
          {responsibilitySplit.map((card) => (
            <div className="splitCard" key={card.title}>
              <h3>{card.title}</h3>
              <ul>{card.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Operational substance workflow</span>
        <h2 className="sectionTitle">Visible governance, onboarding and workforce lifecycle controls</h2>
        <p className="sectionSub">The site now shows real operational substance: HR processes, governance, onboarding, compliance review, payroll controls, operational workflows and workforce lifecycle management.</p>
        <div className="processFlow">
          {operationalLifecycle.map(([h, p], index) => (
            <div className="processStep" key={h}>
              <strong>{index + 1}</strong>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container sectionPad">
        <div className="legalAlert">
          Immigration and residency outcomes remain subject to local authority approval and applicable legal requirements. Certain workforce structures may not be available in specific jurisdictions due to local labor leasing, payroll, tax, immigration, social security or employment regulations.
        </div>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Operational substance</span>
        <h2 className="sectionTitle">Clear responsibilities before launch</h2>
        <p className="sectionSub">To avoid shell-employer optics, Workora makes operational substance visible: HR administration, payroll operations, onboarding, lifecycle management, documentation, compliance governance and defined responsibility boundaries.</p>
        <div className="grid4">
          {responsibilities.map(([h, p]) => (
            <div className="featureCard" key={h}><div className="featureIcon">✓</div><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Platform focus</span>
        <h2 className="sectionTitle">A safer way to structure international work</h2>
        <p className="sectionSub">Freelancer and consultant support remains available, but the primary narrative is workforce operations, compliance governance, mobility coordination, HR administration and payroll infrastructure.</p>
        <div className="grid3">
          <div className="featureCard"><div className="featureIcon">1</div><h3>Compliance assessment</h3><p>Every engagement is assessed against local labor, tax, social security, payroll, immigration and operational-control rules.</p></div>
          <div className="featureCard"><div className="featureIcon">2</div><h3>Structured onboarding</h3><p>Workora avoids “easy setup” language and uses assessed, documented, jurisdiction-specific onboarding workflows.</p></div>
          <div className="featureCard"><div className="featureIcon">3</div><h3>Jurisdiction availability</h3><p>Not every service is available everywhere. Local labor leasing, payroll, immigration and tax restrictions determine the route.</p></div>
        </div>
      </section>

      <section className="container sectionPad" id="consultants">
        <span className="eyebrow">Professional transition support</span>
        <h2 className="sectionTitle">Freelancer positioning, made legally safer</h2>
        <p className="sectionSub">Workora supports eligible professionals through structured workforce transition and client-continuity support where the operating reality can be made compliant. The site avoids risky “bring your own client”, “same client, same work” and “easy employment” narratives.</p>
        <div className="grid2">
          <div className="featureCard"><h3>Existing Client Transition Support</h3><p>For qualified professionals with an existing international engagement requiring a defensible structure, documentation, payroll pathway or work authorization review.</p></div>
          <div className="featureCard"><h3>Managed Workforce Transition</h3><p>For companies that need to move contractor-like relationships into reviewed, documented and jurisdiction-appropriate workforce operations.</p></div>
        </div>
      </section>

      <section className="comparisonSection" id="comparison">
        <div className="container sectionPad">
          <span className="eyebrow">Positioning</span>
          <h2 className="sectionTitle">Not a generic EOR. Not a payroll wrapper.</h2>
          <p className="sectionSub">Workora is compliance-driven workforce infrastructure adapted to local jurisdictional requirements.</p>
          <div className="comparisonTable">
            <div className="comparisonHead"><div>Dimension</div><div>Generic EOR only</div><div>Payroll-only wrapper</div><div>Workora</div></div>
            {[
              ["Primary narrative", "Convenience", "Administration", "Compliance and operations"],
              ["Worker classification", "Limited front-end depth", "Often unclear", "Assessment-led"],
              ["Immigration optics", "May vary", "High risk if used as shortcut", "No guarantees; eligibility reviewed"],
              ["Operational substance", "Platform dependent", "Weak", "HR, payroll and governance visible"],
              ["Jurisdiction fit", "Standardized", "Thin", "Country-specific limitations"]
            ].map((row) => <div className="comparisonRow" key={row[0]}>{row.map((x, i) => <div className={i === 3 ? "highlighted" : ""} key={x}>{x}</div>)}</div>)}
          </div>
        </div>
      </section>

      <section className="container sectionPad" id="services">
        <span className="eyebrow">Extended services</span>
        <h2 className="sectionTitle">Residence, work permit and relocation support — within a compliance-first framework</h2>
        <p className="sectionSub">Workora can coordinate adjacent mobility and professional-support workflows such as residence card assistance, work permit preparation, family relocation planning and access to independent legal, tax, immigration and payroll specialists. These are support and coordination services, not approval guarantees.</p>
        <div className="grid3">
          {servicePortfolio.map((service) => (
            <div className="featureCard" key={service.name}>
              <div className="featureIcon">✓</div>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
              <Link href={localizedPath(locale, service.slug)}>Explore service →</Link>
            </div>
          ))}
        </div>
        <p className="disclaimer strongDisclaimer">{serviceNotice}</p>
      </section>

      <section className="container sectionPad" id="pricing">
        <span className="eyebrow">Pricing</span>
        <h2 className="sectionTitle">{c.pricingTitle}</h2>
        <div className="grid4">
          {pricing.map((p) => (
            <div className="priceCard" key={p.name}>
              <h3>{p.name}</h3><div className="price">{p.price}</div><p>{p.text}</p><ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="disclaimer">Pricing is indicative and subject to country, role, employment model, legal review, payroll provider fees and scope of service.</p>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Business model</span>
        <h2 className="sectionTitle">{c.revenueTitle}</h2>
        <div className="grid3">{revenueStreams.map(([h, p]) => <div className="revenueCard" key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
      </section>

      <section className="container sectionPad">
        <span className="eyebrow">Guide hub</span>
        <h2 className="sectionTitle">{c.guideTitle}</h2>
        <p className="sectionSub">{c.guideSub}</p>
        <div className="guideHub four">
          <div><h3>Freelancers and consultants</h3>{freelancers.map((p) => <GuideLink key={p.slug} locale={locale} page={p} />)}</div>
          <div><h3>Companies</h3>{companies.map((p) => <GuideLink key={p.slug} locale={locale} page={p} />)}</div>
          <div><h3>Compliance</h3>{compliance.map((p) => <GuideLink key={p.slug} locale={locale} page={p} />)}</div>
          <div><h3>Mobility and advisory services</h3>{services.map((p) => <GuideLink key={p.slug} locale={locale} page={p} />)}</div>
        </div>
      </section>

      <section className="container sectionPad">
        <div className="seoCard">
          <span className="eyebrow">SEO implementation</span>
          <h2 className="sectionTitle smallTop">Search intent is handled by page architecture, not homepage keyword clutter</h2>
          <p className="sectionSub">Raw keyword clouds are removed from the public homepage. Ranking signals live in focused URLs, titles, descriptions, FAQ schema, breadcrumbs, canonical paths, sitemap, robots and internal links.</p>
        </div>
      </section>

      <section className="container sectionPad" id="lead-capture">
        <div className="leadGrid">
          <div>
            <span className="eyebrow">Assessment request</span>
            <h2 className="sectionTitle">{c.leadTitle}</h2>
            <p className="sectionSub">{c.leadSub}</p>
            <div className="statusBar">Immigration, residency, work authorization, tax, payroll and employment outcomes are subject to local authority approval, professional review and jurisdiction-specific eligibility.</div>
          </div>
          <LeadForm locale={locale} source="homepage" />
        </div>
      </section>

      <section className="container sectionPad" id="faq">
        <span className="eyebrow">FAQ</span>
        <h2 className="sectionTitle">Compliance questions before booking</h2>
        <div className="grid2">{faq.map(([q, a]) => <div className="featureCard" key={q}><h3>{q}</h3><p>{a}</p></div>)}</div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

function GuideLink({ locale, page }) {
  return (
    <div className="guideCard compactGuide">
      <h3>{page.intent}</h3>
      <p>{page.meta}</p>
      <Link href={localizedPath(locale, page.slug)}>Read guide →</Link>
    </div>
  );
}
