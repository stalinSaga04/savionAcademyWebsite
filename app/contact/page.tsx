'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import styles from './page.module.css'

// Current contact details
const PHONE_NUMBER = '+91 81221 39068'
const EMAIL = 'stalin.sagayaraj04@gmail.com'
const LOCATION = 'Bangalore'
const PHONE_CLEAN = PHONE_NUMBER.replace(/\D/g, '')

// Original contact details (for later use)
// const PHONE_NUMBER = '+91 96299 98846'
// const EMAIL = 'santhakumardevan@gmail.com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    phone: '',
    email: ''
  })

  // Validate phone number (India +91, 10 digits)
  const validatePhone = (phone: string): boolean => {
    // Remove all non-digits
    const digitsOnly = phone.replace(/\D/g, '')

    // Check if starts with 91 (India country code)
    if (digitsOnly.startsWith('91') && digitsOnly.length === 12) {
      // +91 followed by 10 digits
      return true
    }
    // Check if it's just 10 digits (assume India)
    if (digitsOnly.length === 10) {
      return true
    }
    // Check if it starts with +91 and has 10 more digits
    if (phone.startsWith('+91') && digitsOnly.length === 12) {
      return true
    }
    return false
  }

  // Format phone number for display
  const formatPhone = (phone: string): string => {
    const digitsOnly = phone.replace(/\D/g, '')

    // If starts with 91, keep it
    if (digitsOnly.startsWith('91') && digitsOnly.length === 12) {
      return `+91 ${digitsOnly.slice(2)}`
    }
    // If 10 digits, add +91
    if (digitsOnly.length === 10) {
      return `+91 ${digitsOnly}`
    }
    // If already has +91
    if (phone.startsWith('+91')) {
      return phone
    }
    return phone
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate phone
    if (!validatePhone(formData.phone)) {
      setErrors({
        ...errors,
        phone: 'Please enter a valid Indian phone number (+91 followed by 10 digits)'
      })
      return
    }

    // Validate and normalize email
    const emailLower = formData.email.toLowerCase().trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailLower)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address'
      })
      return
    }

    // Format phone number
    const formattedPhone = formatPhone(formData.phone)

    // Get Formspree endpoint from environment variable
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

    if (!formspreeEndpoint) {
      alert('Form configuration error. Please contact us directly.')
      return
    }

    try {
      // Build FormData for Formspree submission
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', emailLower)
      formDataToSend.append('phone', formattedPhone)
      formDataToSend.append('message', formData.message)

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitted(true)
        setErrors({ phone: '', email: '' })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        alert('Failed to send message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again or contact us directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Convert email to lowercase as user types
    if (name === 'email') {
      setFormData({
        ...formData,
        [name]: value.toLowerCase()
      })
      // Clear email error when user starts typing
      if (errors.email) {
        setErrors({ ...errors, email: '' })
      }
    } else if (name === 'phone') {
      setFormData({
        ...formData,
        [name]: value
      })
      // Clear phone error when user starts typing
      if (errors.phone) {
        setErrors({ ...errors, phone: '' })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
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
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone * (India +91)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    placeholder="+91 9876543210 or 9876543210"
                    maxLength={15}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  <small className={styles.helpText}>Enter 10-digit Indian mobile number (with or without +91)</small>
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
