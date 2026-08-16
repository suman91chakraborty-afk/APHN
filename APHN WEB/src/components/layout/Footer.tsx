"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white border-t border-primary-700">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Tagline */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="APHN"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="text-primary-900 font-bold text-xs tracking-wider">APHN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-base tracking-wider leading-none">
                  APHN
                </span>
                <span className="text-[10px] text-accent-300 uppercase tracking-widest leading-none mt-1">
                  West Bengal
                </span>
              </div>
            </div>
            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              Association of Private Hospital and Nursing Home. Representing private clinical establishments across West Bengal, dedicated to accessible, affordable, and high-quality healthcare.
            </p>
            <p className="text-xs italic text-accent-300 font-medium font-heading">
              "Care • Collaborate • Commit"
            </p>
          </div>

          {/* Col 2: About & Directory Links */}
          <div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-accent-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link href="/about" className="hover:text-accent-300 hover:underline transition-all">
                  Who We Are & Objectives
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-accent-300 hover:underline transition-all">
                  State Governing Body
                </Link>
              </li>
              <li>
                <Link href="/committees" className="hover:text-accent-300 hover:underline transition-all">
                  Functional Committees
                </Link>
              </li>
              <li>
                <Link href="/directory" className="hover:text-accent-300 hover:underline transition-all">
                  Search Member Hospitals
                </Link>
              </li>
              <li>
                <Link href="/government-collaboration" className="hover:text-accent-300 hover:underline transition-all">
                  Government Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Safety Portals */}
          <div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-accent-300 mb-4">
              Member Services
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link href="/membership" className="hover:text-accent-300 hover:underline transition-all">
                  Eligibility & Categories
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-accent-300 hover:underline transition-all">
                  Publications & Circulars
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-accent-300 hover:underline transition-all">
                  Patient & Worker Safety
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent-300 hover:underline transition-all">
                  Healthcare Job Board
                </Link>
              </li>
              <li>
                <Link href="/grievance" className="hover:text-accent-300 hover:underline transition-all">
                  Submit Representation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-accent-300 mb-2">
              Registered Office
            </h3>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  BD 116, Flat 301, 3rd Floor, AAI, Newtown, Kolkata – 700156
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                <a href="mailto:info@aphnwb.com" className="hover:text-accent-300 hover:underline">
                  info@aphnwb.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <span>+91 (033) APHN-OFFICE</span>
              </div>
              <div className="text-[10px] text-white/60 border-t border-white/10 pt-2">
                Society Reg. Act | State-level Jurisdiction: West Bengal, India.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Section: Disclaimer */}
      <div className="bg-primary-950/60 border-t border-primary-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-[10px] text-white/60 leading-relaxed text-justify">
          <p>
            <strong>Disclaimer:</strong> The Association of Private Hospital and Nursing Home (APHN) is a registered trade society representing clinical establishments in the state of West Bengal. The information published on this website is for general reference, regulatory awareness, and cooperative administration. While APHN strives to maintain accurate and updated records in the member directory, users should independently verify specific nursing home approvals, clinical licenses, and services directly with respective establishments. APHN is not a healthcare provider and does not directly handle clinical referrals or medical emergency services.
          </p>
        </div>
      </div>

      {/* Bottom Footer Section: Copyright & Legal */}
      <div className="bg-primary-950 py-6 border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {currentYear} APHN West Bengal. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="hover:text-accent-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-accent-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-accent-300 transition-colors">
              Disclaimer
            </Link>
            <Link href="/sitemap.xml" className="hover:text-accent-300 transition-colors flex items-center gap-1">
              Sitemap <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
