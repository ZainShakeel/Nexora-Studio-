import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nexora Digital" },
      { name: "description", content: "Selected work across web development and high-converting CPC landing pages." },
      { property: "og:title", content: "Portfolio — Nexora Digital" },
      { property: "og:description", content: "Real websites. Real campaigns. Real results." },
    ],
  }),
  component: PortfolioPage,
});

const webProjects = [
  "https://dodgerblue-bat-963544.hostingersite.com/",
  "https://ursolution.co/",
  "https://growtraq.com/",
  "https://ebillingworks.com/",
  "https://parvaaz.org.uk/",
  "https://thebrandsspot.com/",
];

const cpcProjects = [
  "https://pm.softwarefinder.com/autodesk-bim-360/",
  "https://erp.softwarefinder.com/migration-implementation-partners/",
  "https://erp.softwarefinder.com/migrate-from-any-microsoft-ax-to-sap-s-4-hana/",
  "https://demo.smartfind.io/clio-software/",
  "https://demo.smartfind.io/clio-vs-practice-panther-comparison-page/",
  "https://demo.smartfind.io/legal-comparison/",
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
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">01</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Web Development Projects</h2>
            </div>
            <p className="hidden max-w-md text-sm text-muted-foreground md:block">Production websites built and shipped end-to-end.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((url) => (
              <ProjectCard key={url} project={{ url, category: "Web" }} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">02</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">CPC Landing Pages</h2>
            </div>
            <p className="hidden max-w-md text-sm text-muted-foreground md:block">High-intent, conversion-optimized pages built for paid traffic.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cpcProjects.map((url) => (
              <ProjectCard key={url} project={{ url, category: "CPC" }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}