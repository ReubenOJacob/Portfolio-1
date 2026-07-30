import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-start justify-center min-h-[60vh]">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-serif text-3xl md:text-4xl leading-tight">This project does not exist.</h1>
      <p className="mt-4 text-muted-foreground max-w-[48ch]">
        It may have been removed, or the address was mistyped.
      </p>
      <Link
        href="/#projects"
        className="mt-8 text-sm underline underline-offset-4 decoration-faint hover:decoration-foreground transition-colors"
      >
        Back to selected work
      </Link>
    </div>
  )
}
