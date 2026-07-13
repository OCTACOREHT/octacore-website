import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://octacore.io'),
  title: {
    default: 'Octacore | Tech & Cybersecurity Agency Haiti',
    template: '%s | Octacore',
  },
  description: 'Secure and scale your business with Octacore. Custom solutions in cybersecurity, web dev, data, and SaaS in Port-au-Prince and globally.',
  applicationName: 'Octacore',
  authors: [{ name: 'Octacore', url: 'https://octacore.io' }],
  generator: 'Next.js',
  keywords: [
    'Tech agency Haiti', 'Agence technologique Haïti', 'Cybersecurity services',
    'Next.js development agency', 'Custom software engineering', 'B2B IT support services',
    'Port-au-Prince', 'SaaS infrastructure', 'Digital transformation consulting', 'Data Pipelines'
  ],
  alternates: {
    canonical: 'https://octacore.io',
    languages: {
      'en-US': 'https://octacore.io/en',
      'fr-HT': 'https://octacore.io/fr',
      'fr-FR': 'https://octacore.io/fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_HT', 'fr_FR'],
    url: 'https://octacore.io',
    siteName: 'Octacore Technology Partner',
    title: 'Octacore | Tech & Cybersecurity Agency Haiti',
    description: 'Secure and scale your business with Octacore. Custom solutions in cybersecurity, web dev, data, and SaaS in Port-au-Prince and globally.',
    images: [
      {
        url: 'https://octacore.io/logo.png',
        width: 1200,
        height: 630,
        alt: 'Octacore - Technology that inspires trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Octacore | Tech & Cybersecurity Agency Haiti',
    description: 'Secure and scale your business with Octacore. Custom solutions in cybersecurity, web dev, data, and SaaS in Port-au-Prince and globally.',
    images: ['https://octacore.io/logo.png'],
    creator: '@octacore',
  },
  verification: {
    google: '0e65E_UbFxcKWnTLeimtFkAX5VCx6LjkUt4Bjx9Fg5E',
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
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};
