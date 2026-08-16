"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, Building2, MapPin, Bed, Phone, ShieldCheck, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import membersData from "@/data/members.json";

function DirectoryContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialDistrict = searchParams.get("district") || "";

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict);
  const [selectedBedRange, setSelectedBedRange] = useState<string>("");
  const [icuFilter, setIcuFilter] = useState<boolean>(false);
  const [emergencyFilter, setEmergencyFilter] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Sync initial query params if they change
  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
    setSelectedDistrict(searchParams.get("district") || "");
  }, [searchParams]);

  // Extract unique districts for dropdown filter
  const districtsList = Array.from(new Set(membersData.map((m) => m.district))).sort();

  // Filtered members list
  const filteredMembers = membersData.filter((member) => {
    // Text search (name, specialty)
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialities.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      member.address.toLowerCase().includes(searchTerm.toLowerCase());

    // District filter
    const matchesDistrict = selectedDistrict === "" || member.district === selectedDistrict;

    // Bed Range filter
    let matchesBeds = true;
    if (selectedBedRange === "under-50") {
      matchesBeds = member.beds <= 50;
    } else if (selectedBedRange === "51-100") {
      matchesBeds = member.beds > 50 && member.beds <= 100;
    } else if (selectedBedRange === "above-100") {
      matchesBeds = member.beds > 100;
    }

    // ICU filter
    const matchesIcu = !icuFilter || member.icu;

    // Emergency filter
    const matchesEmergency = !emergencyFilter || member.emergency;

    return matchesSearch && matchesDistrict && matchesBeds && matchesIcu && matchesEmergency;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDistrict("");
    setSelectedBedRange("");
    setIcuFilter(false);
    setEmergencyFilter(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Search & Action Bar */}
      <Card hoverAccent={false} className="p-4 md:p-6 bg-white border border-slate-100 shadow-md">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Text Search input */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search by hospital name, specialty, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-slate-800"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          </div>

          {/* Action triggers */}
          <div className="flex w-full md:w-auto gap-3">
            <Button
              variant="secondary"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs py-2 bg-transparent text-primary-900 border-primary-900"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            
            {(selectedDistrict || selectedBedRange || icuFilter || emergencyFilter || searchTerm) && (
              <Button
                variant="text"
                onClick={clearFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
              >
                Clear All
              </Button>
            )}
          </div>

        </div>

        {/* Collapsible filters panel */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
            
            {/* District Dropdown */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-primary-900 uppercase tracking-wider block">District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
              >
                <option value="">All Districts</option>
                {districtsList.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Bed Range Dropdown */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-primary-900 uppercase tracking-wider block">Bed Capacity</label>
              <select
                value={selectedBedRange}
                onChange={(e) => setSelectedBedRange(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
              >
                <option value="">All Capacities</option>
                <option value="under-50">Up to 50 beds</option>
                <option value="51-100">51 - 100 beds</option>
                <option value="above-100">Above 100 beds</option>
              </select>
            </div>

            {/* ICU Checkbox */}
            <div className="flex items-center gap-2 h-full pt-4">
              <input
                type="checkbox"
                id="icu-filter"
                checked={icuFilter}
                onChange={(e) => setIcuFilter(e.target.checked)}
                className="w-4 h-4 border-slate-200 text-accent-500 rounded focus:ring-accent-500"
              />
              <label htmlFor="icu-filter" className="text-xs font-semibold text-slate-700 select-none cursor-pointer">
                Has ICU Facility
              </label>
            </div>

            {/* Emergency Checkbox */}
            <div className="flex items-center gap-2 h-full pt-4">
              <input
                type="checkbox"
                id="emergency-filter"
                checked={emergencyFilter}
                onChange={(e) => setEmergencyFilter(e.target.checked)}
                className="w-4 h-4 border-slate-200 text-accent-500 rounded focus:ring-accent-500"
              />
              <label htmlFor="emergency-filter" className="text-xs font-semibold text-slate-700 select-none cursor-pointer">
                Has 24/7 Emergency
              </label>
            </div>

          </div>
        )}
      </Card>

      {/* Directory Results count */}
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>Showing <strong>{filteredMembers.length}</strong> registered establishments</span>
        {searchTerm && <span>Search: "{searchTerm}"</span>}
      </div>

      {/* Grid view of members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <Card key={member.id} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all relative">
              {member.isExample && (
                <div className="absolute right-4 top-4">
                  <Badge variant="neutral" className="bg-slate-100 text-slate-600 text-[8px] font-bold border border-slate-200">
                    Sample Data
                  </Badge>
                </div>
              )}

              <div className="space-y-4">
                
                {/* Badge Tier + Accreditation */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="primary" className="text-[9px]">
                    {member.membershipTier} Member
                  </Badge>
                  {member.accreditation && (
                    <Badge variant="success" className="text-[9px] bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {member.accreditation}
                    </Badge>
                  )}
                </div>

                {/* Establishment name & district */}
                <div className="space-y-1">
                  <h3 className="text-sm font-heading font-extrabold text-primary-900 leading-tight">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] text-text-muted">
                    <MapPin className="w-3 h-3 text-accent-500" />
                    <span>{member.district}, West Bengal</span>
                  </div>
                </div>

                {/* Facilities indicator */}
                <div className="flex items-center gap-4 text-xs font-medium border-y border-slate-50 py-2">
                  <div className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-accent-500" />
                    <span>{member.beds} Beds</span>
                  </div>
                  {member.icu && (
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      ICU
                    </span>
                  )}
                  {member.emergency && (
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      24/7 ER
                    </span>
                  )}
                </div>

                {/* Specialties tag list */}
                <div className="space-y-1.5">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Key Specialties</span>
                  <div className="flex flex-wrap gap-1">
                    {member.specialities.map((spec, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-800 text-[9px] px-2 py-0.5 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Contacts */}
              <div className="border-t border-slate-100 pt-4 mt-6 space-y-2 text-[10px] text-text-muted">
                <p className="leading-tight">
                  <strong>Address:</strong> {member.address}
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent-500" />
                  <span>{member.contact}</span>
                </div>
              </div>

            </Card>
          ))
        ) : (
          <div className="col-span-full py-16 text-center text-text-muted bg-white border border-dashed border-slate-200 rounded-lg">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold">No registered members matches the filters.</p>
            <p className="text-xs mt-1">Try clearing search parameters or adjusting checkboxes.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4 text-xs font-semibold py-2">
              Reset Directory Filters
            </Button>
          </div>
        )}
      </div>

    </div>
  );
}

export default function Directory() {
  return (
    <div className="py-12 space-y-8">
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            APHN Network Map
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Member Hospital Directory
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Locate authorized clinics, multispeciality hubs, and nursing homes. Check bed capacities, critical facilities, and specialized treatments.
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-900 mx-auto"></div>
          <p className="text-xs text-text-muted mt-3">Loading Member Records...</p>
        </div>
      }>
        <DirectoryContent />
      </Suspense>
    </div>
  );
}
