"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

interface EventRegisterWidgetProps {
  status: string;
  registrationLimit: number;
}

export const EventRegisterWidget: React.FC<EventRegisterWidgetProps> = ({
  status,
  registrationLimit,
}) => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  if (status === "completed") {
    return (
      <div className="p-3 bg-slate-100 text-slate-600 rounded text-center text-xs font-semibold">
        This event is completed
      </div>
    );
  }

  if (registered) {
    return (
      <div className="p-4 bg-emerald-100 text-emerald-800 rounded border border-emerald-200 text-center space-y-2">
        <CheckCircle2 className="w-6 h-6 mx-auto" />
        <p className="text-xs font-bold">Successfully Registered!</p>
        <p className="text-[10px] text-emerald-700">Check your email for confirmation pass details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleRegister} className="space-y-3">
      <p className="text-[11px] text-text-muted leading-relaxed">
        Registered members can reserve their seats directly online:
      </p>
      <Button type="submit" variant="primary" className="w-full text-xs font-bold py-2.5">
        Register for Event
      </Button>
    </form>
  );
};

export default EventRegisterWidget;
