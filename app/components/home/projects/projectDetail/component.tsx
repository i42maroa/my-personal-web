import { LINKS, PAGES } from '@/data/links.data'
import styles from './Project.module.css'
import { PROJECTS_DATA } from '@/data/projects.data'
import { ProjectDescriptionComponent } from '../../../shared/project/ProjectDescription'

export default function ProjectDetailComponent () {
  return (
    <section id={LINKS[PAGES.ABOUT].sections[0]} className={styles.mainContainer}>
      <ProjectDescriptionComponent key={PROJECTS_DATA[0].title} project={PROJECTS_DATA[0]} />
    </section>
  )
}
