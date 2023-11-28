'use client'
import { LINKS, PAGES } from '@/data/links.data'
import styles from './Project.module.css'
import { PROJECTS_DATA } from '@/data/projects.data'
import { ProjectCardComponent } from '../../shared/project/ProjectCard'

export default function ProjectsComponent () {
  return (
    <section id={LINKS[PAGES.PROJECTS].sections[0]} className={styles.mainContainer}>
      <h2>Mis proyectos</h2>

      <div className={styles.projectsContainer}>
        {PROJECTS_DATA.map((project) =>
          <div key={project.title} className={styles.project}>
            <ProjectCardComponent project={project} />
          </div>)}
      </div>

    </section>
  )
}
