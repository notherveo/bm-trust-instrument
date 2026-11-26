import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Insights" };

export default function InsightsPage() {
  const articles = [
    {
      title: "The 2026 tax calendar: what changed and why it matters",
      category: "Tax",
      read: "4 min",
    },
    {
      title: "Five CFO mistakes small businesses make (and how to avoid them)",
      category: "Advisory",
      read: "6 min",
    },
    {
      title: "Cash flow forecasting: a practical guide for growing companies",
      category: "CFO",
      read: "5 min",
    },
    {
      title: "Preparing for your annual audit: a month-by-month checklist",
      category: "Audit",
      read: "7 min",
    },
    {
      title: "Estate planning for business owners: when to start",
      category: "Wealth",
      read: "5 min",
    },
    {
      title: "Exit planning 101: valuation, buyers, and timing",
      category: "Advisory",
      read: "8 min",
    },
  ];

  return (
    <div className="page insights-page">
      <section className="page-header">
        <Badge variant="secondary" className="page-tag">
          Insights
        </Badge>
        <div>
          <h1>
            Smarter decisions.
            <br />
            <span className="eyebrow">Backed by real data.</span>
          </h1>
          <p>
            Practical advice on tax, advisory, CFO services, audit, and wealth.
          </p>
        </div>
      </section>

      <div className="articles-grid">
        {articles.map((a, i) => (
          <div key={a.title} className="article-card" style={{ "--i": i } as React.CSSProperties}>
            <div className="article-top">
              <Badge variant="secondary">{a.category}</Badge>
              <span className="article-read">{a.read}</span>
            </div>
            <h3>{a.title}</h3>
            <a href="#" className="article-link">
              Read article <ArrowUpRight className="size-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="cta">
        <div className="cta-copy">
          <h2>
            More insights.
            <br />
            <span className="cta-highlight">Delivered to you.</span>
          </h2>
          <p>
            Get the latest articles, tax updates, and business tips.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Subscribe <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
