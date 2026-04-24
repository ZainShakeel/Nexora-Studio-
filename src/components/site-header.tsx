import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "@/data/services";
import { Logo } from "@/components/logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = SERVICES.map((s) => ({
  to: `/services/${s.slug}` as const,
  label: s.title,
}));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Nexora Studio home">
          <Logo className="h-9 w-auto md:h-10" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>Home</Link>
          <div className="group relative">
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-border bg-background/95 p-2 shadow-elegant backdrop-blur">
                {serviceLinks.map((s) => (
                  <Link key={s.to} to={s.to} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground">
                    {s.label}
                  </Link>
                ))}
                <div className="mt-1 border-t border-border pt-1">
                  <Link to="/services" className="block rounded-xl px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/5">View all services →</Link>
                </div>
              </div>
            </div>
          </div>
          {nav.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="gradient-hero text-primary-foreground shadow-elegant hover:opacity-90">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col p-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-3 text-sm font-semibold hover:text-foreground">Services</Link>
            <div className="ml-3 flex flex-col border-l border-border pl-3">
              {serviceLinks.map((s) => (
                <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground">{s.label}</Link>
              ))}
            </div>
            {nav.slice(1).map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground">{n.label}</Link>
            ))}
            <Button asChild className="mt-2 gradient-hero text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}