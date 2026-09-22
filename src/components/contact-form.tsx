"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Landscape enquiry — ${form.get("name")}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Project type: ${form.get("projectType")}`,
      `Location: ${form.get("location")}`,
      "",
      String(form.get("message")),
    ].join("\n"));
    setSent(true);
    window.location.href = `mailto:info@sequoialandscapesolutions.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="+91" /></label></div>
      <div className="form-row"><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Project type<select name="projectType" defaultValue=""><option value="" disabled>Select one</option><option>Residence</option><option>Commercial</option><option>Hospitality</option><option>Community or public space</option><option>Garden renewal</option><option>Other</option></select></label></div>
      <label>Project location<input name="location" autoComplete="address-level2" required placeholder="City / locality" /></label>
      <label>Tell us about your site<textarea name="message" required rows={5} placeholder="Share the site, scope and what you hope the landscape will become." /></label>
      <button className="button button-gold button-large" type="submit">Prepare email enquiry <ArrowUpRight size={18} aria-hidden="true" /></button>
      <p className="form-help">This static form opens your email app with the enquiry prepared. No details are stored on this website.</p>
      {sent && <p className="form-success" role="status"><CheckCircle2 size={18} aria-hidden="true" /> Your email app should now open.</p>}
    </form>
  );
}
