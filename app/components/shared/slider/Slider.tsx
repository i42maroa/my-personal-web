'use client'
import { useState } from 'react'
import styles from './Slider.module.css'
import { ImageInterface } from '@/app/interface/image.interface'
import Image from 'next/image'

export function Slider ({ arrayImages }: {arrayImages: ImageInterface[]}) {
  const [posSlide, setPosSlide] = useState(0)

  // const decrementPosition = () => {
  //   setPosSlide(posSlide < 1 ? arrayImages.length - 1 : posSlide - 1)
  // }

  // const incrementPosition = () => {
  //   setPosSlide((posSlide + 1) % arrayImages.length)
  // }

  const changeImage = (pos:number) => {
    setPosSlide(pos)
  }

  const selected = (pos:number) => {
    return posSlide === pos ? { border: '3px solid var(--inverse-font-color)', background: 'var(--green)', transition: 'none' } : { border: '3px solid var(--inverse-font-color)' }
  }

  return (
    <div className={styles.container}>
      <div className={styles.carrousel}>
        <Image src={arrayImages[posSlide].url} alt={arrayImages[posSlide].alt} fill sizes='1000vh' />
      </div>
      <div className={styles.inputContainer}>
        {
          arrayImages.map((image, index) =>
            <button style={selected(index)} className={styles.inputButton} key={image.alt} onClick={() => changeImage(index)}> </button>
          )
        }
      </div>
    </div>
  )
}
