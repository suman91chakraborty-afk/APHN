"use client";

import React, { useState } from "react";
import { Download, FileText, Search, FileSignature, BookOpen, Scale, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ResourceItem {
  id: string;
  title: string;
  category: "governance" | "forms" | "training" | "circulars";
  size: string;
  date: string;
  description: string;
}

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const resources: ResourceItem[] = [
    {
      id: "RES001",
      title: "APHN Constitution & Rules of Society Bylaws",
      category: "governance",
      size: "1.2 MB",
      date: "2026-05-15",
      description: "Official registered constitution rules of APHN under the West Bengal Societies Registration Act.",
    },
    {
      id: "RES002",
      title: "General & Associate Member Code of Conduct Manual",
      category: "governance",
      size: "820 KB",
      date: "2026-06-01",
      description: "Standards and billing guidelines mandatory for maintaining active membership inside the trade association.",
    },
    {
      id: "RES003",
      title: "Offline Membership Application Form (Print Version)",
      category: "forms",
      size: "350 KB",
      date: "2026-04-10",
      description: "Printable enrollment layout for clinical establishments applying via district committee physical channels.",
    },
    {
      id: "RES004",
      title: "Clinical Establishment Licencing Documentation Checklist",
      category: "forms",
      size: "420 KB",
      date: "2026-07-20",
      description: "List of pollution certificates, fire declarations, and building maps required for license updates.",
    },
    {
      id: "RES005",
      title: "Paramedical Nursing & Patient Care Training Syllabus",
      category: "training",
      size: "2.1 MB",
      date: "2026-07-02",
      description: "Curriculum modules for the state paramedic skill update course hosted by training coordinators.",
    },
    {
      id: "RES006",
      title: "ICU Environment Sterilization & Infection Control Manual",
      category: "training",
      size: "1.8 MB",
      date: "2026-06-18",
      description: "Official guidelines for nursing homes managing infection parameters and clinical compliance standards.",
    },
    {
      id: "RES007",
      title: "West Bengal CE Act Notification - Waste Management Amendments",
      category: "circulars",
      size: "950 KB",
      date: "2026-08-01",
      description: "Official publication from the Health & Family Welfare department regarding biomedical waste disposal.",
    },
    {
      id: "RES008",
      title: "Swasthya Sathi Scheme Reimbursement Guidelines & Billing Updates",
      category: "circulars",
      size: "1.4 MB",
      date: "2026-07-10",
      description: "State circular regarding pre-authorization procedures and mandatory reporting documents.",
    },
  ];

  const handleDownload = (filename: string) => {
    alert(`Downloading "${filename}" placeholder PDF. (In production, this triggers the direct download of the server asset).`);
  };

  const filteredResources = resources.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "governance":
        return <Scale className="w-5 h-5 text-accent-500" />;
      case "forms":
        return <FileSignature className="w-5 h-5 text-accent-500" />;
      case "training":
        return <BookOpen className="w-5 h-5 text-accent-500" />;
      case "circulars":
        return <FileText className="w-5 h-5 text-accent-500" />;
      default:
        return <FileText className="w-5 h-5 text-accent-500" />;
    }
  };

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            APHN Library
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Publications & Documents
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Download official society bylaws, print application forms, paramedic training syllabi, and state health notifications.
          </p>
        </div>
      </section>

      {/* Search & Category filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Card hoverAccent={false} className="p-4 md:p-6 bg-white border border-slate-100 shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search by publication title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-slate-800"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Button
              variant={selectedCategory === "all" ? "primary" : "secondary"}
              onClick={() => setSelectedCategory("all")}
              className="text-xs py-1 px-3"
            >
              All Library
            </Button>
            <Button
              variant={selectedCategory === "governance" ? "primary" : "secondary"}
              onClick={() => setSelectedCategory("governance")}
              className="text-xs py-1 px-3"
            >
              Bylaws & Rules
            </Button>
            <Button
              variant={selectedCategory === "forms" ? "primary" : "secondary"}
              onClick={() => setSelectedCategory("forms")}
              className="text-xs py-1 px-3"
            >
              Enrollment Forms
            </Button>
            <Button
              variant={selectedCategory === "training" ? "primary" : "secondary"}
              onClick={() => setSelectedCategory("training")}
              className="text-xs py-1 px-3"
            >
              Training Materials
            </Button>
            <Button
              variant={selectedCategory === "circulars" ? "primary" : "secondary"}
              onClick={() => setSelectedCategory("circulars")}
              className="text-xs py-1 px-3"
            >
              Govt Circulars
            </Button>
          </div>

        </Card>
      </section>

      {/* Results grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((item) => (
              <Card key={item.id} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-md flex items-center justify-center shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="space-y-1 flex-grow">
                      <Badge variant="primary" className="text-[8px]">{item.category}</Badge>
                      <h3 className="text-xs font-heading font-extrabold text-primary-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-slate-50 pt-4 mt-6 flex items-center justify-between text-[10px] text-text-muted">
                  <div className="flex gap-4">
                    <span>Size: <strong>{item.size}</strong></span>
                    <span>Updated: <strong>{item.date}</strong></span>
                  </div>
                  <Button
                    onClick={() => handleDownload(item.title)}
                    className="text-xs text-accent-500 font-bold hover:text-accent-600 hover:underline flex items-center gap-1 bg-transparent px-0 py-0 hover:-translate-y-0 shadow-none hover:shadow-none"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-text-muted bg-white border border-dashed border-slate-200 rounded-lg">
              <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold">No publications matched your parameters.</p>
              <Button variant="outline" onClick={() => setSelectedCategory("all")} className="mt-4 text-xs font-semibold py-2">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
