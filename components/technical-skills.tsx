"use client"

import React from "react"
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
    <section id="technical-skills" className="py-10 md:py-16 bg-muted/50 dark:bg-accent/30 dark:pattern-grid">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 dark:gradient-text">
          Analytics Skills
        </h2>
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto text-sm">
          Transforming complex data into actionable business insights
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {technicalSkills.map((skill) => (
            <Card
              key={skill.category}
              className="overflow-hidden h-full dark:card transition-all duration-300 hover:shadow-lg dark:hover-glow hover:scale-105 group"
            >
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(skill.icon, { className: "h-5 w-5 text-primary" })}
                  </div>
                  <h3 className="text-sm font-bold group-hover:text-primary transition-colors duration-300">{skill.category}</h3>
                </div>

                <ul className="grid grid-cols-1 gap-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <Code className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{item}</span>
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
