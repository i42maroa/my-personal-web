'use client'
import { LINKS, PAGES } from '@/data/links.data'
import styles from './Project.module.css'
import { PROJECTS_DATA } from '@/data/projects.data'
import { ProjectCardComponent } from '../shared/project/ProjectCard'
import { useRouter } from 'next/navigation'

export default function ProjectsComponent () {
  const router = useRouter()
  return (
    <section id={LINKS[PAGES.PROJECTS].sections[0]} className={styles.mainContainer}>
      <h2>Mis proyectos</h2>

      <div className={styles.projectsContainer}>
        {PROJECTS_DATA.map((project) =>
          <button key={project.title} className={styles.button} onClick={() => router.push('/projects/0')}>
            <ProjectCardComponent project={project} />
          </button>)}
      </div>

    </section>
  )
}
