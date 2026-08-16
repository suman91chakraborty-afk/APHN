"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  HeartHandshake,
  ShieldAlert,
  Briefcase,
  Scale,
  Building2,
  MapPin,
  Search,
  ArrowRight,
  Users,
  CheckCircle2,
  Calendar,
  Newspaper,
  Calculator,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Import mock data
import newsData from "@/data/news.json";
import eventsData from "@/data/events.json";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [bedCount, setBedCount] = useState<number | "">("");
  const [calculatedFee, setCalculatedFee] = useState<number | null>(null);

  // Take latest 2 news articles and latest 2 events
  const latestNews = newsData.slice(0, 2);
  const upcomingEvents = eventsData.filter(e => e.status === "upcoming").slice(0, 2);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/directory?search=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push("/directory");
    }
  };

  const calculateMembershipFee = (e: React.FormEvent) => {
    e.preventDefault();
    if (bedCount === "") {
      setCalculatedFee(null);
      return;
    }
    const beds = Number(bedCount);
    if (beds <= 50) {
      setCalculatedFee(2000);
    } else if (beds <= 100) {
      setCalculatedFee(3000);
    } else {
      setCalculatedFee(4000);
    }
  };

  const priorities = [
    {
      title: "Quality Healthcare",
      desc: "Promoting clinical excellence and institutional compliance protocols across the state.",
      icon: ShieldCheck,
    },
    {
      title: "Patient Safety",
      desc: "Enforcing clear patient treatment charters, transparent billing, and ethical protocols.",
      icon: HeartHandshake,
    },
    {
      title: "Worker Security",
      desc: "Establishing secure environments, workplace dignity, and zero-tolerance safety policies.",
      icon: ShieldAlert,
    },
    {
      title: "Government Partnership",
      desc: "Constructive dialogues on Swasthya Sathi implementation and license renewals.",
      icon: Briefcase,
    },
    {
      title: "Ethical Standards",
      desc: "Fostering transparency, integrity, and social responsibility in hospital operations.",
      icon: Scale,
    },
    {
      title: "Stronger Establishments",
      desc: "Guiding small-to-medium nursing homes with documentation audits and capacity tools.",
      icon: Building2,
    },
    {
      title: "West Bengal Welfare",
      desc: "Supporting state healthcare targets, preventive programs, and rural accessibility.",
      icon: MapPin,
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-900 to-primary-700 text-white overflow-hidden py-16 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="secondary" className="px-3 py-1 bg-accent-100 text-accent-600 font-semibold border border-accent-300">
              State-level Healthcare Trade Association
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-heading font-extrabold leading-tight tracking-tight">
              Association of Private Hospital & Nursing Home
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-medium">
              Care • Collaborate • Commit
            </p>
            <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
              Strengthening West Bengal's healthcare ecosystem. Supporting private hospitals, diagnostic labs, and nursing homes through state advocacy, regulatory support, and ethical operational standards.
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/membership">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Become a Member <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/directory">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10">
                  Find Member Hospital
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Right Interactive Search / Widget */}
          <div className="lg:col-span-5">
            <Card hoverAccent={false} className="p-6 md:p-8 bg-white/95 backdrop-blur shadow-2xl border border-white/20 text-slate-900 rounded-lg">
              <h2 className="text-lg font-heading font-bold text-primary-900 mb-2">
                Quick Member Search
              </h2>
              <p className="text-xs text-text-muted mb-6">
                Locate registered clinical establishments, hospitals, and nursing homes across West Bengal districts.
              </p>
              
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by Hospital Name, Specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm outline-none text-slate-800"
                  />
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                </div>
                
                <Button type="submit" variant="primary" className="w-full py-3 text-sm font-semibold">
                  Search Directory
                </Button>
              </form>

              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-text-muted">
                <span>Popular Districts:</span>
                <div className="flex gap-2">
                  <Link href="/directory?district=Kolkata" className="hover:text-accent-600 hover:underline">Kolkata</Link>
                  <span className="text-slate-300">|</span>
                  <Link href="/directory?district=Hooghly" className="hover:text-accent-600 hover:underline">Hooghly</Link>
                  <span className="text-slate-300">|</span>
                  <Link href="/directory?district=Siliguri" className="hover:text-accent-600 hover:underline">Siliguri</Link>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-card border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center divide-y-2 md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-accent-500">100+</p>
            <p className="text-xs font-semibold text-primary-900 uppercase tracking-widest mt-1">Registered Members</p>
          </div>
          <div className="p-4 pt-6 md:pt-4">
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-accent-500">23</p>
            <p className="text-xs font-semibold text-primary-900 uppercase tracking-widest mt-1">Districts Covered</p>
          </div>
          <div className="p-4 pt-6 md:pt-4">
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-accent-500">13</p>
            <p className="text-xs font-semibold text-primary-900 uppercase tracking-widest mt-1">Functional Cells</p>
          </div>
          <div className="p-4 pt-6 md:pt-4">
            <p className="text-3xl md:text-4xl font-heading font-extrabold text-accent-500">2026</p>
            <p className="text-xs font-semibold text-primary-900 uppercase tracking-widest mt-1">Est. Society Year</p>
          </div>
        </div>
      </section>

      {/* 3. CORE OBJECTIVES & PRIORITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="primary" className="text-xs tracking-widest font-bold">Our Pillars</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-900">
            Core Priorities & Values
          </h2>
          <p className="text-sm text-text-muted">
            Delivering systematic changes in private healthcare through clear strategic action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {priorities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="p-6 space-y-4 hover:border-t-accent-500 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-md flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-primary-900">{item.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            );
          })}
          
          {/* Join Callout card at the end */}
          <Card className="p-6 bg-gradient-to-br from-primary-900 to-primary-700 text-white flex flex-col justify-between border-none">
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-bold text-white">Join APHN Organization Today</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Unlock statutory guidelines support, training courses, and a direct voice in state policy coordinates.
              </p>
            </div>
            <Link href="/membership" className="mt-6">
              <Button variant="primary" className="w-full text-xs font-semibold py-2.5 bg-accent-500 hover:bg-accent-600">
                Enroll Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* 4. LEADER MESSAGES & ABOUT PREVIEW */}
      <section className="bg-primary-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left about preview */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="primary">About APHN</Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900">
              Strengthening West Bengal's Private Healthcare
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                The Association of Private Hospital and Nursing Home (APHN) represents the collective interests of private clinics, diagnostic spaces, and multi-bed nursing setups.
              </p>
              <p className="font-semibold text-primary-900 border-l-4 border-accent-500 pl-4 py-1">
                "To strengthen and support private hospitals and nursing homes by promoting quality healthcare, ethical practices, collaboration, and constructive engagement with the Government for the benefit of patients and society."
              </p>
              <p>
                Our core vision centers around building a united, transparent, and progressive network of private providers committed to accessibility, quality audits, and patient welfare.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline">
              Read Our History & Core Objectives <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Right leader quote card */}
          <div className="lg:col-span-7">
            <Card hoverAccent={false} className="p-8 bg-white border border-slate-100 flex flex-col md:flex-row gap-6 items-center shadow-lg">
              <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-3xl font-bold font-heading shrink-0 shadow-inner">
                AM
              </div>
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-accent-500 font-bold">President's Message</span>
                <p className="text-sm italic text-slate-700 leading-relaxed">
                  "Private healthcare represents a fundamental pillar of emergency response and care coverage in West Bengal. Through APHN, we commit to coordinating ethically with health authorities, supporting worker dignity, and assuring patient-centric values are implemented across all clinical platforms."
                </p>
                <div>
                  <h4 className="text-sm font-bold text-primary-900">Abhijit Mondal</h4>
                  <span className="text-xs text-text-muted">President, APHN State Committee</span>
                </div>
                <Link href="/about#presidents-message" className="inline-flex items-center gap-1 text-xs font-semibold text-primary-900 hover:text-accent-600">
                  Read Full Presidential & Secretarial Statements <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* 5. NEWS & EVENTS SIDE-BY-SIDE FEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: News */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-accent-500" />
              <h2 className="text-xl font-heading font-bold text-primary-900">Latest Updates</h2>
            </div>
            <Link href="/news" className="text-xs font-semibold text-accent-600 hover:underline flex items-center gap-1">
              View All News <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {latestNews.map((news) => (
              <Card key={news.slug} className="p-5 flex flex-col justify-between hover:border-l-4 hover:border-l-accent-500 hover:border-t-0 hover:translate-y-0 transition-all shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="primary" className="text-[10px]">{news.tag}</Badge>
                    <span className="text-[10px] text-text-muted">{news.date}</span>
                  </div>
                  <h3 className="text-sm font-heading font-bold text-primary-900 hover:text-accent-600 transition-colors">
                    <Link href={`/news/${news.slug}`}>{news.title}</Link>
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">{news.summary}</p>
                </div>
                <Link href={`/news/${news.slug}`} className="text-xs font-semibold text-accent-500 mt-4 inline-flex items-center gap-1 hover:underline">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Upcoming Events */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent-500" />
              <h2 className="text-xl font-heading font-bold text-primary-900">Upcoming Events</h2>
            </div>
            <Link href="/events" className="text-xs font-semibold text-accent-600 hover:underline flex items-center gap-1">
              Events Calendar <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.slug} className="p-5 flex flex-col justify-between hover:border-l-4 hover:border-l-accent-500 hover:border-t-0 hover:translate-y-0 transition-all shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-accent-600 font-semibold bg-accent-100 px-2 py-0.5 rounded-full">{event.district}</span>
                    <span className="text-[10px] text-text-muted">{event.date}</span>
                  </div>
                  <h3 className="text-sm font-heading font-bold text-primary-900 hover:text-accent-600 transition-colors">
                    <Link href={`/events/${event.slug}`}>{event.title}</Link>
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">{event.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] text-text-muted">{event.time}</span>
                  <Link href={`/events/${event.slug}`} className="text-xs font-semibold text-accent-500 inline-flex items-center gap-1 hover:underline">
                    Event Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </section>

      {/* 6. GOVT PARTNERSHIP SUMMARY */}
      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">Policy Positioning</Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Collaborative Government - Private Partnership
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              APHN advocates for constructive dialogues, regular health department coordination channels, and streamlined compliance guidelines. We fully support government objectives including normal delivery targets, TB eradication, and vaccine accessibility, while ensuring timely payments and safety protocols for member clinics.
            </p>
          </div>
          <Link href="/government-collaboration">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900 px-8 py-3 whitespace-nowrap">
              Read Policy Framework <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 7. DYNAMIC FEE CALCULATOR & CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Calculator Panel */}
          <div className="lg:col-span-5 flex">
            <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 flex flex-col justify-between w-full shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent-600">
                  <Calculator className="w-5 h-5" />
                  <h3 className="text-base font-heading font-bold text-primary-900">
                    Annual Fee Calculator
                  </h3>
                </div>
                <p className="text-xs text-text-muted">
                  Membership fees are scaled logically based on the clinical establishment's registered bed capacity. Enter your bed count to calculate:
                </p>

                <form onSubmit={calculateMembershipFee} className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary-900 block">Registered Bed Capacity</label>
                    <input
                      type="number"
                      placeholder="e.g. 75"
                      value={bedCount}
                      onChange={(e) => setBedCount(e.target.value === "" ? "" : Number(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                  <Button type="submit" variant="secondary" className="w-full text-xs font-bold py-2 bg-transparent text-primary-900 hover:bg-primary-900 hover:text-white">
                    Calculate Annual Fee
                  </Button>
                </form>

                {calculatedFee !== null && (
                  <div className="p-4 bg-accent-100/50 rounded-md border border-accent-100 flex items-center justify-between animate-in fade-in duration-300">
                    <span className="text-xs text-text font-medium">Estimated Annual Fee:</span>
                    <span className="text-lg font-heading font-extrabold text-accent-600">₹{calculatedFee.toLocaleString()} / Year</span>
                  </div>
                )}
              </div>

              <div className="text-[10px] text-text-muted border-t border-slate-100 pt-4 mt-4">
                * Note: Founder members contribute a one-time ₹10,000 corpus fee. Standard annual fees apply subsequent years.
              </div>
            </Card>
          </div>

          {/* Right CTA banner */}
          <div className="lg:col-span-7 flex">
            <Card hoverAccent={false} className="bg-gradient-to-br from-primary-900 to-primary-700 text-white p-8 md:p-12 flex flex-col justify-center space-y-6 w-full rounded-lg border-none shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
              
              <div className="space-y-3 relative z-10">
                <Badge variant="secondary" className="bg-accent-100 text-accent-600">Enrollment Portal</Badge>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Join the Association Today
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  Become a registered General or Associate member of APHN West Bengal. Stand together with key health advocates, gain access to circular updates, legal advisories, and skills workshops.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 relative z-10">
                <Link href="/membership">
                  <Button variant="primary" size="lg">
                    Read Member Guidelines
                  </Button>
                </Link>
                <Link href="/membership/apply">
                  <Button variant="secondary" size="lg" className="text-white border-white/30 hover:bg-white/10">
                    Apply Online (Phase 2)
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

        </div>
      </section>

    </div>
  );
}
