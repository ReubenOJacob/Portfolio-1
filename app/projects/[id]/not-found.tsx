import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-4 dark:gradient-text">Project Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, the project you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild className="dark:hover-glow">
        <Link href="/#projects">Back to Projects</Link>
      </Button>
    </div>
  )
}
