"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProductManagement } from "@/components/product-management"
import { TechnicalSkills } from "@/components/technical-skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { Hobbies } from "@/components/hobbies"
import { useTheme } from "next-themes"

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme()

  // Force theme application on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [setTheme])

  return (
    <>
      {/* Structured Data for Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Reuben Jacob Portfolio",
            "description": "Product Manager & Data Analyst Portfolio showcasing projects, skills, and experience",
            "url": "https://reubenjacob.com",
            "author": {
              "@type": "Person",
              "name": "Reuben Jacob",
              "jobTitle": "Product Manager & Data Analyst"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://reubenjacob.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1" role="main" aria-label="Portfolio content">
          <Hero />
          <About />
          <ProductManagement />
          <TechnicalSkills />
          <Projects />
          <Testimonials />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
