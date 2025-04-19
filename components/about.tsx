import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building, GraduationCap, Calendar, Award, Briefcase } from "lucide-react"

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
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 dark:bg-accent/30 dark:pattern-grid">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 dark:gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-start">
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
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4 w-full">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Education
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
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
