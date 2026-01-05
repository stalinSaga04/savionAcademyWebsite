import { Metadata } from 'next'
import Nav from '@/components/Nav'
import styles from './page.module.css'

const PHONE_NUMBER = '+919629998846'

export const metadata: Metadata = {
  title: 'IT Courses in Bangalore - Service Desk, Technical Support, MIM Training | Sanvion Academy',
  description: 'Best IT courses in Bangalore: Service Desk Fundamentals, Technical Support Training, Major Incident Management (MIM), and IT Career Readiness. Practical IT training institute in Bangalore.',
  keywords: 'IT courses in Bangalore, Service Desk course Bangalore, Technical Support course Bangalore, MIM course Bangalore, IT training courses Bangalore, best IT courses Bangalore, IT institute Bangalore courses, IT certification courses Bangalore',
  openGraph: {
    title: 'IT Courses in Bangalore - Sanvion Academy',
    description: 'Best IT courses in Bangalore. Service Desk, Technical Support, MIM, and Career Readiness training.',
    type: 'website',
    locale: 'en_IN',
  },
}

const courses = [
  {
    id: 'service-desk',
    title: 'Service Desk Fundamentals',
    whoShouldTake: 'IT freshers (0-2 years), Graduates looking to enter IT support roles',
    whatYouLearn: [
      'ITIL basics',
      'Ticketing systems',
      'SLA / KPI understanding',
      'End-user communication',
      'Incident & request handling'
    ],
    toolsConcepts: 'ITIL framework, Ticketing systems, SLA/KPI metrics, Communication protocols',
    careerOutcomes: 'Service Desk Analyst, IT Support Specialist, Help Desk Technician',
    duration: '6-8 weeks',
    description: 'Master the fundamentals of service desk operations with practical, real-world scenarios.'
  },
  {
    id: 'technical-support',
    title: 'Technical Support Training',
    whoShouldTake: 'IT freshers, Service Desk professionals looking to enhance technical skills',
    whatYouLearn: [
      'Hardware & software troubleshooting',
      'Windows basics',
      'Network fundamentals',
      'Remote support tools',
      'Real-time issue handling'
    ],
    toolsConcepts: 'Windows OS, Network troubleshooting, Remote support tools, Hardware diagnostics',
    careerOutcomes: 'Technical Support Engineer, Desktop Support Analyst, IT Support Specialist',
    duration: '8-10 weeks',
    description: 'Hands-on technical training covering hardware, software, and network troubleshooting.'
  },
  {
    id: 'mim',
    title: 'Major Incident Management (MIM) Mastery',
    whoShouldTake: 'Service Desk professionals aiming to move into Major Incident Management',
    whatYouLearn: [
      'Incident lifecycle',
      'Bridge calls',
      'Stakeholder communication',
      'Root cause analysis',
      'Leadership during outages'
    ],
    toolsConcepts: 'Incident management tools, Bridge call protocols, RCA methodologies, Communication frameworks',
    careerOutcomes: 'Major Incident Manager, Incident Coordinator, IT Operations Lead',
    duration: '10-12 weeks',
    description: 'Develop leadership skills for managing critical incidents and leading bridge calls during outages.'
  },
  {
    id: 'career-readiness',
    title: 'IT Career Readiness Program',
    whoShouldTake: 'IT freshers, Graduates, Career changers entering IT field',
    whatYouLearn: [
      'Resume building',
      'Interview preparation',
      'Real IT scenarios',
      'Workplace communication',
      'Confidence & professionalism'
    ],
    toolsConcepts: 'Resume optimization, Interview techniques, IT scenario discussions, Professional communication',
    careerOutcomes: 'Job-ready IT professional with confidence and professional skills',
    duration: '4-6 weeks',
    description: 'Comprehensive career readiness program to prepare you for IT job interviews and workplace success.'
  }
]

export default function Courses() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <section className={styles.header}>
          <h1 className={styles.title}>Our Courses</h1>
          <p className={styles.subtitle}>
            Practical IT training focused on real service desk work, incident handling, and career readiness
          </p>
        </section>

        <section className={styles.courses}>
          {courses.map((course) => (
            <div key={course.id} id={course.id} className={styles.courseCard}>
              <h2 className={styles.courseTitle}>{course.title}</h2>
              
              <div className={styles.courseSection}>
                <h3 className={styles.sectionHeading}>Who should take this course</h3>
                <p className={styles.sectionContent}>{course.whoShouldTake}</p>
              </div>

              <div className={styles.courseSection}>
                <h3 className={styles.sectionHeading}>What you'll learn</h3>
                <ul className={styles.learnList}>
                  {course.whatYouLearn.map((item, index) => (
                    <li key={index} className={styles.learnItem}>
                      <span className={styles.bullet}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.courseSection}>
                <h3 className={styles.sectionHeading}>Tools / Concepts covered</h3>
                <p className={styles.sectionContent}>{course.toolsConcepts}</p>
              </div>

              <div className={styles.courseSection}>
                <h3 className={styles.sectionHeading}>Career outcomes</h3>
                <p className={styles.sectionContent}>{course.careerOutcomes}</p>
              </div>

              <div className={styles.courseSection}>
                <h3 className={styles.sectionHeading}>Duration</h3>
                <p className={styles.sectionContent}>{course.duration}</p>
              </div>

              <div className={styles.ctaButtons}>
                <a 
                  href={`tel:${PHONE_NUMBER}`} 
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  Enroll Now
                </a>
                <a 
                  href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Talk to Us
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}
