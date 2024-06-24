import { ExperienceInterface } from '@/app/interface/experience.interface'
import styles from './Experience.module.css'

export function Experience ({ experience }: { experience: ExperienceInterface }) {
  return (
    <div key={experience.title} className={styles.container}>
      <div className={styles.yearContainer}>
        <span className={styles.yearExperience}>{experience.year}</span>
      </div>

      <div className={styles.contentContainer}>
        <h3 className={styles.title}> {experience.title}</h3>
        <h4 className={styles.subtitle}>{experience.subtitle}</h4>
      </div>
      <div className={styles.complementaryDescriptionContainer} />
      <div className={styles.descriptionContainer}>
        {experience.descriptions.length > 0 &&
          experience.descriptions.map((e) => (
            <div className={styles.descriptionContainerUnity} key={e.title}>
              <div className={styles.titleDescriptionContainer}>
                <h4 className={styles.titleDescription}>{e.title}</h4>
                {
                  e.description && e.description.map((d, index) => (
                    <p key={index} className={styles.description}>{d}</p>
                  ))
                }
              </div>
            </div>
          ))}
      </div>

    </div>
  )
}
