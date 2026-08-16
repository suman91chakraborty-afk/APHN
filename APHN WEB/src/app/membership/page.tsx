"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, HelpCircle, Shield, Award, Landmark, FileText, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import orgData from "@/data/org.json";

export default function Membership() {
  const [bedCount, setBedCount] = useState<number | "">("");
  const [isFounder, setIsFounder] = useState<boolean>(false);
  const [memberType, setMemberType] = useState<"general" | "associate">("general");
  const [feeBreakdown, setFeeBreakdown] = useState<{
    admission: number;
    annual: number;
    total: number;
  } | null>(null);

  const calculateFees = (e: React.FormEvent) => {
    e.preventDefault();
    if (bedCount === "") return;
    const beds = Number(bedCount);
    
    let baseAnnualFee = 0;
    if (beds <= 50) {
      baseAnnualFee = 2000;
    } else if (beds <= 100) {
      baseAnnualFee = 3000;
    } else {
      baseAnnualFee = 4000;
    }

    // Associate member fee is 50% of general member
    const annualFee = memberType === "associate" ? baseAnnualFee * 0.5 : baseAnnualFee;
    const admissionFee = isFounder ? 10000 : 1000; // Mock standard admission fee is 1,000 if not founder

    setFeeBreakdown({
      admission: admissionFee,
      annual: annualFee,
      total: admissionFee + annualFee,
    });
  };

  const benefits = [
    "Liaison support with West Bengal Health Department for licensing",
    "Assistance cell to address Swasthya Sathi & Ayushman Bharat billing queries",
    "Paramedic and clinical nursing skills training certifications",
    "Grievance representations before state authorities and clinical establishment panels",
    "Regular regulatory circular updates and compliance guidelines alerts",
    "Access to APHN member directory, enhancing community referrals",
    "Ethical auditing guides to prevent overcharging allegations",
    "State level coordination support in event of workplace security crises"
  ];

  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            Join the Network
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Membership Categories & Fees
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Become a part of the official healthcare network in West Bengal. Explore admission procedures, annual fees, and structural support systems.
          </p>
        </div>
      </section>

      {/* Membership Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <Badge variant="primary">Eligibility</Badge>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary-900">
            Membership Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {orgData.membershipCategories.map((cat, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-heading font-bold text-primary-900">{cat.name}</h3>
                  <Badge variant="secondary" className="text-[9px]">Category 0{idx + 1}</Badge>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="border-t border-slate-50 pt-3 mt-4 text-[10px] text-text-muted">
                Governed under APHN Society bylaws section 2.{idx + 1}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <Badge variant="primary">Why Enroll?</Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900">
              Benefits of Joining APHN
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              We stand together to support nursing home owners, administrators, and doctors. By joining APHN, your clinical establishment receives immediate access to our resources:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-normal">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 space-y-6 shadow-md">
            <h3 className="text-base font-heading font-bold text-primary-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent-500" />
              Member Code of Conduct
            </h3>
            <div className="space-y-3 text-xs text-text-muted leading-relaxed">
              <p>
                To maintain society membership and clinical status, all registered establishments commit to the APHN Code of Conduct:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Uphold transparent billing practices and post standardized diagnostic rates in visible entry lobby spaces.</li>
                <li>Implement infection control safety standards, and execute medical waste disposal as per pollution board directives.</li>
                <li>Respect doctor-patient relationships and establish localized grievance resolution desks.</li>
                <li>Refrain from participating in malicious competition or anti-collaborative operations.</li>
              </ul>
            </div>
          </Card>

        </div>
      </section>

      {/* Fees Structures & Interactive Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Fee Structures Info */}
        <div className="lg:col-span-6 space-y-6">
          <Badge variant="primary">Fee Structure</Badge>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary-900">
            State Standard Membership Fees
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            APHN fees are determined transparently based on the registered bed strength of the Clinical Establishment. Standard structures are:
          </p>

          <div className="overflow-x-auto border border-slate-100 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-slate-100 text-xs bg-white">
              <thead className="bg-slate-50 font-heading font-bold text-primary-900">
                <tr>
                  <th className="px-4 py-3 text-left">Bed strength</th>
                  <th className="px-4 py-3 text-right">Annual General Fee</th>
                  <th className="px-4 py-3 text-right">Annual Associate Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {orgData.annualFeesByBedStrength.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold">{fee.range}</td>
                    <td className="px-4 py-3 text-right font-medium text-primary-900">₹{fee.fee.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right font-medium text-accent-600">₹{(fee.fee * 0.5).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-md space-y-2 border border-slate-100 text-[10px] text-text-muted">
            <p className="font-semibold text-primary-900">Additional Provisions:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Founder Members:</strong> Contribute a one-time ₹10,000 payment towards initial society assets.</li>
              <li><strong>District Distribution:</strong> 60% of regional fees are managed locally, and 40% goes to the State Committee.</li>
            </ul>
          </div>
        </div>

        {/* Detailed Calculator Card */}
        <div className="lg:col-span-6">
          <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 shadow-lg space-y-6">
            <h3 className="text-base font-heading font-bold text-primary-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-accent-500" />
              Interactive Fee Estimator
            </h3>
            
            <form onSubmit={calculateFees} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-primary-900 block">Member Type</label>
                  <select
                    value={memberType}
                    onChange={(e) => setMemberType(e.target.value as "general" | "associate")}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="general">General Member</option>
                    <option value="associate">Associate Member</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-primary-900 block">Total Beds</label>
                  <input
                    type="number"
                    placeholder="e.g. 60"
                    value={bedCount}
                    onChange={(e) => setBedCount(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="founder-check"
                  checked={isFounder}
                  onChange={(e) => setIsFounder(e.target.checked)}
                  className="w-4 h-4 border-slate-200 rounded text-accent-500 focus:ring-accent-500"
                />
                <label htmlFor="founder-check" className="text-xs font-semibold text-slate-700 select-none">
                  Apply as Founder Member (One-time ₹10,000 corpus)
                </label>
              </div>

              <Button type="submit" variant="primary" className="w-full text-xs font-semibold py-2.5">
                Estimate Cost Breakdown
              </Button>
            </form>

            {feeBreakdown && (
              <div className="bg-slate-50 p-4 rounded-md space-y-3 border border-slate-100 text-xs animate-in fade-in duration-300">
                <div className="flex justify-between">
                  <span className="text-text-muted">Admission/One-time contribution:</span>
                  <span className="font-semibold text-slate-800">₹{feeBreakdown.admission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200/50 pt-2">
                  <span className="text-text-muted">Annual Subscription Fee:</span>
                  <span className="font-semibold text-slate-800">₹{feeBreakdown.annual.toLocaleString()} / Yr</span>
                </div>
                <div className="flex justify-between border-t-2 border-dashed border-slate-200 pt-2 font-bold text-primary-900">
                  <span>Estimated Total Initial Payment:</span>
                  <span className="text-accent-600 text-sm">₹{feeBreakdown.total.toLocaleString()}</span>
                </div>
              </div>
            )}

            <div className="border-t border-slate-100 pt-4 flex flex-col items-center gap-3">
              <span className="text-[10px] text-text-muted">Scrutinized & approved by District Committee and State Core Board.</span>
              <Link href="/membership/apply" className="w-full">
                <Button variant="outline" className="w-full text-xs font-semibold py-2">
                  Online Application Form (Phase 2) <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}
