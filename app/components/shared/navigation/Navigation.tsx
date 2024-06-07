'use client'
import Link from 'next/link'
import styles from './Navigation.module.css'
import { useContext, useEffect, useState } from 'react'
import { MenuButton } from '../menuButton/MenuButton'
import { showNavbarDependOfScroll } from '@/hook/scrollHandler'
import { MenuNavigation } from './Menu'
import { LogoAnimateSvg } from '../svg/Logo/LogoAnimate'
import { StatusColorContext } from '@/app/StatusContextProvider'
import changeContextState from '@/hook/changeContext'

export function Navigation () {
  const [showNav, setShowNav] = useState(false)
  const [lastScrol, setLastScroll] = useState(0)
  const [isScrollDown, setIsScrollingDown] = useState(false)
  const context = useContext(StatusColorContext)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setLastScroll(window.scrollY)
    setIsScrollingDown(window.scrollY > lastScrol)
    setShowNav(showNav ? false : showNav)
  }

  const pressOpenMenuButton = () => {
    setShowNav(!showNav)
    const newContext = changeContextState(context.state, { num: context.state.num, show: false })
    context.dispatch(newContext)
  }

  return (
    <header className={`${styles.header} ${showNavbarDependOfScroll(isScrollDown, styles.scrollDown, styles.scrollUp)} `}>
      <div className={styles.navigation}>
        <div className={styles.navigationHeader}>
          <Link href='/#frontal' className={styles.logoContainer}>
            <LogoAnimateSvg isFrontal={false} />
          </Link>
          <div className={styles.displayButton}>
            <button className={styles.button} onClick={() => pressOpenMenuButton()}><MenuButton stateValue={showNav} /></button>
          </div>
        </div>
        <div className={`${styles.menu} ${showNav ? '' : styles.disappear}`}>
          <MenuNavigation setShowNav={setShowNav} />
        </div>
      </div>
    </header>
  )
}
