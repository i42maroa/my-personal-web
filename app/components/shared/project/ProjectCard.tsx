import { ProjectInterface } from '@/app/interface/project.interface'
import styles from './Project.module.css'
import Image from 'next/image'
import { GithubSvg } from '../svg/Buttons/Github'
import Link from 'next/link'
import { DeploySvg } from '../svg/Deploy/Deploy'

export function ProjectCardComponent ({ project }: {
  project: ProjectInterface}) {
  const fillStyle = { fill: 'var(--font-color)' }
  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{project.title}</h4>
          <Link className={styles.github} href={project.urlGithub}>
            <GithubSvg />
          </Link>
        </div>
        <div className={styles.separateLine} />
        <p className={styles.shortText}>{project.shortDescription}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image key='image' src='/project/shreilak.jpeg' alt='shreilak' fill sizes='1000vh' />
      </div>

      <div className={styles.footerCardContainer}>
        <div className={styles.technologiesContainer}>
          {project.technologies && project.technologies.map((data) => (
            <Image key={data.image.alt} alt={data.image.alt} src={data.image.url} width={40} height={40} />
          ))}
        </div>
        <Link className={styles.deploy} href={project.urlGithub}>
          <DeploySvg fill={fillStyle} />
        </Link>
      </div>

    </div>
  )
}
