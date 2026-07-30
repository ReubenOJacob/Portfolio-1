import Image from "next/image"
import { certifications, education, experience } from "@/lib/profile"

export function About() {
  return (
    <section id="about" className="border-b border-faint scroll-mt-20">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[16rem,1fr] lg:gap-16">
          <div>
            <h2 className="eyebrow">About</h2>
            <div className="relative mt-8 aspect-[4/5] w-48 sm:w-56 lg:w-full overflow-hidden rounded-sm border border-faint">
              <Image
                src="/images/profile-photo.jpg"
                alt="Reuben Jacob at a café table with a laptop, looking out the window"
                fill
                className="object-cover photo-quiet"
                sizes="(max-width: 1024px) 14rem, 16rem"
              />
            </div>
          </div>

          <div className="max-w-[62ch]">
            <p className="font-serif text-2xl md:text-[1.75rem] leading-snug">
              I build systems where the data, the workflow, and the decision live in one place.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Before founding Syphon Labs, I spent years shipping the unglamorous infrastructure that
              organizations actually run on: automation systems inside one of the largest public health
              systems in the United States, KPI pipelines for NYU&rsquo;s Office of the Provost, and
              growth analytics for early-stage startups. That operator background is the company&rsquo;s
              edge; we design AI products around how work actually flows, not around demos.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My focus areas: AI system architecture and orchestration, product strategy, and the
              analytics that keep both honest.
            </p>

            <h3 className="eyebrow mt-14 mb-2">Experience</h3>
            <ol>
              {experience.map((item) => (
                <li
                  key={`${item.company}-${item.years}`}
                  className="grid grid-cols-[5.5rem,1fr] gap-4 md:grid-cols-[6.5rem,1fr] md:gap-8 border-b border-faint py-5"
                >
                  <span className="text-sm text-muted-foreground tabular-nums pt-0.5">{item.years}</span>
                  <div>
                    <p className="text-sm font-semibold">
                      {item.role}
                      <span className="font-normal text-muted-foreground">
                        {" · "}
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand transition-colors"
                        >
                          {item.company}
                        </a>
                      </span>
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="eyebrow mt-14 mb-2">Education & certifications</h3>
            <ol>
              {education.map((item) => (
                <li
                  key={item.institution}
                  className="grid grid-cols-[5.5rem,1fr] gap-4 md:grid-cols-[6.5rem,1fr] md:gap-8 border-b border-faint py-5"
                >
                  <span className="text-sm text-muted-foreground tabular-nums pt-0.5">{item.years}</span>
                  <p className="text-sm font-semibold">
                    {item.degree}
                    <span className="font-normal text-muted-foreground">{` · ${item.institution}`}</span>
                  </p>
                </li>
              ))}
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="grid grid-cols-[5.5rem,1fr] gap-4 md:grid-cols-[6.5rem,1fr] md:gap-8 border-b border-faint py-5"
                >
                  <span className="text-sm text-muted-foreground tabular-nums pt-0.5">{cert.year}</span>
                  <p className="text-sm font-semibold">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors"
                    >
                      {cert.name}
                    </a>
                    <span className="font-normal text-muted-foreground">{` · ${cert.issuer}`}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
