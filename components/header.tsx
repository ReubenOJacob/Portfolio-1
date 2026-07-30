"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navLinks = [
  { hash: "#projects", label: "Work" },
  { hash: "#about", label: "About" },
  { hash: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Off the homepage the sections don't exist, so fall back to a real navigation.
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsMenuOpen(false)
    if (!isHome) return

    const element = document.querySelector(hash)
    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-[border-color] duration-200 border-b ${
        isScrolled ? "border-faint" : "border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="container flex items-center justify-between py-5">
        <a href="/" className="font-serif text-lg leading-none">
          Reuben Jacob
        </a>
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={hrefFor(link.hash)}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://syphonlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand hover:underline underline-offset-4"
          >
            Syphon Labs&thinsp;↗
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden -mr-2 p-2 text-foreground"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <div id="mobile-nav" className="md:hidden bg-background border-b border-faint">
          <nav className="container py-4 space-y-1" aria-label="Primary mobile">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={hrefFor(link.hash)}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://syphonlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center text-sm text-brand"
            >
              Syphon Labs&thinsp;↗
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
