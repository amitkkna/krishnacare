import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Care - Clearing & Forwarding Excellence',
  description: 'Leading clearing and forwarding agent in India specializing in fertilizer logistics and supply chain management. Trusted partner for agricultural companies.',
  keywords: 'clearing and forwarding, fertilizer logistics, India, agricultural supply chain, Krishna Care',
  authors: [{ name: 'Krishna Care' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
