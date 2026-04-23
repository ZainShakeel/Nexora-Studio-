import { Code2, Megaphone, Palette, type LucideIcon } from "lucide-react";

export interface ServiceDef {
  slug: "web-development" | "paid-media" | "creative-design";
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  subServices: { title: string; desc: string }[];
  why: { title: string; desc: string }[];
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "web-development",
    title: "Website Development & Designing",
    short: "Production-grade websites built for speed, scale and conversion.",
    long: "From WordPress and Shopify storefronts to custom React, Angular and Next.js builds, we engineer websites that look stunning, load fast, and convert visitors into customers.",
    icon: Code2,
    subServices: [
      { title: "WordPress Development", desc: "Custom themes, headless builds and plugin engineering." },
      { title: "React, Angular & Next.js", desc: "Modern frontends and full-stack apps at production scale." },
      { title: "Shopify Stores", desc: "High-converting commerce experiences built to sell." },
      { title: "Webflow Websites", desc: "Beautiful marketing sites your team can edit." },
    ],
    why: [
      { title: "Performance-first", desc: "Lightning-fast Core Web Vitals on every build." },
      { title: "SEO-ready", desc: "Architected to rank from day one." },
      { title: "Scalable code", desc: "Maintainable systems your future team will thank you for." },
      { title: "Conversion-focused", desc: "Every section is built to move the metric." },
    ],
  },
  {
    slug: "paid-media",
    title: "Paid Media & Lead Generation",
    short: "Data-driven campaigns that lower CPC and lift qualified pipeline.",
    long: "We plan, launch and optimize paid campaigns across Meta, Google and LinkedIn — pairing them with high-converting funnels so every dollar spent is measured against pipeline.",
    icon: Megaphone,
    subServices: [
      { title: "Social Media Advertising", desc: "Meta, TikTok, LinkedIn and more — managed end-to-end." },
      { title: "PPC Campaign Management", desc: "Google Search, Display and Shopping campaigns built to scale." },
      { title: "Conversion Tracking & Pixel Setup", desc: "Bullet-proof tracking, GA4, GTM, server-side events." },
      { title: "Lead Funnel Strategy & Optimization", desc: "Full-funnel design from first click to qualified lead." },
    ],
    why: [
      { title: "Lower CPC", desc: "We obsess over creative and audience efficiency." },
      { title: "Qualified pipeline", desc: "Leads that close, not vanity volume." },
      { title: "Transparent reporting", desc: "Live dashboards, no black boxes." },
      { title: "Full-funnel thinking", desc: "Ads, landing pages and CRM treated as one system." },
    ],
  },
  {
    slug: "creative-design",
    title: "Social Media & Creative Design",
    short: "Brand-forward design across product, social and video.",
    long: "Our design team crafts cohesive brand systems, scroll-stopping social content and modern interfaces that make your brand instantly recognizable and easy to love.",
    icon: Palette,
    subServices: [
      { title: "UI/UX Design for Websites & Apps", desc: "Modern, accessible interfaces driven by user behavior." },
      { title: "Social Media Content & Design", desc: "On-brand posts, stories and carousels that perform." },
      { title: "Creative Design & Branding Assets", desc: "Logos, brand systems, and marketing collateral." },
      { title: "Short-Form Video & Reels", desc: "Editing, motion and hooks built for the feed." },
    ],
    why: [
      { title: "Distinct brand voice", desc: "We avoid generic templates — always." },
      { title: "Systemized design", desc: "Reusable components, consistent everywhere." },
      { title: "Built to convert", desc: "Beauty in service of business outcomes." },
      { title: "Fast turnarounds", desc: "Design ops that keep up with marketing velocity." },
    ],
  },
];

export const HOW_WE_WORK = {
  mission: "Empower ambitious brands to grow faster by uniting world-class engineering with performance marketing under one accountable team.",
  vision: "To be the studio brands trust when growth, design and tech all need to land at the same time.",
  process: [
    { step: "01", title: "Discover", desc: "We learn your business, audience, metrics and constraints." },
    { step: "02", title: "Design", desc: "We map the funnel, wireframe the flows and prototype the brand." },
    { step: "03", title: "Develop", desc: "Engineering, design and ad creative are built in parallel sprints." },
    { step: "04", title: "Decide & Optimize", desc: "Data-led decisions weekly. We double-down on what converts." },
  ],
};