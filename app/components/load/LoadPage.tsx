import { LogoAnimateSvg } from '../shared/svg/Logo/LogoAnimate'
import styles from './LoadPage.module.css'

export default function LoadPage () {
  const colorStroke = {
    stroke: 'var(--white)'
  }
  return (
    <>
      <div className={styles.container}>

        <div className={styles.logoContainer}>
          <LogoAnimateSvg colorStroke={colorStroke} />
        </div>

      </div>
    </>
  )
}
