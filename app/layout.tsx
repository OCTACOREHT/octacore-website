import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'OCTACORE - Smart Solutions. Real Impact.',
    template: '%s | OCTACORE'
  },
  description: 'Octacore is a technology company focused on designing, securing, and optimizing intelligent digital solutions. We help organizations navigate digital transformation and achieve real, measurable impact.',
  keywords: ['OCTACORE', 'solutions technologiques', 'développement web', 'Haïti', 'Port-au-Prince', 'digital', 'transformation digitale', 'smart solutions'],
  authors: [{ name: 'OCTACORE' }],
  creator: 'OCTACORE',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_HT',
    siteName: 'OCTACORE',
    title: 'OCTACORE - Smart Solutions. Real Impact.',
    description: 'Octacore provides cutting edge digital systems built for performance, safety, and growth.',
    images: ['/logo.png'],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#03011E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "OCTACORE",
              "description": "Octacore is a technology company focused on designing, securing, and optimizing intelligent digital solutions.",
              "slogan": "Smart solutions. Real impact.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Port-au-Prince",
                "addressCountry": "HT"
              },
              "email": "octacore.haiti@gmail.com",
              "telephone": ["+509 4472-2152", "+509 3794-7597"],
              "foundingDate": "2024"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#03011E] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
