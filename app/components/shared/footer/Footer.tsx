import Link from 'next/link'
import styles from './Footer.module.css'

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

          <div className={styles.sumupContainer}>
            {/* <p>Sigues con dudas?</p> */}
            <button className={styles.button}>Te lo resumo</button>
          </div>

        </div>
        <div className={styles.rightContainer}>
          <div className={styles.coffeeMachineContainer} />

        </div>
      </div>
      <hr />
      <p>Antonio Marín Rodríguez 2023</p>
    </footer>
  )
}
