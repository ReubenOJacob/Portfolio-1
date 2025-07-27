import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

export function Hobbies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const items = scrollContainerRef.current.children[0].children
      const itemWidth = items[0].getBoundingClientRect().width
      const gap = 24 // 6rem in pixels
      const scrollAmount = itemWidth + gap

      if (direction === 'left') {
        setCurrentIndex(prev => {
          const newIndex = prev === 0 ? items.length - 1 : prev - 1
          scrollContainerRef.current?.scrollTo({
            left: newIndex * scrollAmount,
            behavior: 'smooth'
          })
          return newIndex
        })
      } else {
        setCurrentIndex(prev => {
          const newIndex = prev === items.length - 1 ? 0 : prev + 1
          scrollContainerRef.current?.scrollTo({
            left: newIndex * scrollAmount,
            behavior: 'smooth'
          })
          return newIndex
        })
      }
    }
  }

  const hobbies = [
    {
      type: "image",
      src: "/images/hobbies/cooking-1.jpg",
      alt: "Cooking"
    },
    {
      type: "image",
      src: "/images/hobbies/travel-1.jpg",
      alt: "Travel"
    },
    {
      type: "image",
      src: "/images/hobbies/cooking-2.jpg",
      alt: "Cooking"
    },
    {
      type: "video",
      src: "/images/hobbies/travel-2.mp4",
      alt: "Travel Video"
    },
    {
      type: "image",
      src: "/images/hobbies/cooking-3.jpg",
      alt: "Cooking"
    },
    {
      type: "image",
      src: "/images/hobbies/travel-3.jpg",
      alt: "Travel"
    },
    {
      type: "image",
      src: "/images/hobbies/cooking-4.jpg",
      alt: "Cooking"
    },
    {
      type: "image",
      src: "/images/hobbies/travel-4.jpg",
      alt: "Travel"
    },
    {
      type: "video",
      src: "/images/hobbies/travel-video.mp4",
      alt: "Travel Video"
    },
    {
      type: "video",
      src: "/images/hobbies/cooking-video.mp4",
      alt: "Cooking Video"
    }
  ]

  return (
    <section id="hobbies" className="py-12 md:py-16">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 dark:gradient-text">
          Hobbies & Interests
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          When I'm not working on projects, I enjoy cooking and traveling. These activities help me stay creative and explore new perspectives.
        </p>

        <div className="relative group">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-2 bg-background/80 border-blue-500 hover:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] hidden md:flex items-center justify-center transition-all duration-300 group"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <div className="relative">
                <ChevronLeft className="h-4 w-4 text-blue-400 transition-colors" strokeWidth={2.5} />
                <div className="absolute inset-0 blur-sm bg-blue-400/30 group-hover:opacity-75 -z-10" />
              </div>
            </Button>

            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-x-auto gap-6 md:gap-8 pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-6 md:gap-8">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] snap-start"
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      {hobby.type === "image" ? (
                        <Image
                          src={hobby.src}
                          alt={hobby.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <video
                          src={hobby.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-2 bg-background/80 border-blue-500 hover:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] hidden md:flex items-center justify-center transition-all duration-300 group"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <div className="relative">
                <ChevronRight className="h-4 w-4 text-blue-400 transition-colors" strokeWidth={2.5} />
                <div className="absolute inset-0 blur-sm bg-blue-400/30 group-hover:opacity-75 -z-10" />
              </div>
            </Button>
          </div>

          <div className="absolute -inset-x-4 -inset-y-10 bg-gradient-to-r from-blue-400/30 via-transparent to-blue-600/30 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
} 