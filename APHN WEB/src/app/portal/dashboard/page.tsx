"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Download,
  CreditCard,
  Bell,
  Calendar,
  FileSignature,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Building,
  ArrowRight,
  LogOut,
  MapPin,
  Bed,
  FileCheck
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function PortalDashboard() {
  const [showPayModal, setShowPayModal] = useState(false);
  const [bedsCount, setBedsCount] = useState<number>(120); // Default for sample hospital
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  // Mock member details
  const member = {
    id: "MEM001",
    name: "Kolkata Multispecialty Hospital",
    district: "Kolkata",
    beds: 120,
    tier: "General",
    accreditation: "NABH Full",
    registeredOffice: "12, Salt Lake Sector 5, Kolkata - 700091",
    expiryDate: "31-Dec-2026",
    status: "Active",
  };

  const calculatedFee = bedsCount <= 50 ? 2000 : bedsCount <= 100 ? 3000 : 4000;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaying(true);
    // Simulate Razorpay/Stripe transaction delay
    setTimeout(() => {
      setIsPaying(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setShowPayModal(false);
        setPaymentSuccess(false);
      }, 2000);
    }, 1500);
  };

  const downloadCertificate = () => {
    alert("Generating Digital Membership Certificate PDF... Done. (In production, this downloads the digitally signed certificate file).");
  };

  const notices = [
    { title: "Swasthya Sathi Reimbursement Update Form 4B", date: "2026-08-14" },
    { title: "Mandatory Pollution Board Compliance Guidelines", date: "2026-08-01" },
    { title: "Training Calendar: Paramedic Batch 3 Applications Open", date: "2026-07-28" },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner Dashboard Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-primary-900">
              Welcome, {member.name}
            </h1>
            <Badge variant="success">Active</Badge>
          </div>
          <p className="text-xs text-text-muted">
            APHN Member ID: <strong>{member.id}</strong> | Membership Tier: <strong>{member.tier} Member</strong>
          </p>
        </div>

        <Link href="/portal/login">
          <Button variant="secondary" size="sm" className="text-xs font-semibold py-1.5 flex items-center gap-1 bg-transparent text-rose-600 border-rose-200 hover:bg-rose-50">
            <LogOut className="w-3.5 h-3.5" />
            Logout Portal
          </Button>
        </Link>
      </div>

      {/* Expiry / Renewal Notification strip */}
      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-3 items-center text-xs text-amber-800">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <span>Your annual subscription expires on <strong>{member.expiryDate}</strong>. </span>
            <span className="block sm:inline text-text-muted mt-0.5 sm:mt-0">Renew early to keep database registration active.</span>
          </div>
        </div>
        <Button variant="primary" size="sm" onClick={() => setShowPayModal(true)} className="text-xs py-1.5 px-4 font-semibold whitespace-nowrap">
          Pay Subscription Fee
        </Button>
      </div>

      {/* Main Grid: Details, Certificate Actions, Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Establishment Card details & Certificates */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Profile Overview */}
          <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-md space-y-4">
            <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Building className="w-5 h-5 text-accent-500" />
              Establishment Parameters
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-text-muted leading-relaxed">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-700 block">Registered Address</span>
                  <span>{member.registeredOffice}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>District Block Unit:</span>
                  <strong className="text-slate-800">{member.district}</strong>
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-1.5">
                  <span>Accreditation:</span>
                  <strong className="text-slate-800">{member.accreditation}</strong>
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-1.5">
                  <span className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-accent-500" />
                    Beds Capacity:
                  </span>
                  <strong className="text-slate-800">{member.beds} Beds</strong>
                </div>
              </div>
            </div>
          </Card>

          {/* Certificate downloads cell */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Certificate download */}
            <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-sm flex flex-col justify-between items-start gap-4">
              <div className="space-y-2">
                <FileCheck className="w-8 h-8 text-accent-500" />
                <h4 className="text-xs font-heading font-bold text-primary-900">Membership Certificate</h4>
                <p className="text-[10px] text-text-muted">Download your digitized APHN registration token, verifying status for government committees.</p>
              </div>
              <Button onClick={downloadCertificate} variant="secondary" className="text-[10px] py-1 bg-transparent text-primary-900 border-primary-900 w-full flex items-center justify-center gap-1">
                <Download className="w-3.5 h-3.5" />
                Download Certificate
              </Button>
            </Card>

            {/* Circular summary */}
            <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-sm flex flex-col justify-between items-start gap-4">
              <div className="space-y-2">
                <FileSignature className="w-8 h-8 text-accent-500" />
                <h4 className="text-xs font-heading font-bold text-primary-900">State Grievance Panel</h4>
                <p className="text-[10px] text-text-muted">Do you need to file licensing delays or Swasthya Sathi reimbursement tickets?</p>
              </div>
              <Link href="/grievance" className="w-full">
                <Button variant="outline" className="text-[10px] py-1 w-full flex items-center justify-center gap-1">
                  File Dispute Form
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </Card>

          </div>

        </div>

        {/* Right Column: Notices feed & Event registries */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Internal Circular updates */}
          <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-md space-y-4">
            <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Bell className="w-5 h-5 text-accent-500 animate-swing" />
              Member Circular Notices
            </h3>

            <div className="space-y-4 text-xs">
              {notices.map((notice, idx) => (
                <div key={idx} className="space-y-1 pb-3 border-b border-slate-50 last:border-b-0 last:pb-0">
                  <span className="text-[9px] text-text-muted block">{notice.date}</span>
                  <a href="/resources" className="font-semibold text-slate-800 hover:text-accent-600 hover:underline block leading-tight">
                    {notice.title}
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* Assemblies calendar registers */}
          <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-md space-y-4">
            <h3 className="text-sm font-heading font-bold text-primary-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent-500" />
              Upcoming Member Forums
            </h3>
            
            <div className="space-y-3 text-[10px] text-text-muted leading-relaxed">
              <p>
                <strong>Bi-Annual AGM 2026:</strong> scheduled on 18-Sep-2026 at Newtown Hall Kolkata. All registered general directors have active vote entries.
              </p>
              <Link href="/events/annual-general-meeting-2026">
                <Button variant="outline" className="text-[9px] py-1 w-full mt-2">
                  View Forum details
                </Button>
              </Link>
            </div>
          </Card>

        </div>

      </div>

      {/* RENEWAL CHECKOUT MODAL OVERLAY */}
      {showPayModal && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 shadow-2xl max-w-md w-full space-y-4">
            
            <div className="border-b border-slate-100 pb-2">
              <h3 className="text-sm font-heading font-bold text-primary-900">
                Annual Subscription Renewal
              </h3>
              <p className="text-[10px] text-text-muted mt-1">Estimating subscription fee for APHN ID: {member.id}</p>
            </div>

            {paymentSuccess ? (
              <div className="p-6 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded text-center space-y-2 animate-in fade-in duration-300">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-xs font-bold">Subscription Payment Completed!</h4>
                <p className="text-[10px] text-emerald-700">A receipt transaction record has been sent to your registered email details.</p>
              </div>
            ) : (
              <form onSubmit={handlePayment} className="space-y-4">
                
                {/* Bed count adjust */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">Verify Clinical Bed Strength</label>
                  <input
                    type="number"
                    value={bedsCount}
                    onChange={(e) => setBedsCount(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>

                {/* Ledger */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>Bed Range Class:</span>
                    <span className="font-semibold text-slate-800">
                      {bedsCount <= 50 ? "Up to 50 beds" : bedsCount <= 100 ? "51 - 100 beds" : "Above 100 beds"}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200/50 pt-2 font-bold text-primary-900">
                    <span className="flex items-center gap-0.5">
                      <DollarSign className="w-3.5 h-3.5" />
                      Annual Membership Fee:
                    </span>
                    <span className="text-accent-600">₹{calculatedFee.toLocaleString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 justify-end">
                  <Button type="button" variant="secondary" onClick={() => setShowPayModal(false)} className="text-xs py-1.5">
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" disabled={isPaying} className="text-xs py-1.5 px-4">
                    {isPaying ? "Processing Checkout..." : "Proceed to Payment"}
                  </Button>
                </div>

              </form>
            )}

            {/* TODO MARKER */}
            <div className="p-3 bg-accent-100 text-[9px] text-accent-600 font-mono rounded mt-2">
              // TODO: connect Razorpay / Stripe transaction flow
              // Location: src/app/portal/dashboard/page.tsx
              // Integrate payment API callback hook:
              // const options = &#123; key: RAZORPAY_KEY, amount: calculatedFee * 100, handler: onPaymentSuccess &#125;;
            </div>

          </Card>
        </div>
      )}

    </div>
  );
}
