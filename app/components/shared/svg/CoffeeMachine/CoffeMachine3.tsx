import styles from './CoffeeMachine3.module.css'

export function CoffeeMachine3 () {
  return (
    <div className={styles.container}>
      <div className={styles.coffee_header}>
        <div className={`${styles.coffee_header__buttons} ${styles.coffee_header__button_one}`} />
        <div className={`${styles.coffee_header__buttons} ${styles.coffee_header__button_two}`} />
        <div className={styles.coffee_header__display} />
        <div className={styles.coffee_header__details} />
      </div>
      <div className={styles.coffee_medium}>
        <div className={styles.coffe_medium__exit} />
        <div className={styles.coffee_medium__arm} />
        <div className={styles.coffee_medium__liquid} />
        <div className={`${styles.coffee_medium__smoke} ${styles.coffee_medium__smoke_one}`} />
        <div className={`${styles.coffee_medium__smoke} ${styles.coffee_medium__smoke_two}`} />
        <div className={`${styles.coffee_medium__smoke} ${styles.coffee_medium__smoke_three}`} />
        <div className={`${styles.coffee_medium__smoke} ${styles.coffee_medium__smoke_for}`} />
        <div className={styles.coffee_medium__cup} />
      </div>
      <div className={styles.coffee_footer} />
    </div>
  )
}
