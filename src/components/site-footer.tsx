import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const socials = [
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: "#", label: "LinkedIn", Icon: Linkedin },
  { href: "#", label: "Twitter / X", Icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-10 px-4 pb-8">
      {/* CTA strip */}
      <div className="mx-auto max-w-6xl">
        <div className="ring-gradient relative overflow-hidden rounded-[2rem] glass-strong px-8 py-12 text-center md:px-16 md:py-16">
          <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-24 right-0 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-secondary">Let&rsquo;s build</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
            Ready to drive <span className="text-gradient">next-level growth?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a free 30-minute strategy call. No pitch — just a clear plan delivered in 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-all hover:scale-[1.03]">
              Get Free Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a href="mailto:info@nexorastudio.com" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10">
              <Mail className="h-4 w-4" /> info@nexorastudio.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="mx-auto mt-12 max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" aria-label="Nexora Studio home" className="inline-flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Build. Scale. Innovate. — driving next-level growth through code &amp; campaigns.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Work</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/services/web-development" className="hover:text-foreground">Web Development</Link></li>
              <li><Link to="/services/paid-media" className="hover:text-foreground">Paid Media &amp; Leads</Link></li>
              <li><Link to="/services/creative-design" className="hover:text-foreground">Creative &amp; Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 1209 Orange Street, Wilmington, DE 19801, USA</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> <a href="mailto:info@nexorastudio.com" className="hover:text-foreground">info@nexorastudio.com</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> <a href="tel:+923390765431" className="hover:text-foreground">0339-0765431</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Nexora Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
