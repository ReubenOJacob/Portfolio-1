import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8 md:py-12 dark:bg-accent/30">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-xl md:text-2xl mb-2 dark:gradient-text">Reuben Jacob</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div className="flex gap-3 md:gap-4">
            <Link
              href="https://github.com/ReubenOJacob"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:text-primary transition-colors dark:bg-accent dark:hover-glow"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/reubenojacob/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:text-primary transition-colors dark:bg-accent dark:hover-glow"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© {currentYear} Reuben Jacob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
