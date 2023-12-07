import { ProjectInterface } from '@/app/interface/project.interface'
import { ANDROID } from '../technology.data'

export const NUTRICION_PROJECT: ProjectInterface = {
  title: 'Nutrición',
  shortDescription: 'Aplicación nativa en Android que permite llevar a cabo una planificación semanal de los platos a comer. También permite crear platos propios y tener el registro de calorias semanales y mensuales.',
  technologies: [
    ANDROID
  ],
  images: [
    {
      alt: 'nutricion',
      url: '/project/nutricion/nutricion.jpg'
    }
  ],
  urlGithub: 'https://github.com/i42maroa/TFG/tree/main/TFG-Proyect',
  status: 'NONE',
  url: 'https://github.com/i42maroa/english-training'
}
