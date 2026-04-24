import logoSrc from "@/assets/nexora-logo.png";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={logoSrc} alt="Nexora Studio" className={className} />;
}