import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, DraftingCompass, Hammer, HeartHandshake, MoveRight, Sprout } from "lucide-react";
import { HeroMotion } from "@/components/hero-motion";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";
import { projects, services } from "@/lib/site-data";

function SlimCta({ message, label }: { message: string; label: string }) {
  return (
    <aside className="slim-image-cta" aria-label={message}>
      <Image src={assetPath("/images/cta-ribbon-texture-v2.png")} alt="" fill sizes="100vw" aria-hidden="true" />
      <span className="slim-image-cta-shade" aria-hidden="true" />
      <div className="container slim-image-cta-inner"><p>{message}</p><Link href="/contact">{label} <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    </aside>
  );
}

export default function HomePage() {
  const heroServices = [
    { Icon: DraftingCompass, title: "Landscape design", copy: "Site-led planning and planting composition." },
    { Icon: Hammer, title: "Landscape build", copy: "Precise softscape and hardscape execution." },
    { Icon: Sprout, title: "Planting systems", copy: "Climate-aware layers designed to mature." },
    { Icon: HeartHandshake, title: "Ongoing care", copy: "Stewardship that protects every landscape." },
  ];

  return (
    <>
      <section className="split-hero" aria-labelledby="hero-title">
        <div className="hero-showcase">
          <div className="split-hero-copy-panel">
            <div className="topography-lines" aria-hidden="true" />
            <HeroMotion>
              <div className="hero-edition"><span>Landscape atelier</span><span>Hyderabad · India</span></div>
              <p className="eyebrow">Landscape design, reimagined</p>
              <h1 id="hero-title" className="split-hero-title"><span>Your most beautiful</span><em>room has no ceiling.</em></h1>
              <p className="split-hero-copy">We transform open ground into living architecture—composing planting, stone, water and light from first sketch through long-term care.</p>
              <div className="hero-actions">
                <Link className="button button-dark button-large" href="/contact">Design my landscape <ArrowUpRight size={18} aria-hidden="true" /></Link>
                <Link className="text-link" href="/gallery">Explore the visual journal <MoveRight size={18} aria-hidden="true" /></Link>
              </div>
              <div className="hero-proof"><span>01—04</span><p>One considered process<strong>Discover · Design · Build · Steward</strong></p></div>
            </HeroMotion>
          </div>

          <svg className="hero-clip-defs" width="0" height="0" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="hero-s-divider" clipPathUnits="objectBoundingBox">
                <path d="M .55 0 C .35 .1, .17 .25, .28 .43 C .4 .62, .18 .8, 0 1 L 1 1 L 1 0 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="split-hero-visual">
            <div className="hero-brand-ghost" aria-hidden="true">SEQUOIA</div>
            <div className="hero-landscape-graphic-wrap">
              <Image src={assetPath("/images/sequoia-hero-landscape-vignette.png")} alt="A composed landscape vignette with a mature tree, layered tropical planting, limestone seating, illuminated steps and a reflecting pool" fill priority sizes="(max-width: 700px) 100vw, 64vw" className="hero-landscape-graphic" />
            </div>
            <div className="visual-index"><span>SEQUOIA / LANDSCAPES</span><span>Design · Build · Steward</span></div>
            <div className="visual-note"><span>Living architecture</span><p>Planting, stone, water<br />and light—in balance.</p></div>
          </div>

          <div className="hero-service-rail">
            {heroServices.map(({ Icon, title, copy }) => (
              <Link href="/services" className="hero-service-card" key={title}>
                <span className="hero-service-icon"><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></span>
                <span className="hero-service-copy"><strong>{title}</strong><small>{copy}</small></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="approach-atelier">
        <div className="approach-atmosphere" aria-hidden="true" />
        <div className="container approach-atelier-inner">
          <div className="approach-atelier-head">
            <Reveal className="approach-atelier-title-block">
              <p className="eyebrow eyebrow-light">Our approach / 02</p>
              <h2 className="approach-atelier-title">We don&apos;t decorate land.<br /><em>We compose how it lives.</em></h2>
            </Reveal>
            <Reveal delay={0.08} className="approach-atelier-intro">
              <span className="approach-intro-kicker">The Sequoia method</span>
              <p>Light, terrain, architecture, water and human movement are not separate decisions. We choreograph them as one living system—beautiful now, richer with time.</p>
              <Link className="text-link text-link-light" href="/our-story">Inside our philosophy <MoveRight size={18} aria-hidden="true" /></Link>
            </Reveal>
          </div>

          <div className="approach-atelier-canvas">
            <div className="approach-outline-word" aria-hidden="true">BECOMING</div>
            <div className="approach-coordinate" aria-hidden="true"><span>17.3850° N</span><span>78.4867° E</span></div>
            <div className="approach-orbit approach-orbit-one" aria-hidden="true" />
            <div className="approach-orbit approach-orbit-two" aria-hidden="true" />

            <Reveal className="approach-main-frame">
              <Image src={assetPath("/images/sequoia-approach-atmosphere-v2.png")} alt="A sculptural mature tree anchoring a limestone courtyard with layered planting and reflective water" fill sizes="(max-width: 700px) 100vw, 62vw" />
              <div className="approach-main-shade" />
              <div className="approach-main-caption"><span>Spatial composition / 01</span><p>Grounded by architecture.<br />Softened by nature.</p></div>
              <span className="approach-main-index">SEQUOIA / LIVING LANDSCAPES</span>
            </Reveal>

            <Reveal delay={0.12} className="approach-detail-frame">
              <Image src={assetPath("/images/sequoia-material-detail.png")} alt="Close detail of natural stone, planting and water in a Sequoia landscape" fill sizes="(max-width: 700px) 78vw, 28vw" />
              <span>Material study · 02</span>
            </Reveal>

            <Reveal delay={0.16} className="approach-manifest">
              <span className="approach-manifest-index">FIELD NOTE / 01</span>
              <blockquote>Not scenery.<br /><em>A living system.</em></blockquote>
              <p>Every line is drawn for shade, movement, season and the quiet rituals that make a place feel like it belongs.</p>
            </Reveal>

            <div className="approach-path">
              {[
                ["01", "Observe", "Read the site before drawing the line."],
                ["02", "Compose", "Balance material, planting, water and light."],
                ["03", "Evolve", "Design for maturity, care and lasting character."],
              ].map(([number, title, copy], index) => (
                <Reveal key={title} delay={0.2 + index * 0.07} className="approach-path-step">
                  <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SlimCta message="Have a site with untapped potential?" label="Start the brief" />

      <section id="capabilities" className="capability-atelier">
        <div className="capability-atmosphere" aria-hidden="true" />
        <div className="container capability-atelier-inner">
          <div className="capability-atelier-head">
            <Reveal>
              <p className="eyebrow">Integrated capabilities / 03</p>
              <h2 className="capability-atelier-title">One vision.<br /><em>Every layer, resolved.</em></h2>
            </Reveal>
            <Reveal delay={0.08} className="capability-atelier-copy">
              <p>From the first line on paper to the way a garden settles into its tenth monsoon, every decision belongs to one continuous design story.</p>
              <Link className="text-link" href="/services">Explore every capability <MoveRight size={18} aria-hidden="true" /></Link>
            </Reveal>
          </div>

          <div className="capability-stage">
            <div className="capability-outline-type" aria-hidden="true">FULL SCOPE</div>
            <Reveal className="capability-visual">
              <Image src={assetPath("/images/sequoia-capabilities-dusk-v2.png")} alt="A contemporary home and layered tropical landscape reflected in water at blue hour" fill sizes="(max-width: 700px) 100vw, 54vw" />
              <div className="capability-visual-shade" />
              <div className="capability-visual-caption"><span>01 / One continuous vision</span><p>Concept to canopy.<br />Detail to legacy.</p></div>
              <span className="capability-visual-code">SQ · DESIGN / BUILD / STEWARD</span>
            </Reveal>

            <div className="capability-seal" aria-hidden="true">
              <span>DESIGN</span><strong>+</strong><span>BUILD</span><strong>+</strong><span>GROW</span>
            </div>

            <div className="capability-stack">
              {services.slice(0, 4).map((service, index) => (
                <Reveal key={service.title} delay={0.08 + index * 0.07} className={`capability-card-wrap capability-card-wrap-${index + 1}`}>
                  <Link href="/services" className="capability-card">
                    <span className="capability-card-number">0{index + 1}</span>
                    <div className="capability-card-copy"><h3>{service.title}</h3><p>{service.short}</p></div>
                    <span className="capability-card-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="capability-footnote"><span>4 disciplines</span><span>1 design language</span><span>Enduring landscapes</span></div>
          </div>
        </div>
      </section>

      <section id="environments" className="project-salon">
        <div className="project-salon-atmosphere" aria-hidden="true" />
        <div className="container project-salon-inner">
          <div className="project-salon-head">
            <Reveal>
              <p className="eyebrow eyebrow-light">Selected environments / 04</p>
              <h2 className="project-salon-title">Places that feel<br /><em>inevitable.</em></h2>
            </Reveal>
            <Reveal delay={0.08} className="project-salon-copy">
              <p>Each environment is shaped by its own architecture, climate and rituals. The result is not a signature look, but a distinct sense of belonging.</p>
              <Link className="text-link text-link-light" href="/gallery">Enter the visual collection <MoveRight size={18} aria-hidden="true" /></Link>
            </Reveal>
          </div>

          <div className="project-salon-canvas">
            <div className="project-salon-ghost" aria-hidden="true">BUILT TO BELONG</div>
            <div className="project-salon-axis" aria-hidden="true"><span>17.3850° N</span><i /><span>78.4867° E</span></div>
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.08 + index * 0.08} className={`salon-project salon-project-${index + 1}`}>
                <Link href="/gallery" className="salon-project-link" aria-label={`View ${project.title} in the gallery`}>
                  <div className="salon-project-image">
                    <Image src={assetPath(project.image)} alt={project.alt} fill sizes={index === 0 ? "(max-width: 700px) 100vw, 54vw" : "(max-width: 700px) 100vw, 42vw"} />
                    <div className="salon-project-shade" />
                  </div>
                  <div className="salon-project-caption">
                    <span>0{index + 1}</span>
                    <div><p>{project.type}</p><h3>{project.title}</h3></div>
                    <span className="salon-project-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.24} className="project-salon-note">
              <span>THE COMMON THREAD</span>
              <blockquote>Designed around life.<br /><em>Remembered as a feeling.</em></blockquote>
              <p>Planting, proportion, material and light are tuned until every space feels both surprising and completely at home.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <SlimCta message="Your landscape can feel inevitable—not added on." label="Reserve a consultation" />

      <section id="belief" className="manifesto-film">
        <Image src={assetPath("/images/manifesto-monsoon-tree-v2.png")} alt="A monumental mature rain tree beside dark reflective water after monsoon rain" fill sizes="100vw" className="manifesto-film-image" />
        <div className="manifesto-film-overlay" />
        <div className="manifesto-film-number" aria-hidden="true">05</div>
        <div className="container manifesto-film-inner">
          <Reveal className="manifesto-film-copy">
            <p className="eyebrow eyebrow-light">Our belief / 05</p>
            <blockquote>A landscape is never finished.<br /><em>It becomes.</em></blockquote>
            <p>We plan for shade, season, growth and care—so each environment gains character, calm and meaning with time.</p>
          </Reveal>
          <div className="manifesto-film-seal"><span>TIME IS</span><strong>A MATERIAL</strong><span>WE DESIGN WITH</span></div>
          <div className="manifesto-film-rail"><span>Rooted in place</span><span>Alive to season</span><span>Stewarded for time</span></div>
        </div>
      </section>

      <section id="process" className="process-journey">
        <div className="process-journey-atmosphere" aria-hidden="true" />
        <div className="container process-journey-inner">
          <div className="process-journey-head">
            <Reveal>
              <p className="eyebrow">How we work / 06</p>
              <h2 className="process-journey-title">One clear rhythm.<br /><em>Nothing left loose.</em></h2>
            </Reveal>
            <Reveal delay={0.08} className="process-journey-intro"><p>A single design thread runs from first conversation through construction and long-term care. You always know what comes next—and why.</p></Reveal>
          </div>

          <div className="process-journey-canvas">
            <svg className="process-journey-line" viewBox="0 0 200 900" preserveAspectRatio="none" aria-hidden="true">
              <path d="M100 0 C15 120, 185 210, 100 330 C15 450, 185 560, 100 680 C38 765, 125 835, 100 900" />
            </svg>
            {[
              ["01", "Discover", "We listen, walk the site and uncover what the place—and the people using it—truly need."],
              ["02", "Design", "Spatial structure, planting, material, water and light are composed as one resolved experience."],
              ["03", "Build", "Close site leadership protects the design intent through every layer, junction and finish."],
              ["04", "Steward", "Seasonal care helps the landscape establish, mature and grow into its intended character."],
            ].map(([number, title, copy], index) => (
              <Reveal key={title} delay={index * 0.08} className={`process-journey-step process-journey-step-${index + 1}`}>
                <span className="process-journey-node">{number}</span>
                <div className="process-journey-card"><span>PHASE / {number}</span><h3>{title}</h3><p>{copy}</p></div>
              </Reveal>
            ))}
            <div className="process-journey-word" aria-hidden="true">SEQUOIA METHOD</div>
          </div>
        </div>
      </section>

      <SlimCta message="One clear process. One accountable landscape team." label="Meet the studio" />

      <section id="begin" className="closing-invite">
        <div className="closing-invite-ghost" aria-hidden="true">BEGIN</div>
        <div className="closing-invite-visual">
          <Image src={assetPath("/images/closing-garden-path-v2.png")} alt="An illuminated stone garden path leading through dense planting to a quiet pavilion at blue hour" fill sizes="(max-width: 700px) 100vw, 54vw" />
          <div className="closing-invite-shade" />
        </div>
        <div className="container closing-invite-inner">
          <Reveal className="closing-invite-copy">
            <p className="eyebrow eyebrow-light">Begin a conversation / 07</p>
            <h2>Let&apos;s make room for<br /><em>what grows next.</em></h2>
            <p>Tell us about your site, your ambitions and the way you want to live outdoors. We&apos;ll help shape the first clear direction.</p>
            <Link className="button button-gold button-large" href="/contact">Discuss your landscape <ArrowUpRight size={20} aria-hidden="true" /></Link>
          </Reveal>
          <div className="closing-invite-meta"><span>Hyderabad · India</span><span>Landscape design · Build · Stewardship</span></div>
        </div>
      </section>
    </>
  );
}
