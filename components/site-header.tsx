"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
      scrolled ? "bg-[#ffffff]/92 backdrop-blur-md shadow-[0_1px_20px_-10px_rgba(15,76,117,0.12)]" : "bg-transparent",
    )}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-[1.125rem] font-semibold text-[#14213D]">
          TRUST INSTRUMENT ADVISORY
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[0.9375rem] text-[#5b6673] hover:text-[#14213D] transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="px-5 py-2.5 bg-[#0F4C75] text-white text-sm font-medium rounded-lg hover:bg-[#0b3d5c] transition-colors">
            Get a consultation
          </Link>
        </nav>
        <button type="button" onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-[#14213D]">
          <Menu className="size-5" />
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#e2e2e2] shadow-[0_12px_40px_-18px_rgba(15,76,117,0.25)]"
        >
          <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-[1.125rem] font-semibold text-[#14213D]">Menu</span>
            <button type="button" onClick={() => setMobileOpen(false)} className="p-2 text-[#627189]">
              <X className="size-5" />
            </button>
          </div>
          <div className="max-w-[1400px] mx-auto px-6 py-2 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[0.9375rem] text-[#14213D] hover:bg-[#f1f1f1]"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-[#0F4C75] text-white text-center text-sm font-medium rounded-lg"
            >
              Get a consultation
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
