import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProCraft Closets | Custom Closet Solutions in Seattle, WA',
  description: 'Transform your space with custom closet designs and professional installation services in Seattle, Washington. Expert craftsmanship and personalized storage solutions for your home.',
  keywords: 'custom closets, closet design, closet organization, Seattle closets, storage solutions, home organization, closet installation',
  authors: [{ name: 'ProCraft Closets' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ProCraft Closets | Custom Closet Solutions in Seattle, WA',
    description: 'Transform your space with custom closet designs and professional installation services in Seattle, Washington.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ProCraft Closets'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://procraftclosets.com" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}