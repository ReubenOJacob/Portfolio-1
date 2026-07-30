const testimonials = [
  {
    id: "lina-janas",
    name: "Lina Janas",
    role: "Director, Academic Initiatives, Office of the Provost, NYU",
    quote:
      "He has a unique ability to communicate intricate ideas to senior leaders in a way that’s clear, concise, and easy to understand.",
    linkedin: "https://www.linkedin.com/in/lina-janas-990227289/",
  },
  {
    id: "bryan-mulcrone",
    name: "Bryan Mulcrone",
    role: "Founder, Treevah",
    quote:
      "His ability to break down complex business models and contribute meaningful insights to MVP feature development was truly outstanding.",
    linkedin: "https://www.linkedin.com/in/bryanmulcrone/",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-faint scroll-mt-20">
      <div className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[16rem,1fr] lg:gap-16">
          <h2 className="eyebrow">In their words</h2>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {testimonials.map((t) => (
              <figure key={t.id}>
                <blockquote className="font-serif text-xl md:text-2xl leading-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-brand transition-colors"
                  >
                    {t.name}
                  </a>
                  <span className="block mt-0.5 text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
