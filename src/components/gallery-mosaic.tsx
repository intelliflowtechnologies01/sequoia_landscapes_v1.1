"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset-path";

const gallery = [
  { src: "/images/project-dusk-garden-v2.png", alt: "Contemporary residence and reflective water garden at dusk", label: "Dusk garden", className: "gallery-wide" },
  { src: "/images/project-canopy-courtyard-v2.png", alt: "Mature courtyard tree with stone and water", label: "Canopy courtyard", className: "gallery-tall" },
  { src: "/images/sequoia-material-detail.png", alt: "Stone water edge and botanical planting detail", label: "Material rhythm", className: "gallery-standard" },
  { src: "/images/manifesto-monsoon-tree-v2.png", alt: "Monumental rain tree after monsoon beside reflective water", label: "After the rain", className: "gallery-standard crop-high" },
  { src: "/images/project-rooftop-refuge-v2.png", alt: "A rooftop landscape overlooking the city at sunset", label: "Skyline refuge", className: "gallery-tall crop-right" },
  { src: "/images/sequoia-approach-atmosphere-v2.png", alt: "Natural stone, reflective water and layered tropical planting", label: "Living architecture", className: "gallery-wide crop-low" },
];

export function GalleryMosaic() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="gallery-mosaic">
        {gallery.map((item, index) => (
          <motion.button key={`${item.label}-${index}`} type="button" className={`gallery-tile ${item.className}`} onClick={() => setActive(index)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ delay: (index % 3) * 0.05, duration: 0.7 }} aria-label={`Open ${item.label}`}>
            <Image src={assetPath(item.src)} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
            <span className="gallery-tile-shade" />
            <span className="gallery-tile-label"><small>0{index + 1}</small>{item.label}</span>
            <span className="gallery-expand"><Expand size={17} aria-hidden="true" /></span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[active].label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <button type="button" className="lightbox-close" aria-label="Close image" onClick={() => setActive(null)}><X /></button>
            <motion.div className="lightbox-image" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.35 }} onClick={(event) => event.stopPropagation()}>
              <Image src={assetPath(gallery[active].src)} alt={gallery[active].alt} fill sizes="92vw" />
              <p><span>0{active + 1}</span>{gallery[active].label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
