import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const projects = [
    {
      id: "tableau-portfolio",
      title: "Personal Projects – Tableau Dashboard Portfolio",
      description:
        "Independently designed and developed a portfolio of Tableau dashboards to enhance skills in data analysis, visualization, and business intelligence.",
      image: "/images/tableau-portfolio-title.jpg",
      tags: [
        "Data Visualization",
        "Business Analytics",
        "KPI Tracking",
        "Public Health Analytics",
        "Interactive Dashboards",
        "Self-Driven Learning",
        "Insight Generation",
        "Dashboard Design"
      ],
      liveUrl: "https://public.tableau.com/app/profile/reuben.jacob3448/vizzes",
      liveUrlText: "View My Tableau Projects"
    },
    {
      id: "treevah",
      title: "Treevah – Strategic Analytics & Growth Optimization",
      description:
        "Directed a cross-functional team in developing and executing data-driven strategies to accelerate business growth and operational efficiency.",
      image: "/images/treevah-title.jpg",
      tags: [
        "Business Analytics",
        "Financial Modeling",
        "KPI Dashboard Development",
        "Market Research",
        "Pricing Strategy",
        "User Retention",
        "Project Management",
        "Competitive Analysis"
      ]
    },
    {
      id: "nyc-health-harlem",
      title: "NYC Health + Hospitals Harlem – Data Pipeline & Analytics Transformation",
      description:
        "Led a business-critical initiative to modernize healthcare data infrastructure and analytics, focusing on operational efficiency, data quality, and actionable insights for leadership.",
      image: "/images/nyc-health-harlem-title.jpg",
      tags: [
        "Healthcare Data Integration",
        "Business Analytics",
        "Workflow Automation",
        "KPI Dashboard Development",
        "Agile Project Management",
        "Stakeholder Engagement",
        "Operational Efficiency",
        "Data-Driven Decision Making"
      ]
    },
    {
      id: "springer-research",
      title: "Springer Research Team 1",
      description:
        "Led a team of four researchers in building an IoT-Based Wearable Tachycardia Monitor, a real-time heart rate monitoring device that integrates hardware, software, and medical device standards.",
      image: "/images/springer-research-title.jpg",
      tags: ["IoT Development", "Machine Learning", "Medical Device Compliance"],
      liveUrl: "https://link.springer.com/chapter/10.1007/978-981-19-0151-5_10"
    },
    {
      id: "springer-research-2",
      title: "Springer Research Team 2",
      description:
        "Led a cross-functional team in developing an autonomous, self-balancing bicycle with GPS tracking, creating an assistive mobility solution for individuals with mobility challenges.",
      image: "/images/self-balancing-bicycle-title.jpg",
      tags: ["Embedded Systems", "Autonomous Mobility", "Assistive Technology"],
      liveUrl: "https://link.springer.com/chapter/10.1007/978-981-16-2543-5_26"
    },
    {
      id: "ieee-research",
      title: "IEEE Research Team",
      description:
        "Led the development of an IoT-based personal safety device with GPS tracking and SOS broadcasting, designed to enhance security for vulnerable groups.",
      image: "/images/gps-tracker-title.jpg",
      tags: ["IoT Architecture", "Personal Safety", "GPS Tracking"],
      liveUrl: "https://ieeexplore.ieee.org/abstract/document/9752019"
    },
    {
      id: "edhitha-uas",
      title: "Edhitha Unmanned Aerial Systems",
      description:
        "Led the end-to-end development and project management of an advanced Unmanned Autonomous Aerial System (UAS) for the 2018 AUVSI SUAS Competition.",
      image: "/images/edhitha-uas-title.jpg",
      tags: [
        "Project Management",
        "Autonomous Navigation",
        "Systems Engineering",
        "UAV Hardware Integration",
        "Real-Time Imaging",
        "Flight Testing",
        "AUVSI SUAS Competition"
      ],
      liveUrl: "https://suas-competition.org/",
      githubUrl: "https://www.newindianexpress.com/cities/bengaluru/2018/Jun/25/city-lads-impress-with-electric-unmanned-plane-1833236.html"
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 dark:gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          A selection of my recent work in product management and data analytics
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
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] snap-start dark:card transition-all duration-300 hover:shadow-md dark:hover-glow"
                  >
                    <div className="relative h-48 w-full">
                      <Image 
                        src={project.image || "/placeholder.svg"} 
                        alt={project.title} 
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground text-sm md:text-base">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs dark:bg-primary/20 dark:text-primary">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        <Button 
                          asChild 
                          variant="ghost" 
                          size="sm" 
                          className="p-0 hover:bg-transparent group"
                        >
                          <a 
                            href={`/projects/${project.id}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm font-medium">View Details</span>
                            <ArrowRight 
                              className="h-6 w-6 text-[#3B82F6] dark:text-[#60A5FA] transition-transform duration-200 group-hover:translate-x-1" 
                              strokeWidth={3}
                            />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
