"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import { services as serviceData } from "@/lib/services";

type Stage = "start-up" | "growth" | "mature";
type Pain = "tax" | "cash" | "audit" | "wealth";

const stages: { key: Stage; label: string; desc: string }[] = [
  { key: "start-up", label: "Start-up", desc: "Getting off the ground." },
  { key: "growth", label: "Growth", desc: "Scaling operations." },
  { key: "mature", label: "Mature", desc: "Stabilizing and optimizing." },
];

const pains: { key: Pain; label: string; desc: string }[] = [
  { key: "tax", label: "Tax planning", desc: "Minimize liability legally." },
  { key: "cash", label: "Cash flow", desc: "Keep the pipeline full." },
  { key: "audit", label: "Audit prep", desc: "Get ready for review." },
  { key: "wealth", label: "Wealth", desc: "Protect and grow assets." },
];

const bundles = [
  {
    id: "tax-smart",
    title: "Tax-smart foundation",
    services: ["Tax planning", "Bookkeeping"],
    for: ["Start-up", "Growth"],
    pain: ["Tax"],
    color: "bg-teal-600",
  },
  {
    id: "cash-control",
    title: "Cash-control system",
    services: ["CFO advisory", "Bookkeeping"],
    for: ["Start-up", "Growth", "Mature"],
    pain: ["Cash"],
    color: "bg-amber-500",
  },
  {
    id: "audit-ready",
    title: "Audit-ready package",
    services: ["Audit", "Bookkeeping"],
    for: ["Growth", "Mature"],
    pain: ["Audit"],
    color: "bg-slate-700",
  },
  {
    id: "wealth-growth",
    title: "Wealth & growth",
    services: ["Wealth management", "CFO advisory"],
    for: ["Mature"],
    pain: ["Wealth"],
    color: "bg-emerald-600",
  },
];

export function ServiceFinder() {
  const [stage, setStage] = useState<Stage>("start-up");
  const [pain, setPain] = useState<Pain>("tax");
  const [result, setResult] = useState<string | null>(null);

  const recommendation = bundles.find((b) =>
    b.for.includes(stage) && b.pain.includes(pain),
  );

  return (
    <section className="bg-[#F8F8F7] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_520px] gap-12 items-center">
          <div>
            <h2 className="text-[clamp(2.1rem,2.8vw,3.25rem)] font-semibold text-[#14213D] leading-tight mb-4">
              Find your service.
            </h2>
            <p className="text-[0.9375rem] text-[#627189] leading-relaxed mb-8">
              Pick your business stage and a pain point. We point you at the
              right service bundle.
            </p>
            <div className="space-y-4">
              {stages.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setStage(s.key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg border transition-colors",
                    stage === s.key
                      ? "border-[#0F4C75] bg-[#E8F1F5] text-[#0F4C75]"
                      : "border-[#dbdbdb] text-[#5b6673] hover:border-[#9ca3af]",
                  )}
                >
                  <span className="font-medium">{s.label}</span>
                  <span className="block text-[0.8125rem]">{s.desc}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-[0_12px_40px_-18px_rgba(15,76,117,0.18)] p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="size-4 text-amber-500" />
                <span className="text-[0.8125rem] font-medium text-[#627189]">
                  Pick a pain point
                </span>
              </div>
              <div className="space-y-2">
                {pains.map((p) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setPain(p.key)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg border transition-colors",
                      pain === p.key
                        ? "border-[#C9A227] bg-[#FFF9EB] text-[#0F4C75]"
                        : "border-[#dbdbdb] text-[#5b6673] hover:border-[#9ca3af]",
                    )}
                  >
                    <span className="font-medium">{p.label}</span>
                    <span className="block text-[0.8125rem]">{p.desc}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[#ececec]">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="bg-[#F0F8F7] rounded-xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="size-4 text-emerald-600" />
                      <span className="text-[0.8125rem] font-medium text-[#0F4C75]">
                        We recommend
                      </span>
                    </div>
                    <h3 className="text-[1.125rem] font-semibold text-[#14213D] mb-2">
                      {recommendation?.title}
                    </h3>
                    <p className="text-[0.875rem] text-[#627189] mb-3">
                      {recommendation?.services.join(" · ")}
                    </p>
                    <button className="w-full py-2.5 bg-[#0F4C75] text-white text-sm font-medium rounded-lg hover:bg-[#0b3d5c] transition-colors flex items-center justify-center gap-2">
                      See details <ArrowRight className="size-4" />
                    </button>
                  </motion.div>
                ) : (
                  <p className="text-[0.875rem] text-[#627189] italic">
                    Your combination isn't in our catalog yet — tell us and we
                    build a custom solution.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
