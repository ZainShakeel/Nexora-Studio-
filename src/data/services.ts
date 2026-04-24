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
    long: "From WordPress and Shopify storefronts to custom React, Angular and Next.js builds, we engineer websites that look stunning, load fast, and convert visitors into customers. Every project starts with your funnel — we map the buyer journey, design the experience around it, then engineer it on a stack chosen for your team's velocity. The outcome is a site your marketing team is proud to send traffic to and your engineers are happy to maintain.",
    icon: Code2,
    subServices: [
      { title: "WordPress Development", desc: "Custom themes, ACF-powered editorial flows and headless builds — fast to ship and easy for your team to maintain." },
      { title: "React, Angular & Next.js", desc: "Modern frontends and full-stack apps engineered for production scale, performance and accessibility." },
      { title: "Shopify Stores", desc: "High-converting commerce experiences with custom themes, app integrations and CRO baked in from day one." },
      { title: "Webflow Websites", desc: "Beautiful, animated marketing sites your team can edit visually — without writing a single line of code." },
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
    long: "We plan, launch and optimize paid campaigns across Meta, Google, LinkedIn and TikTok — pairing them with high-converting landing pages and bullet-proof tracking so every dollar spent is measured against real pipeline, not vanity metrics. Our team handles strategy, creative, media buying and weekly reporting under one roof, with clear KPIs you'll see live in your own dashboard.",
    icon: Megaphone,
    subServices: [
      { title: "Social Media Advertising", desc: "Meta, TikTok, LinkedIn and Snap — full-funnel campaigns with creative testing, audience research and weekly optimization." },
      { title: "PPC Campaign Management", desc: "Google Search, Performance Max, Display, Shopping and YouTube — structured to scale profitably with full attribution." },
      { title: "Conversion Tracking & Pixel Setup", desc: "Server-side GA4 + GTM, CAPI, enhanced conversions and bullet-proof attribution so your data is finally trustworthy." },
      { title: "Lead Funnel Strategy & Optimization", desc: "Landing pages, lead magnets, email nurture and CRM hand-off — every step designed to move clicks to closed-won." },
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
    long: "Our design team crafts cohesive brand systems, scroll-stopping social content, short-form video and modern product interfaces that make your brand instantly recognizable and easy to love. Every visual is designed with intent — to build trust, earn attention and ultimately drive measurable action across every channel your customers see you on.",
    icon: Palette,
    subServices: [
      { title: "UI/UX Design for Websites & Apps", desc: "Modern, accessible interfaces grounded in user research, journey mapping and conversion best practices." },
      { title: "Social Media Content & Design", desc: "On-brand posts, stories, carousels and ad creative engineered to stop scrolls and drive saves, shares and clicks." },
      { title: "Creative Design & Branding Assets", desc: "Logos, brand systems, pitch decks and marketing collateral that make your business look as serious as it is." },
      { title: "Short-Form Video & Reels", desc: "Hooks, editing and motion built for Reels, TikTok and Shorts — produced fast enough to keep up with the feed." },
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