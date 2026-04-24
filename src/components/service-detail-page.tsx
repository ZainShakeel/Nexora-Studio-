import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { WhyNexora, HowWeWork } from "@/components/why-and-how";
import { Check, ArrowRight } from "lucide-react";
import type { ServiceDef } from "@/data/services";
import { FaqSection, type FaqItem } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";

const SERVICE_FAQS: Record<string, FaqItem[]> = {
  "web-development": [
    { q: "Which platforms do you build on?", a: "WordPress, Shopify, Webflow, and custom React / Next.js / Angular applications. We pick the platform that fits your team, content workflow and growth goals." },
    { q: "How long does a typical website take?", a: "Most marketing sites ship in 4–6 weeks. Larger custom builds or commerce stores typically run 8–12 weeks. We share weekly demos so you always see progress." },
    { q: "Do you handle SEO and performance?", a: "Yes — Core Web Vitals, on-page SEO, structured data and analytics are built into every project from day one. Sites are shipped audit-ready." },
    { q: "Will my team be able to edit the site?", a: "Absolutely. We design clean, documented CMS structures (WordPress, Shopify, Webflow, or headless CMS) so your marketing team can update content without touching code." },
    { q: "What does it cost?", a: "Most websites start at $3k for marketing sites and scale up for commerce or custom builds. Send us your scope on the contact page for an exact quote." },
  ],
  "paid-media": [
    { q: "Which channels do you manage?", a: "Meta (Facebook & Instagram), Google (Search, Display, Shopping, YouTube), LinkedIn, TikTok, and programmatic — chosen based on where your buyers actually are." },
    { q: "How quickly will I see results?", a: "Tracking and pixel setup happens in week 1. First learnings typically arrive in 2–3 weeks, with meaningful CPL improvements by day 60." },
    { q: "Do you create the ad creative?", a: "Yes. Static, motion and short-form video ads are produced in-house alongside the media buying — that tight loop is why our creative wins." },
    { q: "Will I own the ad accounts?", a: "Always. We work inside your ad accounts, so all data, audiences and pixels stay yours when (or if) we ever stop working together." },
    { q: "What's the minimum monthly ad budget?", a: "We typically work with brands spending $3k+/month in paid media. Below that we'd recommend organic plus landing page optimization first." },
  ],
  "creative-design": [
    { q: "Do you offer brand identity from scratch?", a: "Yes — full brand systems including logo, type, color, voice, motion guidelines and templates your team can reuse." },
    { q: "Can you produce monthly social content?", a: "Yes. Monthly content packages cover posts, stories, carousels, and short-form video for Instagram, TikTok, LinkedIn and YouTube Shorts." },
    { q: "How do you ensure designs convert?", a: "Every layout is grounded in user research, behavior data and conversion best practices. We A/B test where it matters and iterate based on results." },
    { q: "Do you handle UI/UX for apps?", a: "Yes — both marketing UI and full SaaS / mobile app UX. We work in Figma with developer-ready handoffs." },
    { q: "What's your turnaround?", a: "Single creatives: 2–3 days. Brand identity: 3–4 weeks. UI/UX projects: scoped per project — typically 4–8 weeks." },
  ],
};

export function ServiceDetailPage({ service }: { service: ServiceDef }) {
  const Icon = service.icon;
  const faqs = SERVICE_FAQS[service.slug] ?? [];
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

      {faqs.length > 0 && <FaqSection items={faqs} />}

      <CtaBanner
        title={`Ready to start with ${service.title}?`}
        subtitle="Tell us your goals — we'll send back a clear, honest plan within 24 hours."
        buttonLabel="Talk to a strategist"
      />
    </div>
  );
}