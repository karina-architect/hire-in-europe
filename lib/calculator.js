export const euCountries = [
  ["AT", "Austria", 0.22, 0.23], ["BE", "Belgium", 0.28, 0.31], ["BG", "Bulgaria", 0.14, 0.19], ["HR", "Croatia", 0.20, 0.17], ["CY", "Cyprus", 0.16, 0.12], ["CZ", "Czechia", 0.18, 0.25], ["DK", "Denmark", 0.36, 0.02], ["EE", "Estonia", 0.20, 0.34], ["FI", "Finland", 0.30, 0.22], ["FR", "France", 0.27, 0.42], ["DE", "Germany", 0.26, 0.21], ["GR", "Greece", 0.22, 0.24], ["HU", "Hungary", 0.18, 0.13], ["IE", "Ireland", 0.24, 0.12], ["IT", "Italy", 0.27, 0.30], ["LV", "Latvia", 0.23, 0.24], ["LT", "Lithuania", 0.21, 0.02], ["LU", "Luxembourg", 0.24, 0.14], ["MT", "Malta", 0.19, 0.10], ["NL", "Netherlands", 0.27, 0.20], ["PL", "Poland", 0.20, 0.20], ["PT", "Portugal", 0.24, 0.24], ["RO", "Romania", 0.25, 0.02], ["SK", "Slovakia", 0.20, 0.35], ["SI", "Slovenia", 0.25, 0.16], ["ES", "Spain", 0.24, 0.31], ["SE", "Sweden", 0.31, 0.31]
].map(([code, name, employeeRate, employerRate]) => ({ code, name, employeeRate, employerRate }));

const familyAdjustments = {
  single: 0,
  married: 0.03,
  children: 0.05,
  divorced_children: 0.04
};

export const calculatorDisclaimer = "This calculator provides an estimated net salary based on public tax and social security rules. It is not legal, tax, payroll or accounting advice. Final amounts depend on personal circumstances, official payroll rules and local tax authority interpretation.";

export function estimate({ gross = 5000, country = "ES", status = "single", freelancerRevenue = 7000 }) {
  const c = euCountries.find((x) => x.code === country) || euCountries.find((x) => x.code === "ES");
  const adjustment = familyAdjustments[status] || 0;
  const effectiveEmployeeRate = Math.max(0.08, c.employeeRate - adjustment);
  const net = gross * (1 - effectiveEmployeeRate);
  const employerCost = gross * (1 + c.employerRate);
  const freelancerNetEstimate = freelancerRevenue * 0.62;
  const employeeScore = net + employerCost * 0.03;
  return {
    country: c.name,
    code: c.code,
    gross,
    net: Math.round(net),
    employeeDeductions: Math.round(gross - net),
    employerCost: Math.round(employerCost),
    employerContributions: Math.round(employerCost - gross),
    freelancerRevenue,
    freelancerNetEstimate: Math.round(freelancerNetEstimate),
    deltaVsFreelance: Math.round(net - freelancerNetEstimate),
    advisor: employeeScore > freelancerNetEstimate ? "Employment structure may offer stronger stability and governance, subject to legal review." : "Freelance economics may look higher, but classification, tax and social protection risks need review."
  };
}

export function rankCountries(gross = 5000, status = "single") {
  return euCountries.map((c) => estimate({ gross, country: c.code, status })).sort((a, b) => b.net - a.net).slice(0, 10);
}
