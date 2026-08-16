import React from "react";
import { Handshake, HelpCircle, CheckSquare, ShieldCheck, HelpCircle as HelpIcon, Flame, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function GovernmentCollaboration() {
  const contributions = [
    {
      title: "Ayushman Bharat & State Schemes Support",
      desc: "Providing smooth administrative pathways for implementing state-funded and national healthcare insurance programs (Ayushman Bharat and Swasthya Sathi) across private clinical tiers.",
    },
    {
      title: "Strengthening Regulatory Compliance",
      desc: "Holding educational workshops and audits to help small nursing homes transition smoothly to pollution control, fire safety, and building security standards.",
    },
    {
      title: "Improving Normal Delivery Rates",
      desc: "Promoting clinical guidelines to meet WHO and health department targets on normal delivery procedures, conducting regular internal audits.",
    },
    {
      title: "Public Health Campaigns Cooperation",
      desc: "Direct coordination with national tuberculosis elimination directives (NTEP), universal immunization programs (UIP), and epidemic control drives.",
    },
  ];

  const proposals = [
    {
      title: "Streamlined Reimbursements",
      desc: "Coordinating with scheme administrators to establish predictable, time-bound claims processing and clear pre-authorization timelines.",
    },
    {
      title: "Clinical Establishment Licensing",
      desc: "Advocating for digital, transparent, and time-bound renewals for clinical establishment licenses, minimizing administrative friction.",
    },
    {
      title: "Protection of Healthcare Facilities",
      desc: "Supporting the enforcement of legal safety measures to protect doctors, nurses, and medical assets from workplace violence or disruptions.",
    },
    {
      title: "Phased Compliance Support",
      desc: "Requesting graded transition structures for small-to-medium nursing homes in semi-urban areas to adapt to new regulatory norms without service closures.",
    },
  ];

  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            Policy & Partnerships
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Government & Private Collaboration
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Constructive, solution-oriented cooperation with the West Bengal Health & Family Welfare Department to build accessible and compliant healthcare infrastructure.
          </p>
        </div>
      </section>

      {/* Main Philosophy statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card hoverAccent={false} className="p-8 md:p-12 bg-white border border-slate-100 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary-900">
              Joint Responsibility for West Bengal Health
            </h2>
            <p className="text-sm text-text-muted leading-relaxed text-justify">
              Private healthcare establishments are crucial providers in West Bengal, managing millions of outpatients and emergency admissions. APHN believes that public health is a shared responsibility. We approach our relationship with regulatory and state authorities with a collaborative, solution-oriented mind-frame, seeking structural improvements that protect patient access, simplify administration, and uphold clinician safety.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-24 h-24 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center shadow-inner">
              <Handshake className="w-12 h-12" />
            </div>
          </div>
        </Card>
      </section>

      {/* Coordinated Framework: What APHN Offers vs What APHN Asks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: What APHN Offers */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-heading font-bold text-primary-900">What APHN Offers to the State</h3>
          </div>

          <div className="space-y-4">
            {contributions.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow transition-all">
                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary-900">{item.title}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: What APHN Asks */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Clock className="w-5 h-5 text-accent-600" />
            <h3 className="text-lg font-heading font-bold text-primary-900">What APHN Proposes for Streamlining</h3>
          </div>

          <div className="space-y-4">
            {proposals.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow transition-all">
                <span className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary-900">{item.title}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Structured Dialogue Cadence Request */}
      <section className="bg-primary-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <Badge variant="primary">Dialogue Schedule</Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900">
              Proposed Dialogue & Consultation Cadence
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              To resolve ongoing healthcare guidelines bottlenecks, APHN requests structured and recurring advisory dialogues with key government stakeholders. Consistent engagement ensures policy updates are understood and resolved smoothly:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                  Q
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary-900">Quarterly Minister Meetings</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    Joint reviews with the State Health Minister to align on high-level infrastructure strategies, reimbursement allocations, and medical safety rules.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary-100 text-primary-900 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                  M
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary-900">Monthly Department Alignment</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    Meetings with the Director of Health Services (DHS) and Swasthya Sathi administrative panels to check operational issues and billing disputes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 space-y-6 shadow-md">
            <h3 className="text-base font-heading font-bold text-primary-900 border-b border-slate-100 pb-3">
              Coordination Request
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              If your clinical establishment is facing district licensing roadblocks or requires advisory coordination on swasthya sathi billing logs, please refer your case details to the APHN Government Liaison cell.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Contact our coordinator desk at <a href="mailto:liaison@aphnwb.com" className="text-accent-600 hover:underline">liaison@aphnwb.com</a> to document representations for monthly health department alignments.
            </p>
          </Card>

        </div>
      </section>

    </div>
  );
}
