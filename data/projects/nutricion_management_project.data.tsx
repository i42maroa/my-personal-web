import { ProjectInterface } from '@/app/interface/project.interface'
import { ANDROID } from '../technology.data'

export const NUTRICION_PROJECT: ProjectInterface = {
  title: 'Nutrición',
  shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
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
