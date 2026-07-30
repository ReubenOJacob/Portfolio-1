"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjvpokdn"

const emptyForm = { name: "", email: "", subject: "", message: "" }

type Status = "idle" | "submitting" | "success" | "error"
type Field = keyof typeof emptyForm

const fieldRequirements: Record<Field, string> = {
  name: "Please add your name.",
  email: "Please add an email I can reply to.",
  subject: "Please add a subject.",
  message: "Please add a message.",
}

const contactRows = [
  { label: "Email", value: "reubenjacob16@gmail.com", href: "mailto:reubenjacob16@gmail.com" },
  { label: "Phone", value: "+91 9686570567", href: "tel:+919686570567" },
  { label: "Location", value: "Bangalore", href: null },
  { label: "LinkedIn", value: "in/reubenojacob", href: "https://www.linkedin.com/in/reubenojacob/" },
]

export function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<Field, string>>>({})
  const [status, setStatus] = useState<Status>("idle")

  const isSubmitting = status === "submitting"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => (prev[name as Field] ? { ...prev, [name]: undefined } : prev))
    // A stale "something went wrong" banner over a form being corrected is
    // contradictory feedback; clear it on the first edit after a failure.
    if (status === "error") setStatus("idle")
  }

  const validate = (): boolean => {
    const errors: Partial<Record<Field, string>> = {}
    for (const field of Object.keys(emptyForm) as Field[]) {
      if (!formData[field].trim()) errors[field] = fieldRequirements[field]
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "That email doesn't look complete."
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formEl = e.currentTarget
    if (!validate()) return
    setStatus("submitting")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        // Formspree rejects AJAX entirely while reCAPTCHA is enabled on the form.
        // Fall back to a native POST so the message still goes through via
        // Formspree's hosted page (which can render the captcha).
        const body = await response.json().catch(() => null)
        if (typeof body?.error === "string" && /AJAX|reCAPTCHA/i.test(body.error)) {
          formEl.submit()
          return
        }
        throw new Error(`Formspree responded ${response.status}`)
      }

      setFormData(emptyForm)
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const errorId = (field: Field) => (fieldErrors[field] ? `${field}-error` : undefined)

  const fieldError = (field: Field) =>
    fieldErrors[field] ? (
      <p id={`${field}-error`} className="text-xs text-brand" role="alert">
        {fieldErrors[field]}
      </p>
    ) : null

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[16rem,1fr] lg:gap-16">
          <h2 className="eyebrow">Get in touch</h2>

          <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:gap-16">
            <div>
              <p className="font-serif text-2xl leading-snug max-w-[24ch]">
                Building something, or thinking about it? I read everything.
              </p>
              <dl className="mt-10">
                {contactRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-faint py-3.5 text-sm"
                  >
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="text-right">
                      {row.href ? (
                        <a
                          href={row.href}
                          {...(row.href.startsWith("http") || row.href === "/resume"
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="underline underline-offset-4 decoration-faint transition-colors hover:decoration-foreground hover:text-brand"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {status === "success" ? (
              <div className="flex flex-col justify-center" role="status">
                <p className="font-serif text-2xl leading-snug">Thank you. Your message is on its way.</p>
                <p className="mt-3 text-sm text-muted-foreground">I&rsquo;ll get back to you as soon as I can.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 self-start text-sm underline underline-offset-4 decoration-faint hover:decoration-foreground transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action={FORMSPREE_ENDPOINT}
                method="POST"
                noValidate
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="eyebrow !text-[11px]">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={errorId("name")}
                      disabled={isSubmitting}
                    />
                    {fieldError("name")}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="eyebrow !text-[11px]">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={errorId("email")}
                      disabled={isSubmitting}
                    />
                    {fieldError("email")}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="eyebrow !text-[11px]">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={errorId("subject")}
                    disabled={isSubmitting}
                  />
                  {fieldError("subject")}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="eyebrow !text-[11px]">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={errorId("message")}
                    disabled={isSubmitting}
                  />
                  {fieldError("message")}
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive" role="alert">
                    Something went wrong sending that. Please try again, or email me directly at{" "}
                    <a className="underline" href="mailto:reubenjacob16@gmail.com">
                      reubenjacob16@gmail.com
                    </a>
                    .
                  </p>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-primary px-8">
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
