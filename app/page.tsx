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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
  )
}
