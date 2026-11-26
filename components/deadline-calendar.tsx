"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const deadlines = [
  { date: "15 April", label: "Individual income tax return" },
  { date: "15 June", label: "Quarterly estimated tax" },
  { date: "15 September", label: "Quarterly estimated tax" },
  { date: "15 December", label: "Quarterly estimated tax" },
];

export function DeadlineCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [selected, setSelected] = useState<string | null>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const today = new Date().getDate();

  const prev = () => setMonth((m) => (m - 1 + 12) % 12);
  const next = () => setMonth((m) => (m + 1) % 12);

  return (
    <section className="bg-[#F8F8F7] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_520px] gap-12 items-center">
          <div>
            <h2 className="text-[clamp(2.1rem,2.8vw,3.25rem)] font-semibold text-[#14213D] leading-tight mb-4">
              Tax deadlines.
            </h2>
            <p className="text-[0.9375rem] text-[#627189] leading-relaxed mb-8">
              A little planning beats a last-minute scramble. Mark your
              calendar and let us handle the rest.
            </p>
            <div className="flex flex-wrap gap-3">
              {deadlines.map((d, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelected(d.date)}
                  className={cn(
                    "px-4 py-2.5 rounded-full text-sm font-medium transition-colors border",
                    selected === d.date
                      ? "bg-[#0F4C75] text-white border-[#0F4C75]"
                      : "bg-white text-[#14213D] border-[#dbdbdb] hover:border-[#9ca3af]",
                  )}
                >
                  {d.date}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0_12px_40px_-18px_rgba(15,76,117,0.18)] p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[1.125rem] font-semibold text-[#14213D]">
                {months[month]} {year}
              </span>
              <div className="flex items-center gap-1">
                <button type="button" onClick={prev} className="p-1.5 rounded-lg hover:bg-[#f1f1f1] text-[#627189]">
                  <ChevronLeft className="size-4" />
                </button>
                <button type="button" onClick={next} className="p-1.5 rounded-lg hover:bg-[#f1f1f1] text-[#627189]">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <span key={d} className="text-[0.75rem] text-[#9ca3af] font-medium">
                  {d}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const d = i + 1;
                const isToday = d === today;
                const isDeadline = deadlines.some((x) => x.date === `${d} ${months[month]}`);
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelected(`${d} ${months[month]}`)}
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-lg text-sm transition-colors",
                      isToday && !isDeadline
                        ? "bg-[#E8F1F5] text-[#0F4C75]"
                        : isDeadline
                          ? "bg-[#C9A227] text-white"
                          : "text-[#14213D] hover:bg-[#f1f1f1]",
                    )}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-2 text-[0.8125rem] text-[#627189]">
              <Check className="size-3.5 text-emerald-600" />
              <span>
                {selected ? `Marked: ${selected}` : "Select a date to mark it"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
