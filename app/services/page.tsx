import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/services";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="page services-page">
      <section className="page-header">
        <Badge variant="secondary" className="page-tag">
          What we do
        </Badge>
        <div>
          <h1>
            The expertise you need.
            <br />
            <span className="eyebrow">Without the guesswork.</span>
          </h1>
          <p>
            Tax, advisory, outsourced CFO, audit, and wealth — matched to your stage.
          </p>
        </div>
      </section>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-top">
              <Badge variant="secondary">{s.category}</Badge>
              <h3>{s.title}</h3>
            </div>
            <p>{s.description}</p>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={`/services#${s.category}`} className="service-link">
              Learn more <ArrowUpRight className="size-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
