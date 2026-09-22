import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The point of view, principles and enduring landscape philosophy behind Sequoia Landscapes.",
};

const principles = [
  ["01", "Observe before drawing", "Light, terrain, architecture, climate and daily life reveal what the place needs."],
  ["02", "Compose as one", "Planting, material, water, movement and light belong to one connected environment."],
  ["03", "Build with discipline", "Craft, coordination and site leadership protect the clarity of the original idea."],
  ["04", "Design for time", "Every landscape is planned to establish, adapt and gain character as it matures."],
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero eyebrow="Our point of view" index="03" signature="STUDIO" image="/images/manifesto-monsoon-tree-v2.png" imageAlt="A monumental mature rain tree beside reflective water after monsoon rain" title={<>Quiet presence.<br /><em>Enduring character.</em></>} intro="Sequoia was shaped by a simple conviction: an outdoor environment should feel inseparable from its place, its architecture and the people who live within it." />

      <section className="story-origin">
        <div className="container story-origin-stage">
          <Reveal className="story-origin-image"><Image src={assetPath("/images/project-canopy-courtyard-v2.png")} alt="A mature tree rising through a limestone courtyard with dense planting and a water rill" fill sizes="(max-width: 900px) 100vw, 58vw" /><span>ROOTED IN PLACE / BUILT FOR TIME</span></Reveal>
          <Reveal delay={.08} className="story-origin-copy"><p className="eyebrow">Why Sequoia / 04</p><h2>A longer life<br /><em>in mind.</em></h2><p className="lead">The name Sequoia reflects endurance, scale and quiet presence—qualities we bring to every garden we shape.</p><p>Our work is not about adding decoration around a building. It is about discovering the relationship between architecture and nature, then giving that relationship the structure and care to deepen with time.</p></Reveal>
          <Reveal delay={.14} className="story-origin-note"><span>STUDIO NOTE / 01</span><blockquote>We make room<br />for life to happen.</blockquote></Reveal>
        </div>
      </section>

      <section className="story-principles">
        <div className="story-principles-ghost" aria-hidden="true">SEQUOIA</div>
        <div className="container">
          <Reveal className="story-principles-head"><p className="eyebrow eyebrow-light">What guides us / 05</p><h2>Quietly rigorous.<br /><em>Naturally expressive.</em></h2></Reveal>
          <div className="story-principles-grid">{principles.map(([number, title, copy], index) => <Reveal key={title} delay={index * .06} className="story-principle"><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="story-closing">
        <Image src={assetPath("/images/closing-garden-path-v2.png")} alt="An illuminated stone garden path leading through planting to a quiet pavilion" fill sizes="100vw" />
        <span className="story-closing-shade" />
        <div className="container story-closing-inner"><Reveal><p className="eyebrow eyebrow-light">The next chapter / 06</p><h2>Every lasting landscape<br /><em>begins with listening.</em></h2></Reveal><Link href="/contact">Tell us about your place <ArrowUpRight size={18} /></Link></div>
      </section>
    </>
  );
}
