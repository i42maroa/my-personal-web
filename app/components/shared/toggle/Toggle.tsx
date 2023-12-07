import styles from './Toggle.module.css'
import { useState } from 'react'
import { STATE_TOGGLE } from '@/data/state-toggle.data'
import { useStateContext, useStateDispatch } from '@/app/StatusContextProvider'

export function Toggle () {
  const state = useStateContext()
  const dispatchNewState = useStateDispatch()

  const [text, setText] = useState(STATE_TOGGLE[state].text)

  function changeHandler (event:any) {
    const key = event.target.value
    const text = STATE_TOGGLE[key].text
    setText(text)
    dispatchNewState(key)
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
