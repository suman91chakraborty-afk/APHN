"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, BadgeIndianRupee, Search, Send, CheckCircle2, Calendar } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface JobItem {
  id: string;
  title: string;
  hospital: string;
  district: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  salary: string;
  experience: string;
  datePosted: string;
  description: string;
}

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [appliedJob, setAppliedJob] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showApplyModal, setShowApplyModal] = useState<JobItem | null>(null);

  const jobs: JobItem[] = [
    {
      id: "JOB001",
      title: "OT Staff Nurse (B.Sc / GNM)",
      hospital: "Kolkata Multispecialty Hospital",
      district: "Kolkata",
      type: "Full-Time",
      salary: "₹25,000 - ₹32,000 / month",
      experience: "2-4 Years experience",
      datePosted: "2026-08-12",
      description: "Managing operations theatre setups, patient transfer care, and supporting OT surgeons in critical cardiology processes.",
    },
    {
      id: "JOB002",
      title: "Swasthya Sathi Billing Coordinator",
      hospital: "Metro Care Clinic & Nursing Home",
      district: "Hooghly",
      type: "Full-Time",
      salary: "₹18,000 - ₹22,000 / month",
      experience: "1-2 Years in clinical billing",
      datePosted: "2026-08-14",
      description: "Processing scheme pre-authorizations, organizing claims documents, resolving rejection notices, and liaising with DHS portal teams.",
    },
    {
      id: "JOB003",
      title: "Critical Care Medical Officer",
      hospital: "North Bengal Medical Hub",
      district: "Siliguri",
      type: "Full-Time",
      salary: "₹70,000 - ₹85,000 / month",
      experience: "MBBS with ICU training",
      datePosted: "2026-08-08",
      description: "Providing 24/7 coverage in the critical care unit, monitoring ventilators, and managing patient diagnostics reports.",
    },
    {
      id: "JOB004",
      title: "Senior Laboratory Technician",
      hospital: "Newtown Advanced Clinic",
      district: "Kolkata",
      type: "Full-Time",
      salary: "₹20,000 - ₹25,000 / month",
      experience: "DMLT with 3+ Years",
      datePosted: "2026-08-10",
      description: "Performing hematology and biochemistry diagnostics, maintaining equipment calibration, and logging validation sheets.",
    },
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!applicantName.trim()) errs.name = "Full name is required";
    if (!applicantEmail.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(applicantEmail)) {
      errs.email = "Invalid email format";
    }
    
    setErrors(errs);
    if (Object.keys(errs).length === 0 && showApplyModal) {
      setAppliedJob(showApplyModal.title);
      setShowApplyModal(null);
      setApplicantName("");
      setApplicantEmail("");
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === "" || job.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            Hiring Portal
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Healthcare Careers & Jobs
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Discover openings for nurses, medical officers, administrative personnel, and lab technicians at APHN member establishments.
          </p>
        </div>
      </section>

      {/* Info message */}
      {appliedJob && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
          <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Application successfully submitted for: <strong>{appliedJob}</strong>. The hiring hospital team will contact you directly.</span>
            </div>
            <Button variant="text" onClick={() => setAppliedJob(null)} className="text-xs text-slate-500 hover:text-slate-700 font-bold">
              Dismiss
            </Button>
          </div>
        </section>
      )}

      {/* Filter panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card hoverAccent={false} className="p-4 md:p-6 bg-white border border-slate-100 shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search jobs by role or hospital name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-slate-800"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          </div>

          {/* District Select */}
          <div className="space-y-1 w-full md:w-48">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500 text-slate-800"
            >
              <option value="">All Districts</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Hooghly">Hooghly</option>
              <option value="Siliguri">Siliguri</option>
            </select>
          </div>

        </Card>
      </section>

      {/* Listings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="space-y-4">
                  
                  {/* Job Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-text-muted flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        Posted: {job.datePosted}
                      </span>
                      <h3 className="text-sm font-heading font-extrabold text-primary-900 leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700">{job.hospital}</p>
                    </div>
                    <Badge variant="primary" className="text-[9px] shrink-0">{job.type}</Badge>
                  </div>

                  {/* Job params */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-text-muted border-y border-slate-50 py-2">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                      <span>{job.district}, West Bengal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BadgeIndianRupee className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-text-muted leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="border-t border-slate-50 pt-4 mt-6 flex items-center justify-between text-[10px] text-text-muted">
                  <span>Exp: <strong>{job.experience}</strong></span>
                  <Button
                    onClick={() => setShowApplyModal(job)}
                    className="text-xs font-bold py-1.5 px-4"
                  >
                    Apply Online
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-text-muted bg-white border border-dashed border-slate-200 rounded-lg">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold">No medical vacancies found matching your filters.</p>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedDistrict(""); }} className="mt-4 text-xs font-semibold py-2">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Apply Modal (Simple client modal overlay) */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 shadow-2xl max-w-md w-full space-y-4">
            
            <div className="border-b border-slate-100 pb-2">
              <h3 className="text-sm font-heading font-bold text-primary-900 leading-tight">
                Apply for: {showApplyModal.title}
              </h3>
              <p className="text-[10px] text-text-muted mt-1">Submitting application to: <strong>{showApplyModal.hospital}</strong></p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Priyan Sen"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                />
                {errors.name && <span className="text-[10px] text-rose-600 font-semibold">{errors.name}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. applicant@email.com"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                />
                {errors.email && <span className="text-[10px] text-rose-600 font-semibold">{errors.email}</span>}
              </div>

              {/* Mock Upload Resume */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-between text-xs text-text-muted">
                <div className="flex gap-2 items-center">
                  <Briefcase className="w-4 h-4 text-accent-500" />
                  <span>Resume / CV (PDF format)</span>
                </div>
                <Badge variant="primary" className="text-[9px]">Select PDF</Badge>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 justify-end">
                <Button type="button" variant="secondary" onClick={() => setShowApplyModal(null)} className="text-xs py-1.5">
                  Cancel
                </Button>
                <Button type="submit" variant="primary" className="text-xs py-1.5 px-4 flex items-center gap-1">
                  <Send className="w-3.5 h-3.5" />
                  Submit Application
                </Button>
              </div>

            </form>

          </Card>
        </div>
      )}

    </div>
  );
}
