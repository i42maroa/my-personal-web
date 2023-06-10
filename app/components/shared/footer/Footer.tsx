import Link from 'next/link'
import styles from './Footer.module.css'
import { LINKS } from '@/data/links.data'

const links = LINKS

export function Footer () {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.leftContainer}>
          <h3>SAY HELLO</h3>
          <ul>
            <li>asfdasd@gmail.com</li>
            <li>asfdasd@gmail.com</li>
          </ul>
        </div>
        <div className={styles.rightContainer}>
          <ul>
            {links.map(({ label, route }) => (
              <li className={styles.navigationElement} key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <p>Antonio Marín Rodríguez 2023</p>
    </footer>
  )
}
