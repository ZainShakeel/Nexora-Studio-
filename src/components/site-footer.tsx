import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg gradient-hero" />
              <span className="text-lg font-bold">Nexora<span className="text-primary">.</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">Driving Next-Level Growth through code &amp; campaigns.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>PPC &amp; Lead Gen</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@nexoradigital.com</li>
              <li><Link to="/contact" className="hover:text-foreground">Book a free call →</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nexora Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}