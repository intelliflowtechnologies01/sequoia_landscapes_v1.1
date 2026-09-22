"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset-path";

const gallery = [
  { src: "/images/gallery/sequoia-real-01.jpeg", alt: "A palm-lined entrance garden with a lawn and geometric stepping-stone path", label: "Arrival garden", className: "gallery-wide" },
  { src: "/images/gallery/sequoia-real-02.jpeg", alt: "Layered tropical foliage beside a raised stone edge and lawn path", label: "Layered edge", className: "gallery-tall crop-low" },
  { src: "/images/gallery/sequoia-real-03.jpeg", alt: "A newly planted palm avenue with structured roadside planting", label: "Palm avenue", className: "gallery-standard" },
  { src: "/images/gallery/sequoia-real-04.jpeg", alt: "A developing roadside landscape with young trees, lawn and linear planting beds", label: "Growing landscape", className: "gallery-tall" },
  { src: "/images/gallery/sequoia-real-05.jpeg", alt: "A broad lawn framed by sculptural cycads and layered tropical planting", label: "Sculpted greenscape", className: "gallery-wide" },
  { src: "/images/gallery/sequoia-real-06.jpeg", alt: "Fresh lawn installation shaped around mature trees and planting beds", label: "Living lawn", className: "gallery-tall crop-high" },
  { src: "/images/gallery/sequoia-real-07.jpeg", alt: "A formal landscape entrance framed by symmetrical tropical planting", label: "Grand approach", className: "gallery-wide" },
  { src: "/images/gallery/sequoia-real-08.jpeg", alt: "A handcrafted miniature garden surrounded by character planters", label: "Miniature garden", className: "gallery-tall" },
  { src: "/images/gallery/sequoia-real-09.jpeg", alt: "Tall black planters composed with dracaena, poinsettia and trailing foliage", label: "Interior planting", className: "gallery-half" },
  { src: "/images/gallery/sequoia-real-10.jpeg", alt: "A coordinated pair of black planters with fern and pink foliage", label: "Botanical pairing", className: "gallery-half" },
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
            <span className="gallery-tile-label"><small>{String(index + 1).padStart(2, "0")}</small>{item.label}</span>
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
              <p><span>{String(active + 1).padStart(2, "0")}</span>{gallery[active].label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
