import { LINKS, PAGES } from '@/data/links.data'
import styles from './Description.module.css'
import { EngranajeSvg } from '../../shared/svg/Engranaje/engranaje'

export default function DescriptionComponent () {
  return (
    <section id={LINKS[PAGES.HOME].sections[1]} className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h2>Diseño</h2>
        <p>Propongo soluciones llamativas siempre garantizando una buena experiencia de usuario. Lo que no entra por los ojos no funciona.</p>
      </div>
      <div />
      <div />
      <div className={styles.textContainer}>
        <h2>Ingeniería</h2>
        <p>Un bonito diseño no es nada sin una buena maquinaria detrás. Todos los proyectos garantizan una buena optimización.</p>
      </div>

      <div className={styles.engranajeContainer}>
        <EngranajeSvg />
      </div>

    </section>
  )
}
