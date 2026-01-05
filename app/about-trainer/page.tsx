import Nav from '@/components/Nav'
import styles from './page.module.css'

export default function AboutTrainer() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1 className={styles.title}>About Trainer</h1>
          <p className={styles.subtitle}>
            Building trust through experience, expertise, and a commitment to your success.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.mainSection}>
            <h2 className={styles.sectionTitle}>Trainer Profile</h2>
            <p className={styles.sectionText}>
              Our trainer brings years of hands-on experience in IT service desk operations, 
              technical support, and major incident management. With a deep understanding of 
              industry challenges and requirements, the trainer is dedicated to preparing 
              students for real-world IT careers.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Industry Experience</h2>
            <p className={styles.sectionText}>
              Extensive experience working in IT service desk environments, managing incidents, 
              leading bridge calls, and supporting technical operations. This real-world experience 
              ensures that training is practical, relevant, and aligned with what employers expect.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>IT Background</h2>
            <p className={styles.sectionText}>
              Strong foundation in ITIL practices, service desk operations, technical troubleshooting, 
              and incident management. The trainer has worked across various IT support roles, 
              understanding the journey from entry-level to advanced positions.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Teaching Philosophy</h2>
            <p className={styles.sectionText}>
              We believe in practical, hands-on learning over theory alone. Every concept is taught 
              through real scenarios and actual IT workflows. Small batch sizes ensure personalized 
              attention, and mentor-led learning provides the guidance needed for career success.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Mission Statement</h2>
            <p className={styles.sectionText}>
              To bridge the gap between IT education and industry requirements. Our mission is to 
              prepare students not just with knowledge, but with the confidence, skills, and 
              professional readiness needed to excel in IT careers. We're committed to your success 
              and growth in the IT industry.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
