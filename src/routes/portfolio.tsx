import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — Nexora Studio" },
      { name: "description", content: "Selected websites we've designed, developed and shipped for ambitious brands." },
    ],
  }),
  component: PortfolioPage,
});

const shot = (url: string, w = 1200, h = 760) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;

function PortfolioPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-28">
        <div className="absolute inset-0 -z-10 grid-dots opacity-[0.3]" />
        <div className="absolute -top-24 left-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-10 right-0 -z-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-secondary">Our work</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Work that <span className="text-gradient animate-gradient">ships &amp; converts</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A selection of recent websites and brands we've built end-to-end. Every card opens the live site.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer"
                className={`group ring-gradient relative block overflow-hidden rounded-3xl glass shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:glow ${i % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                <div className={`relative overflow-hidden ${i % 5 === 0 ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                  <img src={shot(p.url, i % 5 === 0 ? 1600 : 1200, i % 5 === 0 ? 900 : 760)} alt={`${p.title} preview`} loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium text-foreground">{p.category}</span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{new URL(p.url).hostname.replace(/^www\./, "")}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
