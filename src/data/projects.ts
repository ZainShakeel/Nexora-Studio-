export interface ProjectItem {
  url: string;
  title?: string;
  category?: string;
}

/* Live client work. Cards render a live screenshot of each URL. */
export const PROJECTS: ProjectItem[] = [
  { url: "https://martechmedia.com/", title: "Martech Media", category: "Marketing" },
  { url: "https://thehayatstudio.com/", title: "The Hayat Studio", category: "Creative" },
  { url: "https://tintsbysarmaya.com/", title: "Tints by Sarmaya", category: "E-commerce" },
  { url: "https://softwarefinder.com/", title: "Software Finder", category: "SaaS" },
  { url: "https://thebrandsspot.com/", title: "The Brands Spot", category: "Web" },
  { url: "https://ebillingworks.com/", title: "eBillingWorks", category: "SaaS" },
  { url: "https://ursolution.co/", title: "UR Solution", category: "Web" },
  { url: "https://dodgerblue-bat-963544.hostingersite.com/", title: "Moeen Traders", category: "E-commerce" },
  { url: "https://parvaaz.org.uk/", title: "Parvaaz", category: "Non-profit" },
  { url: "https://seekehr.com/", title: "Seekehr", category: "Web" },
];
