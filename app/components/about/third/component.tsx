import { LINKS, PAGES } from '@/data/links.data'
import styles from './Third.module.css'

export default function ThirdComponent () {
  return (
    <section id={LINKS[PAGES.ABOUT].sections[2]} className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h3>Where I work</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo!</li>
        </ul>
      </div>
    </section>
  )
}
