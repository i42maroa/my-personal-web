import styles from './Third.module.css'

export default function ThirdComponent () {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h3>I BUILD & DESIGN STTUFF</h3>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</h4>
        <button>MORE</button>
      </div>
      <div className={styles.rightContainer}>
        <h2>I LIKE DO SOME</h2>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</h4>
        <button>MORE</button>
      </div>
    </section>
  )
}
