import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a landscape design consultation with Sequoia Landscapes in Hyderabad.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Begin a conversation" index="04" signature="CONTACT" image="/images/closing-garden-path-v2.png" imageAlt="An illuminated garden path leading through dense planting to a quiet pavilion" title={<>Tell us about<br /><em>the place.</em></>} intro="A useful first conversation begins with the site, your ambitions and the way you hope to live outdoors. We will help find the first clear direction." />

      <section className="contact-studio">
        <div className="contact-studio-orbit" aria-hidden="true" />
        <div className="container contact-studio-grid">
          <Reveal className="contact-studio-copy">
            <p className="eyebrow">Your brief / 05</p><h2>Let&apos;s begin with<br /><em>what matters.</em></h2><p>Share what you know—even if the brief is still forming. A site plan, a location, a few references or simply how you want the space to feel are enough to start.</p>
            <div className="contact-studio-links">
              <a href="tel:+919459047777"><Phone aria-hidden="true" /><span><small>Call</small>+91 94590 47777</span></a>
              <a href="mailto:info@sequoialandscapesolutions.com"><Mail aria-hidden="true" /><span><small>Email</small>info@sequoialandscapesolutions.com</span></a>
              <a href="https://wa.me/919459047777" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span><small>WhatsApp</small>Start a conversation</span></a>
              <div><MapPin aria-hidden="true" /><span><small>Studio base</small>Hyderabad, Telangana</span></div>
            </div>
          </Reveal>
          <Reveal delay={.1} className="contact-studio-form"><span className="contact-form-index">ENQUIRY / 01</span><ContactForm /></Reveal>
        </div>
      </section>

      <section className="contact-expectation">
        <div className="container contact-expectation-grid">
          <Reveal><p className="eyebrow eyebrow-light">What happens next / 06</p><h2>A calm, useful<br /><em>first exchange.</em></h2></Reveal>
          <div>{[["01", "We read", "Your site, scope and priorities are reviewed by the studio."], ["02", "We respond", "We return with relevant questions and the right next conversation."], ["03", "We meet", "When there is a strong fit, we arrange a focused landscape consultation."]].map(([n,t,c],i)=><Reveal key={t} delay={i*.06} className="contact-expectation-step"><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></Reveal>)}</div>
        </div>
        <div className="contact-expectation-image"><Image src={assetPath("/images/sequoia-material-detail.png")} alt="Natural stone, planting and reflective water detail" fill sizes="42vw" /></div>
      </section>
    </>
  );
}
