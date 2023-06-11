'use client'
import { useState } from 'react'
import styles from './MenuButton.module.css'

export function MenuButton ({ emitClickEvent }:{emitClickEvent: any}) {
  const [showNav, setShowNav] = useState(false)

  function handleClick () {
    setShowNav(!showNav)
    emitClickEvent(showNav)
  }

  return (
    <button className={styles.menuIconBox} onClick={handleClick}>
      <div className={`${styles.line1} ${showNav ? styles.active1 : ''}`} />
      <div className={`${styles.line2} ${showNav ? styles.active2 : ''}`} />
    </button>
  )
}
