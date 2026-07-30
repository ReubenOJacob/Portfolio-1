export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-faint">
      <div className="container py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between">
          <div>
            <p className="font-serif text-lg">Reuben Jacob</p>
            <p className="mt-1 text-sm text-muted-foreground">Co-Founder &amp; CEO, Syphon Labs</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground" aria-label="Footer">
            <a
              href="https://www.linkedin.com/in/reubenojacob/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ReubenOJacob"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a href="mailto:reubenjacob16@gmail.com" className="hover:text-foreground transition-colors">
              Email
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Resume
            </a>
            <a href="/press" className="hover:text-foreground transition-colors">
              Press kit
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          &copy; {currentYear} Reuben Jacob · Bangalore
        </p>
      </div>
    </footer>
  )
}
