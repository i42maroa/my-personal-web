import { BACK_TECHNOLOGY, FRONT_TECHNOLOGY, MIXT_TECHNOLOGY } from '@/data/technologies.data'
import { Technology } from '../../shared/technology/Technology'
import styles from './Thecnologies.module.css'
import { LINKS, PAGES } from '@/data/links.data'

export default function ThecnologiesComponent () {
  return (
    <section id={LINKS[PAGES.ABOUT].sections[1]} className={styles.mainContainer}>

      <h2>Mis herramientas</h2>

      <h3>FRONT</h3>
      <div className={styles.technologyContainer}>
        {FRONT_TECHNOLOGY.map((data) => (
          <Technology key={data.name} technology={data} />
        ))}
      </div>

      <h3>BACKEND</h3>
      <div className={styles.technologyContainer}>
        {BACK_TECHNOLOGY.map((data) => (
          <Technology key={data.name} technology={data} />
        ))}
      </div>

      <h3>EXTRA</h3>
      <div className={styles.technologyContainer}>
        {MIXT_TECHNOLOGY.map((data) => (
          <Technology key={data.name} technology={data} />
        ))}
      </div>

    </section>
  )
}
