import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/section-heading";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { WhyNexora, HowWeWork } from "@/components/why-and-how";

const WHY = [
  { title: "Reply within 24h", desc: "Real humans, real plans — never auto-responders." },
  { title: "Free strategy call", desc: "30 minutes of value, zero pressure to commit." },
  { title: "Senior team", desc: "You'll talk to the people actually building your project." },
  { title: "Transparent pricing", desc: "Clear scope, clear timeline, clear investment." },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexora Digital" },
      { name: "description", content: "Book a free consultation with Nexora Digital. Tell us about your project and we'll respond within one business day." },
      { property: "og:title", content: "Contact — Nexora Digital" },
      { property: "og:description", content: "Book your free consultation today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };
  return (
    <div className="bg-background">
      <Toaster />
      <section className="border-b border-border bg-gradient-to-b from-secondary/10 to-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Contact"
            title={<>Book your <span className="text-gradient">free consultation</span></>}
            subtitle="Tell us a bit about your project. We respond within one business day."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <a href="mailto:hello@nexoradigital.com" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">hello@nexoradigital.com</p>
              </div>
            </a>
            <a href="https://wa.me/10000000000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us instantly</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border gradient-soft p-6 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/30 text-foreground"><Calendar className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Free 30-min call</h3>
                <p className="text-sm text-muted-foreground">No pitch — just strategy.</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea id="message" rows={5} required placeholder="Tell us about your goals, timeline, budget..." />
            </div>
            <Button type="submit" disabled={loading} className="w-full gradient-hero text-primary-foreground shadow-elegant hover:opacity-90">
              {loading ? "Sending..." : "Book Free Consultation"}
            </Button>
          </form>
        </div>
      </section>

      <WhyNexora items={WHY} />
      <HowWeWork />
    </div>
  );
}