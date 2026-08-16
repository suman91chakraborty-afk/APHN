"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import eventsData from "@/data/events.json";

export default function Events() {
  const [selectedStatus, setSelectedStatus] = useState<"all" | "upcoming" | "completed">("all");

  const filteredEvents = selectedStatus === "all"
    ? eventsData
    : eventsData.filter((event) => event.status === selectedStatus);

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <section className="bg-primary-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="secondary" className="bg-accent-100 text-accent-600 border border-accent-300">
            APHN Calendar
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Upcoming & Completed Events
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Participate in regional coordination summits, training seminars, and executive board assemblies.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-primary-900 uppercase tracking-wider mr-2">Status:</span>
          <Button
            variant={selectedStatus === "all" ? "primary" : "secondary"}
            onClick={() => setSelectedStatus("all")}
            className="text-xs py-1.5 px-3.5"
          >
            All Events
          </Button>
          <Button
            variant={selectedStatus === "upcoming" ? "primary" : "secondary"}
            onClick={() => setSelectedStatus("upcoming")}
            className="text-xs py-1.5 px-3.5"
          >
            Upcoming
          </Button>
          <Button
            variant={selectedStatus === "completed" ? "primary" : "secondary"}
            onClick={() => setSelectedStatus("completed")}
            className="text-xs py-1.5 px-3.5"
          >
            Completed
          </Button>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card key={event.slug} className="p-6 bg-white border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all relative">
                
                {event.isExample && (
                  <div className="absolute right-4 top-4">
                    <Badge variant="neutral" className="text-[8px] bg-slate-100 text-slate-500 border border-slate-200">
                      Sample Event
                    </Badge>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={event.status === "upcoming" ? "secondary" : "neutral"}>
                      {event.status}
                    </Badge>
                    <span className="text-[10px] text-text-muted flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {event.date}
                    </span>
                  </div>

                  <h2 className="text-base font-heading font-extrabold text-primary-900 hover:text-accent-600 transition-colors">
                    <Link href={`/events/${event.slug}`}>{event.title}</Link>
                  </h2>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 space-y-3 text-[10px] text-text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <Link href={`/events/${event.slug}`} className="text-xs font-semibold text-accent-500 hover:text-accent-600 inline-flex items-center gap-1 hover:underline">
                      View Event Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </Card>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-text-muted bg-white border border-dashed border-slate-200 rounded-lg">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold">No events found in this category.</p>
              <Button variant="outline" onClick={() => setSelectedStatus("all")} className="mt-4 text-xs font-semibold py-2">
                Show All Events
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
