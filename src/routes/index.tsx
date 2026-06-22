import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, HOW_WE_WORK } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { Testimonials } from "@/components/testimonials";
import { FaqSection } from "@/components/faq";
import { Marquee } from "@/components/marquee";
import {
  ArrowUpRight, ArrowRight, Sparkles, Star, Check, Code2, Megaphone, Palette,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const shot = (url: string, w = 1200, h = 760) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;

const STATS = [
  { n: "50+", l: "Projects shipped" },
  { n: "3.2x", l: "Avg. pipeline lift" },
  { n: "3–6 wk", l: "Delivery time" },
  { n: "US·UK·EU", l: "Clients served" },
];

const reasons = [
  { title: "Code + Campaigns", desc: "The only team you need — engineering and marketing under one roof." },
  { title: "Conversion-first", desc: "Every pixel is judged by one metric: did it move the needle?" },
  { title: "Data-driven", desc: "Decisions backed by analytics, not opinions or trends." },
  { title: "Modern stack", desc: "React, Next.js, Webflow, WordPress — chosen for the job, not the hype." },
];

const HOME_FAQS = [
  { q: "What services does Nexora Studio offer?", a: "Three core services: Website Development & Designing, Paid Media & Lead Generation, and Social Media Creative Design — everything an ambitious brand needs to grow online." },
  { q: "How long does a typical project take?", a: "Most websites ship in 3–6 weeks. Paid media campaigns are live within 7–10 days. Creative design retainers start the same week." },
  { q: "Do you work with startups and enterprise clients?", a: "Yes. We partner with funded startups, growth-stage SaaS, ecommerce brands, and established enterprises across the US, UK and EU." },
  { q: "What does engagement look like?", a: "Senior people on every call, weekly experiments, transparent reporting, and a dedicated Slack channel — no account-manager middlemen." },
  { q: "How do I get started?", a: "Book a free 30-minute consultation. We'll review your goals and send a clear plan within 48 hours — no pitch, no pressure." },
];

const serviceIcons = { "web-development": Code2, "paid-media": Megaphone, "creative-design": Palette } as const;

function Index() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <div className="overflow-hidden">
      {/* ───────────── HERO ───────────── */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 grid-dots opacity-[0.35]" />
        <div className="absolute -top-32 left-0 -z-10 h-[460px] w-[460px] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-10 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-secondary">
              <Sparkles className="h-3.5 w-3.5" /> Driving Next-Level Growth
            </span>
            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              We build sites that <span className="text-gradient animate-gradient">convert</span> &amp; campaigns that <span className="text-gradient animate-gradient">scale</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Nexora Studio unites world-class web development with performance marketing — one accountable team turning clicks into customers.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full gradient-hero px-7 py-3.5 text-base font-semibold text-primary-foreground glow transition-all hover:scale-[1.03]">
                Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/portfolio" className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-white/10">
                View our work
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />)}
                <span className="ml-1 font-semibold text-foreground">5.0</span> rating
              </div>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <span>Trusted by founders across <span className="font-semibold text-foreground">US · UK · EU</span></span>
            </div>
          </div>

          {/* Floating browser preview */}
          <div className="relative">
            <div className="ring-gradient relative animate-float rounded-2xl glass-strong p-2 shadow-elegant">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              </div>
              <img src={shot(PROJECTS[0].url)} alt="Recent Nexora project" loading="eager"
                className="aspect-[16/10] w-full rounded-xl object-cover object-top" />
            </div>
            <div className="absolute -left-4 bottom-10 animate-float-slow glass rounded-2xl px-4 py-3 shadow-elegant">
              <div className="text-xl font-bold text-gradient">+182%</div>
              <div className="text-[11px] text-muted-foreground">Conversion lift</div>
            </div>
            <div className="absolute -right-3 top-6 animate-float glass rounded-2xl px-4 py-3 shadow-elegant">
              <div className="text-xl font-bold text-gradient">98</div>
              <div className="text-[11px] text-muted-foreground">Lighthouse score</div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-white/10 bg-white/[0.02] py-4">
          <Marquee items={["React", "Next.js", "Shopify", "Webflow", "WordPress", "Meta Ads", "Google Ads", "LinkedIn Ads", "SEO", "UI/UX", "Branding", "Analytics"]} />
        </div>
      </section>

      {/* ───────────── SERVICES (bento) ───────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">What we do</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">A full-stack growth team, <span className="text-gradient">under one roof.</span></h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all">All services <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <Link key={s.slug} to={`/services/${s.slug}`}
                  className={`group ring-gradient relative flex flex-col rounded-3xl glass p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:glow ${i === 0 ? "lg:col-span-2" : ""}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-hero text-primary-foreground glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-muted-foreground">{s.short}</p>
                  {i === 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.subServices.map((ss) => (
                        <span key={ss.title} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">{ss.title}</span>
                      ))}
                    </div>
                  )}
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 mesh opacity-80" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">How we work</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">From idea to <span className="text-gradient">live & converting.</span></h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_WORK.process.map((p, i) => (
              <div key={p.step} className="relative rounded-3xl glass p-7 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-bold text-gradient">{p.step}</div>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                {i < HOW_WE_WORK.process.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/50 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FEATURED WORK ───────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Selected work</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Real sites. <span className="text-gradient">Real results.</span></h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all">View all work <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group ring-gradient relative block overflow-hidden rounded-3xl glass shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:glow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={shot(p.url)} alt={`${p.title} preview`} loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── STATS BAND ───────────── */}
      <section className="px-4 py-10">
        <div className="ring-gradient mx-auto max-w-6xl rounded-[2rem] glass-strong px-8 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-4xl font-bold text-gradient md:text-5xl">{s.n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── WHY NEXORA ───────────── */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Nexora</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Built different. <span className="text-gradient">On purpose.</span></h2>
            <p className="mt-5 max-w-md text-muted-foreground">We keep our client list small so every account gets senior attention — and every decision is measured against your revenue.</p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all">More about us <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.title} className="rounded-3xl glass p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:glow">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero text-primary-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <div className="mt-4 text-xs font-mono text-muted-foreground/60">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FaqSection items={HOME_FAQS} />
    </div>
  );
}
