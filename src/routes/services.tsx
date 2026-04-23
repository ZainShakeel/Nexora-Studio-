import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { WhyNexora, HowWeWork } from "@/components/why-and-how";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexora Digital" },
      { name: "description", content: "Website development, paid media & lead generation, and creative design services that drive measurable growth." },
      { property: "og:title", content: "Services — Nexora Digital" },
      { property: "og:description", content: "Code + Campaigns. End-to-end growth services for ambitious brands." },
    ],
  }),
  component: ServicesPage,
});

const WHY_GLOBAL = [
  { title: "Code + Campaigns", desc: "Engineering and marketing under one accountable team." },
  { title: "Conversion-first", desc: "Every output is judged by whether it moved the metric." },
  { title: "Modern stack", desc: "WordPress, React, Next.js, Webflow — chosen for the job." },
  { title: "Transparent", desc: "Live reporting, weekly decisions, no black boxes." },
];

function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Services"
            title={<>Three services. <span className="text-gradient">One growth engine.</span></>}
            subtitle="From the first wireframe to the last optimized ad bid — Nexora handles the full growth stack."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-6">
          {SERVICES.map((s, i) => (
            <div key={s.slug} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="rounded-3xl border border-border gradient-soft p-12 shadow-card">
                <s.icon className="h-20 w-20 text-primary" strokeWidth={1.4} />
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {s.subServices.map((sub) => (
                    <div key={sub.title} className="rounded-lg border border-border bg-background/70 px-3 py-2 text-xs font-medium">
                      {sub.title}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">0{i + 1}</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{s.long}</p>
                <ul className="mt-6 space-y-3">
                  {s.subServices.map((sub) => (
                    <li key={sub.title} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                      </span>
                      <span><span className="font-semibold">{sub.title}.</span> <span className="text-muted-foreground">{sub.desc}</span></span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="gradient-hero text-primary-foreground shadow-elegant hover:opacity-90">
                    <Link to={`/services/${s.slug}` as string}>Explore service <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact">Discuss your project</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyNexora items={WHY_GLOBAL} />
      <HowWeWork />
    </div>
  );
}