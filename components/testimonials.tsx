import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import Link from "next/link"

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const testimonials = [
    {
      id: "testimonial-1",
      name: "Lina Janas",
      role: "Director, Academic Initiatives",
      company: "Office of the Provost, New York University",
      content: "Reuben was a pleasure to work with while he was Research Analyst in the Provost Office at NYU. He approached challenges with a positive attitude and determination. Reuben's adaptability has always stood out, whether it was adjusting to new processes, policies, or technologies. I was especially impressed by how Reuben used technology to streamline and solve complex compliance protocols, making our workflows much more efficient. Reuben also has a unique ability to communicate intricate ideas and concepts to senior leaders in a way that's clear, concise, and easy to understand. His ability to break down complex information and make it digestible for everyone was invaluable to the team and the organization as a whole. No task was ever too big or too small for Reuben as he is a team player and capable of individual work. He consistently delivered, no matter what was on his plate.",
      image: "/images/lina-janas.jpg",
      linkedin: "https://www.linkedin.com/in/lina-janas-990227289/"
    },
    {
      id: "testimonial-2",
      name: "Bryan Mulcrone",
      role: "Founder",
      company: "Treevah",
      content: "I had the pleasure of working with Reuben Jacob during his internship, where he excelled as a Business Intern. Reuben consistently impressed me with his exceptional grasp of financial strategies, valuations, and cost structures. His ability to break down complex business models and contribute meaningful insights to MVP feature development was truly outstanding. Reuben is a consummate professional. Always punctual, reliable, and detail-oriented, he consistently delivered high-quality results, even under tight deadlines. His collaborative nature and strong communication skills fostered a positive and productive environment for the team. While Reuben thrived in the dynamic and fast-paced nature of a startup, his structured and analytical mindset suggests he would be equally successful in a corporate setting. His exceptional performance and drive for excellence make him an asset to any organization.",
      image: "/images/bryan-mulcrone.jpg",
      linkedin: "https://www.linkedin.com/in/bryanmulcrone/"
    }
  ]

  return (
    <section id="testimonials" className="py-8 md:py-12">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 dark:gradient-text">
          Testimonials
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          What colleagues and clients say about working with me
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
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="overflow-hidden flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] snap-start dark:card transition-all duration-300 hover:shadow-md dark:hover-glow"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16">
                            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-blue-500/20">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                                style={{ 
                                  objectPosition: 'center',
                                  aspectRatio: '1/1',
                                  width: '100%',
                                  height: '100%'
                                }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/placeholder-user.jpg";
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <Link 
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold hover:text-blue-500 transition-colors"
                            >
                              {testimonial.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">
                          "{testimonial.content}"
                        </p>
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