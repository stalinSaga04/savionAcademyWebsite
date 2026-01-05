import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Sanvion Academy Bangalore | IT Training Institute',
  description: 'Contact Sanvion Academy in Bangalore. Get in touch for IT training courses - Service Desk, Technical Support, MIM. Best IT training institute in Bangalore. Call +91 96299 98846',
  keywords: 'contact IT training Bangalore, IT institute contact Bangalore, Sanvion Academy contact, IT training enquiry Bangalore, best IT institute contact Bangalore',
  openGraph: {
    title: 'Contact Sanvion Academy - IT Training in Bangalore',
    description: 'Contact us for IT training courses in Bangalore. Service Desk, Technical Support, MIM training.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
