"use client";
import * as React from "react";
import { useState } from "react";
import { ArrowRight, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const services = ["Tax", "Advisory", "CFO", "Audit", "Wealth", "Other"];

export default function ContactPage() {
  const [service, setService] = useState("Tax");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const fields = ["name", "company", "email", "message"];
    fields.forEach((f) => {
      const v = data.get(f);
      if (!v || v.trim().length < 2) next[f] = "Please enter at least 2 characters.";
    });
    if (!data.get("email")?.includes("@")) next["email"] = "Enter a valid email address.";
    if (!data.get("service")) next["service"] = "Select a service interest.";
    setErrors(next);
    if (Object.keys(next).length === 0) alert("Thanks — we'll be in touch shortly.");
  };

  return (
    <div className="page contact-page">
      <section className="page-header">
        <Badge variant="secondary" className="page-tag">
          Get in touch
        </Badge>
        <div>
          <h1>
            Let's have a
            <br />
            <span className="eyebrow">real conversation.</span>
          </h1>
          <p>
            Tell us about your business — we'll get back within one business day.
          </p>
        </div>
      </section>

      <div className="contact-grid">
        <div className="contact-copy">
          <h2>
            Your business deserves
            <br />
            <span className="eyebrow">undivided attention.</span>
          </h2>
          <p>
            Whether you're a startup, a growing company, or an established
            business, we're here to help.
          </p>
          <ul>
            <li><strong>Response time:</strong> Within one business day</li>
            <li><strong>Availability:</strong> Mon–Fri, 9:00 AM – 6:00 PM PT</li>
            <li><strong>Confidential:</strong> Your information is protected</li>
          </ul>
          <Button size="lg" asChild>
            <a href="mailto:hello@trustinstrument.example">
              Email us <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <Label htmlFor="name">Full name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Jane Smith"
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <p className="field-error">{errors.name}</p>}
            </div>
            <div className="form-field">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                name="company"
                placeholder="Your company"
                aria-invalid={errors.company ? "true" : undefined}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
              {errors.company && <p className="field-error">{errors.company}</p>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@yourcompany.com"
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>
            <div className="form-field">
              <Label htmlFor="service">Service interest *</Label>
              <select
                id="service"
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                aria-invalid={errors.service ? "true" : undefined}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && <p className="field-error">{errors.service}</p>}
            </div>
          </div>
          <div className="form-field">
            <Label htmlFor="message">Message *</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your business and what you're looking for..."
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <p className="field-error">{errors.message}</p>}
          </div>
          <Button type="submit" size="lg" className="form-submit">
            Send message <ArrowRight className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
