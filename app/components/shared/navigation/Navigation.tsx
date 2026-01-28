'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'
import { useEffect, useState } from 'react'
import { ButtonHamburger } from '../buttons/hamburger/ButtonHamburger'
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
    setShowNav(showNav ? false : showNav)
  }

  return (
    <>
      <header className={`${styles.header} ${showNavbarDependOfScroll(isScrollDown, styles.scrollDown, styles.scrollUp)} `}>
        <Link href='/#frontal' className={styles.logoContainer}>
          <LogoAnimateSvg/>
        </Link>
        <ButtonHamburger setShowNav={setShowNav} stateValue={showNav} />
      </header>
      <div className={`${styles.menu} ${showNav ? '' : styles.disappear}`}>
        <MenuNavigation setShowNav={setShowNav} />
      </div>
    </>
  )
}
