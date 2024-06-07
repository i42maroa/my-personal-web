/* eslint-disable no-tabs */
import styles from './LogoAnimate.module.css'

export function LogoAnimateSvg ({ isFrontal }:{isFrontal:boolean}) {
  return (
    <svg
      version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
      viewBox='0 0 400 400' xmlSpace='preserve' className={styles.container}
    >
      {!isFrontal &&
        <g id='color'>
          <path
            className={styles.color0} d='M184.4,172.2l-50.5,94.5c-5.8-0.7-11.8-0.3-17.6,1.4c-11,3.2-20.3,10.5-25.7,20.5l-1,1.8l-26,46.7
		c-3.5,6.4-5.4,13.4-5.4,20.5l-1.4-203.2l15.7-7.2l4.4,2.2c5.4-0.6,19.1,2.1,24.7,1.8c4-0.2-18.9,1.3-14.8,1.3h2.7
		C123.1,152.8,155.2,159.8,184.4,172.2z'
          />
          <path
            className={styles.color1} d='M312.2,386c0,1.8,0,3.5-0.1,5.2L88,386.5c3.2-0.1,22.1-20.8,25.3-21.8c10.3-3,21.2-26.5,26.3-35.9l4.9-26.4
		l5-12.7c5.1-9.4-0.1-1.4-3.1-11.7c-1.6-5.5,1.9,0.3-1.7-3.9l58.1-88c56,33.3,94.6,93.7,106,160.9v0.3c0.2,0.9,0.3,1.8,0.5,2.7
		c0.6,4,1.2,8,1.5,12c0.5,5,0.9,10,1.1,15.1C312.2,380.1,312.2,383.1,312.2,386z'
          />
        </g>}
      <g id='contornos' className={`${isFrontal ? styles.strokeLoad : styles.stroke}`}>
        <path className={styles.line0} d='M56.2,142c267.4-10.8,270.7,247.5,270.7,247.5' />
        <line className={styles.line1} x1='326.9' y1='389.5' x2='281' y2='4.9' />
        <line className={styles.line2} x1='279.3' y1='13.9' x2='137' y2='278' />
        <path
          className={styles.line3} d='M134.7,280.7L134.7,280.7c-11.8-6.9-27-3-34,8.9l-26.4,45c-6.9,11.8-3,27,8.9,34l0,0c11.8,6.9,27,3,34-8.9
		l26.4-45C150.5,302.8,146.6,287.6,134.7,280.7z'
        />
      </g>
    </svg>
  )
}
