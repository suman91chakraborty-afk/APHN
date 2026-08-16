"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, FileText, ShieldAlert, Shield, HelpCircle } from "lucide-react";
import Button from "../ui/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      submenu: [
        { name: "Who We Are", path: "/about" },
        { name: "Leadership", path: "/leadership" },
        { name: "Committees", path: "/committees" },
      ],
    },
    { name: "Membership", path: "/membership" },
    { name: "Directory", path: "/directory" },
    { name: "Govt Partnership", path: "/government-collaboration" },
    {
      name: "Safety & Grievance",
      path: "/safety",
      submenu: [
        { name: "Patient & Worker Safety", path: "/safety" },
        { name: "Submit Grievance", path: "/grievance" },
      ],
    },
    {
      name: "News & Portal",
      path: "/news",
      submenu: [
        { name: "News & Media", path: "/news" },
        { name: "Upcoming Events", path: "/events" },
        { name: "Careers / Job Board", path: "/careers" },
        { name: "Member Login", path: "/portal/login" },
      ],
    },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary-900 shadow-md py-2" : "bg-primary-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shadow-md">
              {/* Fallback to text initials if logo image is missing */}
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
              <span className="text-white font-heading font-bold text-lg tracking-wider leading-none group-hover:text-accent-300 transition-colors">
                APHN
              </span>
              <span className="text-[10px] text-accent-300 uppercase tracking-widest leading-none mt-1">
                West Bengal
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const hasSubmenu = !!link.submenu;
              const isActive =
                pathname === link.path ||
                (hasSubmenu && link.submenu?.some((sub) => pathname === sub.path));

              return (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => hasSubmenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
                >
                  {hasSubmenu ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "text-accent-500 border-b-2 border-accent-500 rounded-b-none"
                          : "text-white/90 hover:text-accent-300"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "text-accent-500 border-b-2 border-accent-500 rounded-b-none"
                          : "text-white/90 hover:text-accent-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Submenu Dropdown */}
                  {hasSubmenu && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-52 bg-white rounded-md shadow-lg border border-slate-100 py-2 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                      {link.submenu?.map((sub) => {
                        const isSubActive = pathname === sub.path;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className={`block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-accent-600 transition-colors ${
                              isSubActive ? "text-accent-600 bg-accent-100/50" : ""
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/membership" className="hidden sm:block">
              <Button variant="primary" size="sm">
                Become a Member
              </Button>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white/90 hover:text-white focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Overlay + Menu) */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-slate-950/40 lg:hidden backdrop-blur-sm transition-opacity z-40">
          <div className="absolute right-0 top-0 w-80 h-[calc(100vh-72px)] bg-primary-900 text-white flex flex-col p-6 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const hasSubmenu = !!link.submenu;
                const isSubOpen = activeDropdown === link.name;

                return (
                  <div key={link.name} className="border-b border-white/10 pb-2">
                    {hasSubmenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(isSubOpen ? null : link.name)
                          }
                          className="flex items-center justify-between w-full text-base font-semibold py-1.5 text-white/90 hover:text-accent-300"
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSubOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isSubOpen && (
                          <div className="mt-2 ml-4 pl-3 border-l border-white/20 flex flex-col space-y-3">
                            {link.submenu?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.path}
                                className={`text-sm py-1 font-medium hover:text-accent-300 transition-colors ${
                                  pathname === sub.path ? "text-accent-300" : "text-white/70"
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.path}
                        className={`block text-base font-semibold py-1.5 hover:text-accent-300 transition-colors ${
                          pathname === link.path ? "text-accent-300" : "text-white/90"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <Link href="/membership" className="w-full">
                <Button variant="primary" className="w-full">
                  Become a Member
                </Button>
              </Link>
              <Link href="/portal/login" className="w-full">
                <Button variant="secondary" className="w-full text-white border-white/30 hover:bg-white/10">
                  Member Portal Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
