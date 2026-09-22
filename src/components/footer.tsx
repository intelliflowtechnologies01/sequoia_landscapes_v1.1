import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src={assetPath("/images/sequoia-master-logo.png")} alt="Sequoia" width={500} height={500} />
          <p>Landscapes designed to live beautifully.</p>
        </div>
        <div><p className="footer-label">Explore</p><nav aria-label="Footer navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
        <div><p className="footer-label">Contact</p><a href="tel:+919459047777">+91 94590 47777</a><a href="mailto:info@sequoialandscapesolutions.com">info@sequoialandscapesolutions.com</a><p>Hyderabad, Telangana</p></div>
        <div><p className="footer-label">Start a conversation</p><Link href="/contact" className="footer-project-link">Discuss your site <ArrowUpRight size={20} aria-hidden="true" /></Link></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Sequoia Landscapes. All rights reserved.</p><p>Nature, composed.</p></div>
    </footer>
  );
}
