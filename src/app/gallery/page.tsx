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
  description: "Explore real landscapes, planting compositions and crafted green spaces delivered by Sequoia Landscapes.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Visual journal" index="02" signature="REAL WORK" image="/images/gallery/sequoia-real-01.jpeg" imageAlt="A palm-lined entrance garden with a geometric lawn path created by Sequoia Landscapes" title={<>Look closer.<br /><em>The details are alive.</em></>} intro="A visual study of real landscapes, living textures and crafted details brought to life by the Sequoia team." />

      <section className="gallery-journal">
        <div className="container">
          <div className="gallery-journal-head"><Reveal><p className="eyebrow eyebrow-light">Selected work / 03</p><h2>Atmosphere is built<br /><em>one detail at a time.</em></h2></Reveal><Reveal delay={.08}><p>Explore real landscapes, planting compositions and crafted green moments delivered by the Sequoia team.</p></Reveal></div>
          <GalleryMosaic />
        </div>
      </section>

      <section className="gallery-statement">
        <Image src={assetPath("/images/gallery/sequoia-real-07.jpeg")} alt="A formal landscape entrance framed by symmetrical tropical planting" fill sizes="100vw" />
        <span className="gallery-statement-shade" />
        <div className="gallery-statement-number" aria-hidden="true">04</div>
        <div className="container gallery-statement-inner">
          <Reveal><p className="eyebrow eyebrow-light">The long view / 04</p><blockquote>Beauty is not a finish.<br /><em>It is what time reveals.</em></blockquote><p>From first planting to a landscape in full character, every detail is composed to grow beautifully.</p></Reveal>
          <Link href="/contact">Create your landscape <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
