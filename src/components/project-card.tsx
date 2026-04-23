import { ExternalLink } from "lucide-react";

export interface Project {
  url: string;
  title?: string;
  category?: string;
}

function titleFromUrl(url: string) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    const path = u.pathname.replace(/\/$/, "");
    if (path && path !== "") {
      const slug = path.split("/").filter(Boolean).pop() || "";
      return slug
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return host
      .split(".")[0]
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return url;
  }
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Live screenshot via WordPress mShots — no API key, public, returns a JPG. */
function shotUrl(url: string, w = 1280, h = 800) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;
}

export function ProjectCard({ project }: { project: Project }) {
  const title = project.title ?? titleFromUrl(project.url);
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={shotUrl(project.url)}
          alt={`${title} website preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Retry once after a moment — mShots generates async on first hit
            const img = e.currentTarget;
            if (!img.dataset.retried) {
              img.dataset.retried = "1";
              setTimeout(() => { img.src = shotUrl(project.url) + "&retry=1"; }, 1500);
            }
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/60 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2 text-sm font-semibold text-foreground shadow-elegant">
            View Project <ExternalLink className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{hostOf(project.url)}</p>
        </div>
        {project.category && (
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {project.category}
          </span>
        )}
      </div>
    </a>
  );
}