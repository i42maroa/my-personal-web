'use client'

import { LINKS, PAGES } from '@/data/links.data'
import styles from './Contact.module.css'
import { WorkCoffee } from '../../shared/svg/Work&Coffee/WorkCoffee'
import ContactForm from '../../shared/form/ContactForm'

export default function ContactComponent () {
  return (
    <section>
      <div id={LINKS[PAGES.HOME].sections[3]} className={styles.mainContainer}>
        <div className={styles.avatarContainer}>
          <WorkCoffee />
        </div>
        <div className={styles.textContainer}>
          <h2>Contáctame</h2>
          <div className={styles.pageContent}>
            <p className={styles.text}>No hay nada que con un café no se pueda conseguir.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
