import { LINKS, PAGES } from '@/data/links.data'
import styles from './Description.module.css'
import { EngranajeSvg } from '../../shared/svg/Engranaje/Engranaje'
import { DesktopSvg } from '../../shared/svg/Desktop/Desktop'

export default function DescriptionComponent () {
  return (
    <section id={LINKS[PAGES.HOME].sections[1]} className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h2>Diseño</h2>
        <p>Propongo soluciones llamativas siempre garantizando una buena experiencia de usuario y respaldadas por un enfoque profesional.</p>
      </div>

      <div className={styles.desktopContainer}>
        <DesktopSvg />
      </div>

      <div className={styles.engranajeContainer}>
        <EngranajeSvg />
      </div>

      <div className={styles.textContainer}>
        <h2>Ingeniería</h2>
        <p>Todos mis proyectos garantizan un buen desempeño y una buena optimización. Un bonito diseño no es nada sin una buena maquinaria detrás.</p>
      </div>

    </section>
  )
}
