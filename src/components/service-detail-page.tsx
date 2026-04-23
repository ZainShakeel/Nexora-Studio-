import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { WhyNexora, HowWeWork } from "@/components/why-and-how";
import { Check, ArrowRight } from "lucide-react";
import type { ServiceDef } from "@/data/services";

export function ServiceDetailPage({ service }: { service: ServiceDef }) {
  const Icon = service.icon;
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Service
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{service.long}</p>
            <Button asChild size="lg" className="mt-8 gradient-hero text-primary-foreground shadow-elegant hover:opacity-90">
              <Link to="/contact">Discuss your project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] gradient-hero opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border gradient-soft p-12 shadow-elegant">
              <Icon className="h-40 w-40 text-primary mx-auto" strokeWidth={1.2} />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {service.subServices.slice(0, 4).map((s) => (
                  <div key={s.title} className="rounded-xl border border-border bg-background/70 p-3 text-xs font-medium">
                    {s.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What's included"
            title={<>Everything in <span className="text-gradient">{service.title}</span></>}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.subServices.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyNexora items={service.why} />
      <HowWeWork />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl gradient-hero px-8 py-14 text-center shadow-elegant md:px-16">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Let's build something that converts</h2>
            <Button asChild size="lg" className="mt-8 bg-background text-foreground shadow-elegant hover:bg-background/90">
              <Link to="/contact">Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}