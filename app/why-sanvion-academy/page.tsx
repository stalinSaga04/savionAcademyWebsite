import Nav from '@/components/Nav'
import styles from './page.module.css'

export default function WhySanvionAcademy() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1 className={styles.title}>Why Sanvion Academy</h1>
          <p className={styles.subtitle}>
            Trust + Differentiation. Practical IT training that prepares you for real-world success.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Industry Relevance</h2>
            <p className={styles.sectionText}>
              Our curriculum is designed based on current industry needs and real IT service desk workflows. 
              We focus on what employers actually look for, ensuring you're job-ready from day one.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Trainer Experience</h2>
            <p className={styles.sectionText}>
              Learn from an experienced IT professional who has worked in the industry and understands 
              the challenges you'll face. Our trainer brings real-world insights and practical knowledge 
              to every session.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Practical vs Theory</h2>
            <p className={styles.sectionText}>
              While others teach theory, we focus on hands-on practice. You'll work through real IT scenarios, 
              handle actual incidents, and practice communication skills that matter in the workplace. 
              Theory is important, but practical experience is what gets you hired.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Real IT Exposure</h2>
            <p className={styles.sectionText}>
              Get exposure to real IT environments, tools, and workflows. We simulate actual service desk 
              scenarios, bridge calls, and incident management situations. This isn't just training—it's 
              preparation for your IT career.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Student Success Philosophy</h2>
            <p className={styles.sectionText}>
              Your success is our mission. We believe in small batch sizes to ensure personalized attention, 
              mentor-led learning for guidance, and career-focused outcomes. We're not just teaching—we're 
              building the next generation of IT professionals.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
