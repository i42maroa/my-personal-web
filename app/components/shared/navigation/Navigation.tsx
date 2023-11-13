'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'
import { useEffect, useState } from 'react'
import { MenuButton } from '../menuButton/MenuButton'
import startAnimation from '@/hook/startAnimation'
import { showNavbarDependOfScroll } from '@/hook/scrollHandler'
import { MenuNavigation } from './Menu'
import { LogoAnimateSvg } from '../svg/Logo/LogoAnimate'

export function Navigation () {
  const [showNav, setShowNav] = useState(false)
  const [lastScrol, setLastScroll] = useState(0)
  const [isScrollDown, setIsScrollingDown] = useState(false)

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

          <Link href='/' className={styles.logoContainer}>
            {/* <LogoSvg /> */}
            <LogoAnimateSvg />
          </Link>

          <div className={styles.displayButton}>
            <button className={styles.button} onClick={() => setShowNav(!showNav)}><MenuButton stateValue={showNav} /></button>
          </div>
        </div>

        {showNav && !isScrollDown &&
          <MenuNavigation />}
      </div>
    </header>
  )
}
