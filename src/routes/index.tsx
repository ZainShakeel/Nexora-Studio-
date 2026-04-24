import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/services";
import { HeroParticles } from "@/components/hero-particles";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/")({
  component: Index,
});

const reasons = [
  { title: "Code + Campaigns", desc: "We're the only team you need — engineering and marketing under one roof." },
  { title: "Conversion-first design", desc: "Every pixel is judged by one metric: did it move the needle?" },
  { title: "Data-driven", desc: "Decisions backed by analytics, not opinions or trends." },
  { title: "Modern stack", desc: "React, Next.js, Webflow, WordPress — chosen for the job, not the hype." },
];

const featured: { url: string; title?: string }[] = [
  { url: "https://thebrandsspot.com/" },
  { url: "https://ebillingworks.com/" },
  { url: "https://dodgerblue-bat-963544.hostingersite.com/", title: "MoeenTraders Chemical Shop" },
  { url: "https://ursolution.co/" },
];

function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 gradient-soft opacity-60" />
        <div className="absolute -top-40 left-1/2 -z-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <HeroParticles className="-z-10 opacity-70" />
        <div className="absolute inset-0 -z-10 bg-background/40 backdrop-blur-[2px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Driving Next-Level Growth
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              We build{" "}
              <span className="text-gradient">high-converting websites</span>{" "}
              &amp; generate quality leads
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              From modern web development to data-driven marketing, Nexora Studio helps businesses grow faster.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-hero text-primary-foreground shadow-elegant hover:opacity-90">
                <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20 bg-background/80 backdrop-blur">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Services"
            title={<>Everything you need to <span className="text-gradient">grow online</span></>}
            subtitle="A full-stack growth team — engineering, design, and performance marketing."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Nexora"
            title={<>One team. <span className="text-gradient">Real results.</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-3xl font-bold text-gradient">0{i + 1}</div>
                <h3 className="mt-4 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title={<>Top <span className="text-gradient">projects</span></>}
              align="left"
            />
            <Button asChild variant="ghost" className="hover:bg-primary/10 hover:text-primary">
              <Link to="/portfolio">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProjectCard key={p.url} project={{ url: p.url, title: p.title, category: "Web" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <CtaBanner
        title="Ready to grow your business?"
        subtitle="Book a free 30-minute strategy call. No pitch — just a clear plan."
      />
    </div>
  );
}
