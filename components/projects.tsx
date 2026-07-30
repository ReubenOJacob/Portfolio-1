import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { compactYears, projects } from "@/lib/projects"

export function Projects() {
  const featured = projects.filter((p) => p.tier === "featured")
  const listed = projects.filter((p) => p.tier === "listed")

  return (
    <section id="projects" className="border-b border-faint scroll-mt-20">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[16rem,1fr] lg:gap-16">
          <div>
            <h2 className="eyebrow">Selected work</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[24ch] hidden lg:block">
              The company now, and the operating and research work before it.
            </p>
          </div>

          <div>
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block border-b border-faint pb-10 mb-4"
              >
                <p className="eyebrow !text-[11px] mb-4">Now</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight decoration-1 underline-offset-4 group-hover:underline">
                  {project.title}
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[58ch]">
                  {project.description}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm">
                  The full story
                  <ArrowRight
                    className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </p>
              </Link>
            ))}

            <h3 className="eyebrow !text-[11px] pt-6 pb-2">Before</h3>
            <ol>
              {listed.map((project) => (
                <li key={project.id} className="border-b border-faint">
                  <Link
                    href={`/projects/${project.id}`}
                    className="group flex items-baseline gap-4 py-4"
                  >
                    <span>
                      <span className="font-serif text-lg md:text-xl leading-snug decoration-1 underline-offset-4 group-hover:underline">
                        {project.title}
                      </span>
                      {project.mark && (
                        <span className="hidden sm:inline text-xs text-muted-foreground whitespace-nowrap ml-4">
                          {project.mark}
                        </span>
                      )}
                      {/* On phones the side columns are hidden, so carry the meta below the title. */}
                      <span className="block sm:hidden mt-1 text-xs text-muted-foreground">
                        {[compactYears(project.timeline), project.mark].filter(Boolean).join(" · ")}
                      </span>
                    </span>
                    <span className="ml-auto flex items-center gap-3 whitespace-nowrap">
                      <span className="text-xs text-muted-foreground tabular-nums hidden md:inline">
                        {compactYears(project.timeline)}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 self-center text-muted-foreground transition-colors group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
