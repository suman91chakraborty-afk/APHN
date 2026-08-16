"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function PortalLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please fill out both member ID and password.");
      return;
    }

    setIsLoggingIn(true);

    // Simulate authentication checks
    setTimeout(() => {
      setIsLoggingIn(false);
      // Let's accept any login for demonstration purposes, but set default test ID
      router.push("/portal/dashboard");
    }, 1200);
  };

  return (
    <div className="py-16 max-w-md mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      {/* Brand logo header */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center p-1.5 overflow-hidden mx-auto shadow-md">
          <img
            src="/logo.png"
            alt="APHN"
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span className="text-white font-bold text-xs tracking-wider">APHN</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-accent-500 font-bold block mt-3">Member Administration</span>
        <h1 className="text-xl font-heading font-extrabold text-primary-900">
          APHN Member Portal Login
        </h1>
      </div>

      {/* Login Card */}
      <Card hoverAccent={false} className="p-6 md:p-8 bg-white border border-slate-100 shadow-xl space-y-6">
        
        {error && (
          <div className="p-3 bg-rose-50 border border-rose-100 rounded text-xs text-rose-600 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Member ID / Email */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 block">Registered Email or Member ID</label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. MEM001 or admin@hospital.com"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
              />
              <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            </div>
            <span className="text-[10px] text-text-muted">Tip: Use `MEM001` or any email to test.</span>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-700 block">Account Password</label>
              <Link href="/contact" className="text-[10px] font-semibold text-accent-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-9 pr-9 py-2 border border-slate-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-accent-500"
              />
              <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" variant="primary" disabled={isLoggingIn} className="w-full text-xs font-bold py-3 flex items-center justify-center gap-2">
            {isLoggingIn ? "Logging in..." : "Access Dashboard"}
            <ArrowRight className="w-4 h-4" />
          </Button>

        </form>

      </Card>

      {/* Info Warning */}
      <div className="p-4 bg-slate-50 border border-slate-100 rounded text-[11px] text-text-muted leading-relaxed text-center">
        <span>Are you a new Clinical Establishment looking to apply? </span>
        <Link href="/membership" className="text-accent-600 hover:underline font-bold">
          Read Eligibility Guidelines
        </Link>
      </div>

    </div>
  );
}
