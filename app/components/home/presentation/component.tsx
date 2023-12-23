import styles from './Presentation.module.css'
import { LINKS, PAGES } from '@/data/links.data'
import { FaceAnimate } from '../../shared/svg/Face/FaceAnimate'

export default function PresentationComponent ({ fill }:{fill:boolean}) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={`${styles.fillColor} ${fill ? styles.fill : ''}`} />
      <section id={LINKS[PAGES.HOME].sections[0]} className={styles.sectionContainer}>

        <div className={styles.avatarBg}>
          <FaceAnimate />
        </div>
        <header className={styles.header}>
          <div className={styles.pageHeaderInr}>
            <div className={styles.pageContent}>
              <h1><span className={styles.title}>Hola, mi nombre es <b>Antonio</b> </span></h1>
              <p>Soy un <b>desarrollador web creativo</b> y sobre todo un apasionado del <b>café</b>.</p>
            </div>
          </div>
        </header>

      </section>
    </div>
  )
}
