'use client'
import Link from 'next/link'
import styles from './Menu.module.css'
import { CoffeeMachine } from '../svg/CoffeeMachine/CoffeeMachine'
import { Dispatch, SetStateAction, useState } from 'react'
import { LeftArrowSvg } from '../svg/LeftArrow/LeftArrow'

export function MenuNavigation ({ setShowNav }:{setShowNav:Dispatch<SetStateAction<boolean>>}) {
  const [showCoffeeMachine, setShowCoffeeMachine] = useState(false)

  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>

        <ul className={`${styles.listContainer} ${showCoffeeMachine ? styles.disappear : styles.appear}`}>
          <h3 className={styles.title}>¿Qué quieres saber?</h3>
          <li>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#quality'>Qué te puedo aportar</Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#experience'>Mi experiencia</Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#technology'>Mis herramientas</Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#projects'>Mis proyectos</Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#contact'>Cómo contactarme</Link>
          </li>
          <h3 className={styles.title}>¿Quieres un café?</h3>
          <button className={styles.buttonShowCoffee} onClick={() => setShowCoffeeMachine(true)}>Yo te invito</button>
        </ul>

        <div className={`${styles.machineContainer} ${showCoffeeMachine ? styles.appear : styles.disappear}`}>
          <button className={styles.backButton} onClick={() => setShowCoffeeMachine(false)}><LeftArrowSvg /></button>
          <h3 className={styles.title} />
          <CoffeeMachine setShowNav={setShowNav} setShowCoffeMachine={setShowCoffeeMachine} />
        </div>
      </div>
    </nav>
  )
}
