import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reuben Jacob - Product Manager & Data Analyst Portfolio",
  description: "Product Manager & Data Analyst specializing in data-driven product strategy, user-centered solutions, and business analytics. View my projects, experience, and professional certifications.",
  keywords: [
    "Product Manager",
    "Data Analyst", 
    "Business Analytics",
    "Product Strategy",
    "Data Visualization",
    "Tableau",
    "SQL",
    "Python",
    "User Research",
    "Market Analysis",
    "KPI Dashboard",
    "Business Intelligence",
    "McKinsey Forward",
    "Google Data Analytics",
    "Portfolio",
    "New York"
  ],
  authors: [{ name: "Reuben Jacob" }],
  creator: "Reuben Jacob",
  publisher: "Reuben Jacob",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reubenjacob.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Reuben Jacob - Product Manager & Data Analyst Portfolio",
    description: "Product Manager & Data Analyst specializing in data-driven product strategy, user-centered solutions, and business analytics. View my projects, experience, and professional certifications.",
    url: 'https://reubenjacob.com',
    siteName: 'Reuben Jacob Portfolio',
    images: [
      {
        url: '/images/profile.JPG',
        width: 1200,
        height: 630,
        alt: 'Reuben Jacob - Product Manager & Data Analyst',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reuben Jacob - Product Manager & Data Analyst Portfolio",
    description: "Product Manager & Data Analyst specializing in data-driven product strategy, user-centered solutions, and business analytics.",
    images: ['/images/profile.JPG'],
    creator: '@reubenjacob',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    "name": "Reuben Jacob",
    "jobTitle": "Product Manager & Data Analyst",
    "description": "Product Manager & Data Analyst specializing in data-driven product strategy, user-centered solutions, and business analytics.",
    "url": "https://reubenjacob.com",
    "image": "https://reubenjacob.com/images/profile.JPG",
    "sameAs": [
      "https://www.linkedin.com/in/reubenojacob/",
      "https://github.com/ReubenOJacob"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "NYC Health and Hospitals"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "New York University"
    },
    "knowsAbout": [
      "Product Management",
      "Data Analytics",
      "Business Intelligence",
      "Tableau",
      "SQL",
      "Python",
      "User Research",
      "Market Analysis"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.credly.com" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove Grammarly and other extension attributes
              document.body.removeAttribute('data-gr-ext-installed');
              document.body.removeAttribute('data-new-gr-c-s-check-loaded');
            `,
          }}
        />
      </body>
    </html>
  )
}


import './globals.css'
