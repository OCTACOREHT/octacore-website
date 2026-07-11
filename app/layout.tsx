import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://octacore.ht'),
  title: {
    default: 'Octacore',
    template: '%s | Octacore'
  },
  description: 'Octacore est une entreprise technologique qui conçoit, sécurise et optimise des solutions numériques intelligentes. Nous aidons les organisations à réussir leur transformation digitale et à obtenir un impact mesurable.',
  keywords: ['OCTACORE', 'solutions technologiques', 'développement web', 'Haïti', 'Port-au-Prince', 'digital', 'transformation digitale', 'smart solutions', 'sécurité numérique'],
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
    siteName: 'Octacore',
    title: 'Octacore',
    description: 'Octacore conçoit des systèmes digitaux de pointe pensés pour la performance, la sécurité et la croissance.',
    images: ['/logo.png'],
  },
    generator: 'v0.app'
}

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
              "description": "Octacore conçoit, sécurise et optimise des solutions numériques intelligentes.",
              "slogan": "Smart solutions. Real impact.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Port-au-Prince",
                "addressCountry": "HT"
              },
              "email": "info@octacore.com",
              "telephone": ["+509 4472-2152", "+509 3794-7597"],
              "foundingDate": "2024"
            })
          }}
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
