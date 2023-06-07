import styles from './Second.module.css'

export default function SecondComponent () {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h2>DESIGN</h2>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</h4>
      </div>
      <div className={styles.rightContainer}>
        <h2>ENGINEERING</h2>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</h4>
      </div>
    </section>
  )
}
