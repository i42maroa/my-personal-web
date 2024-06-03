'use client'

import styles from './Slider.module.css'
import { ImageInterface } from '@/app/interface/image.interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

export function Slider ({ arrayImages }: {arrayImages: ImageInterface[]}) {
  return (

    <Swiper
      modules={[Pagination]}
      className={styles.container}
      slidesPerView={1}
      pagination={{
        clickable: true
      }}
    >
      {arrayImages.map((image, index) =>
        <SwiperSlide key={index} className={styles.carrousel}>
          <Image className={styles.image} src={image.url} alt={image.alt} fill sizes='500vh' />
        </SwiperSlide>
      )}
    </Swiper>
  )
}
