import { ArrowUpRight, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/industries";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <div className="page industries-page">
      <section className="page-header">
        <Badge variant="secondary" className="page-tag">
          Industry expertise
        </Badge>
        <div>
          <h1>
            Built for your
            <br />
            <span className="eyebrow">industry.</span>
          </h1>
          <p>
            Deep knowledge of the unique challenges in construction, real estate,
            healthcare, and nonprofits.
          </p>
        </div>
      </section>

      <div className="industries-grid">
        {industries.map((i) => (
          <div key={i.name} className="industry-card">
            <div className="industry-top">
              <span className="industry-number">{i.name.charAt(0)}</span>
              <h3>{i.name}</h3>
            </div>
            <p>{i.focus}</p>
            <div className="industry-stats">
              <span>{i.stats.revenue}</span>
              <span>{i.stats.units}</span>
              <span>{i.stats.margin}</span>
            </div>
            <a href="#" className="industry-link">
              Case studies <ArrowUpRight className="size-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
