import React from "react";
import { ShieldCheck, HeartHandshake, Eye, AlertOctagon, HelpCircle, HardHat, Scale, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Safety() {
  const patientSafetyRules = [
    {
      title: "Medication & Care Safety",
      desc: "Promoting double-check verification guidelines for high-risk injections, ensuring standard surgical checklists are followed, and conducting continuous clinical audits.",
    },
    {
      title: "Infection Control Protocols",
      desc: "Educating member nursing staff on hand hygiene standards, sterilization procedures, bio-medical waste segregation, and local ICU environment disinfection.",
    },
    {
      title: "Patient Dignity & Informed Consent",
      desc: "Providing transparent and complete treatment explanations, documenting informed consent in regional languages, and respecting patient privacy rights during clinical procedures.",
    },
    {
      title: "Billing Transparency",
      desc: "Displaying diagnostic prices in public spaces, providing itemized invoices during discharge processes, and maintaining accessible billing review channels.",
    },
  ];

  const workerSafetyRules = [
    {
      title: "Zero-Tolerance Violence Policy",
      desc: "Enforcing zero-tolerance policies for physical assaults, harassment, or verbal abuse targeted at medical officers, nurses, or supportive paramedical staff on clinical premises.",
    },
    {
      title: "Establishment Security Norms",
      desc: "Guiding nursing homes to install CCTV surveillance, set up restricted visitor controls, implement emergency panic alerts, and deploy trained security officers.",
    },
    {
      title: "Workplace Dignity & Fair Hours",
      desc: "Fostering inclusive working setups, scheduling balanced shifts for nursing staff, and maintaining clear internal channels to report harassment.",
    },
    {
      title: "Legal & Institutional Redressal",
      desc: "Representing member hospitals before state panels, assisting in filing formal reports under state protection acts, and coordinating response teams during crises.",
    },
  ];

  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            Safety Portals
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Patient & Healthcare-Worker Safety
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Professional guidelines and policy measures ensuring secure workspaces, patient dignity, clinical compliance, and institutional accountability.
          </p>
        </div>
      </section>

      {/* Patient Safety Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <HeartPulse className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-heading font-bold text-primary-900">Patient Safety & Care Standards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patientSafetyRules.map((rule, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 flex gap-4 items-start shadow-sm">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-heading font-bold text-primary-900">{rule.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{rule.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Healthcare Worker Safety Section */}
      <section className="bg-primary-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <HardHat className="w-5 h-5 text-accent-500" />
            <h2 className="text-xl font-heading font-bold text-primary-900">Healthcare Worker Security & Dignity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workerSafetyRules.map((rule, idx) => (
              <Card key={idx} className="p-6 bg-white border border-slate-100 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-heading font-bold text-primary-900">{rule.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{rule.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines & Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-rose-600">
              <AlertOctagon className="w-5 h-5" />
              <h3 className="text-base font-heading font-bold text-primary-900">Immediate Support Desk</h3>
            </div>
            <p className="text-xs text-text-muted leading-relaxed text-justify">
              APHN maintains a safety grievance desk that provides immediate assistance to member clinical establishments during security crises, legal disputes, or patient allegations. If a security incident occurs on your premises, notify the local police and report the details to our coordinator panel for institutional advocacy support.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-center gap-2 text-center text-xs">
            <span className="font-semibold text-primary-900 uppercase tracking-wider block">Safety Support Registry</span>
            <strong className="text-accent-600 text-base">+91 (033) APHN-SAFETY</strong>
            <a href="mailto:safety@aphnwb.com" className="text-primary-900 hover:text-accent-600 font-semibold hover:underline">
              safety@aphnwb.com
            </a>
          </div>
        </Card>
      </section>

    </div>
  );
}
