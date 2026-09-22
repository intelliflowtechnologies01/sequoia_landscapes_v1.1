import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GalleryMosaic } from "@/components/gallery-mosaic";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Gallery",
  description: "An immersive visual journal of landscape atmosphere, material, canopy, water and light by Sequoia Landscapes.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Visual journal" index="02" signature="ATMOSPHERE" image="/images/project-rooftop-refuge-v2.png" imageAlt="A layered rooftop garden overlooking the city at sunset" title={<>Look closer.<br /><em>The details are alive.</em></>} intro="A visual study of shade, scale, texture and light—the quiet relationships that make a landscape feel deeply rooted in its place." />

      <section className="gallery-journal">
        <div className="container">
          <div className="gallery-journal-head"><Reveal><p className="eyebrow eyebrow-light">Selected studies / 03</p><h2>Atmosphere is built<br /><em>one detail at a time.</em></h2></Reveal><Reveal delay={.08}><p>Move through a collection of imagined environments and material moments expressing the Sequoia point of view.</p></Reveal></div>
          <GalleryMosaic />
        </div>
      </section>

      <section className="gallery-statement">
        <Image src={assetPath("/images/manifesto-monsoon-tree-v2.png")} alt="A monumental mature tree beside reflective water after monsoon rain" fill sizes="100vw" />
        <span className="gallery-statement-shade" />
        <div className="gallery-statement-number" aria-hidden="true">04</div>
        <div className="container gallery-statement-inner">
          <Reveal><p className="eyebrow eyebrow-light">The long view / 04</p><blockquote>Beauty is not a finish.<br /><em>It is what time reveals.</em></blockquote><p>We design for the first evening, the tenth monsoon and every season in between.</p></Reveal>
          <Link href="/contact">Create your landscape <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
