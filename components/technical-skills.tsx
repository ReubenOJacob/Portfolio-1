"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, LineChart, Database, Workflow, BrainCircuit, BarChart, PieChart } from "lucide-react"

export function TechnicalSkills() {
  const technicalSkills = [
    {
      category: "Data Analytics",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      items: [
        "Data Analysis",
        "Statistical Analysis",
        "Cohort & Funnel Analysis",
        "Segmentation",
        "Regression & Correlation Analysis"
      ],
    },
    {
      category: "Data Visualization",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      items: [
        "Tableau",
        "Power BI",
        "Google Data Studio",
        "Looker",
        "Custom Dashboard Design"
      ],
    },
    {
      category: "Data Processing & Engineering",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: [
        "SQL",
        "Advanced Excel/Sheets",
        "Python (Pandas)",
        "ETL Pipelines",
        "Data Cleaning"
      ],
    },
    {
      category: "Business Intelligence",
      icon: <PieChart className="h-8 w-8 text-primary" />,
      items: [
        "KPI Development",
        "Metric Definition",
        "Dashboarding",
        "Executive Reporting",
        "Insights Generation"
      ],
    },
    {
      category: "Advanced Analytics",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      items: [
        "Predictive Modeling",
        "Forecasting",
        "Trend & Anomaly Detection"
      ],
    },
    {
      category: "Tools & Platforms",
      icon: <Workflow className="h-8 w-8 text-primary" />,
      items: [
        "Google Analytics",
        "Mixpanel",
        "Amplitude",
        "Segment",
        "Snowflake",
        "BigQuery",
        "Optimizely"
      ],
    },
  ]

  return (
    <section id="technical-skills" className="py-16 md:py-24 bg-muted/50 dark:bg-accent/30 dark:pattern-grid">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 dark:gradient-text">
          Analytics Skills
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Transforming complex data into actionable business insights
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {technicalSkills.map((skill) => (
            <Card
              key={skill.category}
              className="overflow-hidden h-full dark:card transition-all duration-300 hover:shadow-lg dark:hover-glow hover:scale-105 group"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-300">{skill.category}</h3>
                </div>

                <ul className="grid grid-cols-1 gap-y-2.5">
                  {skill.items.map((item) => (
                    <li 
                      key={item} 
                      className="flex items-center gap-2 group/item hover:translate-x-1 transition-all duration-300"
                    >
                      <Code className="h-4 w-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-sm md:text-base text-muted-foreground hover:text-foreground group-hover/item:text-primary transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
