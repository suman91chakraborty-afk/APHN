import React from "react";
import { Shield, Target, Compass, Award, Calendar, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import orgData from "@/data/org.json";

export default function About() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Page Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            Learn About APHN
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Who We Are
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            A state-wide collective of clinical establishments dedicated to promoting ethics, compliance, and excellence in West Bengal's healthcare sector.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <Card className="p-8 flex flex-col justify-between hover:border-t-accent-500 transition-all border border-slate-100">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-md flex items-center justify-center shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-heading font-bold text-primary-900">Our Mission</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              {orgData.mission}
            </p>
          </div>
          <div className="border-t border-slate-50 pt-4 mt-6 text-xs text-text-muted">
            Promoting quality care & state integration
          </div>
        </Card>

        {/* Vision Card */}
        <Card className="p-8 flex flex-col justify-between hover:border-t-accent-500 transition-all border border-slate-100">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-md flex items-center justify-center shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-heading font-bold text-primary-900">Our Vision</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              {orgData.vision}
            </p>
          </div>
          <div className="border-t border-slate-50 pt-4 mt-6 text-xs text-text-muted">
            A united, progressive network of private care providers
          </div>
        </Card>

      </section>

      {/* Core Objectives Section */}
      <section className="bg-primary-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <Badge variant="primary">Mandates</Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900">
              Core Objectives
            </h2>
            <p className="text-xs sm:text-sm text-text-muted">
              We operate under these main pillars of work, helping nursing homes grow in line with public needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orgData.objectives.map((obj, idx) => (
              <Card key={idx} className="p-6 bg-white border border-slate-100 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">{obj}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History and Formation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="primary">History & Scope</Badge>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900">
            Why APHN Was Formed
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed text-justify">
            <p>
              Private hospitals and small-to-medium nursing homes provide more than 60% of critical care and inpatient admissions across West Bengal. Historically, these establishments operated independently, often facing challenges with complex licensing channels, clinical guidelines compliance, and delayed reimbursements under public health programs.
            </p>
            <p>
              <strong>APHN (Association of Private Hospital and Nursing Home)</strong> was established to provide a unified platform representing these establishments. The association serves as a key bridge, translating government healthcare expectations (such as normal delivery rate audits, TB reporting, and waste safety compliance) into practical execution plans for clinical establishments.
            </p>
            <p>
              Our scope extends to all 23 districts in West Bengal, forming local unit subcommittees to resolve district licensing bottlenecks, support nursing staff training camps, and ensure safety guidelines are updated.
            </p>
          </div>
        </div>

        {/* History Quick Facts Sidebar */}
        <div className="lg:col-span-5">
          <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 shadow-md space-y-6">
            <h3 className="text-base font-heading font-bold text-primary-900 border-b border-slate-100 pb-3">
              Association Overview
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-500">Official Status:</span>
                <span className="text-right text-slate-900 font-medium">Registered Society (Soc. Reg. Act)</span>
              </div>
              <div className="flex justify-between text-xs border-t border-slate-50 pt-3">
                <span className="font-semibold text-slate-500">Primary Office:</span>
                <span className="text-right text-slate-900 font-medium max-w-[200px]">Newtown, Kolkata, West Bengal</span>
              </div>
              <div className="flex justify-between text-xs border-t border-slate-50 pt-3">
                <span className="font-semibold text-slate-500">Representative Scope:</span>
                <span className="text-right text-slate-900 font-medium">State-level with 23 Districts</span>
              </div>
              <div className="flex justify-between text-xs border-t border-slate-50 pt-3">
                <span className="font-semibold text-slate-500">Operational Target:</span>
                <span className="text-right text-slate-900 font-medium">Ethics, Compliance & Advocacy</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Messages from Leadership */}
      <section id="presidents-message" className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-accent-300 font-bold">Leadership Insights</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Official Messages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* President's Message */}
            <div className="bg-primary-950/60 p-8 rounded-lg border border-primary-800 flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 rounded-full bg-accent-100 text-primary-900 font-bold font-heading text-xl flex items-center justify-center shrink-0">
                AM
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-heading font-bold text-accent-300">Message from the President</h3>
                <p className="text-xs text-white/80 leading-relaxed italic">
                  "Dear Members and Friends, private healthcare acts as the backbone of healthcare access in our state, serving both emergency needs and specialized critical care across major metros and districts alike. APHN was established to guide member hospitals, champion ethical billing and treatment protocols, and coordinate constructively with state departments. We believe that by caring for patients, collaborating with the state, and committing to clinical values, we can foster a model private healthcare network for West Bengal."
                </p>
                <div>
                  <h4 className="text-xs font-bold text-white">Abhijit Mondal</h4>
                  <span className="text-[10px] text-white/60">President, APHN State Committee</span>
                </div>
              </div>
            </div>

            {/* Secretary's Message */}
            <div className="bg-primary-950/60 p-8 rounded-lg border border-primary-800 flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 rounded-full bg-accent-100 text-primary-900 font-bold font-heading text-xl flex items-center justify-center shrink-0">
                RP
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-heading font-bold text-accent-300">Message from the Secretary</h3>
                <p className="text-xs text-white/80 leading-relaxed italic">
                  "Colleagues and Partners, our priorities center around transparency, regulatory alignment, and quality upgrades. APHN provides small nursing homes and large clinical hubs with compliance documentation guides, legal advice, and skill enhancement classes for support staffs. We work closely with regulatory committees to secure timely clinical establishment licenses and ensure fair payment resolutions. Let us work together to uplift private health standards."
                </p>
                <div>
                  <h4 className="text-xs font-bold text-white">Dr. Rajiv Kumar Pandey</h4>
                  <span className="text-[10px] text-white/60">Secretary & Media Coordinator, APHN</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
