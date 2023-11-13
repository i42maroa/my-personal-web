/* eslint-disable no-tabs */
'use client'

import { useEffect, useState } from 'react'
import styles from './FaceAnimate.module.css'

export function FaceAnimate () {
  const [C, setC] = useState(0)
  const [L, setL] = useState(0)

  useEffect(() => {
    document.body.addEventListener('mousemove', (event) => {
      const halfInnerWidth = window.innerWidth / 2
      const halfInnerHeight = window.innerHeight / 2

      const posX = event.clientX
      const posY = event.clientY

      const posCartX = posX - halfInnerWidth
      const posCartY = posY - halfInnerHeight

      // const O = posCartX / halfInnerWidth
      // const _ = posCartY / halfInnerHeight

      let C = posCartX / (halfInnerWidth / 2)

      C = C < -1 ? -1 : C
      C = C > 1 ? 1 : C

      let L = posCartY / (halfInnerHeight / 2)
      L = L < -1 ? -1 : L
      L = L > 1 ? 1 : L

      setC(C)
      setL(L)
    })
  })

  const getFaceRotation = () => {
    return 3 * C * L
  }

  const myComponentStyle = {
    transform: `rotate(${getFaceRotation()}deg)`
  }

  const headYawlStyle = {
    transform: `translateY(${L < 0 ? Math.ceil(1 * L) : Math.ceil(3 * L)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const eyesStyleX = {
    transform: `translateX(${Math.ceil(10 * C)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const eyesStyleY = {
    transform: `translateY(${Math.max(Math.ceil(10 * L), -3)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const earLeft = {
    transform: `translateX(${Math.ceil(C < 0 ? 1 : -1 * C)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const earRight = {
    transform: `translateX(${Math.ceil(C < 0 ? -1 : 1 * C)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const cejaStyleIzq = {
    transform: `translateY(${Math.ceil(C < 0 ? 2 : 5 * C) - 5}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const cejaStyleDer = {
    transform: `translateY(${Math.ceil(C < 0 ? -5 : -3 * C) - 3}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const noseStyle = {
    transform: `translateY(${Math.max(Math.ceil(3 * L), -3)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const neckStyle = {
    transform: `translateY(${Math.max(Math.ceil(3 * L), -1)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const beardStyle = {
    transform: `translateY(${Math.max(Math.ceil(2 * L), -1)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  const mouthStyle = {
    transform: `translateY(${Math.max(Math.ceil(2 * L), -1)}px)`,
    transition: 'all 100ms 10ms ease-out'
  }

  return (
    <div className={styles.avatarWrap}>
      <div className={styles.avatar}>

        <svg
          version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
          viewBox='0 0 629 469' className={styles.containerBody} xmlSpace='preserve'
        >
          <g id='body'>
            <path
              className={styles.st0} d='M25,458c0,0,8.92-35.96,35-49 c26-13,171-47,171-47s39.41,87.18,82,83c51-5,76-84,76-84s153,24,176,32s46,55,46,55S85,467,25,458z'
            />
            <path
              id='color' className={styles.st1} d='M242,313c0,0-6.8,40-4.9,44.5S276,435,307,439c0,0,35,9,73-73c1.15-2.48,1.19-5.28,1-8l-3-42 c0,0-36.74,42.25-64.44,38.73c-2.31-0.29-4.61-0.64-6.93-0.83C297.37,353.13,270.34,347.82,242,313z'
            />
            <g>
              <path className={styles.st2} d='M240.5,306.5c0,0-5,23-8,51c0,0,36,75,72,84s82.04-63.79,80-84c-1.74-17.2-4-48-4-48' />
              <path style={neckStyle} className={styles.st2} d='M294.5,386c0,0,14.38,11.38,32.5,0' />
              <path className={styles.st2} d='M384.5,357.5l173,30c0,0,38,7,56,60' />
              <path className={styles.st2} d='M232.5,357.5L76.02,397.9c0,0-35.64,5.9-54.52,58.6' />
            </g>
          </g>
        </svg>

        <svg
          version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
          viewBox='0 0 629 469' className={styles.containerFace} xmlSpace='preserve' style={myComponentStyle}
        >
          <g id='cara' className={styles.face} style={headYawlStyle}>
            <g id='face'>
              <path
                className={styles.st1} d='M425,229c0,0-2.9,39.9-16,33c0,0-1.6,0.4-3.7,0.7c-0.8,5.9-1.3,9.3-1.3,9.3s-51,74-93,76s-89-75-90-76
			c-0.4-0.4-1.3-4.4-2.3-9.4c-2.1-0.8-3.7-1.6-3.7-1.6c-13,7-15.1-30-15.1-30c-4.2-30.8-0.9-48,1.1-53c0.3-0.8,0.9-1.2,1-2
			c0.4-2.9,6.3,4.6,9.3,8.6L210,165c-7-152,97-139,97-139s63-7,92,41c14,23.2,15.6,71.9,13.6,116c1.6-2.5,6-8.9,8.4-8
			c0.8,0.3,2.7,3.2,3,4C425.6,183.8,429,198.2,425,229z'
              />
              <path
                className={styles.st2} d='M212.5,247.5c0,0,3,23,3,24s50.6,84.4,96.5,80c0.3,0,0.7,0,1,0c45.9,1.4,94.5-79,94.7-79.7
			c0.3-1,3.1-24,3.1-24'
              />
              <path
                className={styles.st2} d='M415.5,176.5c5-57.1-4.2-93.1-9.2-107.1c-2-5.6-5.1-10.6-9.2-14.8c-35.7-37-85.7-36-85.7-36
			s-48.7-0.6-84.4,36.4c-4.1,4.2-7.2,9.3-9.2,14.8c-4.9,14.1-15.5,48.7-10.5,105.8'
              />
              <path
                id='hair'
                className={styles.st3} d='M410,178l3-4c2.9-11.4,1.7-104.2-19-119c-21-15-24-28.1-81.5-34c0,0-55.5,0-87.5,42c0,0-22,33-15,111l6,6
			c0,0,0.7-59,9-86.9c2-6.8,7.3-12.2,14.1-14.4c19.8-6.3,70.3-18.3,135.2-4.8c10.8,2.2,19.4,10.4,22.2,21.1
			C400.4,110,405.6,135.9,410,178z'
              />
            </g>
            <g id='ears'>
              <g style={earLeft}>
                <path className={styles.st2} d='M210.5,179.5c0,0-17-31-15,33s19.1,51.3,19.1,51.3' />
                <path className={styles.st4} d='M213,226c0,0-7.9,2.4-8.2-7.3c-0.2-9.8,5.4-12.6,3.3-20.2' />
              </g>
              <g style={earRight}>
                <path className={styles.st2} d='M413,179.8c0,0,17.1-30.9,14.9,33.1s-19.2,51.3-19.2,51.3' />
                <path className={styles.st4} d='M412.9,227.2c0,0,8.8,2.7,9-8.1s-5.9-13.9-3.5-22.4' />
              </g>
            </g>
            <g id='barba'>

              <path
                className={styles.st5} d='M219,241c0,0,22.4,56.4,63,68s69-4,69-4s52.1-43.9,55-69l4-2l-3.7,24.4L405,270c0,0-39,69-83,78
			c-0.6,0.1-11,1.2-12,1c-5-1-26.7,7.9-78-57l-14-21l-3-23l-1-6L219,241z'
              />
              <path style={beardStyle} className={styles.st5} d='M260,253c0,0,50.8,5.7,104.4-3.1c0,0-23.6-14.2-36.5-18.6c0,0-15.1,1.8-32.5,0.2c0,0-23.4,18.4-36.4,21.4' />
              <path className={styles.st5} d='M293,289c1.1,0,18,4,39,0l2,5c0,0-18,7-41-0.6V289z' />
            </g>
            <g id='nouse' style={noseStyle}>
              <path className={styles.st4} d='M334,222.8c-29.9,16.5-50.5-2.8-40.3-16.5c12.7-17,14.5-41.3,14.5-41.3' />
            </g>

            <g id='mouth' style={mouthStyle}>
              <path
                id='' className={styles.st6} d='M313.96,259.75 c-13.29,0.48-44.99,1.64-44.99,1.64s-2.83,0.57-1.32,2.79c1.5,2.23,17.28,18.75,48.55,17.61c31.3-0.14,44.17-18.56,45.51-20.89 c1.34-2.33-1.51-2.69-1.51-2.69s-32.22,1.03-44.8,1.49C314.94,259.72,314.46,259.73,313.96,259.75z'
              />
              <path
                id='' className={styles.st7} d='M274,262c0,0,3.88,6.34,5.03,7.75 c1.15,1.41,55.61,5.61,73.37-3.75c0,0,2.35-1.55,1.59-6'
              />
            </g>

            <g id='eyesX' style={eyesStyleX}>
              <g id='eyesY' style={eyesStyleY}>
                <circle id='' className={styles.st4} cx='361.5' cy='164.5' r='7.5' />
                <path id='' className={styles.st4} d='M355,181c0,0,11,2,16-1' />
                <circle id='' className={styles.st4} cx='262' cy='165' r='7' />
                <path id='' className={styles.st4} d='M255,183c0,0,11,2,16-1' />
              </g>
            </g>

            <g id='cejas'>
              <path style={cejaStyleIzq} className={styles.st5} d='M282.72,139.72c1.16,0.34,2.41-0.02,3.18-0.96c1.24-1.5,2.19-3.99-1.58-6.54 c-5.99-4.04-46.79-10.86-56.62,15.2c-0.13,0.34-0.08,0.72,0.12,1.01h0c0.72,1.07,2.2,1.28,3.18,0.44 C236.48,144.13,254.48,131.45,282.72,139.72z' />
              <path style={cejaStyleDer} className={styles.st5} d='M343.27,136.55c-1.08,0.31-2.27,0.03-3.01-0.81c-1.34-1.52-2.57-4.17,1.47-6.88 c6.13-4.11,47.89-10.96,57.87,15.71c0.13,0.35,0.08,0.74-0.13,1.05l-0.67,1c-0.39,0.58-1.21,0.69-1.73,0.21 C392.75,142.79,373.92,127.63,343.27,136.55z' />
            </g>

            <g id='muecas'>
              <path className={styles.st4} d='M262,228.72c0,0.82-5.74,7.38-9.84,8.2s-8.2,11.48-4.92,15.58' />
              <path className={styles.st4} d='M367.99,227.3c0,0.84,5.85,7.57,10.05,8.42c4.19,0.85,8.36,11.78,4.99,15.96' />
              <path className={styles.st4} d='M230,234c0,0-1,11.38,1.5,15.69S233,260,233,260' />
              <path className={styles.st4} d='M392.49,222.56c0,0,2.51,7.44,2.51,12.44s1,12,1,12' />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
