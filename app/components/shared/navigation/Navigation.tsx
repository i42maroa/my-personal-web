'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'
import { useEffect, useState } from 'react'
import { LINKS } from '@/data/links.data'
import { MenuButton } from '../menuButton/MenuButton'
import changeRootColors from '@/hook/changeColor'
import startAnimation from '@/hook/startAnimation'
import { showNavbarDependOfScroll } from '@/hook/scrollHandler'

const links = LINKS

export function Navigation () {
  const [showNav, setShowNav] = useState(false)
  const [lastScrol, setLastScroll] = useState(0)
  const [isScrollDown, setIsScrollingDown] = useState(false)

  function changeColorAndCloseNav (key:string) {
    changeRootColors(key)
    setShowNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setLastScroll(window.scrollY)
    setIsScrollingDown(window.scrollY > lastScrol)
    setShowNav(isScrollDown && showNav ? false : showNav)
  }

  return (
    <header className={`${styles.header} ${showNavbarDependOfScroll(isScrollDown, styles.scrollDown, styles.scrollUp)} ${startAnimation(showNav, styles.headerOpen)} `}>
      <div className={styles.navigation}>
        <div className={styles.navigationHeader}>
          <Link href='/' className={styles.logo}><img src='https://brandemia.org/sites/default/files/inline/images/volkswagen_logo-portada.jpg' alt='' width={40} /></Link>
          <div className={styles.displayButton}>
            <button onClick={() => setShowNav(!showNav)}><MenuButton stateValue={showNav} /></button>
          </div>
        </div>
        {showNav && !isScrollDown &&
          <nav className={styles.navigationContainer}>
            <ul className={styles.navigationList}>
              {links.map(({ label, route }) => (
                <li className={styles.navigationElement} key={route}>
                  <Link onClick={() => setShowNav(false)} href={route}>{label}</Link>
                </li>
              ))}
            </ul>
            <h4>SAY HELLO</h4>
            <ul className={styles.navigationList}>
              <li>hello@olaolu.dev</li>
              <li>hello@olaolu.dev</li>
            </ul>
            <ul>
              <li><button onClick={() => changeColorAndCloseNav('white')}>White</button></li>
              <li><button onClick={() => changeColorAndCloseNav('middle')}>Med</button></li>
              <li><button onClick={() => changeColorAndCloseNav('dark')}>Black</button></li>
            </ul>
          </nav>}
      </div>
    </header>
  )
}
