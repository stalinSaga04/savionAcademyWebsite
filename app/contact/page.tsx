'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import styles from './page.module.css'

const PHONE_NUMBER = '+91 96299 98846'
const EMAIL = 'santhakumardevan@gmail.com'
const LOCATION = 'Bangalore'
const PHONE_CLEAN = PHONE_NUMBER.replace(/\D/g, '')

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        alert(data.error || 'Failed to send message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again or contact us directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Get in touch with us. We're here to help you start your IT career journey.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Contact Details</h2>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactLabel}>Phone</h3>
                <a href={`tel:${PHONE_CLEAN}`} className={styles.contactLink}>
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactLabel}>Email</h3>
                <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactLabel}>Location</h3>
                <p className={styles.contactText}>{LOCATION}</p>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <a 
                href={`https://wa.me/${PHONE_CLEAN}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                WhatsApp Us
              </a>
              <a 
                href={`tel:${PHONE_CLEAN}`}
                className={styles.callButton}
              >
                Call Now
              </a>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>Send us a Message</h2>
            {submitted ? (
              <div className={styles.successMessage}>
                <p>Thank you! Your message has been sent. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your phone number"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
