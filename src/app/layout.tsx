import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sequoialandscapesolutions.com";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sequoia Landscapes | Nature, composed.",
    template: "%s | Sequoia Landscapes",
  },
  description: "Premium landscape design, execution and enduring garden stewardship in Hyderabad and beyond.",
  keywords: ["landscape design", "landscape execution", "garden design", "Hyderabad landscaping", "Sequoia Landscapes"],
  openGraph: {
    title: "Sequoia Landscapes | Nature, composed.",
    description: "Considered outdoor environments, shaped through design intelligence and living craftsmanship.",
    type: "website",
    locale: "en_IN",
    siteName: "Sequoia Landscapes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sequoia Landscapes | Nature, composed.",
    description: "Considered outdoor environments, shaped through design intelligence and living craftsmanship.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
