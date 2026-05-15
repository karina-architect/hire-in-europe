"use client";
import { useState } from "react";
import { copy } from "@/lib/content";

export default function LeadForm({ locale = "en", source = "homepage" }) {
  const c = copy[locale] || copy.en;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", country: "", goal: "", message: "" });
  const setField = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xkokebwk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source })
      });
    } finally { setSubmitted(true); }
  }
  if (submitted) return <div className="successBox"><div className="successIcon">✓</div><h3>{c.successTitle}</h3><p>{c.successBody}</p></div>;
  return (
    <form onSubmit={handleSubmit} className="leadForm">
      <div><span className="eyebrow">Compliance assessment</span><h3>{c.leadTitle}</h3><p>{c.leadSub}</p></div>
      <div className="formGrid">
        <label>Name<input required value={form.name} onChange={(e)=>setField("name",e.target.value)} placeholder="Your name" /></label>
        <label>Company<input value={form.company} onChange={(e)=>setField("company",e.target.value)} placeholder="Company / client" /></label>
        <label>Email<input required type="email" value={form.email} onChange={(e)=>setField("email",e.target.value)} placeholder="you@email.com" /></label>
        <label>Primary country<input required value={form.country} onChange={(e)=>setField("country",e.target.value)} placeholder="Spain, Germany..." /></label>
        <label className="full">Engagement goal<select required value={form.goal} onChange={(e)=>setField("goal",e.target.value)}>
          <option value="">Select</option><option>Workforce transition assessment</option><option>Hire without entity review</option><option>Payroll and HR operations</option><option>Residence card assistance</option><option>Work permit coordination</option><option>Family relocation support</option><option>Legal / tax / immigration advisory coordination</option><option>Contractor classification review</option>
        </select></label>
        <label className="full">Context<textarea value={form.message} onChange={(e)=>setField("message",e.target.value)} placeholder="Briefly describe the country, role and engagement." /></label>
      </div>
      <button className="primaryBtn fullWidth" type="submit">{c.formSubmit}</button>
      <p className="formNotice">Workora does not guarantee employment, tax, immigration, residency or work authorization outcomes. Every request is subject to eligibility and jurisdiction-specific review.</p>
    </form>
  );
}
