"use client"
import Image from "next/image"
import type React from "react"
import { use } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Calendar, Building, BarChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectGallery } from "@/components/project-gallery"
import { VideoPlayer } from "@/components/video-player"

// This would typically come from a database or CMS
const projectsData = [
  {
    id: "tableau-portfolio",
    title: "Personal Projects – Tableau Dashboard Portfolio",
    description:
      "Independently designed and developed a portfolio of Tableau dashboards to enhance skills in data analysis, visualization, and business intelligence.",
    fullDescription: `
      <p>I independently designed and developed a portfolio of Tableau dashboards to enhance my skills in data analysis, visualization, and business intelligence. These projects focus on synthesizing complex data into actionable insights for business and public health decision-making.</p>
      
      <p>Key dashboards include:</p>
      
      <p><strong>Sales Performance Analysis Dashboard Using Tableau:</strong><br />
      Integrated and analyzed sales, product, customer, and regional data from CSV files to build a comprehensive Tableau dashboard. The dashboard tracks core KPIs such as total sales, sales margin, product category performance, customer segmentation, and regional trends. Interactive features allow users to filter by time period, product line, and geography, providing a dynamic view of sales performance and enabling data-driven strategy formulation.</p>
      
      <p><strong>Covid Tracker Project:</strong><br />
      Developed an interactive Tableau dashboard to monitor and visualize Covid-19 case trends, recoveries, and fatalities across different regions and time periods. The dashboard enables users to explore data by country, state, or city, and includes features such as trend lines, heat maps, and demographic breakdowns. This tool supports public health awareness and resource allocation by presenting real-time pandemic data in an accessible format.</p>
    `,
    image: "/images/tableau-portfolio-title.jpg",
    gallery: [
      "/images/tableau-portfolio-gallery-1.jpg",
      "/images/tableau-portfolio-gallery-2.jpg"
    ],
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
    liveUrlText: "View My Tableau Projects",
    timeline: "Jan 2024 – Present",
    client: "Self-Initiated",
    role: "Data Analyst & Dashboard Developer",
    outcomes: [
      "Demonstrated advanced Tableau skills in dashboard design, interactivity, and analytics for both business and public health applications",
      "Generated actionable insights for sales optimization and pandemic response",
      "Built a portfolio of interactive dashboards to showcase to potential employers and clients"
    ],
    tools: [
      "Tableau",
      "Excel/Google Sheets (Data Preparation)",
      "CSV Data Integration",
      "SQL (Data Querying)",
      "Public Datasets (Kaggle, Johns Hopkins, etc.)"
    ],
    productManagementSkills: [
      "Data visualization and dashboard development",
      "Business analytics and KPI definition",
      "Public health data analysis",
      "Data cleaning, transformation, and integration",
      "Insight generation and data storytelling",
      "Self-driven project management and documentation"
    ]
  },
  {
    id: "treevah",
    title: "Treevah – Strategic Analytics & Growth Optimization",
    description:
      "Directed a cross-functional team in developing and executing data-driven strategies to accelerate business growth and operational efficiency.",
    fullDescription: `
      <p>As Business Analyst & Strategy Intern Lead, I directed a cross-functional team in developing and executing data-driven strategies to accelerate Treevah's business growth and operational efficiency.</p>
      
      <p>I spearheaded the creation of a comprehensive long-term financial model, collaborating with finance and product teams to analyze revenue streams, cost structures, and market opportunities. This model informed the optimization of pricing strategies, contributing to a projected increase in enterprise value to $96M. My responsibilities included leading financial scenario planning, conducting sensitivity analyses, and presenting actionable insights to senior leadership.</p>
      
      <p>To drive user engagement and retention, I designed and implemented interactive dashboards that tracked key business KPIs, such as user acquisition, churn rates, and conversion metrics. These dashboards enabled real-time performance monitoring and empowered the team to make data-driven decisions, resulting in the acquisition of 20,000 paid users within a year.</p>
      
      <p>I also led market research and competitive analysis initiatives, benchmarking Treevah's offerings against industry leaders and identifying opportunities to refine the product vision and roadmap. By synthesizing customer feedback, competitor intelligence, and market trends, I recommended strategic pivots that improved operational efficiency by 25% and strengthened Treevah's market positioning.</p>
    `,
    image: "/images/treevah-title.jpg",
    gallery: [
      "/images/treevah-gallery-1.jpg",
      "/images/treevah-gallery-2.jpg"
    ],
    tags: [
      "Business Analytics",
      "Financial Modeling",
      "KPI Dashboard Development",
      "Market Research",
      "Pricing Strategy",
      "User Retention",
      "Project Management",
      "Competitive Analysis"
    ],
    timeline: "Sep 2024 – Dec 2024",
    client: "Treevah",
    role: "Business Analyst & Strategy Intern Lead",
    outcomes: [
      "Developed a financial model that supported pricing optimization and increased projected enterprise value to $96M",
      "Launched KPI dashboards that improved user retention and drove the acquisition of 20,000 paid users",
      "Enhanced operational efficiency by 25% through data-driven process improvements and market-informed strategy"
    ],
    tools: [
      "Excel, Google Sheets (Financial Modeling)",
      "Tableau, Power BI (Interactive Dashboards)",
      "SQL, Python (Data Analysis)",
      "Survey Tools (Market Research)",
      "Competitive Intelligence Platforms"
    ],
    productManagementSkills: [
      "Cross-functional team leadership and stakeholder engagement",
      "Financial modeling, scenario planning, and pricing strategy",
      "KPI dashboard design and business intelligence",
      "Market research, competitive analysis, and product strategy refinement",
      "Agile project management and process optimization",
      "Strategic reporting and executive presentations"
    ]
  },
  {
    id: "nyc-health-harlem",
    title: "NYC Health + Hospitals Harlem – Data Pipeline & Analytics Transformation",
    description:
      "Led a business-critical initiative to modernize healthcare data infrastructure and analytics, focusing on operational efficiency, data quality, and actionable insights for leadership.",
    fullDescription: `
      <p>As Assistant Program Manager, I led a business-critical initiative to modernize healthcare data infrastructure and analytics at NYC Health + Hospitals Harlem, focusing on operational efficiency, data quality, and actionable insights for leadership.</p>
      
      <p>I developed and executed a product roadmap for infrastructure and data initiatives, aligning project milestones with organizational goals and compliance requirements. By collaborating with clinical, IT, and administrative stakeholders, I gathered business requirements and translated them into technical specifications for robust, secure data pipelines. Leveraging automated workflow orchestration in Asana, we reduced manual processes, improved data reliability, and increased operational efficiency by 30%—in line with industry best practices for healthcare data pipeline automation.</p>
      
      <p>To support real-time decision-making, I oversaw the optimization of data pipelines to ensure timely, accurate integration of clinical and operational data from disparate sources, including EHRs and financial systems. This enabled the deployment of Tableau-based KPI dashboards, which reduced reporting time by 20% and empowered leadership with up-to-date, data-driven insights. These dashboards tracked key metrics such as patient flow, resource utilization, and incident response rates, facilitating continuous performance improvement.</p>
      
      <p>Applying Agile methodologies, I managed sprint cycles, prioritized backlog items based on business value, and fostered a culture of iterative delivery and rapid feedback. My approach ensured that data integration, analytics, and workflow enhancements were delivered on time, within scope, and in compliance with healthcare data governance standards.</p>
    `,
    image: "/images/nyc-health-harlem-title.jpg",
    gallery: [
      "/images/nyc-health-harlem-gallery.jpg"
    ],
    tags: [
      "Healthcare Data Integration",
      "Business Analytics",
      "Workflow Automation",
      "KPI Dashboard Development",
      "Agile Project Management",
      "Stakeholder Engagement",
      "Operational Efficiency",
      "Data-Driven Decision Making"
    ],
    timeline: "Sep 2024 – Feb 2025",
    client: "NYC Health + Hospitals Harlem",
    role: "Assistant Program Manager",
    outcomes: [
      "Increased operational efficiency by 30% through workflow automation and optimized data pipelines",
      "Enhanced real-time decision-making by 60% via integrated analytics and KPI dashboards",
      "Reduced reporting time by 20%, supporting faster business and clinical decisions",
      "Established scalable, compliant data infrastructure for future analytics initiatives"
    ],
    tools: [
      "Asana (Workflow Automation)",
      "Tableau (KPI Dashboards)",
      "Python, SQL",
      "Cloud Data Warehousing",
      "EHR Integration",
      "Healthcare Data Governance"
    ],
    productManagementSkills: [
      "Product roadmap development and strategic planning",
      "Agile project management and cross-functional team leadership",
      "Stakeholder engagement and requirements gathering",
      "Data pipeline optimization and workflow automation",
      "KPI dashboard design and business intelligence",
      "Regulatory compliance and risk management",
      "Performance monitoring and continuous improvement"
    ]
  },
  {
    id: "springer-research",
    title: "Springer Research Team 1",
    description:
      "Led a team of four researchers in building an IoT-Based Wearable Tachycardia Monitor, a real-time heart rate monitoring device that integrates hardware, software, and medical device standards.",
    fullDescription: `
      <p>I led the design, development, and deployment of a wearable IoT device for real-time heart rate and tachycardia monitoring, integrating cross-disciplinary expertise in hardware, software, and medical device standards.</p>
      
      <p>The project focused on building a microcontroller-powered wearable that combined optical and temperature sensors, GPS for user tracking, and GSM for emergency SMS alerts. I defined the project scope, technical requirements, and milestones, ensuring compliance with medical safety and usability standards. My responsibilities included coordinating cross-functional teams, managing resource allocation, and overseeing risk mitigation strategies throughout the project lifecycle.</p>
      
      <p>On the technical front, I architected the system to enable real-time health monitoring and location tracking. I developed a cloud-based backend using MongoDB and Node.js for secure data storage and processing, and implemented a K-means machine learning algorithm for anomaly detection in heart rate and temperature data. The solution featured an Angular web dashboard hosted on AWS, visualizing time-stamped health and location data via the Google Maps API. Real-time alerts were enabled, sending SMS notifications with location links to guardians in case of detected cardiac anomalies.</p>
    `,
    image: "/images/springer-research-title.jpg",
    gallery: [
      "/images/springer-research-gallery-1.jpg",
      "/images/springer-research-gallery-2.jpg",
      "/images/springer-research-gallery-3.jpg",
    ],
    tags: [
      "IoT Development",
      "Wearable Health Tech",
      "Machine Learning",
      "Cloud Architecture",
      "Real-Time Alerts",
      "Project Management",
      "Cross-Functional Collaboration",
      "Medical Device Compliance"
    ],
    liveUrl: "https://link.springer.com/chapter/10.1007/978-981-19-0151-5_10",
    liveUrlText: "View My Published Paper",
    timeline: "Jan 2021 – Nov 2021",
    client: "Ramaiah Institute of Technology",
    role: "Project Lead",
    outcomes: [
      "Published in the Springer Journal 'Artificial Intelligence on Medical Data' (ISCMM 2021, Singapore)",
      "Demonstrated a scalable, real-time cardiac monitoring and emergency alert system for at-risk individuals",
      "Established a foundation for future mobile app integration and expanded ML capabilities"
    ],
    tools: [
      "Microcontroller (embedded C/C++)",
      "Optical Heart Rate and Temperature Sensors",
      "GPS and GSM Modules",
      "MongoDB, Node.js (Cloud Backend)",
      "Angular, Google Maps API (Web Dashboard)",
      "AWS (Hosting)",
      "K-means ML Algorithm"
    ],
    productManagementSkills: [
      "Project planning, scope definition, and milestone tracking",
      "Agile task management and resource allocation",
      "Risk identification and mitigation",
      "Cross-functional team leadership and collaboration",
      "Stakeholder communication and technical reporting",
      "Regulatory compliance for medical-grade devices"
    ]
  },
  {
    id: "springer-research-2",
    title: "Springer Research Team 2",
    description:
      "Led a cross-functional team in developing an autonomous, self-balancing bicycle with GPS tracking, creating an assistive mobility solution for individuals with mobility challenges.",
    fullDescription: `
      <p>As Project Lead, I guided a cross-functional team of engineers in the design and development of an autonomous, self-balancing bicycle equipped with real-time GPS tracking. Our mission was to create an assistive mobility solution that preserves the natural cycling experience while providing active balancing support, particularly benefiting individuals undergoing physical therapy or those with mobility challenges.</p>
      
      <p>I defined the project scope, technical milestones, and deliverables, ensuring our approach aligned with both research objectives and practical feasibility. I coordinated closely with faculty advisors and external reviewers to maintain research rigor and meet deadlines. Throughout the project, I delegated responsibilities, facilitated regular stand-ups, and resolved technical roadblocks to sustain momentum and foster collaboration.</p>
      
      <p>Technically, we engineered a reaction wheel-based stabilization system, integrating IMU sensors and Kalman filtering for precise tilt measurement and dynamic balance correction. I oversaw the development of the embedded control system using a microcontroller, and led the implementation of a GPS tracking module that transmitted live location data to a cloud server via GSM, accessible through a web-based interface.</p>
      
      <p>Our team conducted multiple prototyping and testing phases, iteratively refining the system to optimize balance correction and GPS reliability. Rigorous real-world trials ensured safety and usability for end users.</p>
    `,
    image: "/images/self-balancing-bicycle-title.jpg",
    gallery: [
      "/images/self-balancing-bicycle-gallery-1.jpg",
      "/images/self-balancing-bicycle-gallery-2.jpg",
    ],
    demoGif: "/images/self-balancing-bicycle-demo.gif",
    tags: [
      "Embedded Systems",
      "Autonomous Mobility",
      "IoT Architecture",
      "Sensor Fusion",
      "Real-Time Control",
      "Project Management",
      "Cross-Functional Collaboration",
      "Assistive Technology"
    ],
    liveUrl: "https://link.springer.com/chapter/10.1007/978-981-16-2543-5_26",
    liveUrlText: "View My Published Paper",
    timeline: "Aug 2020 – May 2021",
    client: "Ramaiah Institute of Technology",
    role: "Project Lead",
    outcomes: [
      "Secured 2nd place in the Best Project Award by the Dept. of Electronics and Instrumentation, Ramaiah Institute of Technology",
      "Published research in the Springer Journal 'Computational Intelligence in Pattern Recognition,' Advances in Intelligent Systems and Computing, vol. 1349",
      "Delivered a fully functional prototype demonstrating real-time stabilization and GPS tracking, setting the stage for future assistive cycling innovations"
    ],
    tools: [
      "Microcontroller (C/C++)",
      "Reaction Wheel Mechanism",
      "IMU Sensors with Kalman Filter",
      "GPS and GSM Modules",
      "Cloud-Based Data Server",
      "Web Interface for Location Tracking"
    ],
    productManagementSkills: [
      "Led a multidisciplinary engineering team, driving cross-functional collaboration",
      "Defined project scope, technical milestones, and deliverables",
      "Managed resource allocation and iterative prototyping cycles",
      "Oversaw risk identification, mitigation, and quality assurance",
      "Ensured effective communication with stakeholders and research advisors",
      "Delivered comprehensive technical documentation and research publication"
    ]
  },
  {
    id: "ieee-research",
    title: "IEEE Research Team",
    description:
      "Led the development of an IoT-based personal safety device with GPS tracking and SOS broadcasting, designed to enhance security for vulnerable groups.",
    fullDescription: `
      <p>As Project Lead, I directed a team in the design and development of a compact, IoT-enabled personal safety device featuring real-time GPS tracking and SOS broadcasting. Our goal was to enhance personal security for vulnerable groups—including women, children, pets, and Alzheimer's patients—by providing instant location sharing and emergency alerts.</p>
      
      <p>I led the conceptualization of a lightweight, single-button interface device designed for ease of use and portability, suitable for attachment to pet collars or discreet carrying. The technical solution integrated a GPS module for live location tracking, a microcontroller for data processing, and a GSM module to send SMS alerts to pre-set guardians. We developed a cloud-based database, allowing guardians to securely access real-time and historical location data via a login interface.</p>
      
      <p>The device operated in two modes: continuous broadcasting for ongoing tracking, and SOS mode for immediate emergency alerts with location data. A unique community security feature enabled the system to notify nearby community members if a user was in potential danger, based on proximity to other users' last-known locations. Additional safety features included a vibrational motor and buzzer for user notifications, and a piezoelectric sensor to detect tampering and alert guardians if the device was compromised.</p>
      
      <p>Our team conducted rigorous testing to ensure GPS accuracy, SMS reliability, and cloud database functionality, while optimizing power efficiency and device durability for long-term use.</p>
    `,
    image: "/images/gps-tracker-title.jpg",
    gallery: [
      "/images/gps-tracker-gallery-1.jpg",
      "/images/gps-tracker-gallery-2.jpg",
      "/images/gps-tracker-gallery-3.jpg",
    ],
    tags: [
      "Embedded Systems",
      "IoT Architecture",
      "Personal Safety Devices",
      "GPS Tracking",
      "SOS Broadcasting",
      "Cloud Database",
      "Project Management",
      "User-Centered Design"
    ],
    liveUrl: "https://ieeexplore.ieee.org/abstract/document/9752019",
    liveUrlText: "View My Published Paper",
    timeline: "Feb 2021 – Jan 2022",
    client: "Ramaiah Institute of Technology",
    role: "Project Lead",
    outcomes: [
      "Presented at the IEEE International Mobile and Embedded Technology Conference (MECON) 2022, highlighting the device's innovative community safety features",
      "Demonstrated a reliable, scalable solution for personal and community safety, with real-time alerts and secure data access",
      "Established a foundation for future integration with mobile apps and broader IoT ecosystems"
    ],
    tools: [
      "Microcontroller (C/C++)",
      "GPS and GSM Modules",
      "Cloud Database (NoSQL)",
      "Secure Web Interface",
      "Piezoelectric Sensor",
      "Vibrational Motor & Buzzer"
    ],
    productManagementSkills: [
      "Defined project scope, technical requirements, and user-centered design goals",
      "Led cross-disciplinary collaboration between hardware, software, and UX teams",
      "Managed resource allocation, task delegation, and agile development cycles",
      "Oversaw risk management, quality assurance, and regulatory compliance",
      "Facilitated stakeholder communication and technical reporting"
    ]
  },
  {
    id: "edhitha-uas",
    title: "Edhitha Unmanned Aerial Systems",
    description:
      "Led the end-to-end development and project management of an advanced Unmanned Autonomous Aerial System (UAS) for the 2018 AUVSI SUAS Competition.",
    fullDescription: `
      <p>Over a four-year period, I led the end-to-end development and project management of Edhitha's Unmanned Autonomous Aerial System (UAS), guiding a multidisciplinary student team through successive iterations of design, testing, and competition. This culminated in our participation in the 2018 AUVSI Student Unmanned Aerial Systems (SUAS) Competition, a prestigious international challenge focused on autonomous UAV capabilities.</p>
      
      <p>Throughout the project lifecycle, I defined long-term goals, established evolving scopes and priorities, and maintained a detailed roadmap with clear milestones across academic years. I strategically allocated resources to meet shifting technical and operational demands, while embedding robust planning and risk mitigation frameworks to navigate regulatory and competition standards.</p>
      
      <p>I drove collaboration between mechanical, electrical, and software sub-teams, mentored incoming team members, and cultivated a culture of continuous learning and technical excellence. I oversaw the design and integration of hardware platforms, the development of custom navigation and control algorithms, and iterative testing procedures.</p>
      
      <p>Additionally, I managed budgeting and procurement activities across multiple funding cycles, ensured consistent communication with stakeholders—including faculty advisors and sponsors—and produced comprehensive technical documentation. I also led the team's presentations during annual evaluations, ensuring alignment between our engineering outcomes and competition objectives.</p>
    `,
    image: "/images/edhitha-uas-title.jpg",
    gallery: [
      "/images/edhitha-uas-gallery-1.jpg",
      "/images/edhitha-uas-gallery-2.jpg",
      "/images/edhitha-uas-gallery-3.jpg",
    ],
    demoGif: "/images/edhitha-uas-demo.gif",
    video: "/images/edhitha-uas-video.mp4",
    tags: [
      "Project Management",
      "Autonomous Navigation",
      "Systems Engineering",
      "UAV Hardware Integration",
      "Real-Time Imaging",
      "Flight Testing",
      "AUVSI SUAS Competition"
    ],
    githubUrl: "https://www.newindianexpress.com/cities/bengaluru/2018/Jun/25/city-lads-impress-with-electric-unmanned-plane-1833236.html",
    githubUrlText: "View My Published Article",
    competitionUrl: "https://suas-competition.org/",
    competitionUrlText: "Learn About AUVSI SUAS",
    timeline: "Dec 2017 – Jan 2022",
    client: "Ramaiah Institute of Technology",
    role: "Product Manager – Navigations and Systems Engineering",
    outcomes: [
      "Achieved 10th place out of 69 teams at the 2018 AUVSI SUAS Competition, competing against top international universities",
      "Featured in The Indian Express for innovative UAV design and competition performance",
      "Demonstrated autonomous UAV capabilities for surveillance, reconnaissance, and disaster response applications"
    ],
    technicalSkills: [
      "Autonomous Navigation Systems",
      "UAV Hardware Integration",
      "Real-Time Imaging Systems",
      "Flight Testing & Validation",
      "Custom Navigation Algorithms",
      "Systems Engineering",
      "Ardupilot & Pixhawk Autopilot",
      "Python & C++ Development",
      "Matlab/Simulink Modeling"
    ],
    productManagementSkills: [
      "Project Scope Definition",
      "Resource Allocation",
      "Budget Management",
      "Risk Management",
      "Stakeholder Communication",
      "Team Leadership",
      "Cross-functional Collaboration",
      "Regulatory Compliance",
      "Technical Documentation",
      "Competition Strategy"
    ],
    tools: [
      "Ardupilot",
      "Pixhawk Autopilot",
      "Custom Navigation Algorithms",
      "DSLR Imaging Payload",
      "Ground Control Station Software",
      "Python, C++",
      "Matlab/Simulink"
    ]
  }
]

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const resolvedParams = use(params)
  const project = projectsData.find((p) => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/#projects")
  }

  return (
    <div className="min-h-screen">
      <div className="bg-muted/50 dark:bg-accent/30 py-6 md:py-8">
        <div className="container px-4 sm:px-6">
          <Button asChild variant="ghost" size="sm" className="mb-4 hover:bg-background/80 dark:hover:bg-accent/50">
            <a href="/#projects" onClick={handleBackClick} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </a>
          </Button>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 dark:gradient-text">{project.title}</h1>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm dark:bg-primary/20 dark:text-primary">
                {tag}
              </Badge>
            ))}
          </div>

          {project.liveUrl && (
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
            >
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span className="text-base font-medium">
                  {project.liveUrlText || "View Project"}
                </span>
              </a>
            </Button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Timeline</p>
                <p className="font-medium text-sm">{project.timeline}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Client</p>
                <p className="font-medium text-sm">{project.client}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Role</p>
                <p className="font-medium text-sm">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden mb-6 md:mb-8">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              />
            </div>

            <div
              className="prose prose-sm md:prose-base dark:prose-invert max-w-none mb-6 md:mb-8"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />

            {project.demoGif && (
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 dark:gradient-text">Demo</h2>
                <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden">
                  <Image 
                    src={project.demoGif} 
                    alt={`${project.title} demo`} 
                    fill 
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                  />
                </div>
              </div>
            )}

            {project.video && (
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:gradient-text">Video</h2>
                <VideoPlayer src={project.video} title={`${project.title} video`} />
              </div>
            )}

            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:gradient-text">Project Gallery</h2>
            <ProjectGallery images={project.gallery} title={project.title} />

            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:gradient-text">Key Outcomes</h2>
            <ul className="space-y-2 mb-6 md:mb-8 text-sm md:text-base">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 dark:bg-primary/20 p-1 mt-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.3334 4L6.00008 11.3333L2.66675 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Card className="sticky top-20 dark:card">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-4">Project Details</h3>

                <div className="space-y-5 md:space-y-6">
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-2 text-sm">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="outline"
                          className="text-xs dark:border-primary/50 dark:text-primary"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-muted-foreground mb-2 text-sm">Project Management Skills</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.productManagementSkills?.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs dark:border-primary/50 dark:text-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl && (
                    <div className="pt-4 border-t">
                      <Button 
                        asChild 
                        size="sm" 
                        className="w-full dark:hover-glow"
                      >
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="text-sm font-medium">
                            {project.liveUrlText || "View Project"}
                          </span>
                        </a>
                      </Button>
                    </div>
                  )}

                  {project.githubUrl && (
                    <div className="pt-4 border-t">
                      <Button 
                        asChild 
                        size="sm" 
                        className="w-full dark:hover-glow"
                      >
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="text-sm font-medium">
                            {project.githubUrlText || "View Project"}
                          </span>
                        </a>
                      </Button>
                    </div>
                  )}

                  {project.competitionUrl && (
                    <div className="pt-4 border-t">
                      <Button 
                        asChild 
                        size="sm" 
                        className="w-full dark:hover-glow"
                      >
                        <a 
                          href={project.competitionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="text-sm font-medium">
                            {project.competitionUrlText || "View Competition"}
                          </span>
                        </a>
                      </Button>
                    </div>
                  )}

                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-muted-foreground mb-2 text-sm">Need a similar project?</h4>
                    <Button asChild className="w-full dark:hover-glow">
                      <Link href="/#contact">Contact Me</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
