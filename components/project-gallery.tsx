"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSwipeable } from "react-swipeable"

interface ProjectGalleryProps {
  images: string[]
  title: string
  autoplay?: boolean
  interval?: number
}

export function ProjectGallery({ images, title, autoplay = true, interval = 4000 }: ProjectGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!autoplay || isPaused) return

    const intervalId = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoplay, interval, isPaused, nextSlide])

  // Add swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: false,
    preventScrollOnSwipe: true,
  })

  return (
    <div
      className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8 group touch-action-none dark:card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...handlers}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} gallery image ${index + 1}`}
            fill
            className="object-contain bg-background/50 dark:bg-accent/50"
            priority={index === currentSlide}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </div>
      ))}

      {/* Navigation arrows - larger touch targets on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity h-10 w-10 sm:h-12 sm:w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 dark:bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity h-10 w-10 sm:h-12 sm:w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Indicators - larger on mobile */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? "w-5 sm:w-6 bg-primary" : "bg-background/60 dark:bg-accent/60"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </div>
  )
}
