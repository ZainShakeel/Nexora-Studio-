import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nexora Studio" },
      { name: "description", content: "Selected websites we've designed, developed and shipped for ambitious brands." },
      { property: "og:title", content: "Portfolio — Nexora Studio" },
      { property: "og:description", content: "Real websites. Real results." },
    ],
  }),
  component: PortfolioPage,
});

const websiteProjects: { url: string; title?: string }[] = [
  { url: "https://thebrandsspot.com/" },
  { url: "https://ebillingworks.com/" },
  { url: "https://softwarefinder.com/" },
  { url: "https://dodgerblue-bat-963544.hostingersite.com/", title: "MoeenTraders" },
  { url: "https://ursolution.co/" },
  { url: "https://olfactory.shop/" },
  { url: "https://parvaaz.org.uk/" },
  { url: "https://seekehr.com/" },
  { url: "https://thejurisprime.com/" },
  { url: "https://elleven.co/" },
  { url: "https://techpandas.co/" },
];

function PortfolioPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Portfolio"
            title={<>Work that <span className="text-gradient">ships &amp; converts</span></>}
            subtitle="A selection of recent projects — each card opens the live site."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Selected work</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Website Projects</h2>
            </div>
            <p className="hidden max-w-md text-sm text-muted-foreground md:block">Production websites built and shipped end-to-end.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websiteProjects.map((p) => (
              <ProjectCard key={p.url} project={{ url: p.url, title: p.title, category: "Website" }} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Like what you see?"
        subtitle="Let's design and ship a website that becomes your best salesperson."
      />
    </div>
  );
}