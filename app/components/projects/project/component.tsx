import { LINKS, PAGES } from "@/data/links.data";
import styles from './Project.module.css'
import { PROJECTS_DATA } from "@/data/projects.data";
import { ProjectDescriptionComponent } from "../../shared/project/ProjectDescription";


export default function ProjectsComponent () {

    return (
      <section id={LINKS[PAGES.ABOUT].sections[0]} className={styles.mainContainer}>
        {PROJECTS_DATA.map((project) => 
                <ProjectDescriptionComponent  key={project.title} project={project}/> )}
      </section>
    )
  }