import React from "react"
import type { Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { baseMetadata } from '@/lib/metadata'

export const metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Octacore",
    "url": "https://octacore.io",
    "logo": "https://octacore.io/logo.png",
    "image": "https://octacore.io/logo.png",
    "description": "Octacore is a premier B2B technology agency based in Haiti specializing in cybersecurity, custom software engineering, Next.js web development, and data analytics.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bourdon",
      "addressLocality": "Port-au-Prince",
      "addressCountry": "HT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5392",
      "longitude": "-72.3350"
    },
    "telephone": ["+509 4473-2152", "+509 3794-7597"],
    "email": "octacore.haiti@gmail.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "knowsAbout": [
      "Cybersecurity",
      "Software Engineering",
      "Next.js",
      "React",
      "Cloud Infrastructure",
      "TypeScript",
      "Information Technology Consulting",
      "Data Pipelines",
      "Generative Engine Optimization"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Octacore Core Pillars",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "Protection of systems, data, and infrastructures."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web & Mobile Development",
            "description": "Secure, scalable, and high-performance solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Engineering",
            "description": "Tailored tools, internal management systems, and SaaS."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data & Analytics",
            "description": "Intelligent data pipelines, APIs, and business integrations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Support",
            "description": "Technical assistance, maintenance, and infrastructure management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Consulting",
            "description": "Technological guidance, digital transformation, and process optimization."
          }
        }
      ]
    }
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
