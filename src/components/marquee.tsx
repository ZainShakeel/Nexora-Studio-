export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap text-lg font-semibold text-muted-foreground/70">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden="true">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap text-lg font-semibold text-muted-foreground/70">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
