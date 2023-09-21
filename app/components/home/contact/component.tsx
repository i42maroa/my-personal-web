import { LINKS, PAGES } from '@/data/links.data'
import styles from './Contact.module.css'
import Image from 'next/image'
import { WorkCoffee } from '../../shared/svg/Work&Coffee/WorkCoffee'

export default function ContactComponent () {
  return (
    <section>
      <div id={LINKS[PAGES.HOME].sections[3]} className={styles.mainContainer}>
        <div className={styles.rightContainer}>
          <WorkCoffee />
        </div>
        <div className={styles.leftContainer}>
          <h2>Contactame</h2>
          <p>No hay nada que con un café no se pueda conseguir.</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <Image src='/images/linkedin.png' alt='linkedin' width={50} height={50} />
            </button>
            <button className={styles.button}>
              <Image src='/images/gmail.png' alt='linkedin' width={50} height={50} />
            </button>
            <button className={styles.button}>
              <Image src='/images/instagram.png' alt='linkedin' width={50} height={50} />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
