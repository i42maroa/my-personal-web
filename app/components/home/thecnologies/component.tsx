import { BACK_TECHNOLOGY, FRONT_TECHNOLOGY, MIXT_TECHNOLOGY } from '@/data/technologies.data'
import { Technology } from '../../shared/cards/technology/Technology'
import styles from './Thecnologies.module.css'

export default function ThecnologiesComponent () {
  return (
    <section id='technology' className={styles.mainContainer}>
      <h2>Mis herramientas</h2>

      <div className={styles.technologiesGroupContainer}>
        <div className={styles.technologySingleContainer}>
          <h3>FRONTEND</h3>
          <div className={styles.technologyContainer}>
            {FRONT_TECHNOLOGY.map((data) => (
              <Technology key={data.name} technology={data} />
            ))}
          </div>
        </div>

        <div className={styles.technologySingleContainer}>
          <h3>BACKEND</h3>
          <div className={styles.technologyContainer}>
            {BACK_TECHNOLOGY.map((data) => (
              <Technology key={data.name} technology={data} />
            ))}
          </div>
        </div>

        <div className={styles.technologySingleContainer}>
          <h3>DISEÑO</h3>
          <div className={styles.technologyContainer}>
            {MIXT_TECHNOLOGY.map((data) => (
              <Technology key={data.name} technology={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
