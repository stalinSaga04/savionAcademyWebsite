'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Sanvion Academy
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <Link href="/courses" className={styles.navLink} onClick={closeMenu}>Courses</Link>
          <Link href="/why-sanvion-academy" className={styles.navLink} onClick={closeMenu}>Why Sanvion Academy</Link>
          <Link href="/referral" className={styles.navLink} onClick={closeMenu}>Referral</Link>
          <Link href="/about-trainer" className={styles.navLink} onClick={closeMenu}>About Trainer</Link>
          <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
