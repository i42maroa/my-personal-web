'use client'
import { LINKS, PAGES } from '@/data/links.data'
import styles from './Fourth.module.css'
import { useState } from 'react'
import { Button } from '../../shared/button/Button'
import { CoffeeMachine } from '../../shared/svg/CoffeeMachine/CoffeeMachine'

export default function FourthComponent () {
  const [showForm, setShowForm] = useState(false)

  return (
    <section>
      <div id={LINKS[PAGES.HOME].sections[3]} className={styles.mainContainer}>
        {!showForm &&
          <div>
            <div className={styles.leftContainer}>
              <h2>Work and coffee</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, obcaecati mollitia consectetur culpa reiciendis fuga iste! Omnis ipsa doloribus sunt! Eveniet pariatur non ut cumque beatae quis alias voluptatibus? Et!</p>
              <div>
                <button>G</button>
                <button>I</button>
                <button>M</button>
              </div>
              <button onClick={() => setShowForm(true)}> <Button buttonText='FORM' /></button>
            </div>
            <div className={styles.rightContainer}>
              {/* <WorkCoffee /> */}
              <CoffeeMachine />
            </div>
          </div>}
        {showForm &&
          <div>
            <div className={styles.leftContainer}>
              <button onClick={() => setShowForm(false)}> X</button>
              <h2>FORM</h2>
              <form action='post'>
                <input type='text' name='topic' id='topic' placeholder='Motivo' />
                <input type='text' name='email' id='email' placeholder='email' />
                <input type='text' name='description' id='description' placeholder='Dime algo' />
                <button>SEND</button>
              </form>
            </div>
            <div className={styles.rightContainer}>
              <img src='https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000' alt='imagen' height={100} width={100} />
            </div>
          </div>}
      </div>
    </section>
  )
}
