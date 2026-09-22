"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announcement-bar">
        <p>
          Now booking landscape consultations in Hyderabad
          <span aria-hidden="true">•</span>
          <Link href="/contact">Reserve a consultation <ArrowUpRight size={13} /></Link>
        </p>
      </div>

      <header className="site-header">
        <div className="header-inner island-nav">
          <Link href="/" className="brand" aria-label="Sequoia Landscapes home">
            <Image src={assetPath("/images/sequoia-master-logo.png")} alt="Sequoia" width={500} height={500} priority />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="island-cta" aria-label="Book a consultation">
            <span>Let&apos;s talk</span><ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, scale: 0.96, y: -12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: -12 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
              <div className="mobile-nav-label">Navigation</div>
              {navigation.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                  <Link href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>
                </motion.div>
              ))}
              <Link href="/contact" className="button button-gold" onClick={() => setOpen(false)}>Book a consultation</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
