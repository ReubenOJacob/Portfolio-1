import type { Metadata } from "next"
import { Download, ExternalLink } from "lucide-react"

const RESUME_PATH = "/resume/Reuben-Jacob-Resume.pdf"

export const metadata: Metadata = {
  title: "Resume · Reuben Jacob",
  description: "Resume of Reuben Jacob, Co-Founder & CEO of Syphon Labs.",
  alternates: { canonical: "/resume" },
}

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b border-faint">
        <div className="container py-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-serif text-lg">Reuben Jacob · Resume</h1>
          <div className="flex items-center gap-6 text-sm">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Open in new tab
            </a>
            <a href={RESUME_PATH} download="Reuben-Jacob-Resume.pdf" className="btn-primary">
              <Download className="h-4 w-4" />
              Download
            </a>
          </div>
        </div>
      </div>

      {/* iOS Safari renders only the first page of an embedded PDF, so the buttons
          above are the reliable path and this is a best-effort inline preview. */}
      <object data={RESUME_PATH} type="application/pdf" className="flex-1 w-full min-h-[80vh]">
        <div className="container flex flex-col items-start gap-4 py-20">
          <p className="text-muted-foreground">Your browser can&rsquo;t display the PDF inline.</p>
          <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Download className="h-4 w-4" />
            Download the resume
          </a>
        </div>
      </object>
    </div>
  )
}
