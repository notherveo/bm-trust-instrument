"use client";
import * as React from "react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e2e2e2] last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[0.9375rem] font-medium text-[#14213D]">{title}</span>
        <ChevronDown
          className={cn("size-4 text-[#627189] transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="pb-4 text-[0.875rem] text-[#627189] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export function Accordion({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <AccordionItem key={item.title} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
