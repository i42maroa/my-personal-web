import { ExperienceInterface } from '@/app/interface/experience.interface'
import styles from './Experience.module.css'
import Image from 'next/image'

export function Experience ({ experience } : {experience:ExperienceInterface}) {
  return (
    <div key={experience.title} className={styles.container}>
      <div className={styles.yearContainer}>
        <h2 className={styles.yearExperience}>{experience.year}</h2>
      </div>

      <div className={styles.contentContainer}>
        <h3 className={styles.title}> {experience.title}</h3>
        <h4 className={styles.subtitle}>{experience.subtitle}</h4>
      </div>

      <div />
      
      <div className={styles.descriptionContainer}>
        {experience.descriptions.length > 0 &&
          experience.descriptions.map((e) => (
            <div className={styles.descriptionContainerUnity} key={e.title}>
              <div className={styles.titleDescriptionContainer}>
                <h4 className={styles.titleDescription}>{e.title}</h4>
                <p className={styles.description}>{e.description}</p>
              </div>
              <div className={styles.contentTechnologies}>
                {e.tecnologies.length > 0 && e.tecnologies.map((t) => (

                  <div className={styles.imageContainer}>
                    <Image className={styles.image} src={t.image.url} key={t.name} alt={t.image.alt} fill sizes='10vh'/> 
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

    </div>
  )
}
