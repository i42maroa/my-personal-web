import { ProjectInterface } from '@/app/interface/project.interface'
import styles from './ProjectDescription.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectDescriptionComponent ({ project }: {
  project: ProjectInterface}) {
  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>

        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{project.title}</h4>
          {/* <Link className={styles.github} href={project.urlGithub}>
            <Image alt='github' src='/images/github.png' height={20} width={20} />
          </Link> */}
        </div>

        {/* <p className={styles.shortText}>{project.shortDescription}</p> */}

        <div className={styles.technologiesContainer}>
          {project.technologies && project.technologies.map((data) => (
            <Image key={data.image.alt} alt={data.image.alt} src={data.image.url} width={30} height={30} />
          ))}
        </div>

      </div>

      {/* <div className={styles.imagesContainer}>
        {project.images && project.images.map((data) => (
          <Image key={data.alt} alt={data.alt} src={data.url} height={data.height} width={data.width} />
        ))}
      </div> */}

      {/* <h3>Características</h3>
      <ul>
        {project.features && project.features.map((data) => (
          <li key={data}><p> + {data}</p></li>
        ))}
      </ul>

      <p>{project.descriptionSolution}</p>

      <h3>Futuras mejoras</h3>
      <ul>
        {project.descriptionImprovements && project.descriptionImprovements.map((data) => (
          <li key={data}><p> + {data}</p></li>
        ))}
      </ul> */}

      {/* <p>{project.urlDeployment}</p> */}
    </div>
  )
}
