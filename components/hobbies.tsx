"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AutoVideo } from "@/components/auto-video"

const hobbies = [
  {
    type: "image",
    src: "/images/hobbies/cooking-1.jpg",
    alt: "Seated on an observation deck ledge above the Manhattan skyline",
  },
  {
    type: "image",
    src: "/images/hobbies/travel-1.jpg",
    alt: "In graduation regalia at Yankee Stadium for NYU commencement",
  },
  {
    type: "image",
    src: "/images/hobbies/cooking-2.jpg",
    alt: "Reading in the Rose Main Reading Room of the New York Public Library",
  },
  {
    type: "video",
    src: "/images/hobbies/travel-2.mp4",
    poster: "/images/hobbies/travel-2-poster.jpg",
    alt: "Short clip from a trip",
  },
  {
    type: "image",
    src: "/images/hobbies/cooking-3.jpg",
    alt: "Working on a laptop at a café window in Manhattan",
  },
  {
    type: "image",
    src: "/images/hobbies/travel-3.jpg",
    alt: "A home-cooked curry served with flatbread",
  },
  {
    type: "image",
    src: "/images/hobbies/cooking-4.jpg",
    alt: "Kebab skewers and patties over a charcoal grill",
  },
  {
    type: "image",
    src: "/images/hobbies/travel-4.jpg",
    alt: "A plated cutlet with carrot fries, cooked at home",
  },
  {
    type: "video",
    src: "/images/hobbies/travel-video.mp4",
    poster: "/images/hobbies/travel-video-poster.jpg",
    alt: "Short clip from a trip",
  },
  {
    type: "video",
    src: "/images/hobbies/cooking-video.mp4",
    poster: "/images/hobbies/cooking-video-poster.jpg",
    alt: "Short clip of cooking at home",
  },
] as const

export function Hobbies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const track = scrollContainerRef.current
    if (!track) return

    const update = () => {
      setAtStart(track.scrollLeft <= 4)
      setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 4)
    }

    // Reading scrollWidth/clientWidth forces layout; batch to one read per frame
    // so flick-scrolling doesn't reflow the track on every scroll event.
    let frame = 0
    const scheduleUpdate = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        update()
      })
    }

    update()
    track.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    return () => {
      track.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const track = scrollContainerRef.current
    if (!track) return

    const items = track.querySelectorAll<HTMLElement>("[data-hobby-item]")
    const step =
      items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : (items[0]?.offsetWidth ?? track.clientWidth)

    track.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" })
  }

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-faint text-muted-foreground transition-all hover:border-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none"

  return (
    <section id="hobbies" className="border-b border-faint overflow-x-clip scroll-mt-20">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[16rem,1fr] lg:gap-16">
          <div>
            <h2 className="eyebrow">Off hours</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[24ch]">
              Cooking, and New York before Bangalore.
            </p>
            <div className="mt-6 hidden lg:flex gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll to previous photo"
                disabled={atStart}
                className={arrowClass}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll to next photo"
                disabled={atEnd}
                className={arrowClass}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={hobby.src}
                    data-hobby-item
                    className="flex-shrink-0 w-[70%] sm:w-[45%] lg:w-[31%] snap-start"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-faint bg-secondary">
                      {hobby.type === "image" ? (
                        <Image
                          src={hobby.src}
                          alt={hobby.alt}
                          fill
                          loading={index < 3 ? "eager" : "lazy"}
                          className="object-cover photo-quiet"
                          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 31vw"
                        />
                      ) : (
                        <AutoVideo
                          src={hobby.src}
                          poster={hobby.poster}
                          label={hobby.alt}
                          className="w-full h-full object-cover photo-quiet"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll to previous photo"
                disabled={atStart}
                className={arrowClass}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll to next photo"
                disabled={atEnd}
                className={arrowClass}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
