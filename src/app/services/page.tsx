import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Integrated landscape design, execution, planting, water systems and long-term garden stewardship in Hyderabad.",
};

const phases = [
  ["01", "Discover", "Site, brief, architecture and opportunity—read before anything is drawn."],
  ["02", "Compose", "Space, planting, material, water and light resolved as one design language."],
  ["03", "Deliver", "Disciplined coordination and site leadership protect every design decision."],
  ["04", "Steward", "Establishment and seasonal care help the landscape mature as intended."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Integrated capabilities" index="01" signature="CAPABILITIES" image="/images/sequoia-capabilities-dusk-v2.png" imageAlt="A contemporary home and layered tropical landscape reflected in water at blue hour" title={<>Every layer.<br /><em>One living vision.</em></>} intro="From the first line on paper to the way a garden settles into its tenth monsoon, every decision belongs to one continuous design story." />

      <section className="services-ledger">
        <div className="services-ledger-orbit" aria-hidden="true" />
        <div className="container">
          <div className="services-ledger-head">
            <Reveal><p className="eyebrow">What we shape / 02</p><h2>Six disciplines.<br /><em>One standard.</em></h2></Reveal>
            <Reveal delay={0.08} className="services-ledger-intro"><p>Our studio holds the complete landscape journey together. That continuity creates clearer decisions, stronger details and environments that feel inevitable.</p><Link href="/contact" className="text-link">Discuss your site <MoveRight size={18} /></Link></Reveal>
          </div>
          <div className="services-ledger-stage">
            <Reveal className="services-ledger-image">
              <div className="services-ledger-media">
                <Image src={assetPath("/images/sequoia-approach-atmosphere-v2.png")} alt="A mature tree anchoring a composed stone courtyard with layered planting and reflective water" fill sizes="(max-width: 900px) 100vw, 42vw" />
                <span>ONE CONTINUOUS DESIGN THREAD</span>
              </div>
            </Reveal>
            <div className="services-ledger-list">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.045} className="services-ledger-row">
                  <span>0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight size={19} aria-hidden="true" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-method">
        <div className="services-method-ghost" aria-hidden="true">CONTINUITY</div>
        <div className="container services-method-inner">
          <div className="services-method-head"><Reveal><p className="eyebrow eyebrow-light">How it moves / 03</p><h2>Clear from first walk<br /><em>to living landscape.</em></h2></Reveal><Reveal delay={0.08}><p>A rigorous process should feel calm to the client. Each phase has a purpose, a clear handoff and one accountable design intent.</p></Reveal></div>
          <div className="services-method-grid">
            {phases.map(([number, title, copy], index) => <Reveal key={title} delay={index * .07} className="services-method-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="inner-page-cta">
        <Image src={assetPath("/images/closing-garden-path-v2.png")} alt="An illuminated garden path leading to a quiet pavilion" fill sizes="100vw" />
        <span className="inner-page-cta-shade" />
        <div className="container"><div><p>Ready when the site is.</p><h2>Let&apos;s shape what grows next.</h2></div><Link href="/contact">Begin the conversation <ArrowUpRight size={18} /></Link></div>
      </section>
    </>
  );
}
