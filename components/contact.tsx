"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50 dark:bg-accent/30 dark:pattern-dots">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 dark:gradient-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              Feel free to reach out to me for any inquiries or opportunities. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2.5 rounded-full dark:bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Email</h4>
                  <p className="text-muted-foreground text-sm">reubenjacob16@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2.5 rounded-full dark:bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Phone</h4>
                  <p className="text-muted-foreground text-sm">+1 929-382-1550</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2.5 rounded-full dark:bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Location</h4>
                  <p className="text-muted-foreground text-sm">New York, NY</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2.5 rounded-full dark:bg-primary/20">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Resume</h4>
                  <a 
                    href="/resume" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="mt-6 md:mt-0 dark:card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send a Message</h3>

              <form 
                action="https://formspree.io/f/mjvpokdn" 
                method="POST"
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="dark:bg-accent/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="dark:bg-accent/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="dark:bg-accent/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="dark:bg-accent/50"
                  />
                </div>

                <Button type="submit" className="w-full gap-2 dark:hover-glow" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
