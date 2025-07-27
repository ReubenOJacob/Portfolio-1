import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building, GraduationCap, Calendar, Award, Briefcase, Star, BookOpen } from "lucide-react"
import { McKinseyBadge, GoogleDataAnalyticsBadge } from "@/components/mckinsey-badge"

export function About() {
  const education = [
    {
      degree: "Master of Science in Computer Engineering",
      institution: "New York University",
      years: "2022 - 2024",
      achievements: ["Dean's List", "Academic Excellence Scholarship", "Research Assistant"],
    },
    {
      degree: "Bachelor's in Engineering in Electronics",
      institution: "Ramaiah Institute of Technology",
      years: "2016 - 2020",
      achievements: ["Best Project Award", "Published 3 Papers", "Head of Robotics Team"],
    },
  ]

  const experience = [
    {
      role: "Assistant Program Manager",
      company: "NYC Health and Hospitals ",
      companyUrl: "https://www.nychealthandhospitals.org/",
      years: "Sep. 2024 – Feb. 2025",
      achievements: [
        "Developed and implemented a product roadmap for infrastructure and data initiatives, increasing operational efficiency by 30% through workflow automation in Asana",
        "Optimized data pipelines and deployed Tableau dashboards, enhancing real-time decision-making by 60% and reducing reporting time by 20%",
      ],
    },
    {
      role: "Analytics Consultant",
      company: "NYU Silver School of Social Work",
      companyUrl: "https://socialwork.nyu.edu/",
      years: "Sep. 2024 – Dec. 2024",
      achievements: [
        "Designed real-time academic data dashboards, automating reporting workflows and improving efficiency by 40%",
        "Optimized ETL pipelines and integrated RESTful APIs, providing actionable insights for student retention and enabling data-driven feature prioritization",
      ],
    },
    {
      role: "Business Analyst & Strategy Intern Lead",
      company: "Treevah",
      companyUrl: "https://treevah.com/",
      years: "Sep. 2024 – Dec. 2024",
      achievements: [
        "Led a team to develop a financial model optimizing pricing strategies, projecting enterprise value growth to $96M",
        "Built interactive dashboards to track key business KPIs, improving user retention and supporting the acquisition of 20,000 paid users",
      ],
    },
    {
      role: "Research Analyst",
      company: "New York University - Office of the Provost",
      companyUrl: "https://www.nyu.edu/provost.html",
      years: "Jun. 2023 – May. 2024",
      achievements: [
        "Developed interactive dashboards in Looker Studio, translating complex datasets into actionable insights and improving decision-making efficiency by 25%",
        "Optimized reporting frameworks with Google Apps Script, reducing manual effort by 30% and ensuring real-time data for accreditation",
      ],
    },
    {
      role: "Programming Analyst",
      company: "Cognizant",
      companyUrl: "https://www.cognizant.com/us/en",
      years: "Jan. 2022 – Aug. 2022",
      achievements: [
        "Conducted behavioral analytics using Google Analytics and Hotjar, increasing user retention by 20% through data-driven feature enhancements",
        "Led A/B testing in Optimizely to optimize website design, boosting subscription revenue by 20%",
      ],
    },
    {
      role: "Product Manager – Navigations and Systems Engineering",
      company: "Edhitha Unmanned Aerial Systems",
      companyUrl: "https://suas-competition.org/",
      years: "Dec. 2017 – Jan. 2020",
      achievements: [
        "Led the development of autonomous UAV systems over 4 years, guiding the team to a top-10 international competition finish and delivering multiple high-impact prototypes",
        "Oversaw end-to-end project execution from requirements to deployment using tools like Gantt charts and Kanban boards",
        "Managed the full product lifecycle from user requirements and prototyping to launch using Jira for iterative testing, resulting in a 30% improvement in system accuracy",
      ],
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 dark:bg-accent/30 dark:pattern-grid">
      {/* Content section with container */}
      <div className="container px-4 sm:px-6">
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-start w-full">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary mb-4 md:mb-6 dark:hover-glow">
              <Image 
                src="/images/profile.JPG" 
                alt="Professional headshot of me in a dark suit with a purple tie" 
                fill 
                className="object-cover object-[center_0.0005%] scale-110"
                priority
                sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
              />
            </div>

            <div className="text-center max-w-md">
              <p className="text-base md:text-lg mb-4">
                I'm a passionate Product Manager and Analyst with a strong focus on creating data-driven product
                strategies that deliver exceptional user experiences and business value.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge
                  variant="outline"
                  className="px-2 py-1 text-xs sm:text-sm dark:border-primary/50 dark:text-primary"
                >
                  Product Strategy
                </Badge>
                <Badge
                  variant="outline"
                  className="px-2 py-1 text-xs sm:text-sm dark:border-primary/50 dark:text-primary"
                >
                  Data Analysis
                </Badge>
                <Badge
                  variant="outline"
                  className="px-2 py-1 text-xs sm:text-sm dark:border-primary/50 dark:text-primary"
                >
                  User Research
                </Badge>
                <Badge
                  variant="outline"
                  className="px-2 py-1 text-xs sm:text-sm dark:border-primary/50 dark:text-primary"
                >
                  Market Analysis
                </Badge>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/reubenojacob/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/ReubenOJacob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/reubenjacob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="mailto:reuben.jacob@nyu.edu"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.085l9.637-6.264h.727c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </a>
              </div>

              {/* Google Scholar Link */}
              <div className="mt-4 text-center">
                <a
                  href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/80 to-indigo-500/80 hover:from-blue-600/90 hover:to-indigo-600/90 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>View My Research Publications</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            {/* About Me title above tabs */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:gradient-text">
                About Me
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4 w-full">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Certifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-3 mt-0 max-h-[600px] overflow-y-auto pr-2">
                {experience.map((exp, index) => (
                  <div key={index} className="p-3 bg-card rounded-lg border dark:card">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-base">{exp.role}</h3>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.years}
                      </div>
                    </div>
                    <div className="flex items-center text-primary mb-2">
                      <Building className="h-3 w-3 mr-1" />
                      <span className="text-sm">
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <Award className="h-3 w-3 text-muted-foreground mr-2 mt-0.5 shrink-0" />
                          <span className="text-xs">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4 mt-0">
                {education.map((edu, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg border dark:card">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.years}
                      </div>
                    </div>
                    <div className="flex items-center text-primary mb-2">
                      <Building className="h-4 w-4 mr-1" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>



              <TabsContent value="certifications" className="space-y-3 mt-0 max-h-[600px] overflow-y-auto pr-2">
                <McKinseyBadge />
                <GoogleDataAnalyticsBadge />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
