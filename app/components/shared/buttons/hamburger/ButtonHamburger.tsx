import startAnimation from '@/hook/startAnimation'
import styles from './ButtonHamburger.module.css'
import { Dispatch, SetStateAction } from 'react'

export function ButtonHamburger ({ stateValue, setShowNav } : {stateValue:boolean, setShowNav:Dispatch<SetStateAction<boolean>>}) {
  return (
    <button
        className={`${styles.hamburgerButton} ${startAnimation(stateValue, styles.open)}`} onClick={() => setShowNav(!stateValue)} aria-label="Abrir menú">
        <span />
        <span />
        <span />
    </button>
  )
}
