import styles from './Presentation.module.css'
import { LINKS, PAGES } from '@/data/links.data'
import { DATA_INFO } from '@/data/info.data'
import { FaceAnimate } from '../../shared/svg/Face/FaceAnimate'

export default function PresentationComponent () {
  return (
    <section id={LINKS[PAGES.HOME].sections[0]} className={styles.sectionContainer}>
      <div className={styles.avatarBg}>
        <FaceAnimate />
      </div>
      <header className={styles.header}>
        <div className={styles.pageHeaderInr}>
          <div className={styles.pageContent}>
            <h1><span className={styles.title}>Hola, soy  <b>Antonio</b> </span></h1>
            <p>{DATA_INFO[0]}</p>
          </div>
        </div>
      </header>
    </section>
  )
}
