import { LINKS, PAGES } from '@/data/links.data'
import styles from './Contact.module.css'
import { WorkCoffee } from '../../shared/svg/Work&Coffee/WorkCoffee'
import { LinkedinSvg } from '../../shared/svg/Buttons/Linkedin'
import { GmailSvg } from '../../shared/svg/Buttons/Gmail'
import { InstagramSvg } from '../../shared/svg/Buttons/Instagram'
import Link from 'next/link'

export default function ContactComponent () {
  return (
    <section>
      <div id={LINKS[PAGES.HOME].sections[3]} className={styles.mainContainer}>

        <div className={styles.avatarContainer}>
          <WorkCoffee />
        </div>
        <div className={styles.textContainer}>
          <h2>Contactame</h2>
          <div className={styles.pageContent}>
            <p className={styles.text}>No hay nada que con un café no se pueda conseguir.</p>
            <div className={styles.buttonContainer}>
              <Link href='https://www.linkedin.com/in/antonio-mar%C3%ADn-rodr%C3%ADguez-07681b1bb/' className={styles.button}>
                <LinkedinSvg />
              </Link>
              <Link href='/#contact' className={styles.button}>
                <GmailSvg />
              </Link>
              <Link href='/#contact' className={styles.button}>
                <InstagramSvg />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
