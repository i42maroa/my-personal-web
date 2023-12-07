/* eslint-disable no-tabs */
import showComponentOr from '@/hook/showComponentOr'
import styles from './Coffee.module.css'

export function CoffeeSvg ({ panel }: {panel:boolean}) {
  return (
    <svg
      version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
      viewBox='0 0 400 400' className={styles.container} xmlSpace='preserve'
    >
      <g id='latte'>
        <g>
          <circle className={styles.st0} cx='96.11' cy='273.9' r='48.09' />
          <circle className={showComponentOr(panel, styles.st1, styles.st4)} cx='96.11' cy='273.9' r='30.03' />
        </g>
        <path
          className={styles.st0} d='M223.63,377.55L223.63,377.55c-67.32,0-121.87-54.55-121.87-121.87v-54.96h243.79v54.96
		C345.55,323,290.95,377.55,223.63,377.55z'
        />
        <path
          className={styles.st2} d='M223.63,357.02L223.63,357.02c-55.16,0-99.82-44.71-99.82-99.82v-28.41H323.5v28.41
		C323.5,312.3,278.79,357.02,223.63,357.02z'
        />
        <g>
          <path
            className={styles.st2} d='M173.42,171.76c2.78-25.74,7.77-50.06-9.08-69.14c-25.18-24.68-34.97-64.09-22.81-97.19
			c6.76,14.74,12.72,28.11,19.18,40.47c5.65,10.5,11.51,19.88,18.97,28.71c3.94,4.24,8.58,9.18,11.81,13.98
			C209.55,115.6,197.69,154.05,173.42,171.76L173.42,171.76z'
          />
        </g>
        <g>
          <path
            className={styles.st2} d='M246.69,171.76c2.78-25.74,7.77-50.06-9.08-69.14c-25.18-24.68-34.97-64.09-22.81-97.19
			c6.76,14.74,12.72,28.11,19.18,40.47c5.65,10.5,11.51,19.88,18.97,28.71c3.94,4.24,8.58,9.18,11.81,13.98
			C282.83,115.6,270.97,154.05,246.69,171.76L246.69,171.76z'
          />
        </g>
      </g>
    </svg>
  )
}
