import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default function NotFound(){return <main><SiteHeader/><section className="container sectionPad"><span className="eyebrow">404</span><h1 className="sectionTitle">Page not found</h1><p className="sectionSub">This Workora page does not exist. Return to the homepage or explore the calculator.</p><div className="heroActions"><Link className="primaryBtn" href="/">Home</Link><Link className="secondaryBtn" href="/tax-calculator">Tax calculator</Link></div></section><SiteFooter/></main>}
