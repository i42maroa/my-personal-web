import getRouteWithSection, { LINKS, PAGES } from '@/data/links.data'
import styles from './Third.module.css'
import Link from 'next/link'

export default function ThirdComponent () {
  return (
    <section id={LINKS[PAGES.HOME].sections[2]} className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h3>I BUILD & <br />DESIGN STTUFF</h3>
        <p>Open source  <br />projects, web apps  <br />and experimentals.
        </p>
        <Link href={getRouteWithSection(PAGES.ABOUT, 1)}>MORE</Link>
      </div>
      <div className={styles.rightContainer}>
        <h3>I LIKE DO <br /> SOMETHINGS</h3>
        <p>About design,<br /> frontend dev, <br />learning and life.
        </p>
        <Link href={getRouteWithSection(PAGES.ABOUT, 2)}>MORE</Link>
      </div>
    </section>
  )
}
