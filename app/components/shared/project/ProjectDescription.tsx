import { ProjectInterface } from '@/app/interface/project.interface'
import styles from './ProjectDescription.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectDescriptionComponent ({ project }: {
  project: ProjectInterface}) {
  return (
    <div className={styles.container}>

      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{project.title}</h2>

        <Link className={styles.github} href={project.urlGithub}>
          <Image alt='github' src='/images/github.png' height={40} width={40} />
        </Link>
      </div>

      <div className={styles.textContainer}>

        <p className={styles.shortText}>{project.shortDescription}</p>

        <p>{project.descriptionSolution}</p>

        <div className={styles.imagesContainer}>
          {project.images && project.images.map((data) => (
            <Image className={styles.image} key={data.alt} alt={data.alt} src={data.url} height={data.height} width={data.width} />
          ))}
        </div>

        <div className={styles.technologiesContainer}>
          {project.technologies && project.technologies.map((data) => (
            <Image key={data.image.alt} alt={data.image.alt} src={data.image.url} width={50} height={50} />
          ))}
        </div>

        <div className={styles.blockListContainer}>
          <div className={styles.listContainer}>
            <h3 className={styles.titleList}>Características</h3>
            <ul className={styles.list}>
              {project.features && project.features.map((data) => (
                <li key={data}><p> - {data}</p></li>
              ))}
            </ul>
          </div>

          <div className={styles.listContainer}>
            <h3 className={styles.titleList}>Futuras mejoras</h3>
            <ul className={styles.list}>
              {project.descriptionImprovements && project.descriptionImprovements.map((data) => (
                <li key={data}><p> - {data}</p></li>
              ))}
            </ul>
          </div>
        </div>

        {/* <p>{project.urlDeployment}</p> */}

      </div>

    </div>
  )
}
