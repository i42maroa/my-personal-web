import { ProjectInterface } from '@/app/interface/project.interface'
import styles from './Project.module.css'
import Image from 'next/image'
import { GithubSvg } from '../svg/Buttons/Github'
import Link from 'next/link'
import { DeploySvg } from '../svg/Deploy/Deploy'
import { Slider } from '../slider/Slider'

export function ProjectCardComponent ({ project }: {
  project: ProjectInterface}) {
  const fillStyle = { fill: 'var(--hard-brown)' }
  return (
    <div className={styles.container}>

      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{project.title}</h4>
          <Link className={styles.github} href={project.urlGithub} target='_blank'>
            <GithubSvg />
          </Link>
        </div>
        <div className={styles.separateLine} />
        <p className={styles.shortText}>{project.shortDescription}</p>
      </div>

      {project.images.length > 0 &&
        <div className={styles.imageContainer}>
          {project.images.length > 0 && <Slider arrayImages={project.images} />}
        </div>}

      <div className={styles.footerCardContainer}>
        <div className={styles.technologiesContainer}>
          {project.technologies && project.technologies.map((data) => (
            <div key={data.image.alt} className={styles.technology}>
              <Image alt={data.image.alt} src={data.image.url} fill sizes='1000vh' />
            </div>
          ))}
        </div>
        {project.status === 'DEPLOY' &&
          <Link className={styles.deploy} href={project.url!} target='_blank'>
            <DeploySvg fill={fillStyle} />
          </Link>}
      </div>

    </div>
  )
}
