import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

export interface FaqItem { q: string; a: string }

export function FaqSection({ items, eyebrow = "FAQ" }: { items: FaqItem[]; eyebrow?: string }) {
  return (
    <section className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={<>Frequently asked <span className="text-gradient">questions</span></>}
        />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-card data-[state=open]:shadow-elegant"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}