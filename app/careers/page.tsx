import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/accordion";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  const roles = [
    {
      title: "Senior Tax Associate",
      team: "Tax",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Advisory Analyst",
      team: "Advisory",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "CFO Operations Manager",
      team: "Outsourced CFO",
      location: "San Francisco, CA",
      type: "Full-time",
    },
  ];

  const faqs = [
    {
      title: "What kind of experience do you look for?",
      content: "We value curiosity and analytical rigor over years of experience. Most of our team members started with 1–2 years of relevant work and grew into their roles.",
    },
    {
      title: "Do you offer remote work?",
      content: "Yes — several roles are fully remote, and we support hybrid arrangements for others. We believe in flexibility without losing the collaborative culture.",
    },
    {
      title: "What does the application process look like?",
      content: "One application, a brief conversation with the hiring manager, and an optional practical exercise. We keep it short and focused on fit.",
    },
  ];

  return (
    <div className="page careers-page">
      <section className="page-header">
        <Badge variant="secondary" className="page-tag">
          Careers
        </Badge>
        <div>
          <h1>
            Build something
            <br />
            <span className="eyebrow">you can be proud of.</span>
          </h1>
          <p>
            Join a team that treats every client like their own business.
          </p>
        </div>
      </section>

      <div className="careers-top">
        <div className="careers-copy">
          <h2>
            Your work matters.
            <br />
            <span className="eyebrow">Your growth matters more.</span>
          </h2>
          <p>
            We're looking for people who love numbers, ask why, and don't
            settle for "that's how it's always been done."
          </p>
          <Button size="lg" asChild>
            <a href="#" className="careers-cta">
              View open roles <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
        <div className="careers-roles">
          {roles.map((r) => (
            <div key={r.title} className="careers-role">
              <div>
                <h3>{r.title}</h3>
                <p>{r.team} · {r.location} · {r.type}</p>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <a href="#">
                  Apply <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Accordion items={faqs} />

      <div className="careers-benefits">
        <h2>Why we're different</h2>
        <div className="benefits-grid">
          {[
            { title: "Flexible hours", body: "Work when you're at your best." },
            { title: "Continuous learning", body: "Training budget and conference support." },
            { title: "Team culture", body: "Small enough to know everyone, big enough to matter." },
            { title: "Competitive comp", body: "Fair pay, bonus, and equity opportunities." },
          ].map((b) => (
            <div key={b.title} className="benefits-item">
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
