import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Ready to drive next-level growth?",
  subtitle = "Book a free 30-minute strategy call. No pitch — just a clear plan.",
  buttonLabel = "Get Free Consultation",
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative grid items-center gap-8 overflow-hidden rounded-3xl gradient-hero px-8 py-12 shadow-elegant md:grid-cols-[1.4fr_1fr] md:px-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-base text-primary-foreground/90">{subtitle}</p>
          </div>
          <div className="relative md:text-right">
            <Button asChild size="lg" className="bg-background text-foreground shadow-elegant hover:bg-background/90">
              <Link to="/contact">{buttonLabel} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}