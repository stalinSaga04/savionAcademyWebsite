import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Sanvion Academy - Learn. Grow. Lead in IT.',
  description: 'Industry-focused IT training to launch and grow your career',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
