"use client";
import { useMemo, useState } from "react";
import { euCountries, estimate, rankCountries, calculatorDisclaimer } from "@/lib/calculator";

export default function TaxCalculator() {
  const [input, setInput] = useState({ gross: 5000, country: "ES", status: "single", freelancerRevenue: 7000 });
  const result = useMemo(() => estimate(input), [input]);
  const ranking = useMemo(() => rankCountries(Number(input.gross || 0), input.status), [input.gross, input.status]);
  const set = (k,v)=>setInput((p)=>({...p,[k]:v}));
  function downloadReport(){
    const text = `Workora EU payroll estimate\nCountry: ${result.country}\nGross: €${input.gross}\nEstimated net: €${result.net}\nEmployer total cost: €${result.employerCost}\nFreelancer comparison estimate: €${result.freelancerNetEstimate}\n\nDisclaimer: ${calculatorDisclaimer}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "workora-payroll-estimate.txt"; a.click(); URL.revokeObjectURL(url);
  }
  return (
    <div className="calculatorProduct">
      <div className="calcInputPanel">
        <span className="eyebrow">Advanced EU calculator</span>
        <h2>Estimate net salary, employer cost and freelancer-vs-employee trade-offs</h2>
        <label>EU country<select value={input.country} onChange={(e)=>set("country",e.target.value)}>{euCountries.map((c)=><option key={c.code} value={c.code}>{c.name}</option>)}</select></label>
        <label>Monthly gross salary (€)<input type="number" value={input.gross} onChange={(e)=>set("gross",Number(e.target.value))}/></label>
        <label>Family / social status<select value={input.status} onChange={(e)=>set("status",e.target.value)}><option value="single">Single</option><option value="married">Married / partnered</option><option value="children">With children</option><option value="divorced_children">Divorced with children</option></select></label>
        <label>Monthly freelancer revenue comparison (€)<input type="number" value={input.freelancerRevenue} onChange={(e)=>set("freelancerRevenue",Number(e.target.value))}/></label>
        <button className="secondaryBtn" type="button" onClick={downloadReport}>Download estimate report</button>
      </div>
      <div className="calcResults">
        <div className="resultCards">
          <div className="resultCard"><span>Estimated net salary</span><strong>€{result.net.toLocaleString()}</strong><small>Deductions: €{result.employeeDeductions.toLocaleString()}</small></div>
          <div className="resultCard"><span>Employer total cost</span><strong>€{result.employerCost.toLocaleString()}</strong><small>Employer contributions: €{result.employerContributions.toLocaleString()}</small></div>
          <div className="resultCard"><span>Freelancer net estimate</span><strong>€{result.freelancerNetEstimate.toLocaleString()}</strong><small>Illustrative only</small></div>
          <div className="resultCard"><span>Advisor output</span><strong>{result.deltaVsFreelance >= 0 ? "+" : ""}€{result.deltaVsFreelance.toLocaleString()}</strong><small>{result.advisor}</small></div>
        </div>
        <p className="disclaimer">{calculatorDisclaimer}</p>
        <h3>Country optimization snapshot</h3>
        <div className="rankTable">{ranking.map((r,i)=><div key={r.code}><span>{i+1}. {r.country}</span><strong>€{r.net.toLocaleString()}</strong><small>Total cost €{r.employerCost.toLocaleString()}</small></div>)}</div>
        <p className="disclaimer">{calculatorDisclaimer}</p>
      </div>
    </div>
  );
}
