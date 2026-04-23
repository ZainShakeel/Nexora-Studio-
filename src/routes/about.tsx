import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { WhyNexora, HowWeWork } from "@/components/why-and-how";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexora Digital" },
      { name: "description", content: "Nexora Digital is a tech-meets-marketing studio. We pair modern engineering with performance marketing to drive real growth." },
      { property: "og:title", content: "About — Nexora Digital" },
      { property: "og:description", content: "Tech + Marketing = Growth." },
    ],
  }),
  component: AboutPage,
});

const stack = ["WordPress", "React", "Angular", "Next.js", "Shopify", "Webflow", "Tailwind", "Google Ads", "Meta Ads"];

const WHY = [
  { title: "One accountable team", desc: "No hand-offs between agency silos — design, dev and ads all under one roof." },
  { title: "Outcome-driven", desc: "We measure ourselves on pipeline and revenue, not vanity deliverables." },
  { title: "Senior practitioners", desc: "The people pitching you are the people doing the work." },
  { title: "Fast iteration", desc: "Weekly experiments, monthly compounding wins." },
];

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-gradient-to-b from-secondary/10 to-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="About Nexora"
            title={<>Tech <span className="text-gradient">+</span> Marketing <span className="text-gradient">=</span> Growth</>}
            subtitle="We are an integrated digital studio. Engineers, designers and marketers building one accountable team for your growth."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Who we are</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Nexora Digital was built on a simple belief: a beautiful website that doesn't convert is a liability, and a great campaign pointed at a broken funnel is wasted spend.</p>
              <p>So we put both under one roof. Our engineers ship production-grade websites in modern stacks, while our growth team runs the campaigns that fill them with qualified leads.</p>
              <p>The result is fewer hand-offs, faster iteration, and one team accountable for the metrics that actually matter — pipeline, revenue and ROI.</p>
            </div>
            <Button asChild className="mt-8 gradient-hero text-primary-foreground shadow-elegant hover:opacity-90">
              <Link to="/contact">Work with us</Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-border gradient-soft p-10 shadow-card">
            <h3 className="text-xl font-bold">Our stack</h3>
            <p className="mt-2 text-sm text-muted-foreground">Modern, battle-tested tools we ship with daily.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">{s}</span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "120+", v: "Projects shipped" },
                { k: "8 yrs", v: "Avg team experience" },
                { k: "98%", v: "Client retention" },
              ].map((m) => (
                <div key={m.v}>
                  <div className="text-2xl font-bold text-primary">{m.k}</div>
                  <div className="text-xs text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyNexora items={WHY} />
      <HowWeWork />
    </div>
  );
}