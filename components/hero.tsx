"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ArrowDown, Download, Sparkles, Zap, Star, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const fullText = "Hi, I'm Reuben Jacob"
  const [textIndex, setTextIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [colorIndex, setColorIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const colors = ['text-blue-400', 'text-purple-400', 'text-cyan-400', 'text-pink-400', 'text-indigo-400']

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 2000)
    return () => clearInterval(colorInterval)
  }, [colors.length])

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [textIndex, fullText])

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden dark:pattern-dots">
      {/* Enhanced animated background particles with more variety */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/30 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-500/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-cyan-500/40 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-pink-500/30 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
        
        {/* Rotating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-blue-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 border border-indigo-400/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 border border-purple-400/20 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDelay: '1s' }} />
        
        {/* Gradient orbs with different animations */}
        <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
        
        {/* Floating stars */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 text-yellow-400/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Star className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 text-yellow-400/30 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <Star className="w-full h-full" />
        </div>
        
        {/* Lightning bolts */}
        <div className="absolute top-1/2 right-1/4 w-3 h-3 text-blue-400/40 animate-pulse" style={{ animationDuration: '6s', animationDelay: '3s' }}>
          <Zap className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/2 left-1/4 w-2 h-2 text-purple-400/40 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}>
          <Zap className="w-full h-full" />
        </div>
        
        {/* Wave effects */}
        <div className="absolute top-1/4 right-1/6 w-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 left-1/6 w-8 h-px bg-gradient-to-l from-transparent via-purple-400/30 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-6 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        
        {/* New floating icons */}
        <div className="absolute top-1/6 left-1/3 w-3 h-3 text-green-400/40 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
          <Target className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/6 right-1/3 w-2 h-2 text-orange-400/40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }}>
          <Target className="w-full h-full" />
        </div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 text-teal-400/40 animate-bounce" style={{ animationDuration: '5s', animationDelay: '3s' }}>
          <TrendingUp className="w-full h-full" />
        </div>
        
        {/* Morphing shapes */}
        <div className="absolute top-1/5 right-1/5 w-4 h-4 border border-pink-400/20 rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/5 left-1/5 w-3 h-3 border border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '12s' }} />
        
        {/* Color cycling elements */}
        <div className={`absolute top-1/4 right-1/4 w-2 h-2 ${colors[colorIndex]} animate-ping`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-1/4 left-1/4 w-2 h-2 ${colors[colorIndex]} animate-ping`} style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="container px-4 sm:px-6 flex flex-col items-center text-center relative z-10">
        {/* Animated greeting with typing effect and enhanced styling */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 relative group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}>
            <span className="inline-block relative hover:scale-105 transition-transform duration-300">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
            {/* Enhanced hover effect for the entire title */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
            {/* 3D shadow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent transform rotate-3 scale-105 transition-all duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
          </h1>
        </div>

        {/* Animated description with wave effect */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl animate-fade-in-up hover:text-primary transition-all duration-500 hover:scale-105 hover:rotate-1">
            Product Manager & Data Analyst specializing in data-driven product strategy and user-centered solutions.
          </p>
        </div>

        {/* Enhanced animated buttons with more effects */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 w-full sm:w-auto dark:hover-glow transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
            >
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Download className="h-5 w-5 animate-bounce relative z-10" style={{ animationDelay: '1s', animationDuration: '2s' }} />
                <span className="relative z-10">View Resume</span>
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="gap-2 w-full sm:w-auto transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary relative overflow-hidden group"
            >
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
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Let's Talk</span>
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
            </Button>
          </div>
        </div>

        {/* Enhanced animated scroll indicator with trail effect and rotation */}
        <div 
          className={`absolute -bottom-16 left-1/2 -translate-x-1/2 hidden md:block transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a href="#about" aria-label="Scroll down" onClick={handleScrollDown} className="group">
            <div className="relative">
              <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce hover:text-primary transition-colors duration-300 group-hover:scale-110 group-hover:rotate-180" />
              <div className="absolute top-0 left-0 w-full h-full bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Additional trail effect */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-gradient-to-b from-primary/40 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Multiple trail effects */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-primary/30 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Enhanced mouse-following particle effect */}
      <div 
        className="absolute w-2 h-2 bg-blue-400/30 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.3 : 0
        }}
      />
      
      {/* Additional mouse trail particles */}
      <div 
        className="absolute w-1 h-1 bg-purple-400/20 rounded-full pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x + 10,
          top: mousePosition.y + 10,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.2 : 0
        }}
      />
      <div 
        className="absolute w-1 h-1 bg-cyan-400/20 rounded-full pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.15 : 0
        }}
      />

      {/* Additional floating elements with different animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        
        {/* Rotating crosses */}
        <div className="absolute top-1/6 right-1/6 w-3 h-3 border border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-1/6 left-1/6 w-2 h-2 border border-pink-400/20 rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '3s' }} />
        
        {/* Pulsing rings */}
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border border-blue-400/10 rounded-full animate-ping" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/2 left-1/3 w-6 h-6 border border-purple-400/10 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        
        {/* Floating diamonds */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 border border-yellow-400/20 rotate-45 animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 border border-green-400/20 rotate-45 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        
        {/* Expanding circles */}
        <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-red-400/10 rounded-full animate-ping" style={{ animationDuration: '10s', animationDelay: '3s' }} />
        <div className="absolute bottom-1/2 right-1/2 w-3 h-3 border border-orange-400/10 rounded-full animate-ping" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      </div>
    </section>
  )
}
