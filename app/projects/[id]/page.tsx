import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { AutoVideo } from "@/components/auto-video"
import { ProjectGallery } from "@/components/project-gallery"
import { VideoPlayer } from "@/components/video-player"
import { getProject, projects } from "@/lib/projects"

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    return { title: "Project Not Found" }
  }

  const url = `/projects/${project.id}`

  return {
    title: `${project.title} · Reuben Jacob`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      type: "article",
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    notFound()
  }

  const links = [
    { url: project.liveUrl, text: project.liveUrlText ?? "View project" },
    { url: project.githubUrl, text: project.githubUrlText ?? "View project" },
    { url: project.competitionUrl, text: project.competitionUrlText ?? "View competition" },
  ].filter((link): link is { url: string; text: string } => Boolean(link.url))

  const skillSections = [
    { heading: "Tools", items: project.tools },
    { heading: "Technical skills", items: project.technicalSkills },
    { heading: "Product & leadership", items: project.productManagementSkills },
  ].filter((section): section is { heading: string; items: string[] } => Boolean(section.items?.length))

  return (
    <div className="min-h-screen">
      <div className="border-b border-faint">
        <div className="container py-10 md:py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>

          <h1 className="mt-8 font-serif text-[clamp(1.75rem,4vw,3rem)] leading-[1.12] max-w-3xl">
            {project.title}
          </h1>

          <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div>
              <dt className="eyebrow !text-[11px]">Timeline</dt>
              <dd className="mt-1">{project.timeline}</dd>
            </div>
            <div>
              <dt className="eyebrow !text-[11px]">Organization</dt>
              <dd className="mt-1">{project.client}</dd>
            </div>
            <div>
              <dt className="eyebrow !text-[11px]">Role</dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="container py-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr,18rem] lg:gap-20">
          <article className="min-w-0">
            <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] overflow-hidden rounded-sm border border-faint mb-10 bg-background">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-contain photo-quiet"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            <div
              className="prose prose-sm md:prose-base mb-10"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />

            {project.demoVideo && project.demoVideoPoster && (
              <div className="mb-10">
                <h2 className="eyebrow mb-4">Demo</h2>
                <AutoVideo
                  src={project.demoVideo}
                  poster={project.demoVideoPoster}
                  label={`${project.title} demo`}
                  className="w-full aspect-[16/9] rounded-sm border border-faint object-contain bg-card"
                />
              </div>
            )}

            {project.video && (
              <div className="mb-10">
                <h2 className="eyebrow mb-4">Video</h2>
                <VideoPlayer src={project.video} title={`${project.title} video`} />
              </div>
            )}

            {project.gallery.length > 0 && (
              <div className="mb-10">
                <h2 className="eyebrow mb-4">Gallery</h2>
                <ProjectGallery images={project.gallery} title={project.title} />
              </div>
            )}

            <h2 className="eyebrow mb-4">Outcomes</h2>
            <ol className="mb-10">
              {project.outcomes.map((outcome, index) => (
                <li
                  key={outcome}
                  className="grid grid-cols-[2rem,1fr] gap-3 border-b border-faint py-4 text-sm md:text-base leading-relaxed"
                >
                  <span className="text-muted-foreground tabular-nums text-sm pt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ol>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            {skillSections.map((section) => (
              <div key={section.heading} className="mb-8">
                <h2 className="eyebrow mb-3">{section.heading}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.items.join(", ")}</p>
              </div>
            ))}

            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 border-t border-faint py-3.5 text-sm hover:text-brand transition-colors"
              >
                {link.text}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-brand transition-colors" />
              </a>
            ))}

            <div className="border-t border-faint pt-6 mt-6">
              <p className="text-sm text-muted-foreground">Working on a similar problem?</p>
              <Link
                href="/#contact"
                className="mt-2 inline-block text-sm underline underline-offset-4 decoration-faint hover:decoration-foreground transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
