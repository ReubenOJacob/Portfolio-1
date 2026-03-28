"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Users, Lightbulb, BarChart, Layers, GitMerge, ArrowRight, Code, LineChart, Database, Workflow, BrainCircuit, PieChart } from "lucide-react"

export function ProductManagement() {
  const pmSkills = [
    {
      category: "Product Strategy & Vision",
      icon: <Target className="h-5 w-5 text-primary" />,
      items: ["Roadmapping", "Market & Competitive Analysis", "Go-to-Market Strategy"],
    },
    {
      category: "Product Discovery & Research",
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      items: ["User Research & Interviews", "Problem Framing", "Opportunity Assessment"],
    },
    {
      category: "Product Execution",
      icon: <GitMerge className="h-5 w-5 text-primary" />,
      items: ["Feature Prioritization", "Sprint & Release Planning", "Backlog Management"],
    },
    {
      category: "Stakeholder & Team Collaboration",
      icon: <Users className="h-5 w-5 text-primary" />,
      items: ["Cross-functional Collaboration", "Stakeholder Management", "Executive Communication"],
    },
    {
      category: "Product Analytics & Optimization",
      icon: <BarChart className="h-5 w-5 text-primary" />,
      items: ["KPI Definition & Tracking", "A/B Testing", "User Behavior & Retention Analysis"],
    },
    {
      category: "Product Operations",
      icon: <Layers className="h-5 w-5 text-primary" />,
      items: ["Process Optimization", "Product Lifecycle Management", "Documentation Standards"],
    },
  ]

  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5 text-primary" />,
      items: ["Python", "SQL", "JavaScript", "TypeScript", "Bash"],
    },
    {
      category: "AI & ML",
      icon: <BrainCircuit className="h-5 w-5 text-primary" />,
      items: ["LLM Integration", "LangGraph", "RAG Pipelines", "Prompt Engineering", "AI Workflow Orchestration"],
    },
    {
      category: "Data Engineering",
      icon: <Database className="h-5 w-5 text-primary" />,
      items: ["ETL Pipelines", "Data Modeling", "PostgreSQL", "BigQuery", "Snowflake"],
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Workflow className="h-5 w-5 text-primary" />,
      items: ["AWS", "Docker", "REST APIs", "CI/CD", "Vercel"],
    },
    {
      category: "Frontend & Backend",
      icon: <Layers className="h-5 w-5 text-primary" />,
      items: ["Next.js", "React", "Node.js", "FastAPI", "Tailwind CSS"],
    },
    {
      category: "Dev Tools",
      icon: <GitMerge className="h-5 w-5 text-primary" />,
      items: ["Git & GitHub", "Jira", "Asana", "Postman", "VS Code"],
    },
  ]

  const analyticsSkills = [
    {
      category: "Data Analytics",
      icon: <LineChart className="h-5 w-5 text-primary" />,
      items: ["Data Analysis", "Statistical Analysis", "Cohort & Funnel Analysis", "Segmentation", "Regression & Correlation Analysis"],
    },
    {
      category: "Data Visualization",
      icon: <BarChart className="h-5 w-5 text-primary" />,
      items: ["Tableau", "Power BI", "Google Data Studio", "Looker", "Custom Dashboard Design"],
    },
    {
      category: "Data Processing & Engineering",
      icon: <Database className="h-5 w-5 text-primary" />,
      items: ["SQL", "Advanced Excel/Sheets", "Python (Pandas)", "ETL Pipelines", "Data Cleaning"],
    },
    {
      category: "Business Intelligence",
      icon: <PieChart className="h-5 w-5 text-primary" />,
      items: ["KPI Development", "Metric Definition", "Dashboarding", "Executive Reporting", "Insights Generation"],
    },
    {
      category: "Advanced Analytics",
      icon: <BrainCircuit className="h-5 w-5 text-primary" />,
      items: ["Predictive Modeling", "Forecasting", "Trend & Anomaly Detection"],
    },
    {
      category: "Tools & Platforms",
      icon: <Workflow className="h-5 w-5 text-primary" />,
      items: ["Google Analytics", "Mixpanel", "Amplitude", "Segment", "Snowflake", "BigQuery", "Optimizely"],
    },
  ]

  const SkillGrid = ({ skills, bulletIcon }: { skills: typeof pmSkills, bulletIcon: "arrow" | "code" }) => (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
      {skills.map((skill) => (
        <Card key={skill.category} className="overflow-hidden h-full dark:card transition-all duration-300 hover:shadow-lg dark:hover-glow hover:scale-105 group">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
              <h3 className="text-sm font-bold group-hover:text-primary transition-colors duration-300">{skill.category}</h3>
            </div>
            <ul className="grid grid-cols-1 gap-y-1">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  {bulletIcon === "arrow"
                    ? <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                    : <Code className="h-3 w-3 text-primary flex-shrink-0" />
                  }
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <section id="product-management" className="py-10 md:py-16 bg-muted/50 dark:bg-accent/30 dark:pattern-grid">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 dark:gradient-text">
          Skills
        </h2>
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto text-sm">
          Product management and data analytics expertise
        </p>

        <Tabs defaultValue="product" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 max-w-sm mx-auto">
            <TabsTrigger value="product">Product</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>
          <TabsContent value="product">
            <SkillGrid skills={pmSkills} bulletIcon="arrow" />
          </TabsContent>
          <TabsContent value="analytics">
            <SkillGrid skills={analyticsSkills} bulletIcon="code" />
          </TabsContent>
          <TabsContent value="technical">
            <SkillGrid skills={technicalSkills} bulletIcon="arrow" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
