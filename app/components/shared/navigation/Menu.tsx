'use client'
import Link from 'next/link'
import styles from './Menu.module.css'
import { CoffeeMachine } from '../svg/CoffeeMachine/CoffeeMachine'

export function MenuNavigation () {
  return (
    <nav className={styles.navigationContainer}>

      <ul className={styles.listContainer}>
        <h3 className={styles.title}>¿Qué quieres saber?</h3>
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

      <div className={styles.machineContainer}>
        <CoffeeMachine />
      </div>
    </nav>
  )
}
