import "./globals.css";
import { site } from "@/lib/content";

export const metadata = {
  metadataBase: new URL(site.baseUrl),
  title: { default: "Workora | Compliance-Driven Workforce Infrastructure for Europe", template: "%s | Workora" },
  description: "Workora provides compliance-driven workforce operations, payroll infrastructure, mobility support, residence card assistance, work permit coordination, family relocation support and international engagement structuring for Europe.",
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }], shortcut: "/favicon.png", apple: "/workora-mark.png" },
  openGraph: { title: "Workora", description: "Compliance-driven workforce infrastructure, mobility support and payroll operations for Europe.", url: site.baseUrl, siteName: "Workora", images: ["/workora-logo.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "Workora", description: "Compliance-driven workforce infrastructure, mobility support and payroll operations for Europe.", images: ["/workora-logo.png"] }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
