import { LogoAnimateSvg } from '../shared/svg/Logo/LogoAnimate'
import styles from './LoadPage.module.css'

export default function LoadPage () {
  const colorStroke = {
    stroke: 'var(--white)'
  }
  return (
    <>
      {/* TODO: When change the color show the load page again */}
      <div className={`${styles.container} ${styles.show}`}>
        <div className={styles.logoContainer}>
          <LogoAnimateSvg colorStroke={colorStroke} isFrontal />
        </div>
      </div>
    </>
  )
}
