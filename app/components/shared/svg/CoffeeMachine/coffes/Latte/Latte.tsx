/* eslint-disable no-tabs */
import styles from './Latte.module.css'

export function LatteSvg ({ panel }: {panel:boolean}) {
  return (
    <svg
      version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
      viewBox='0 0 400 400' className={styles.container} xmlSpace='preserve'
    >
      <g id='coffe'>
        <g>
          <circle className={styles.st0} cx='96.05' cy='268.6' r='46.82' />
          <circle className={styles.back} cx='96.05' cy='268.6' r='29.23' />
        </g>
        <path
          className={styles.st0} d='M220.23,369.5L220.23,369.5c-65.53,0-118.63-53.1-118.63-118.63v-53.5h237.32v53.5
		C338.86,316.4,285.71,369.5,220.23,369.5z'
        />
        <path className={styles.st2} d='M123.01,252.34v-27.66H317.4v27.66' />
        <path className={styles.st3} d='M123.01,252.34c0,53.69,43.52,97.17,97.17,97.17l0,0c53.69,0,97.17-43.52,97.17-97.17H123.01z' />
        <g>
          <path
            className={styles.st3} d='M171.3,169.17c2.7-25.05,7.57-48.68-8.84-67.3c-24.51-24.02-34.04-62.39-22.2-94.61
			c6.58,14.34,12.38,27.36,18.67,39.4c5.5,10.22,11.2,19.35,18.47,27.95c3.83,4.13,8.35,8.94,11.49,13.61
			C206.48,114.55,194.93,151.98,171.3,169.17L171.3,169.17z'
          />
        </g>
        <g>
          <path
            className={styles.st3} d='M242.68,169.17c2.7-25.05,7.57-48.68-8.84-67.3c-24.51-24.02-34.04-62.39-22.2-94.61
			c6.58,14.34,12.38,27.36,18.67,39.4c5.5,10.22,11.2,19.35,18.47,27.95c3.83,4.13,8.35,8.94,11.49,13.61
			C277.85,114.55,266.31,151.98,242.68,169.17L242.68,169.17z'
          />
        </g>
      </g>
    </svg>
  )
}
