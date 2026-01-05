import Nav from '@/components/Nav'
import styles from './page.module.css'

const PHONE_NUMBER = '+919629998846'
const EMAIL = 'santhakumardevan@gmail.com'
const LOCATION = 'Bangalore'

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logo}>Sanvion Academy</div>
          <h1 className={styles.headline}>Learn. Grow. Lead in IT.</h1>
          <p className={styles.subtext}>
            Industry-focused IT training to launch and grow your career
          </p>
          <div className={styles.ctaButtons}>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Call Now
            </a>
            <a 
              href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              WhatsApp Enquiry
            </a>
            <a 
              href="#courses" 
              className={`${styles.button} ${styles.buttonOutline}`}
            >
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section id="courses" className={styles.programs}>
        <h2 className={styles.sectionTitle}>Programs Offered</h2>
        <div className={styles.programsGrid}>
          <div className={styles.programCard}>
            <div className={styles.checkIcon}>✅</div>
            <h3 className={styles.programTitle}>Service Desk Fundamentals</h3>
            <p className={styles.programDescription}>
              Master ITIL basics, ticketing systems, and incident handling for service desk roles.
            </p>
            <a href="/courses#service-desk" className={styles.viewDetails}>
              View Details →
            </a>
          </div>

          <div className={styles.programCard}>
            <div className={styles.checkIcon}>✅</div>
            <h3 className={styles.programTitle}>Technical Support Training</h3>
            <p className={styles.programDescription}>
              Hands-on troubleshooting, Windows basics, network fundamentals, and remote support.
            </p>
            <a href="/courses#technical-support" className={styles.viewDetails}>
              View Details →
            </a>
          </div>

          <div className={styles.programCard}>
            <div className={styles.checkIcon}>✅</div>
            <h3 className={styles.programTitle}>Major Incident Management (MIM) Mastery</h3>
            <p className={styles.programDescription}>
              Lead bridge calls, stakeholder communication, root cause analysis, and outage management.
            </p>
            <a href="/courses#mim" className={styles.viewDetails}>
              View Details →
            </a>
          </div>

          <div className={styles.programCard}>
            <div className={styles.checkIcon}>✅</div>
            <h3 className={styles.programTitle}>IT Career Readiness Programs</h3>
            <p className={styles.programDescription}>
              Resume building, interview prep, workplace communication, and professional confidence.
            </p>
            <a href="/courses#career-readiness" className={styles.viewDetails}>
              View Details →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Sanvion Academy */}
      <section className={styles.whyChoose}>
        <h2 className={styles.sectionTitle}>Why Choose Sanvion Academy</h2>
        <div className={styles.whyChooseGrid}>
          <div className={styles.whyChooseItem}>
            <div className={styles.bullet}>•</div>
            <div>Practical, real-world IT scenarios</div>
          </div>
          <div className={styles.whyChooseItem}>
            <div className={styles.bullet}>•</div>
            <div>Industry-aligned curriculum</div>
          </div>
          <div className={styles.whyChooseItem}>
            <div className={styles.bullet}>•</div>
            <div>Career guidance & readiness</div>
          </div>
          <div className={styles.whyChooseItem}>
            <div className={styles.bullet}>•</div>
            <div>Mentor-led learning</div>
          </div>
          <div className={styles.whyChooseItem}>
            <div className={styles.bullet}>•</div>
            <div>Small batch focus</div>
          </div>
        </div>
      </section>

      {/* Referral Highlight */}
      <section className={styles.referral}>
        <div className={styles.referralBanner}>
          <div className={styles.referralContent}>
            <h2 className={styles.referralTitle}>
              Refer your friends & earn exciting gifts 🎁
            </h2>
            <a href="/referral" className={styles.knowMoreButton}>
              Know More
            </a>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className={styles.contactPreview}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📞</div>
            <a href={`tel:${PHONE_NUMBER}`} className={styles.contactLink}>
              {PHONE_NUMBER}
            </a>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>✉️</div>
            <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
              {EMAIL}
            </a>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📍</div>
            <div className={styles.contactText}>{LOCATION}</div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
