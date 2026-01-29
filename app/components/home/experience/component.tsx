import styles from './Experience.module.css'
import { EXPERIENCE_DATA } from '@/data/experience.data'
import { Experience } from '../../shared/cards/experience/Experience'

export default function ExperienceComponent () {
  return (
    <section id='experience'>
      <h2>Mi experiencia</h2>

      {EXPERIENCE_DATA.length > 0 &&
        <div className={styles.experienceContainer}>
          <div className={styles.line} />
          <div className={styles.experienceContentContainer}>
            {EXPERIENCE_DATA.map((experience) => (
              <Experience key={experience.title} experience={experience} />
            ))}
          </div>
        </div>}
    </section>
  )
}
