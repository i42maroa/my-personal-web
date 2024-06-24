import Link from 'next/link'
import styles from './Footer.module.css'
import { LinkedinSvg } from '../svg/Buttons/Linkedin'
import { InstagramSvg } from '../svg/Buttons/Instagram'
import { ButtonCV } from '../buttonCV/ButtonCV'

export function Footer () {
  return (
    <footer className={styles.footerContainer}>
      <h3>¿Sigues con dudas?</h3>
      <ul className={styles.listContainer}>
        <li className={styles.navigationElement}>
          <Link className={styles.navigationElementText} href='/#quality'>Qué te puedo aportar</Link>
        </li>
        <li className={styles.navigationElement}>
          <Link className={styles.navigationElementText} href='/#experience'>Mi experiencia</Link>
        </li>
        <li className={styles.navigationElement}>
          <Link className={styles.navigationElementText} href='/#projects'>Mis proyectos</Link>
        </li>
        <li className={styles.navigationElement}>
          <Link className={styles.navigationElementText} href='/#technology'>Mis herramientas</Link>
        </li>
        <li className={styles.navigationElement}>
          <Link className={styles.navigationElementText} href='/#contact'>Cómo contactarme</Link>
        </li>
        <li className={styles.navbarButton}>
          <ButtonCV />
        </li>
      </ul>

      <hr />
      <div className={styles.bottomContainer}>
        <p>Antonio Marín Rodríguez</p>
        <div className={styles.socialMediaContainer}>
          <Link href='https://www.linkedin.com/in/antonio-mar%C3%ADn-rodr%C3%ADguez-07681b1bb/' className={styles.socialMedia}>
            <LinkedinSvg isPresentation={false} />
          </Link>
          <Link href='https://www.instagram.com/antonito_marin/' className={styles.socialMedia}>
            <InstagramSvg isPresentation={false} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
