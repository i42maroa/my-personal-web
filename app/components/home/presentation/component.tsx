import styles from './Presentation.module.css'
import { FaceAnimate } from '../../shared/svg/Face/FaceAnimate'
import Link from 'next/link'
import { LinkedinSvg } from '../../shared/svg/Buttons/Linkedin'
import { InstagramSvg } from '../../shared/svg/Buttons/Instagram'

export default function PresentationComponent () {
  return (
      <section id='frontal' className={styles.sectionContainer}>
        <FaceAnimate />
        <header className={styles.header}>
          <h1 className={styles.title}>Hola, mi nombre es <b>Antonio</b></h1>
          <p className={styles.text}>¿Tienes una idea? Yo te la creo.</p>
          <div className={styles.socialMediaContainer}>
            <Link href='https://www.linkedin.com/in/antonio-mar%C3%ADn-rodr%C3%ADguez-07681b1bb/' className={styles.socialMedia}>
              <LinkedinSvg isPresentation />
            </Link>
            <Link href='https://www.instagram.com/antonito_marin/' className={styles.socialMedia}>
              <InstagramSvg isPresentation />
            </Link>
          </div>
        </header>
      </section>
  )
}
