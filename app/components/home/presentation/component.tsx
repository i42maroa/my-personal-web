import styles from './Presentation.module.css'
import { LINKS, PAGES } from '@/data/links.data'
import { FaceFront } from '../../shared/svg/Face/face'
import { DATA_INFO } from '@/data/info.data'

export default function PresentationComponent () {

  return (
    <section id={LINKS[PAGES.HOME].sections[0]} className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 ><span className={styles.title}>Hola, soy  <b>Antonio</b> </span></h1>
        <p>{DATA_INFO[0]}</p>
      </div>

      <div className={styles.rightContainer}>

         <FaceFront />
 
      </div>
    </section>
  )
}
