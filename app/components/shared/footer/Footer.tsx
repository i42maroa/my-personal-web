import styles from './Footer.module.css'

export function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.leftContainer}>
          <h2>SAY HELLO</h2>
          <ul>
            <li>asfdasd@gmail.com</li>
            <li>asfdasd@gmail.com</li>
          </ul>
        </div>
        <div className={styles.rightContainer}>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</h4>
        </div>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, voluptatum? Recusandae, molestias sit minima id porro qui nisi placeat rerum voluptatibus reiciendis ab vitae nesciunt voluptas animi tenetur molestiae similique.</p>
    </footer>
  )
}
