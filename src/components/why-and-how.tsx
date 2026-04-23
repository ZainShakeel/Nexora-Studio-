import { SectionHeading } from "@/components/section-heading";
import { HOW_WE_WORK } from "@/data/services";
import { Target, Eye, Workflow } from "lucide-react";

interface WhyItem { title: string; desc: string }

export function WhyNexora({ items }: { items: WhyItem[] }) {
  return (
    <section className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Nexora"
          title={<>Built different. <span className="text-gradient">On purpose.</span></>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((r, i) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-3xl font-bold text-gradient">0{i + 1}</div>
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowWeWork() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How we work"
          title={<>Mission, vision &amp; <span className="text-gradient">decision-making</span></>}
          subtitle="One team, one process, one set of metrics — yours."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border gradient-soft p-8 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold">Mission</h3>
            <p className="mt-2 text-muted-foreground">{HOW_WE_WORK.mission}</p>
          </div>
          <div className="rounded-3xl border border-border gradient-soft p-8 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/30 text-foreground">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold">Vision</h3>
            <p className="mt-2 text-muted-foreground">{HOW_WE_WORK.vision}</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Workflow className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold">Our process &amp; decision-making</h3>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_WORK.process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border bg-background p-6">
                <div className="text-sm font-semibold text-primary">{p.step}</div>
                <h4 className="mt-2 font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}