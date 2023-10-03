'use client'
import Link from 'next/link'
import { Toggle } from '../toggle/Toggle'
import styles from './Menu.module.css'

export function MenuNavigation () {
  return (
    <nav className={styles.navigationContainer}>
      <h3>¿Qué quieres saber?</h3>

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

      <div className={styles.toggleContainer}>
        <h4>¿Cuánto café le echas a la vida?</h4>
        <Toggle />
      </div>
    </nav>
  )
}
