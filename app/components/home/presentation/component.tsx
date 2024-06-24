import styles from './Presentation.module.css'
import { LINKS, PAGES } from '@/data/links.data'
import { FaceAnimate } from '../../shared/svg/Face/FaceAnimate'
import { useContext } from 'react'
import { StatusColorContext } from '@/app/StatusContextProvider'
import Link from 'next/link'
import { LinkedinSvg } from '../../shared/svg/Buttons/Linkedin'
import { InstagramSvg } from '../../shared/svg/Buttons/Instagram'

export default function PresentationComponent () {
  const context = useContext(StatusColorContext)

  return (
    <div className={styles.sectionWrapper}>
      <div className={`${styles.fillColor} ${context.state.show ? styles.fill : styles.unfill}`} />
      <section id={LINKS[PAGES.HOME].sections[0]} className={styles.sectionContainer}>
        <div className={styles.avatarBg}>
          <FaceAnimate />
        </div>
        <header className={styles.header}>
          <div className={styles.pageHeaderInr}>
            <div className={styles.pageContent}>
              <h1><span className={styles.title}>Hola, mi nombre es <b>Antonio</b> </span></h1>
              <p>Soy un <b>desarrollador web creativo</b> y sobre todo un apasionado del <b>café</b>.</p>
              <div className={styles.socialMediaContainer}>
                <Link href='https://www.linkedin.com/in/antonio-mar%C3%ADn-rodr%C3%ADguez-07681b1bb/' className={styles.socialMedia}>
                  <LinkedinSvg isPresentation />
                </Link>
                <Link href='https://www.instagram.com/antonito_marin/' className={styles.socialMedia}>
                  <InstagramSvg isPresentation />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </section>
    </div>
  )
}
