import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="portfolio-theme"
    >
      <Header isProjectPage />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
