"use client"

import type React from "react"

import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden dark:pattern-dots">
      <div className="container px-4 sm:px-6 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
          Hi, I'm <span className="text-primary dark:gradient-text">Reuben Jacob</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl">
          Product Manager & Data Analyst specializing in data-driven product strategy and user-centered solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button asChild size="lg" className="gap-2 w-full sm:w-auto dark:hover-glow">
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              View Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Let's Talk
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down" onClick={handleScrollDown}>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
