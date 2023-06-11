import styles from './Button.module.css'

export function Button ({ buttonText }:{buttonText:string}) {
  return (
    <div className={styles.buttonContainer}>
      {buttonText}
      <svg width='72' height='22' viewBox='0 0 72 22' xmlns='http://www.w3.org/2000/svg'><path fill='none' stroke='#4831d4' d='M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8' /></svg>
    </div>
  )
}
