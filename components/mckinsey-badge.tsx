"use client"

import Image from "next/image"
import { useEffect } from "react"
import { Award, Calendar, Building } from "lucide-react"

interface CertificationBadgeProps {
  title: string
  issuer: string
  type: string
  date?: string
  width?: number
  height?: number
  imageSrc?: string
  badgeId?: string
}

function CertificationBadge({ title, issuer, type, date, width = 120, height = 120, imageSrc, badgeId }: CertificationBadgeProps) {
  useEffect(() => {
    // Load the Credly embed script only if badgeId is provided
    if (badgeId) {
      const script = document.createElement("script")
      script.src = "//cdn.credly.com/assets/utilities/embed.js"
      script.async = true
      document.head.appendChild(script)

      return () => {
        // Cleanup script when component unmounts
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [badgeId])

  return (
    <div className="p-4 bg-card rounded-lg border dark:card hover:shadow-md dark:hover-glow transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        {/* Left side - Text information */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Award className="h-4 w-4 text-primary" />
            <h3 className="font-bold text-base">{title}</h3>
          </div>
          
          <div className="flex items-center text-primary mb-1">
            <Building className="h-3 w-3 mr-1" />
            <span className="text-sm">{issuer}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground text-xs mb-2">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
              {type}
            </span>
          </div>
          
          {date && (
            <div className="flex items-center text-muted-foreground text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
          )}
        </div>

        {/* Right side - Badge */}
        <div className="flex-shrink-0 flex items-center">
          {imageSrc ? (
            // Use local image
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Image
                src={imageSrc}
                alt={title}
                width={width}
                height={height}
                className="rounded-lg"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  objectFit: 'contain'
                }}
              />
            </div>
          ) : (
            // Use Credly embed
            <div 
              data-iframe-width={width} 
              data-iframe-height={height} 
              data-share-badge-id={badgeId} 
              data-share-badge-host="https://www.credly.com"
              className="flex justify-center transform hover:scale-105 transition-transform duration-300"
              style={{ 
                width: `${width}px`, 
                height: `${height}px`,
                overflow: 'hidden',
                borderRadius: '8px'
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export function McKinseyBadge() {
  return (
    <CertificationBadge
      badgeId="aa83a5a4-3f38-4f69-9637-03f721a6fb7a"
      title="McKinsey.org Forward Program"
      issuer="McKinsey & Company"
      type="Professional Development"
      date="2024"
      width={145}
      height={145}
    />
  )
}

export function GoogleDataAnalyticsBadge() {
  return (
    <CertificationBadge
      badgeId="12a52dbe-b959-432d-a73c-e61573667889"
      title="Google Data Analytics Professional Certificate"
      issuer="Google"
      type="Data Analytics & Business Intelligence"
      date="2024"
      width={145}
      height={145}
    />
  )
} 