"use client";

import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export function StatCard({
  value,
  label,
  suffix = "",
  delay = 0,
}: {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}) {
  const ref = useInView(null, { once: true, margin: "0px 0px -8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-2xl shadow-[0_12px_40px_-18px_rgba(15,76,117,0.18)] p-6"
    >
      <div className="text-[3.25rem] font-semibold text-[#14213D] leading-none tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="mt-2 text-[0.875rem] text-[#627189]">{label}</div>
    </motion.div>
  );
}
