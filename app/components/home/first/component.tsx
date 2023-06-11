import Link from 'next/link'
import styles from './First.module.css'
import getRouteWithSection, { LINKS, PAGES } from '@/data/links.data'

export default function FirstComponent () {
  return (
    <section id={LINKS[PAGES.HOME].sections[0]} className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1>Hi, my name <br />is <b>Antonio</b> </h1>
        <p>I'm an independent creative developer from Abergavenny, South Wales.</p>
        <Link className={styles.button} href={getRouteWithSection(PAGES.ABOUT, 0)}>SABER MAS</Link>
      </div>
      <div className={styles.rightContainer}>
        <img src='https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000' alt='imagen' height={400} />
      </div>
    </section>
  )
}
