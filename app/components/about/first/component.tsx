import { LINKS, PAGES } from '@/data/links.data'
import styles from './First.module.css'

export default function FirstComponent () {
  return (
    <section id={LINKS[PAGES.ABOUT].sections[0]} className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1>Who is Antonio?</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</p>
        <button>Nuevo dato</button>
      </div>
      <div className={styles.rightContainer}>
        {/* <img src='https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000' alt='imagen' height={400} /> */}
      </div>
    </section>
  )
}
