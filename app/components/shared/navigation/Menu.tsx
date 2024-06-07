'use client'
import Link from 'next/link'
import styles from './Menu.module.css'
import { CoffeeMachine } from '../svg/CoffeeMachine/CoffeeMachine'
import { Dispatch, SetStateAction, useState } from 'react'
import { LeftArrowSvg } from '../svg/LeftArrow/LeftArrow'
import { CVLogoSVG } from '../svg/CV/CVLogo'
import { CoffeeSvg } from '../svg/CoffeeMachine/coffes/Coffee/Coffee'

export function MenuNavigation ({ setShowNav }:{setShowNav:Dispatch<SetStateAction<boolean>>}) {
  const [showCoffeeMachine, setShowCoffeeMachine] = useState(false)

  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>

        <ul className={`${styles.listContainer} ${showCoffeeMachine ? styles.disappear : styles.appear}`}>
          <h3 className={styles.title}>¿Qué quieres saber?</h3>
          <li className={styles.navbarOption}>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#quality'>Qué te puedo aportar</Link>
          </li>
          <li className={styles.navbarOption}>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#experience'>Mi experiencia</Link>
          </li>
          <li className={styles.navbarOption}>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#technology'>Mis herramientas</Link>
          </li>
          <li className={styles.navbarOption}>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#projects'>Mis proyectos</Link>
          </li>
          <li className={styles.navbarOption}>
            <Link onClick={() => setShowNav(false)} className={styles.navigationElement} href='/#contact'>Cómo contactarme</Link>
          </li>
          <li className={styles.navbarButton}>
            <button className={styles.buttonShowCoffee}>
              <span className={styles.buttonShowCoffeeLogo}><CVLogoSVG /></span>
              <a href='/pdf/CV.pdf' target='_blank' rel='noopener noreferrer' download>Te lo resumo</a>
            </button>
          </li>
          <li className={styles.navbarButton}>
            <button className={styles.buttonShowCoffee} onClick={() => setShowCoffeeMachine(true)}>
              <span className={styles.buttonShowCoffeeLogoCoffee}><CoffeeSvg panel /></span>
              <span className={styles.buttonShowCoffeeText}> Te invito</span>
            </button>
          </li>
        </ul>

        <div className={`${styles.machineContainer} ${showCoffeeMachine ? styles.appearMachine : styles.disappearMachine}`}>
          <button className={styles.backButton} onClick={() => setShowCoffeeMachine(false)}><LeftArrowSvg /></button>
          <h3 className={styles.title} />
          <CoffeeMachine setShowNav={setShowNav} setShowCoffeMachine={setShowCoffeeMachine} />
        </div>
      </div>
    </nav>
  )
}
