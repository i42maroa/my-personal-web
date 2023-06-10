'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'
import { useState } from 'react'
import { LINKS } from '@/data/links.data'

const links = LINKS

export function Navigation () {
  const [showNav, setShowNav] = useState(false)

  return (
    <header className={styles.header}>
      {!showNav &&
        <nav className={styles.navigationClosed}>
          <Link href='/' className={styles.logo}><img src='https://brandemia.org/sites/default/files/inline/images/volkswagen_logo-portada.jpg' alt='' width={40} /></Link>
          <div className={styles.displayButton}>
            <button onClick={() => setShowNav(true)}>_</button>
          </div>
        </nav>}
      {showNav &&
        <nav className={styles.navigationOpen}>
          <div className={styles.undisplayButton}>
            <button onClick={() => setShowNav(false)}>X</button>
          </div>
          <ul className={styles.navigation}>
            {links.map(({ label, route }) => (
              <li className={styles.navigationElement} key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
          <h4>SAY HELLO</h4>
          <ul className={styles.navigation}>
            <li>hello@olaolu.dev</li>
            <li>hello@olaolu.dev</li>
          </ul>
        </nav>}
    </header>
  )
}
