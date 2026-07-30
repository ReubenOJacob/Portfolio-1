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
    if (!autoplay || isPaused || images.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const intervalId = setInterval(nextSlide, interval)
    return () => clearInterval(intervalId)
  }, [autoplay, interval, isPaused, nextSlide, images.length])

  // Add swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: false,
    preventScrollOnSwipe: true,
  })

  const hasMultiple = images.length > 1

  return (
    <div
      className="relative w-full aspect-[16/9] rounded-sm border border-faint overflow-hidden group touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label={`${title} gallery`}
      {...handlers}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={image}
            alt={`${title} gallery image ${index + 1} of ${images.length}`}
            fill
            className="object-contain bg-card"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </div>
      ))}

      {hasMultiple && (
        <>
          {/* Navigation arrows — kept visible on touch devices, which have no hover */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transition-opacity h-11 w-11 sm:h-12 sm:w-12"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transition-opacity h-11 w-11 sm:h-12 sm:w-12"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide ? "w-4 bg-foreground" : "w-1.5 bg-foreground/30"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
