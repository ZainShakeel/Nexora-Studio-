import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SERVICES } from "@/data/services";

const SVC = SERVICES.find((s) => s.slug === "creative-design")!;

export const Route = createFileRoute("/services/creative-design")({
  head: () => ({
    meta: [
      { title: `${SVC.title} — Nexora Digital` },
      { name: "description", content: SVC.short },
      { property: "og:title", content: `${SVC.title} — Nexora Digital` },
      { property: "og:description", content: SVC.short },
    ],
  }),
  component: () => <ServiceDetailPage service={SVC} />,
});