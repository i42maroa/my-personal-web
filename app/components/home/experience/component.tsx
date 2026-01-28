import styles from './Experience.module.css'
import { EXPERIENCE_DATA } from '@/data/experience.data'
import { Experience } from '../../shared/cards/experience/Experience'

const experience = EXPERIENCE_DATA

export default function ExperienceComponent () {
  return (
    <section id="experience">
      <h2>Mi experiencia</h2>

      {experience.length > 0 &&
        <div className={styles.experienceContainer}>
          <div className={styles.line} />
          <div className={styles.experienceContentContainer}>
            {experience.map((experience) => (
              <Experience key={experience.title} experience={experience} />
            ))}
          </div>
        </div>}
    </section>
  )
}
