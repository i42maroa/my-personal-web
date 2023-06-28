import changeRootColors from '@/hook/changeColor'
import styles from './Toggle.module.css'
import { useState } from 'react'
import { STATE_TOGGLE } from '@/data/state-toggle.data'

export function Toggle () {
  const [state, setState] = useState(0)
  const [text, setText] = useState(STATE_TOGGLE[0].text)

  function changeHandler (event:any) {
    const key = event.target.value
    const type = STATE_TOGGLE[key].color
    const text = STATE_TOGGLE[key].text
    changeRootColors(type)
    setText(text)
    setState(key)
  }

  return (
    <div className={styles.container}>
      <div className={styles.toggleContainer}>
        <input className={styles.input} onChange={changeHandler} type='range' min='0' max='2' value={state} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
