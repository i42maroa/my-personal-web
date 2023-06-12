'use client'

import { BACK_TECHNOLOGY, FRONT_TECHNOLOGY, MIXT_TECHNOLOGY } from '@/data/technologies.data'
import { Technology } from '../../shared/technology/Technology'
import styles from './Second.module.css'
import { useState } from 'react'
import { LINKS, PAGES } from '@/data/links.data'
import startAnimation from '@/hook/startAnimation'

export default function SecondComponent () {
  const [tecnologies, setTechnology] = useState(FRONT_TECHNOLOGY)

  function handleStyles (type:any) {
    return startAnimation(tecnologies === type, styles.active)
  }

  return (
    <section id={LINKS[PAGES.ABOUT].sections[1]} className={styles.mainContainer}>
      <h2>What I know?</h2>
      <div className={styles.buttonContainer}>
        <button className={`${styles.buttonStyle} ${handleStyles(FRONT_TECHNOLOGY)}`} onClick={() => setTechnology(FRONT_TECHNOLOGY)}>FRONT</button>
        <button className={`${styles.buttonStyle} ${handleStyles(BACK_TECHNOLOGY)}`} onClick={() => setTechnology(BACK_TECHNOLOGY)}>BACK</button>
        <button className={`${styles.buttonStyle} ${handleStyles(MIXT_TECHNOLOGY)}`} onClick={() => setTechnology(MIXT_TECHNOLOGY)}>MIX</button>
      </div>
      <div className={styles.technologyContainer}>
        {tecnologies.map((data) => (
          <Technology key={data.name} technology={data} />
        ))}
      </div>
    </section>
  )
}
