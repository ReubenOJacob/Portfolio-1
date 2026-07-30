import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  src: string
  className?: string
  title?: string
}

export function VideoPlayer({ src, className, title }: VideoPlayerProps) {
  return (
    <div className={cn("relative w-full aspect-video rounded-sm border border-faint overflow-hidden bg-card", className)}>
      <video
        className="w-full h-full object-contain"
        controls
        playsInline
        preload="metadata"
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
