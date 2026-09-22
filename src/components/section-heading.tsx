import Link from "next/link";
import { MoveRight } from "lucide-react";

type SectionHeadingProps = { eyebrow: string; title: string; tone?: "light" | "dark"; action?: { label: string; href: string } };

export function SectionHeading({ eyebrow, title, tone = "light", action }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${tone === "dark" ? "section-heading-dark" : ""}`}>
      <div><p className={`eyebrow ${tone === "dark" ? "eyebrow-light" : ""}`}>{eyebrow}</p><h2 className="headline">{title}</h2></div>
      {action && <Link className={tone === "dark" ? "text-link text-link-light" : "text-link"} href={action.href}>{action.label} <MoveRight size={18} aria-hidden="true" /></Link>}
    </div>
  );
}
