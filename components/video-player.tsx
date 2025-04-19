import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  src: string
  className?: string
  title?: string
}

export function VideoPlayer({ src, className, title }: VideoPlayerProps) {
  return (
    <div className={cn("relative w-full aspect-video rounded-lg overflow-hidden", className)}>
      <video
        className="w-full h-full object-cover"
        controls
        playsInline
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 