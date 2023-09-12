import Link from 'next/link'
import styles from './Presentation.module.css'
import getRouteWithSection, { LINKS, PAGES } from '@/data/links.data'
import { FaceFront } from '../../shared/svg/Face/face'

export default function PresentationComponent () {
  return (
    <section id={LINKS[PAGES.HOME].sections[0]} className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1>Hi, my name <br />is <b>Antonio</b> </h1>
        <p>I'm an independent creative developer from Abergavenny, South Wales.</p>
        <Link className={styles.button} href={getRouteWithSection(PAGES.ABOUT, 0)}>SABER MAS</Link>
      </div>
      <div className={styles.rightContainer}>
        <FaceFront />
      </div>
    </section>
  )
}
