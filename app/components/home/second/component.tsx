import { LINKS, PAGES } from '@/data/links.data'
import styles from './Second.module.css'

export default function SecondComponent () {
  return (
    <section id={LINKS[PAGES.HOME].sections[1]} className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h2>DESIGN</h2>
        <p>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
      </div>
      <div />
      <div />
      <div className={styles.textContainer}>
        <h2>ENGINEERING</h2>
        <p>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
      </div>

    </section>
  )
}
