"use client"

import { useEffect, useRef } from "react"

interface AutoVideoProps {
  src: string
  /** Still frame shown before playback starts and, for prefers-reduced-motion
      users (who never get autoplay), permanently. */
  poster: string
  label: string
  className?: string
}

/**
 * Muted looping video that only plays while on screen, and not at all for
 * users who prefer reduced motion; the poster keeps the box meaningful in
 * every non-playing state.
 */
export function AutoVideo({ src, poster, label, className }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // React sets `muted` as a property, which some engines don't count for
    // autoplay policy; setting the attribute too keeps play() allowed.
    video.muted = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay refused (policy/decode): surface controls so the
            // user can start it instead of facing a dead poster.
            video.controls = true
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={label}
      className={className}
    />
  )
}
