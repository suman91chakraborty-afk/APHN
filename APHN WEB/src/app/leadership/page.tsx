"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, MapPin, Mail, Phone, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import leadershipData from "@/data/leadership.json";

export default function Leadership() {
  const [activeTab, setActiveTab] = useState<"governing" | "core" | "district">("governing");

  // State Governing Body (Major office bearers and executive members)
  const governingBody = leadershipData;

  // State Core Committee (Handles key operational decisions)
  const coreCommittee = leadershipData.filter(
    (member) =>
      member.additionalRole?.includes("Core Committee") ||
      ["President", "Secretary", "Treasurer"].includes(member.designation)
  );

  // District/Regional Coordinators
  const districtCoordinators = leadershipData.filter(
    (member) =>
      member.additionalRole?.includes("Coordinator") ||
      member.additionalRole?.includes("Convenor") ||
      member.district !== "Kolkata"
  );

  const getTabTitle = () => {
    switch (activeTab) {
      case "governing":
        return "State Governing Body";
      case "core":
        return "State Core Committee";
      case "district":
        return "District Coordinators & Representatives";
    }
  };

  const getActiveList = () => {
    switch (activeTab) {
      case "governing":
        return governingBody;
      case "core":
        return coreCommittee;
      case "district":
        return districtCoordinators;
    }
  };

  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            APHN Governance
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Leadership & Governance
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Governed by clinical leaders, administrators, and coordinators across West Bengal, ensuring equal representation for all districts.
          </p>
        </div>
      </section>

      {/* Tabs Controller */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-200 pb-6">
          <Button
            variant={activeTab === "governing" ? "primary" : "secondary"}
            onClick={() => setActiveTab("governing")}
            className="text-xs sm:text-sm font-semibold"
          >
            State Governing Body
          </Button>
          <Button
            variant={activeTab === "core" ? "primary" : "secondary"}
            onClick={() => setActiveTab("core")}
            className="text-xs sm:text-sm font-semibold"
          >
            State Core Committee
          </Button>
          <Button
            variant={activeTab === "district" ? "primary" : "secondary"}
            onClick={() => setActiveTab("district")}
            className="text-xs sm:text-sm font-semibold"
          >
            District Coordinators
          </Button>
        </div>
      </section>

      {/* Profile Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <Users className="w-5 h-5 text-accent-500" />
          <h2 className="text-xl font-heading font-bold text-primary-900">{getTabTitle()}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getActiveList().map((member, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all">
              <div className="space-y-4">
                
                {/* Profile Header (Initials Avatar + Role) */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-900 to-primary-700 text-white rounded-full flex items-center justify-center font-heading font-bold text-lg shadow-md shrink-0">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-primary-900">{member.name}</h3>
                    <p className="text-xs text-accent-600 font-semibold">{member.designation}</p>
                    {member.additionalRole && (
                      <p className="text-[10px] text-emerald-600 font-bold tracking-wide uppercase mt-0.5">
                        {member.additionalRole}
                      </p>
                    )}
                  </div>
                </div>

                {/* Profile Bio */}
                <p className="text-xs text-text-muted leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Profile Contact info */}
              <div className="border-t border-slate-100 pt-4 mt-6 space-y-2 text-[10px] text-text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                  <span>Base Unit: {member.district}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                  <span>{member.email || "contact@aphnwb.com"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                  <span>{member.phone || "+91 (033) APHN-OFFICE"}</span>
                </div>
              </div>

            </Card>
          ))}
        </div>
      </section>

      {/* Rules of Governance */}
      <section className="bg-primary-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <Badge variant="primary">Elections & Cadence</Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900">
              Rules of Association Governance
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              APHN operates as an ethical, democratic entity under the Societies Registration Act. To ensure transparency, prevent nepotism, and encourage new leadership, specific regulatory criteria are applied:
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Elections and AGM Cadence:</strong> An Annual General Meeting (AGM) and formal elections are organized every two years.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Term Limits:</strong> State office bearers including the President, Secretary, and Treasurer are limited to a maximum of two consecutive terms in the same office.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>District Units Autonomy:</strong> District committees retain 60% of collected membership fees to manage local issues, while 40% supports state-level licensing cells and portals.
                </p>
              </div>
            </div>
          </div>

          <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 space-y-6 shadow-md">
            <h3 className="text-base font-heading font-bold text-primary-900 border-b border-slate-100 pb-3">
              Office Contacts Note
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              In accordance with APHN privacy protection guidelines, direct-dial numbers for state leaders are hidden on public pages. 
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              To communicate with any office bearer or district representative, please direct inquiries to the general office registry at <a href="mailto:info@aphnwb.com" className="text-accent-600 hover:underline">info@aphnwb.com</a> or phone <strong className="text-primary-900">+91 (033) APHN-OFFICE</strong>. Your message will be routed to the appropriate coordinator within 24 hours.
            </p>
          </Card>

        </div>
      </section>

    </div>
  );
}
