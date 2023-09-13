import { LINKS, PAGES } from '@/data/links.data'
import styles from './Experience.module.css'
import { EXPERIENCE_DATA } from '@/data/experience.data'
import { Experience } from '../../shared/cards/experience/Experience'

const experience = EXPERIENCE_DATA

export default function ExperienceComponent () {
  return (
    <section id={LINKS[PAGES.ABOUT].sections[2]} className={styles.mainContainer}>

      <h3>Mi camino</h3>

      {experience.length > 0 &&
        <div className={styles.experienceContainer}>
          {experience.map((experience) => (
            <Experience key={experience.title} experience={experience} />))}
        </div>}
    </section>
  )
}
