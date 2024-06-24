import { CVLogoSVG } from '../svg/CV/CVLogo'
import styles from './ButtonCV.module.css'

export function ButtonCV () {
  return (
    <button className={styles.buttonShowCoffee}>
      <span className={styles.buttonShowCoffeeLogo}><CVLogoSVG /></span>
      <a href='/pdf/CV.pdf' target='_blank' rel='noopener noreferrer' download>Te lo resumo</a>
    </button>
  )
}
