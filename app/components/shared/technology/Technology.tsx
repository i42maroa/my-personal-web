import { TechnologyInterface } from '@/app/interface/image.interface'
import styles from './Technology.module.css'
import Image from 'next/image'

export function Technology ({ technology }: {
    technology: TechnologyInterface}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image} src={technology.image.url} alt={technology.image.alt}
          fill sizes='10vh'
        />
      </div>
      <h4>{technology.name}</h4>
    </div>
  )
}
