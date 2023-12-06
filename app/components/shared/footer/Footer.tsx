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
              <Link className={styles.navigationElement} href='/#experience'>Mi recorrido</Link>
            </li>
            <li>
              <Link className={styles.navigationElement} href='/#technology'>Mis herramientas</Link>
            </li>
            <li>
              <Link className={styles.navigationElement} href='/#projects'>Qué he hecho</Link>
            </li>
            <li>
              <Link className={styles.navigationElement} href='/#contact'>Cómo contactarme</Link>
            </li>
          </ul>

          {/* <div className={styles.sumupContainer}>
            <button className={styles.button}>Te lo resumo</button>
          </div> */}

        </div>
      </div>
      <hr />

      <div className={styles.bottomContainer}>

        <p>Antonio Marín Rodríguez 2023 &#169;</p>

        <div className={styles.socialMediaContainer}>
          <Link href='https://www.linkedin.com/in/antonio-mar%C3%ADn-rodr%C3%ADguez-07681b1bb/' className={styles.socialMedia}>
            <LinkedinSvg />
          </Link>
          <Link href='/#contact' className={styles.socialMedia}>
            <InstagramSvg />
          </Link>
        </div>
      </div>
    </footer>
  )
}
