import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
