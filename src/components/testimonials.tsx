import { SectionHeading } from "@/components/section-heading";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Brightpath SaaS",
    quote:
      "Nexora rebuilt our marketing site and rolled out paid social in the same sprint. Pipeline doubled in 60 days — we've never had a vendor move this fast.",
  },
  {
    name: "Daniel Carter",
    role: "CMO, Ledgerline",
    quote:
      "The team's mix of design polish and performance discipline is rare. Our CPL dropped 38% while creative quality went up. They feel like part of our team.",
  },
  {
    name: "Aisha Rahman",
    role: "Head of Growth, Olfactory",
    quote:
      "From Shopify to Meta ads, every detail is handled. Reports are clear, calls are useful, and the work compounds month over month.",
  },
  {
    name: "James O'Connor",
    role: "CEO, JurisPrime",
    quote:
      "They redesigned our site and shipped a new lead funnel in three weeks. We're booking demos from organic and paid traffic that we never used to see.",
  },
  {
    name: "Maya Patel",
    role: "Marketing Director, eBilling Works",
    quote:
      "Senior people on every call, clear scopes, weekly experiments. Nexora is the standard I now hold every other agency to.",
  },
  {
    name: "Lucas Reinhardt",
    role: "Founder, Elleven",
    quote:
      "Premium brand, premium engineering — and the conversion data to back it. Highly recommended for serious growth-stage teams.",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Trusted by <span className="text-gradient">ambitious teams</span></>}
          subtitle="Real words from founders and marketing leaders we've worked with."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <figcaption>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
                <div className="ml-auto flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}