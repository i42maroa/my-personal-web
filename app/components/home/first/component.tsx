import styles from './First.module.css'

export default function FirstComponent () {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h2>HI, MY NAME IS ANTONIO</h2>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</h4>
        <button>SABER MAS</button>
      </div>
      <div className={styles.rightContainer}>
        <img src='https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000' alt='imagen' height={100} />
      </div>
    </section>
  )
}
