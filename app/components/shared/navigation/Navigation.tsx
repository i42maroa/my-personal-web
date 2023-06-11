'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'
import { useState } from 'react'
import { LINKS } from '@/data/links.data'
import { MenuButton } from '../menuButton/MenuButton'

const links = LINKS

export function Navigation () {
  const [showNav, setShowNav] = useState(false)

  function parentFn (childData:boolean) {
    setShowNav(!childData)
  }

  return (
    <header className={`${styles.header} ${showNav ? styles.headerOpen : ''}`}>
      <div className={styles.navigation}>
        <div className={styles.navigationHeader}>
          <Link href='/' className={styles.logo}><img src='https://brandemia.org/sites/default/files/inline/images/volkswagen_logo-portada.jpg' alt='' width={40} /></Link>
          <div className={styles.displayButton}>
            <MenuButton emitClickEvent={parentFn} />
          </div>
        </div>
        {showNav &&
          <nav className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
              {links.map(({ label, route }) => (
                <li className={styles.navigationElement} key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
            <h4>SAY HELLO</h4>
            <ul className={styles.navigationList}>
              <li>hello@olaolu.dev</li>
              <li>hello@olaolu.dev</li>
            </ul>
          </nav>}

      </div>
    </header>
  )
}
