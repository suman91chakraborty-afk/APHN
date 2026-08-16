"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, ShieldCheck, Building } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Phone must be a valid 10-digit number";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });
    }
  };

  const departments = [
    {
      name: "State Registry & Operations",
      email: "info@aphnwb.com",
      phone: "+91 (033) APHN-OFFICE",
    },
    {
      name: "Licencing Assistance Cell",
      email: "licensing@aphnwb.com",
      phone: "+91 (033) APHN-OFFICE",
    },
    {
      name: "Swasthya Sathi Desk",
      email: "claims@aphnwb.com",
      phone: "+91 (033) APHN-OFFICE",
    },
    {
      name: "Safety Grievance Registry",
      email: "safety@aphnwb.com",
      phone: "+91 (033) APHN-SAFETY",
    },
  ];

  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            Contact APHN
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Submit questions, request regulatory updates, or file representations with our dedicated department desks.
          </p>
        </div>
      </section>

      {/* Main grid: Form & Contact details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Details & Departments */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Registered Office Info */}
          <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-md space-y-4">
            <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-accent-500" />
              Registered Headquarters
            </h3>

            <div className="space-y-3 text-xs text-text-muted">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  BD 116, Flat 301, 3rd Floor, AAI, Newtown, Kolkata – 700156 (P.S. Newtown, Dist. 24 Parganas (North))
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                <a href="mailto:info@aphnwb.com" className="hover:text-accent-600 hover:underline font-semibold">
                  info@aphnwb.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <span>+91 (033) APHN-OFFICE</span>
              </div>
            </div>
          </Card>

          {/* Department emails routing */}
          <div className="space-y-4">
            <h3 className="text-xs font-heading font-bold text-slate-400 uppercase tracking-wider">Department Desks</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {departments.map((dept, idx) => (
                <Card key={idx} hoverAccent={false} className="p-4 bg-white border border-slate-100 shadow-sm space-y-2">
                  <h4 className="text-[11px] font-bold text-primary-900 leading-tight">{dept.name}</h4>
                  <div className="space-y-1 text-[10px] text-text-muted">
                    <a href={`mailto:${dept.email}`} className="hover:text-accent-600 hover:underline block font-semibold text-accent-500">
                      {dept.email}
                    </a>
                    <span>{dept.phone}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <Card hoverAccent={false} className="overflow-hidden border border-slate-100 shadow-md h-56 bg-slate-100 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-slate-200/50 flex flex-col items-center justify-center p-4 text-center space-y-2 z-10">
              <MapPin className="w-8 h-8 text-accent-500 animate-bounce" />
              <span className="text-xs font-heading font-bold text-primary-900">Newtown, Kolkata Location</span>
              <span className="text-[10px] text-text-muted max-w-xs">Map display placeholder. (In production, a Google Map API iframe will render here).</span>
            </div>
          </Card>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 shadow-lg space-y-6">
            
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-base font-heading font-bold text-primary-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent-500" />
                Submit Inquiry Form
              </h3>
              <p className="text-xs text-text-muted mt-1">Fill out your organizational details and we will route your submission to the respective cell.</p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 text-emerald-800 rounded-md border border-emerald-100 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold">Message Submitted Successfully</h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting APHN. Your representation has been registered and routed. An officer from the selected department will contact you within 2 business days.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="text-xs py-1.5 mt-2 bg-transparent text-emerald-800 border-emerald-200 hover:bg-emerald-100/50">
                  Submit Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-primary-900 block">Contact Person / Establishment Representative</label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. A. Sen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.name && <span className="text-[10px] font-semibold text-rose-600">{errors.name}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary-900 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. representative@hospital.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    />
                    {errors.email && <span className="text-[10px] font-semibold text-rose-600">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary-900 block">Mobile Number (10 Digits)</label>
                    <input
                      type="text"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    />
                    {errors.phone && <span className="text-[10px] font-semibold text-rose-600">{errors.phone}</span>}
                  </div>
                </div>

                {/* Subject routing select */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-primary-900 block">Route to Department Desk</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="general">General Operations & Membership Queries</option>
                    <option value="licensing">Licensing renewal support</option>
                    <option value="claims">Swasthya Sathi Reimbursement delays</option>
                    <option value="safety">Patient & Worker Safety reports</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-primary-900 block">Inquiry / Representation Details</label>
                  <textarea
                    rows={4}
                    placeholder="Enter details of your query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  ></textarea>
                  {errors.message && <span className="text-[10px] font-semibold text-rose-600">{errors.message}</span>}
                </div>

                <Button type="submit" variant="primary" className="w-full text-xs font-bold py-3 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit representation
                </Button>

              </form>
            )}

          </Card>
        </div>

      </section>

    </div>
  );
}
