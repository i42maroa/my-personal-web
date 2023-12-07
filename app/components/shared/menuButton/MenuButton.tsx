import startAnimation from '@/hook/startAnimation'
import styles from './MenuButton.module.css'

export function MenuButton ({ stateValue } : {stateValue:boolean}) {
  return (
    <div className={styles.menuIconBox}>
      <div className={`${styles.line1} ${startAnimation(stateValue, styles.active1)}`} />
      <div className={`${styles.line2} ${startAnimation(stateValue, styles.active2)}`} />
    </div>
  )
}
