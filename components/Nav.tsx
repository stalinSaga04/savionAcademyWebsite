import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Sanvion Academy
        </Link>
        <div className={styles.navLinks}>
          <Link href="/courses" className={styles.navLink}>Courses</Link>
          <Link href="/why-sanvion-academy" className={styles.navLink}>Why Sanvion Academy</Link>
          <Link href="/about-trainer" className={styles.navLink}>About Trainer</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
