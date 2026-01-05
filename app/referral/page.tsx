import Nav from '@/components/Nav'
import styles from './page.module.css'

const PHONE_NUMBER = '+919629998846'

export default function Referral() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1 className={styles.title}>Referral Program</h1>
          <p className={styles.subtitle}>
            Refer your friends & earn exciting gifts 🎁
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>How Referral Works</h2>
            <p className={styles.sectionText}>
              Our referral program is simple and rewarding. When you refer someone to Sanvion Academy 
              and they enroll in a course, you earn exciting gifts as a token of appreciation. 
              It's our way of thanking you for helping others start their IT career journey.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Who Can Refer</h2>
            <p className={styles.sectionText}>
              Anyone can refer! Whether you're a current student, alumni, friend, or well-wisher, 
              you're welcome to refer people who would benefit from our IT training programs. 
              Help others grow their careers while earning rewards.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Reward Examples</h2>
            <p className={styles.sectionText}>
              As a thank you for successful referrals, you can earn exciting gifts and rewards. 
              The more you refer, the more you can earn. Contact us to learn more about the 
              current reward structure and how you can participate.
            </p>
          </div>

          <div className={styles.stepsSection}>
            <h2 className={styles.sectionTitle}>Simple Steps</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Refer Friend</h3>
                  <p className={styles.stepText}>
                    Share information about Sanvion Academy with your friends, colleagues, or anyone 
                    looking to start or advance their IT career.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Friend Enrolls</h3>
                  <p className={styles.stepText}>
                    When your referred friend enrolls in any of our courses, they mention your name 
                    during enrollment or contact.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>You Earn Gifts 🎁</h3>
                  <p className={styles.stepText}>
                    Once the enrollment is confirmed, you'll receive your reward. It's that simple!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Refer?</h2>
            <p className={styles.ctaText}>
              Start referring today and help others while earning rewards!
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.referButton}
              >
                Refer Now
              </a>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className={styles.contactButton}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
