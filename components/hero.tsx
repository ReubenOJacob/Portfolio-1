import Link from "next/link"

export function Hero() {
  return (
    <section className="border-b border-faint">
      <div className="container pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="eyebrow mb-8">Co-Founder &amp; CEO, Syphon Labs</p>

        <h1 className="font-serif text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.08] tracking-[-0.01em] max-w-4xl [text-wrap:balance]">
          Building AI agents for recruiting, and the people data that powers them.
        </h1>

        <div className="mt-10 md:mt-14 grid gap-10 lg:grid-cols-[1fr,20rem] lg:gap-16 items-start">
          <div>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-[60ch]">
              I&rsquo;m Reuben Jacob. At Syphon Labs we build agents that carry a workflow end to
              end, not just its tasks: Talenry, the AI career agent used by thousands of
              professionals, and Daisy Recruiter for hiring teams. Both run on one context engine,
              and Recruiter Alpha will open its candidate data to enterprises as an API.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="https://syphonlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Syphon Labs&thinsp;↗
              </a>
              <Link
                href="/#contact"
                className="text-sm text-foreground underline underline-offset-4 decoration-faint transition-colors hover:decoration-foreground"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <dl className="text-sm space-y-3">
            <div className="flex justify-between gap-6 border-b border-faint pb-3">
              <dt className="text-muted-foreground">Now</dt>
              <dd className="text-right">Syphon Labs</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-faint pb-3">
              <dt className="text-muted-foreground">Previously</dt>
              <dd className="text-right">NYC Health + Hospitals</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-faint pb-3">
              <dt className="text-muted-foreground">Research</dt>
              <dd className="text-right">IEEE &amp; Springer, published</dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="text-muted-foreground">Based in</dt>
              <dd className="text-right">Bangalore</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
