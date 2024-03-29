import Link from 'next/link'
import styles from './Footer.module.css'
import { LinkedinSvg } from '../svg/Buttons/Linkedin'
import { InstagramSvg } from '../svg/Buttons/Instagram'

export function Footer () {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.leftContainer}>
          <h3>¿Sigues con dudas?</h3>

          <ul className={styles.listContainer}>
            <li>
              <Link className={styles.navigationElement} href='/#quality'>Qué te puedo aportar</Link>
            </li>
            <li>
              <Link className={styles.navigationElement} href='/#experience'>Mi experiencia</Link>
            </li>
            <li>
              <Link className={styles.navigationElement} href='/#technology'>Mis herramientas</Link>
            </li>
            <li>
              <Link className={styles.navigationElement} href='/#projects'>Mis proyectos</Link>
            </li>
            <li>
              <Link className={styles.navigationElement} href='/#contact'>Cómo contactarme</Link>
            </li>
            <li>
              <button className={styles.buttonShowCoffee}>
                <a href='/pdf/CV.pdf' target='_blank' rel='noopener noreferrer' download>Te lo resumo</a>
              </button>
            </li>
          </ul>

        </div>
      </div>
      <hr />

      <div className={styles.bottomContainer}>

        <p>Antonio Marín Rodríguez 2023 &#169;</p>

        <div className={styles.socialMediaContainer}>
          <Link href='https://www.linkedin.com/in/antonio-mar%C3%ADn-rodr%C3%ADguez-07681b1bb/' className={styles.socialMedia}>
            <LinkedinSvg />
          </Link>
          <Link href='https://www.instagram.com/antonito_marin/' className={styles.socialMedia}>
            <InstagramSvg />
          </Link>
        </div>
      </div>
    </footer>
  )
}
