import { ProjectInterface } from '@/app/interface/project.interface'
import styles from './Project.module.css'
import Image from 'next/image'

export function ProjectCardComponent ({ project }: {
  project: ProjectInterface}) {
  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>

        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{project.title}</h4>
          <p className={styles.shortText}>{project.shortDescription}</p>
        </div>

        <div className={styles.technologiesContainer}>
          {project.technologies && project.technologies.map((data) => (
            <Image key={data.image.alt} alt={data.image.alt} src={data.image.url} width={40} height={40} />
          ))}
        </div>
      </div>
    </div>
  )
}
