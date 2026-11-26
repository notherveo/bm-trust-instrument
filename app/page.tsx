import * as React from "react";
import { ArrowRight, ArrowUpRight, Check, FileText, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/stat-card";
import { Reveal } from "@/components/reveal";
import { ServiceFinder } from "@/components/service-finder";
import { DeadlineCalendar } from "@/components/deadline-calendar";
import { services } from "@/lib/services";

const stats = [
  { value: "$4.2B", suffix: "M", label: "Client revenue advised", delay: 0 },
  { value: "1,842", suffix: "", label: "Businesses served", delay: 0.1 },
  { value: "98.7", suffix: "%", label: "On-time filings", delay: 0.2 },
  { value: "34", suffix: "", label: "Years of experience", delay: 0.3 },
];

const features = [
  {
    icon: Sparkles,
    title: "Smart recommendations",
    body: "Our service finder matches your business stage and priorities to the right expertise.",
  },
  {
    icon: FileText,
    title: "Deadline intelligence",
    body: "A live tax calendar keeps you ahead of filings and payments.",
  },
  {
    icon: TrendingUp,
    title: "Data-driven advice",
    body: "Every recommendation is backed by real business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & compliant",
    body: "Your financial data is protected with enterprise-grade security.",
  },
];

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-top">
          <div className="hero-mark">
            <span className="brand-symbol" />
            <span className="brand-name">TRUST INSTRUMENT</span>
            <span className="hero-tagline">The numbers, without the noise.</span>
          </div>
          <div className="hero-lead">
            <h1>
              Clear numbers.
              <br />
              <span className="hero-highlight">
                Real business outcomes.
              </span>
            </h1>
            <p>
              A CPA firm that treats your business like its own. Tax, advisory,
              outsourced CFO, audit, and wealth — matched to your stage.
            </p>
            <div className="hero-actions">
              <Button size="lg" asChild>
                <a href="/contact">
                  Book a call <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="/services">
                  Explore services <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-stats">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
          <div className="hero-visual">
            <ServiceFinder />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-top">
          <Badge variant="secondary" className="section-tag">
            Built for real businesses
          </Badge>
          <h2>
            The expertise you need.
            <br />
            <span className="eyebrow">Without the guesswork.</span>
          </h2>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <f.icon className="feature-icon" />
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="industries">
        <div className="section-top">
          <Badge variant="secondary" className="section-tag">
            Industry expertise
          </Badge>
          <h2>
            Built for your
            <br />
            <span className="eyebrow">industry.</span>
          </h2>
        </div>
        <div className="industries-grid">
          {services.slice(0, 4).map((s, i) => (
            <div key={s.title} className="industry-card" style={{ "--i": i } as React.CSSProperties}>
              <div className="industry-top">
                <span className="industry-number">{i + 1}</span>
                <h3>{s.title}</h3>
              </div>
              <p>{s.description}</p>
              <div className="industry-stats">
                {s.items.slice(0, 3).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a href={`/services#${s.category}`} className="industry-link">
                Learn more <ArrowUpRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="calendar-section">
        <div className="section-top">
          <Badge variant="secondary" className="section-tag">
            Stay on top of deadlines
          </Badge>
          <h2>
            Never miss a filing.
            <br />
            <span className="eyebrow">Ever.</span>
          </h2>
        </div>
        <div className="calendar-visual">
          <DeadlineCalendar />
        </div>
      </section>

      <section className="cta">
        <div className="cta-mark">
          <span className="brand-symbol" />
          <span className="brand-name">TRUST INSTRUMENT</span>
        </div>
        <div className="cta-copy">
          <h2>
            Your business deserves
            <br />
            <span className="cta-highlight">clarity.</span>
          </h2>
          <p>
            Let's find the right expertise for your business.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Book a call <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
