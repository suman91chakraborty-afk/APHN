"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Upload, ChevronRight, ChevronLeft, CheckCircle2, ShieldCheck, FileText, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function MembershipApply() {
  const [step, setStep] = useState(1);
  
  // Form State
  const [estDetails, setEstDetails] = useState({
    name: "",
    licenseNumber: "",
    district: "Kolkata",
    beds: "",
    icu: false,
    emergency: false,
  });

  const [propDetails, setPropDetails] = useState({
    propName: "",
    designation: "Proprietor",
    phone: "",
    email: "",
    address: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState<{
    ceLicense: boolean;
    tradeLicense: boolean;
    pan: boolean;
  }>({
    ceLicense: false,
    tradeLicense: false,
    pan: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validate step 1
  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!estDetails.name.trim()) errs.name = "Establishment name is required";
    if (!estDetails.licenseNumber.trim()) errs.licenseNumber = "License registration number is required";
    if (!estDetails.beds) {
      errs.beds = "Bed capacity is required";
    } else if (Number(estDetails.beds) <= 0) {
      errs.beds = "Beds must be greater than zero";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Validate step 2
  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!propDetails.propName.trim()) errs.propName = "Proprietor name is required";
    if (!propDetails.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(propDetails.phone.replace(/[\s-]/g, ""))) {
      errs.phone = "Phone must be a valid 10-digit number";
    }
    if (!propDetails.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(propDetails.email)) {
      errs.email = "Invalid email format";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    if (step === 2 && validateStep2()) setStep(3);
    if (step === 3) setStep(4);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const mockFileUpload = (field: "ceLicense" | "tradeLicense" | "pan") => {
    setUploadedFiles({ ...uploadedFiles, [field]: true });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  // Calculate annual fee
  const beds = Number(estDetails.beds) || 0;
  const annualFee = beds <= 50 ? 2000 : beds <= 100 ? 3000 : 4000;
  const standardAdmissionFee = 1000;
  const totalDue = annualFee + standardAdmissionFee;

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <Badge variant="primary">New Member Registration</Badge>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary-900">
          Online Membership Enrollment
        </h1>
        <p className="text-xs text-text-muted max-w-lg mx-auto">
          Complete our 4-step registration process. Applications are scrutinized by the District Committee prior to State Board approval.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-semibold">
        <div className={`pb-2 ${step >= 1 ? "text-accent-500 border-b-2 border-accent-500" : "text-text-muted"}`}>
          1. Establishment Info
        </div>
        <div className={`pb-2 ${step >= 2 ? "text-accent-500 border-b-2 border-accent-500" : "text-text-muted"}`}>
          2. Representative details
        </div>
        <div className={`pb-2 ${step >= 3 ? "text-accent-500 border-b-2 border-accent-500" : "text-text-muted"}`}>
          3. Document Uploads
        </div>
        <div className={`pb-2 ${step >= 4 ? "text-accent-500 border-b-2 border-accent-500" : "text-text-muted"}`}>
          4. Fee Payment Review
        </div>
      </div>

      {submitted ? (
        <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 shadow-xl text-center space-y-6 animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-xl font-heading font-bold text-primary-900">Application Submitted for Scrutiny</h2>
          
          <div className="bg-slate-50 p-6 rounded-md text-xs text-text-muted space-y-3 text-justify max-w-xl mx-auto border border-slate-100">
            <p>
              Your clinical establishment registration request for <strong>{estDetails.name}</strong> has been successfully queued.
            </p>
            <p>
              <strong>Next Steps:</strong> The APHN District Committee representing <strong>{estDetails.district}</strong> will perform an audit review of your uploaded CE License verification. Once verified, a approval notice and payment ledger link will be emailed to <strong>{propDetails.email}</strong>.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="secondary" className="text-xs">
                Back to Home
              </Button>
            </Link>
            <Link href="/directory">
              <Button variant="primary" className="text-xs">
                View Member Directory
              </Button>
            </Link>
          </div>

          {/* TODO COMMENT FOR REPO BACKEND CONNECT */}
          <div className="p-3 bg-accent-100 text-[10px] text-left text-accent-600 font-mono rounded mt-6">
            // TODO: connect backend API logic
            // Path: src/app/membership/apply/page.tsx
            // POST request to /api/membership/register
            // Attach form data, documents JSON files, and trigger Razorpay checkout parameters.
          </div>
        </Card>
      ) : (
        <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 shadow-lg space-y-6">
          
          {/* STEP 1: ESTABLISHMENT DETAILS */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-2">
                Establishment Parameters
              </h3>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Registered Hospital / Nursing Home Name</label>
                <input
                  type="text"
                  placeholder="e.g. Care Point Nursing Home"
                  value={estDetails.name}
                  onChange={(e) => setEstDetails({ ...estDetails, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                />
                {errors.name && <span className="text-[10px] text-rose-600 font-semibold">{errors.name}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Clinical Establishment License Number</label>
                  <input
                    type="text"
                    placeholder="e.g. CE/2026/XXXX"
                    value={estDetails.licenseNumber}
                    onChange={(e) => setEstDetails({ ...estDetails, licenseNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.licenseNumber && <span className="text-[10px] text-rose-600 font-semibold">{errors.licenseNumber}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">District Block Location</label>
                  <select
                    value={estDetails.district}
                    onChange={(e) => setEstDetails({ ...estDetails, district: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hooghly">Hooghly</option>
                    <option value="Howrah">Howrah</option>
                    <option value="Siliguri">Siliguri</option>
                    <option value="Murshidabad">Murshidabad</option>
                    <option value="West Medinipore">West Medinipore</option>
                    <option value="South 24 Parganas">South 24 Parganas</option>
                    <option value="North 24 Parganas">North 24 Parganas</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Registered Bed Strength</label>
                  <input
                    type="number"
                    placeholder="e.g. 45"
                    value={estDetails.beds}
                    onChange={(e) => setEstDetails({ ...estDetails, beds: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.beds && <span className="text-[10px] text-rose-600 font-semibold">{errors.beds}</span>}
                </div>

                <div className="flex items-center gap-2 pt-4 select-none">
                  <input
                    type="checkbox"
                    id="icu-check"
                    checked={estDetails.icu}
                    onChange={(e) => setEstDetails({ ...estDetails, icu: e.target.checked })}
                    className="w-4 h-4 text-accent-500 border-slate-200 focus:ring-accent-500"
                  />
                  <label htmlFor="icu-check" className="text-xs font-semibold text-slate-700 cursor-pointer">Has ICU Facility</label>
                </div>

                <div className="flex items-center gap-2 pt-4 select-none">
                  <input
                    type="checkbox"
                    id="emergency-check"
                    checked={estDetails.emergency}
                    onChange={(e) => setEstDetails({ ...estDetails, emergency: e.target.checked })}
                    className="w-4 h-4 text-accent-500 border-slate-200 focus:ring-accent-500"
                  />
                  <label htmlFor="emergency-check" className="text-xs font-semibold text-slate-700 cursor-pointer">Has 24/7 ER Service</label>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: PROPRIETOR DETAILS */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-2">
                Representative Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Proprietor / Director Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Ramesh Ghosh"
                    value={propDetails.propName}
                    onChange={(e) => setPropDetails({ ...propDetails, propName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.propName && <span className="text-[10px] text-rose-600 font-semibold">{errors.propName}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Designation</label>
                  <select
                    value={propDetails.designation}
                    onChange={(e) => setPropDetails({ ...propDetails, designation: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="Proprietor">Proprietor</option>
                    <option value="Partner">Partner</option>
                    <option value="Managing Director">Managing Director</option>
                    <option value="Medical Officer">Medical Officer Incharge</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Mobile Contact</label>
                  <input
                    type="text"
                    placeholder="e.g. 9876543210"
                    value={propDetails.phone}
                    onChange={(e) => setPropDetails({ ...propDetails, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.phone && <span className="text-[10px] text-rose-600 font-semibold">{errors.phone}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. admin@hospital.com"
                    value={propDetails.email}
                    onChange={(e) => setPropDetails({ ...propDetails, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  {errors.email && <span className="text-[10px] text-rose-600 font-semibold">{errors.email}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Official Communication Address</label>
                <textarea
                  rows={2}
                  placeholder="Enter full postal address of director/hospital office..."
                  value={propDetails.address}
                  onChange={(e) => setPropDetails({ ...propDetails, address: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                ></textarea>
              </div>

            </div>
          )}

          {/* STEP 3: MOCK DOCUMENT UPLOAD */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-2">
                Mandatory Uploads (Verification)
              </h3>
              <p className="text-[11px] text-text-muted">
                Please upload PDF or Image versions of the following clinical documentation. Max size 5MB/file:
              </p>

              <div className="space-y-4 pt-2">
                {/* 1. CE License */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <FileText className="w-5 h-5 text-accent-500" />
                    <div>
                      <span className="text-xs font-semibold text-primary-900 block">Clinical Establishment License</span>
                      <span className="text-[10px] text-text-muted">Upload a copy of valid CE registration.</span>
                    </div>
                  </div>
                  {uploadedFiles.ceLicense ? (
                    <Badge variant="success">Uploaded</Badge>
                  ) : (
                    <Button variant="secondary" size="sm" onClick={() => mockFileUpload("ceLicense")} className="text-xs py-1">
                      Upload File
                    </Button>
                  )}
                </div>

                {/* 2. Trade License */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <FileText className="w-5 h-5 text-accent-500" />
                    <div>
                      <span className="text-xs font-semibold text-primary-900 block">Trade License</span>
                      <span className="text-[10px] text-text-muted">Upload local municipality trade approval.</span>
                    </div>
                  </div>
                  {uploadedFiles.tradeLicense ? (
                    <Badge variant="success">Uploaded</Badge>
                  ) : (
                    <Button variant="secondary" size="sm" onClick={() => mockFileUpload("tradeLicense")} className="text-xs py-1">
                      Upload File
                    </Button>
                  )}
                </div>

                {/* 3. PAN */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <FileText className="w-5 h-5 text-accent-500" />
                    <div>
                      <span className="text-xs font-semibold text-primary-900 block">Establishment PAN Card</span>
                      <span className="text-[10px] text-text-muted">Upload hospital PAN or Director registry PAN.</span>
                    </div>
                  </div>
                  {uploadedFiles.pan ? (
                    <Badge variant="success">Uploaded</Badge>
                  ) : (
                    <Button variant="secondary" size="sm" onClick={() => mockFileUpload("pan")} className="text-xs py-1">
                      Upload File
                    </Button>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* STEP 4: REVIEW & SUBMIT */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-2">
                Verify Registration parameters
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-text-muted">
                
                <div className="space-y-2 p-4 bg-slate-50 rounded border border-slate-100">
                  <span className="font-bold text-primary-900 block border-b border-slate-200 pb-1 uppercase tracking-wider text-[10px]">Establishment Parameters</span>
                  <div className="flex justify-between"><span>Name:</span><strong className="text-slate-800">{estDetails.name}</strong></div>
                  <div className="flex justify-between"><span>CE License:</span><strong className="text-slate-800">{estDetails.licenseNumber}</strong></div>
                  <div className="flex justify-between"><span>District Unit:</span><strong className="text-slate-800">{estDetails.district}</strong></div>
                  <div className="flex justify-between"><span>Beds Capacity:</span><strong className="text-slate-800">{estDetails.beds} Beds</strong></div>
                  <div className="flex justify-between"><span>ICU Facility:</span><strong className="text-slate-800">{estDetails.icu ? "Yes" : "No"}</strong></div>
                  <div className="flex justify-between"><span>24/7 Emergency:</span><strong className="text-slate-800">{estDetails.emergency ? "Yes" : "No"}</strong></div>
                </div>

                <div className="space-y-2 p-4 bg-slate-50 rounded border border-slate-100">
                  <span className="font-bold text-primary-900 block border-b border-slate-200 pb-1 uppercase tracking-wider text-[10px]">Director & Communications</span>
                  <div className="flex justify-between"><span>Representative Name:</span><strong className="text-slate-800">{propDetails.propName}</strong></div>
                  <div className="flex justify-between"><span>Designation:</span><strong className="text-slate-800">{propDetails.designation}</strong></div>
                  <div className="flex justify-between"><span>Mobile Contact:</span><strong className="text-slate-800">{propDetails.phone}</strong></div>
                  <div className="flex justify-between"><span>Email Address:</span><strong className="text-slate-800">{propDetails.email}</strong></div>
                  <div className="flex justify-between"><span>Upload Verification:</span><strong className="text-emerald-700 font-semibold">{uploadedFiles.ceLicense && uploadedFiles.tradeLicense ? "Completed" : "Incomplete (Self Declaration)"}</strong></div>
                </div>

              </div>

              {/* Fee breakdown summary card */}
              <div className="p-5 bg-accent-100/50 rounded-lg border border-accent-100 text-xs space-y-2.5">
                <div className="flex items-center gap-1.5 text-accent-600 font-heading font-bold mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span>Calculated Enrollment Fee Ledger</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Admission Fee (One-time):</span>
                  <span className="font-semibold text-slate-800">₹{standardAdmissionFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-accent-100 pt-2">
                  <span>Annual Subscription Fee ({estDetails.beds} Beds):</span>
                  <span className="font-semibold text-slate-800">₹{annualFee.toLocaleString()} / Year</span>
                </div>
                <div className="flex justify-between border-t-2 border-dashed border-accent-200 pt-2 font-bold text-primary-900">
                  <span>Total Amount Due (Scrutiny Stage):</span>
                  <span className="text-accent-600 text-sm">₹{totalDue.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-text-muted mt-2">
                  * Note: Real payment transactions will initiate only after the District Audit review. Submitting this form does not charge your account.
                </p>
              </div>

            </div>
          )}

          {/* Form Actions */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-4">
            {step > 1 ? (
              <Button type="button" variant="secondary" onClick={handleBack} className="text-xs py-2">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous Step
              </Button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <Button type="button" variant="primary" onClick={handleNext} className="text-xs py-2">
                Continue Form
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <form onSubmit={handleFinalSubmit}>
                <Button type="submit" variant="primary" disabled={isSubmitting} className="text-xs py-2 px-6">
                  {isSubmitting ? "Submitting Request..." : "Submit Application"}
                </Button>
              </form>
            )}
          </div>

        </Card>
      )}

    </div>
  );
}
