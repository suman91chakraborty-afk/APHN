import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Clock, Users, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import EventRegisterWidget from "@/components/ui/EventRegisterWidget";
import eventsData from "@/data/events.json";

interface EventDetailProps {
  params: {
    slug: string;
  };
}

// Pre-render static paths at build time
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventDetail({ params }: EventDetailProps) {
  const { slug } = params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Back button */}
      <Link href="/events" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-900 hover:text-accent-600 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Events Calendar
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Event details */}
        <div className="lg:col-span-8 space-y-6">
          <Card hoverAccent={false} className="p-6 md:p-10 bg-white border border-slate-100 shadow-lg space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={event.status === "upcoming" ? "secondary" : "neutral"}>
                  {event.status}
                </Badge>
                <span className="text-[10px] text-text-muted font-semibold bg-primary-100 px-2 py-0.5 rounded-full">
                  {event.district} Unit
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary-900 leading-tight">
                {event.title}
              </h1>

              <p className="text-sm font-semibold text-slate-700 leading-relaxed border-l-4 border-accent-500 pl-4 py-1">
                {event.description}
              </p>
            </div>

            {/* Event Agenda / Content */}
            <div className="text-sm text-text leading-relaxed text-justify space-y-4 pt-4 border-t border-slate-100">
              <p>{event.content}</p>
              <h3 className="text-sm font-heading font-bold text-primary-900 pt-2">Operational Guidelines:</h3>
              <ul className="list-disc pl-5 space-y-2 text-xs text-text-muted">
                <li>Attendance is strictly restricted to registered APHN members or delegated clinical representatives.</li>
                <li>Please bring your digital registration certificate or physical membership card for verification at the entrance.</li>
                <li>Any proposals or amendments must be submitted to the Secretary 48 hours prior to the event time.</li>
              </ul>
            </div>

            {/* Warning Badge for Sample data */}
            {event.isExample && (
              <div className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-md flex gap-3 items-center text-xs text-text-muted">
                <ShieldAlert className="w-5 h-5 text-accent-500 shrink-0" />
                <p>
                  <strong>Notice:</strong> This event schedule is a simulation representation. Real committee meeting schedules, AGM parameters, and public healthcare seminars will replace these listings before site go-live.
                </p>
              </div>
            )}

          </Card>
        </div>

        {/* Right Column: Date, Venue Info & Registration */}
        <div className="lg:col-span-4 space-y-6">
          <Card hoverAccent={false} className="p-6 bg-white border border-slate-100 shadow-md space-y-6">
            <h3 className="text-base font-heading font-bold text-primary-900 border-b border-slate-100 pb-3">
              Event Details
            </h3>

            <div className="space-y-4 text-xs text-text-muted">
              
              {/* Date */}
              <div className="flex gap-3">
                <Calendar className="w-5 h-5 text-accent-500 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-semibold text-slate-700 block">Date</span>
                  <span>{event.date}</span>
                </div>
              </div>

              {/* Time */}
              <div className="flex gap-3 border-t border-slate-50 pt-3">
                <Clock className="w-5 h-5 text-accent-500 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-semibold text-slate-700 block">Time</span>
                  <span>{event.time}</span>
                </div>
              </div>

              {/* Venue */}
              <div className="flex gap-3 border-t border-slate-50 pt-3">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-semibold text-slate-700 block">Venue</span>
                  <span className="leading-tight">{event.venue}</span>
                </div>
              </div>

              {/* Seats limit */}
              <div className="flex gap-3 border-t border-slate-50 pt-3">
                <Users className="w-5 h-5 text-accent-500 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-semibold text-slate-700 block">Registration Cap</span>
                  <span>Max {event.registrationLimit} participants</span>
                </div>
              </div>

            </div>

            {/* Registration Actions widget */}
            <div className="border-t border-slate-100 pt-6">
              <EventRegisterWidget status={event.status} registrationLimit={event.registrationLimit} />
            </div>

          </Card>
        </div>

      </div>

    </div>
  );
}
