import React from "react";
import { BookOpen, User, CheckSquare, Award } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import committeesData from "@/data/committees.json";

export default function Committees() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            APHN Framework
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Specialized Committees
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Our functional cells coordinate compliance guidance, Swasthya Sathi reviews, legal redressals, and skills workshops.
          </p>
        </div>
      </section>

      {/* Grid listing all 13 committees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <Badge variant="primary">Operational Cells</Badge>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary-900">
            Committees Directory
          </h2>
          <p className="text-xs text-text-muted">
            Each committee is led by selected Executive Board chairpersons and handles distinct state tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeesData.map((committee) => (
            <Card key={committee.id} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all">
              <div className="space-y-4">
                
                {/* Committee Header */}
                <div className="space-y-1">
                  <Badge variant="primary" className="text-[8px] tracking-widest font-bold">Cell {committee.id}</Badge>
                  <h3 className="text-sm font-heading font-extrabold text-primary-900 leading-tight">
                    {committee.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted mt-1">
                    <User className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                    <span>Chair: <strong>{committee.chairperson}</strong></span>
                  </div>
                </div>

                {/* Objectives Checklist */}
                <div className="space-y-2 border-t border-slate-50 pt-3">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 block">Core Objectives</span>
                  <ul className="space-y-1.5">
                    {committee.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-text-muted leading-relaxed">
                        <span className="text-accent-500 font-bold mt-0.5">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="border-t border-slate-50 pt-3 mt-4 text-[9px] text-slate-400">
                Reporting: State Executive Committee
              </div>

            </Card>
          ))}
        </div>
      </section>

      {/* Advisory Message */}
      <section className="bg-primary-100/50 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="primary">Need Committee Assistance?</Badge>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary-900">
            Consult a Specific Committee Chair
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
            Members can request meetings with specific functional chairs (such as the Swasthya Sathi committee or Legal support cell) by filing a request with their district block coordinators.
          </p>
        </div>
      </section>

    </div>
  );
}
