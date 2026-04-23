import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Code2, Palette, Target, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexora Digital" },
      { name: "description", content: "Web development, UI/UX design, PPC and lead generation services that drive measurable growth." },
      { property: "og:title", content: "Services — Nexora Digital" },
      { property: "og:description", content: "Code + Campaigns. End-to-end growth services for ambitious brands." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade websites and web apps engineered for speed, scale and conversion.",
    benefits: ["WordPress, React, Angular, Next.js & Webflow", "Lightning-fast Core Web Vitals", "SEO-ready architecture", "CMS your team will actually use"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces that feel inevitable — beautiful, accessible and built around real user behavior.",
    benefits: ["Conversion-focused wireframes", "Modern design systems", "Mobile-first prototypes", "Usability testing"],
  },
  {
    icon: Target,
    title: "PPC & Lead Generation",
    desc: "Data-driven Google, Meta and LinkedIn campaigns that lower CPC and lift qualified pipeline.",
    benefits: ["Full-funnel campaign strategy", "CPC & CPL optimization", "High-converting landing pages", "Transparent reporting dashboards"],
  },
];

function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Services"
            title={<>Code &amp; Campaigns under <span className="text-gradient">one roof</span></>}
            subtitle="From the first wireframe to the last optimized ad bid — Nexora handles the full growth stack."
          />
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6">
          {services.map((s, i) => (
            <div key={s.title} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="rounded-3xl border border-border gradient-soft p-12 shadow-card">
                <s.icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 gradient-hero text-primary-foreground shadow-elegant hover:opacity-90">
                  <Link to="/contact">Discuss your project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}