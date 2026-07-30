import type React from "react"
import type { Metadata, Viewport } from "next"
import { Libre_Caslon_Text, Public_Sans } from "next/font/google"
import "./globals.css"

// Only the 400-normal cut renders anywhere on the site; declaring the bold and
// italic cuts would preload three font files nothing uses.
const serif = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-serif",
  display: "swap",
})

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const title = "Reuben Jacob · Co-Founder & CEO, Syphon Labs"
const description =
  "Co-founder and CEO of Syphon Labs, building AI agents for recruiting and the people data that powers them. A track record across healthcare operations, data products, and published research."

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Reuben Jacob",
    "Syphon Labs",
    "Talenry",
    "Co-Founder",
    "CEO",
    "AI agents",
    "Recruiting",
    "LLM applications",
    "Product Leadership",
    "Workflow Automation",
    "Data Analytics",
    "Bangalore",
  ],
  authors: [{ name: "Reuben Jacob" }],
  creator: "Reuben Jacob",
  publisher: "Reuben Jacob",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reubenjacob.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Reuben Jacob",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Reuben Jacob",
    jobTitle: "Co-Founder & CEO",
    description,
    url: "https://reubenjacob.com",
    image: "https://reubenjacob.com/images/headshot.jpg",
    email: "reubenjacob16@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: ["https://www.linkedin.com/in/reubenojacob/", "https://github.com/ReubenOJacob"],
    worksFor: {
      "@type": "Organization",
      name: "Syphon Labs",
      url: "https://syphonlabs.com",
    },
    alumniOf: {
      "@type": "Organization",
      name: "New York University",
    },
    knowsAbout: [
      "AI Infrastructure",
      "Product Management",
      "Workflow Automation",
      "Data Analytics",
      "Business Intelligence",
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
