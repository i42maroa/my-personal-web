import { ProjectInterface } from '@/app/interface/project.interface'
import styles from './Project.module.css'
import Image from 'next/image'
import { Technology } from '../technology/Technology'

export function ProjectCardComponent ({ project }: {
  project: ProjectInterface}  ) {
    return (
      <div className={styles.container}>
        {/* <Image alt={project.images[0].alt} src={project.images[0].url} width={project.images[0].width} height={project.images[0].height}/> */}
        <h2>{project.title}</h2>
        <p>{project.shortDescription}</p>
        {project.technologies && project.technologies.map((data) => (
            <Image alt={data.image.alt}  src={data.image.url} width={40} height={40}></Image>
        ))}
      </div>
    )
  }