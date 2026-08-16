"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Send, AlertTriangle, CheckCircle2, FileWarning, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function Grievance() {
  const [formData, setFormData] = useState({
    institutionName: "",
    district: "Kolkata",
    contactPerson: "",
    phone: "",
    email: "",
    category: "swasthya-sathi",
    subject: "",
    description: "",
    nonPhiDeclaration: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.institutionName.trim()) errs.institutionName = "Clinical establishment name is required";
    if (!formData.contactPerson.trim()) errs.contactPerson = "Contact person name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      errs.phone = "Phone must be a valid 10-digit number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.subject.trim()) errs.subject = "Subject title is required";
    if (!formData.description.trim()) errs.description = "Grievance details are required";
    if (!formData.nonPhiDeclaration) errs.nonPhiDeclaration = "You must confirm that no Patient Protected Health Information (PHI) is attached";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Reset form
        setFormData({
          institutionName: "",
          district: "Kolkata",
          contactPerson: "",
          phone: "",
          email: "",
          category: "swasthya-sathi",
          subject: "",
          description: "",
          nonPhiDeclaration: false,
        });
      }, 1500);
    }
  };

  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <Badge variant="primary">Confidential Portal</Badge>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary-900">
          Grievance & Representation Desk
        </h1>
        <p className="text-xs text-text-muted max-w-lg mx-auto">
          Registered member clinical establishments can submit formal appeals to the APHN Legal cell. Submissions are kept strictly confidential.
        </p>
      </div>

      {submitted ? (
        <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 shadow-xl text-center space-y-6 animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-xl font-heading font-bold text-primary-900">Representation Filed Successfully</h2>
          
          <div className="bg-slate-50 p-6 rounded-md text-xs text-text-muted space-y-3 text-justify max-w-xl mx-auto border border-slate-100">
            <p>
              Your dispute has been assigned ticket code <strong>GRN-{Math.floor(100000 + Math.random() * 900000)}</strong>.
            </p>
            <p>
              <strong>Audit process:</strong> The Legal & Grievance Representation Committee will review the facts submitted. If the matter involves licensing delays or Swasthya Sathi reimbursement timelines, our coordination officer will bundle it with the monthly health department submission file.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <Button variant="primary" onClick={() => setSubmitted(false)} className="text-xs">
              File Another Grievance
            </Button>
          </div>

          {/* TODO CONNECTION REMINDER */}
          <div className="p-3 bg-accent-100 text-[10px] text-left text-accent-600 font-mono rounded mt-6">
            // TODO: connect backend API logic
            // Path: src/app/grievance/page.tsx
            // POST request to /api/grievance/submit
            // Sends the verified JSON data fields, handles secure database persistence, and emails notification prompts to the Legal Cell Chairman.
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Panel */}
          <div className="lg:col-span-8">
            <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 shadow-lg space-y-6">
              
              <div className="flex items-center gap-2 text-primary-900 border-b border-slate-100 pb-3">
                <FileWarning className="w-5 h-5 text-accent-500" />
                <h3 className="text-sm font-heading font-bold">New Grievance Report</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Institution parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Clinical Establishment Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Apollo Diagnostics Hub"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    />
                    {errors.institutionName && <span className="text-[10px] text-rose-600 font-semibold">{errors.institutionName}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">District Block</label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    >
                      <option value="Kolkata">Kolkata</option>
                      <option value="Hooghly">Hooghly</option>
                      <option value="Howrah">Howrah</option>
                      <option value="Siliguri">Siliguri</option>
                      <option value="Murshidabad">Murshidabad</option>
                      <option value="West Medinipore">West Medinipore</option>
                    </select>
                  </div>
                </div>

                {/* Contact Person Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Contact Person Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. A. K. Das"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    />
                    {errors.contactPerson && <span className="text-[10px] text-rose-600 font-semibold">{errors.contactPerson}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Contact Email</label>
                    <input
                      type="email"
                      placeholder="e.g. medical@apollo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    />
                    {errors.email && <span className="text-[10px] text-rose-600 font-semibold">{errors.email}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Mobile Contact</label>
                    <input
                      type="text"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    />
                    {errors.phone && <span className="text-[10px] text-rose-600 font-semibold">{errors.phone}</span>}
                  </div>
                </div>

                {/* Grievance Category */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Grievance Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="swasthya-sathi">Swasthya Sathi Claims & Pre-Authorization Discrepancy</option>
                    <option value="licensing">Licensing renewal backlog / registration roadblock</option>
                    <option value="security">Workplace violence incident / security threat reporting</option>
                    <option value="billing">Patient allegation audit representation</option>
                    <option value="other">General administrative disputes</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Short Subject Header</label>
                  <input
                    type="text"
                    placeholder="e.g. Pre-auth delay over 35 days for surgery batch"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.subject && <span className="text-[10px] text-rose-600 font-semibold">{errors.subject}</span>}
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Grievance Description (Confidential details)</label>
                  <textarea
                    rows={5}
                    placeholder="Provide specific dates, departments, and communication records relating to the issue..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  ></textarea>
                  {errors.description && <span className="text-[10px] text-rose-600 font-semibold">{errors.description}</span>}
                </div>

                {/* Non-PHI checklist declaration */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-md space-y-3">
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="phi-check"
                      checked={formData.nonPhiDeclaration}
                      onChange={(e) => setFormData({ ...formData, nonPhiDeclaration: e.target.checked })}
                      className="w-4 h-4 text-accent-500 border-slate-200 rounded focus:ring-accent-500 shrink-0 mt-0.5"
                    />
                    <label htmlFor="phi-check" className="text-xs font-semibold text-slate-700 select-none cursor-pointer leading-relaxed">
                      Confirm that no Patient Protected Health Information (PHI) is attached. 
                    </label>
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed pl-6">
                    Under health guidelines and digital rights codes, patient diagnostics, clinical treatment files, or identifying details should not be submitted. Submit only billing ticket codes, establishment names, and administrative correspondence.
                  </p>
                  {errors.nonPhiDeclaration && (
                    <span className="text-[10px] text-rose-600 font-semibold block pl-6">{errors.nonPhiDeclaration}</span>
                  )}
                </div>

                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full text-xs font-bold py-3 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Submitting Request..." : "File Confidential Representation"}
                </Button>

              </form>

            </Card>
          </div>

          {/* Right Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-md space-y-4">
              <h3 className="text-xs font-heading font-bold text-primary-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Confidentiality Assurance
              </h3>
              <div className="flex gap-3 text-xs text-text-muted leading-relaxed">
                <EyeOff className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <p>
                  Grievances are directed to the Chairman of the Legal Cell. Details of individual nursing home representations are not shared in state governing minutes, protecting establishments from administrative friction.
                </p>
              </div>
            </Card>

            <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-md space-y-4">
              <h3 className="text-xs font-heading font-bold text-primary-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Security Grievances Desk
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                If the matter involves physical threat, facility damage, or doctors safety emergencies, do not wait for legal cells review. Immediately notify district police panels and contact the state coordinate hotline at:
              </p>
              <strong className="text-accent-600 text-xs block">+91 (033) APHN-SAFETY</strong>
            </Card>
          </div>

        </div>
      )}

    </div>
  );
}
