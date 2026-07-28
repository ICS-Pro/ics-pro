import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const siteUrl = 'https://www.icspro.cloud'
const description =
  'Fast, Secure, and Professional IT Support for Small & Medium Businesses and Home Users. With ICS Pro, we solve your IT problems wherever you are.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ICS Pro',
  alternateName: 'ICS Pro | IT & Computer Solutions',
  description,
  url: siteUrl,
  telephone: '+964 769 010 4338',
  email: 'ics-pro@outlook.com',
  areaServed: 'IQ',
  priceRange: '$$',
  serviceType: [
    'Remote IT Support',
    'On-Site IT Support',
    'Microsoft 365 Support',
    'Network Support',
    'Windows Troubleshooting',
    'IT Consulting',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ICS Pro | IT & Computer Solutions',
    template: '%s | ICS Pro',
  },
  description,
  applicationName: 'ICS Pro',
  keywords: [
    'ICS Pro',
    'IT support',
    'remote IT support',
    'on-site IT support',
    'Microsoft 365 support',
    'network support',
    'Windows troubleshooting',
    'IT consulting',
    'computer solutions',
    'managed IT services',
  ],
  authors: [{ name: 'ICS Pro' }],
  creator: 'ICS Pro',
  publisher: 'ICS Pro',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'ICS Pro',
    title: 'ICS Pro | IT & Computer Solutions',
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICS Pro | IT & Computer Solutions',
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e4f8a',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${poppins.variable}`}>
      <body className="bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
