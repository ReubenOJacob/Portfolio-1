"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, BarChart, Layers, GitMerge, ArrowRight } from "lucide-react"

export function ProductManagement() {
  const pmSkills = [
    {
      category: "Product Strategy & Vision",
      icon: <Target className="h-8 w-8 text-primary" />,
      items: ["Roadmapping", "Market & Competitive Analysis", "Go-to-Market Strategy"],
    },
    {
      category: "Product Discovery & Research",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      items: ["User Research & Interviews", "Problem Framing", "Opportunity Assessment"],
    },
    {
      category: "Product Execution",
      icon: <GitMerge className="h-8 w-8 text-primary" />,
      items: ["Feature Prioritization", "Sprint & Release Planning", "Backlog Management"],
    },
    {
      category: "Stakeholder & Team Collaboration",
      icon: <Users className="h-8 w-8 text-primary" />,
      items: ["Cross-functional Collaboration", "Stakeholder Management", "Executive Communication"],
    },
    {
      category: "Product Analytics & Optimization",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      items: ["KPI Definition & Tracking", "A/B Testing", "User Behavior & Retention Analysis"],
    },
    {
      category: "Product Operations",
      icon: <Layers className="h-8 w-8 text-primary" />,
      items: ["Process Optimization", "Product Lifecycle Management", "Documentation Standards"],
    },
  ]

  return (
    <section id="product-management" className="py-16 md:py-24 bg-muted/50 dark:bg-accent/30 dark:pattern-grid">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 dark:gradient-text">
          Product Skills
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Core competencies in product management and strategy
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pmSkills.map((skill) => (
            <Card
              key={skill.category}
              className="overflow-hidden h-full dark:card transition-all duration-300 hover:shadow-lg dark:hover-glow hover:scale-105 group"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li 
                      key={item} 
                      className="flex items-center gap-2 text-muted-foreground text-sm group/item hover:text-foreground transition-all duration-300 hover:translate-x-1"
                    >
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="group-hover/item:text-primary transition-colors duration-300">{item}</span>
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
