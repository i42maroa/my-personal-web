import { ProjectInterface } from '@/app/interface/project.interface'
import styles from './ProjectDescription.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectDescriptionComponent ({ project }: {
  project: ProjectInterface} ) {
    return (
      <div className={styles.container}>

        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{project.title}</h2>
          <Link className={styles.github} href={project.urlGithub}>
            <Image alt={'github'} src={'/images/github.png'} height={40} width={40} />
          </Link>  
        </div> 

        <p>{project.shortDescription}</p>

        {project.technologies && project.technologies.map((data) => (
            <Image alt={data.image.alt}  src={data.image.url} width={40} height={40}></Image>
        ))}
        
        <div className={styles.imagesContainer}>
        {project.images && project.images.map((data) => (
            <Image  alt={data.alt} src={data.url} height={data.height} width={data.width}/>
        ))}
        </div>
      
        
        
        <h3>Características</h3>
        <ul>
        {project.features && project.features.map((data) => (
                  <li><p> + {data}</p></li>
                ))}
        </ul>

        <p>{project.descriptionSolution}</p>
        
        <h3>Futuras mejoras</h3>
        <ul>
        {project.descriptionImprovements && project.descriptionImprovements.map((data) => (
                  <li><p> + {data}</p></li>
                ))}
        </ul>

        <p>{project.urlDeployment}</p>
      </div>
    )
  }