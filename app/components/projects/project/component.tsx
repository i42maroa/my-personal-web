import { LINKS, PAGES } from '@/data/links.data'
import styles from './Project.module.css'
import { PROJECTS_DATA } from '@/data/projects.data'
import { ProjectCardComponent } from '../../shared/project/ProjectCard'
import { ProjectDescriptionComponent } from '../../shared/project/ProjectDescription'

export default function ProjectsComponent () {
  return (
    <section id={LINKS[PAGES.ABOUT].sections[0]} className={styles.mainContainer}>
      {PROJECTS_DATA.map((project) =>
        <ProjectCardComponent key={project.title} project={project} />)}

      <p>.</p>
      <ProjectDescriptionComponent key={PROJECTS_DATA[0].title} project={PROJECTS_DATA[0]} />
    </section>
  )
}
