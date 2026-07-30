import type { Metadata } from "next"
import Image from "next/image"
import { Download } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Press Kit · Reuben Jacob",
  description:
    "Bio, headshot, and company boilerplate for Reuben Jacob, Co-Founder & CEO of Syphon Labs.",
  alternates: { canonical: "/press" },
}

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[16rem,1fr] lg:gap-16">
            <div>
              <h1 className="eyebrow">Press kit</h1>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[24ch]">
                Everything here may be used without asking.
              </p>
            </div>

            <div className="max-w-[62ch]">
              <h2 className="eyebrow mb-4">Short bio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reuben Jacob is the co-founder and CEO of Syphon Labs, an AI infrastructure company
                building context-aware workflow systems. Its flagship product, Talenry, is an AI
                career agent used by thousands of professionals; Daisy Recruiter brings the same
                engine to hiring teams. Before founding Syphon Labs, he managed automation programs
                at NYC Health + Hospitals, built KPI pipelines for NYU&rsquo;s Office of the Provost,
                and worked in behavioral analytics at Cognizant. He holds an MS in Computer
                Engineering from New York University, has published research with IEEE and Springer,
                and is based in Bangalore.
              </p>

              <h2 className="eyebrow mt-12 mb-4">Company boilerplate</h2>
              <p className="text-muted-foreground leading-relaxed">
                Syphon Labs builds AI agents for recruiting and the people data that powers them.
                Where most AI tools generate outputs and leave the surrounding workflow broken,
                Syphon Labs designs stateful, context-aware agents: Talenry, the AI career agent for
                job seekers, and Daisy Recruiter, the agentic hiring platform for talent teams, both
                on one shared context engine. The company started with recruitment and is expanding
                into payroll and broader enterprise functions. More at{" "}
                <a
                  href="https://syphonlabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline underline-offset-4"
                >
                  syphonlabs.com
                </a>
                .
              </p>

              <h2 className="eyebrow mt-12 mb-4">Headshot</h2>
              <div className="flex items-start gap-6">
                <div className="relative w-40 aspect-[4/5] overflow-hidden rounded-sm border border-faint">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Studio headshot of Reuben Jacob in a dark suit"
                    fill
                    className="object-cover"
                    sizes="10rem"
                  />
                </div>
                <div className="text-sm space-y-2">
                  <a
                    href="/images/headshot.jpg"
                    download="Reuben-Jacob-headshot.jpg"
                    className="inline-flex items-center gap-2 underline underline-offset-4 decoration-faint hover:decoration-foreground transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download headshot (JPG)
                  </a>
                  <p className="text-muted-foreground">640 × 800, color. Credit not required.</p>
                </div>
              </div>

              <h2 className="eyebrow mt-12 mb-4">Facts</h2>
              <dl>
                {[
                  { label: "Name", value: "Reuben O. Jacob" },
                  { label: "Title", value: "Co-Founder & CEO, Syphon Labs" },
                  { label: "Based in", value: "Bangalore, India" },
                  { label: "Education", value: "MS Computer Engineering, New York University" },
                  { label: "Publications", value: "IEEE (MECON 2022), Springer (2021, 2022)" },
                  { label: "Contact", value: "reubenjacob16@gmail.com" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-faint py-3.5 text-sm"
                  >
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
