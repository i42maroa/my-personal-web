import { TechnologyInterface } from '@/app/interface/image.interface'
import styles from './Technology.module.css'

export function Technology ({ technology }: {
    technology: TechnologyInterface}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={technology.image.url} alt={technology.image.alt} height={technology.image.height} />
      </div>
      <h4>{technology.name}</h4>
    </div>
  )
}
