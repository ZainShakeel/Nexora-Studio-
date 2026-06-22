import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Logo } from "@/components/logo";

const nav = [
  { to: "/", label: "Home", exact: true },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = SERVICES.map((s) => ({ to: `/services/${s.slug}` as const, label: s.title }));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-background/70 shadow-elegant backdrop-blur-xl"
            : "border-white/10 bg-background/40 backdrop-blur-lg"
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center pl-1" aria-label="Nexora Studio home">
          <Logo className="h-8 w-auto md:h-9" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link to="/" className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <div className="group relative">
            <Link to="/services" className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="glass-strong rounded-2xl p-2 shadow-elegant">
                {serviceLinks.map((s) => (
                  <Link key={s.to} to={s.to} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                    {s.label} <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                ))}
                <Link to="/services" className="mt-1 block rounded-xl border-t border-white/10 px-3 py-2.5 text-xs font-semibold text-secondary hover:bg-white/5">
                  View all services →
                </Link>
              </div>
            </div>
          </div>
          {nav.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground glow transition-all hover:scale-[1.03]"
          >
            Get Started <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button className="rounded-full p-2 text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl md:hidden">
          <nav className="glass-strong flex flex-col rounded-3xl p-3 shadow-elegant">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground">Home</Link>
            <div className="px-4 pt-2 text-xs font-semibold uppercase tracking-wider text-secondary">Services</div>
            {serviceLinks.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">{s.label}</Link>
            ))}
            {nav.slice(1).map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground">{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-hero px-5 py-3 text-sm font-semibold text-primary-foreground glow">
              Get Started <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
