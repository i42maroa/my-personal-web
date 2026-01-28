'use client'

import styles from './Project.module.css'
import { PROJECTS_DATA } from '@/data/projects.data'
import { ProjectCardComponent } from '../../shared/project/ProjectCard'

export default function ProjectsComponent () {
  return (
    <section id="projects" className={styles.mainContainer}>
      <h2>Mis proyectos personales</h2>

      <div className={styles.projectsContainer}>
        {PROJECTS_DATA.map((project) =>
          <div key={project.title} className={styles.project}>
            <ProjectCardComponent project={project} />
          </div>)}
      </div>
    </section>
  )
}
