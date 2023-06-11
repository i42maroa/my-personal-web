'use client'

import { BACK_TECHNOLOGY, FRONT_TECHNOLOGY, MIXT_TECHNOLOGY } from '@/data/technologies.data'
import { Technology } from '../../shared/technology/Technology'
import styles from './Second.module.css'
import { useState } from 'react'
import { LINKS, PAGES } from '@/data/links.data'

export default function SecondComponent () {
  const [tecnologies, setTechnology] = useState(FRONT_TECHNOLOGY)

  return (
    <section id={LINKS[PAGES.ABOUT].sections[1]} className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h2>What I know?</h2>
        <div className={styles.buttonContainer}>
          <button onClick={() => setTechnology(FRONT_TECHNOLOGY)}>FRONT</button>
          <button onClick={() => setTechnology(BACK_TECHNOLOGY)}>BACK</button>
          <button onClick={() => setTechnology(MIXT_TECHNOLOGY)}>MIX</button>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.technologyContainer}>
          {tecnologies.map((data) => (
            <Technology key={data.name} technology={data} />
          ))}
        </div>

      </div>
    </section>
  )
}
