import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  index: string;
  signature: string;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt, index, signature }: PageHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-visual">
        <Image src={assetPath(image)} alt={imageAlt} fill priority sizes="(max-width: 700px) 100vw, 58vw" />
        <span className="inner-hero-visual-shade" aria-hidden="true" />
        <span className="inner-hero-visual-code">SEQUOIA / {signature}</span>
      </div>
      <div className="inner-hero-arc" aria-hidden="true" />
      <div className="inner-hero-index" aria-hidden="true">{index}</div>
      <div className="container inner-hero-inner">
        <Reveal className="inner-hero-copy">
          <p className="eyebrow">{eyebrow} / {index}</p>
          <h1>{title}</h1>
          <p className="inner-hero-intro">{intro}</p>
        </Reveal>
        <div className="inner-hero-rail">
          <span>Hyderabad · India</span>
          <span>Landscape design · Build · Stewardship</span>
          <span>Nature, composed.</span>
        </div>
      </div>
    </section>
  );
}
