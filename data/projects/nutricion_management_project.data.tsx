import { ProjectInterface } from '@/app/interface/project.interface'
import { ANDROID } from '../technology.data'

export const NUTRICION_PROJECT: ProjectInterface = {
  title: 'NUTRICION',
  shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
  technologies: [
    ANDROID
  ],
  images: [
    {
      alt: 'shreilak',
      url: '/project/shreilak/shreilak.jpeg'
    },
    {
      alt: 'landing',
      url: '/project/shreilak/landing.jpeg'
    },
    {
      alt: 'book',
      url: '/project/shreilak/book.jpeg'
    },
    {
      alt: 'resource',
      url: '/project/shreilak/resource.jpeg'
    },
    {
      alt: 'resource2',
      url: '/project/shreilak/resource2.jpeg'
    }
  ],
  urlGithub: 'https://github.com/i42maroa/TFG/tree/main/TFG-Proyect',
  status: 'DOWNLOAD',
  url: 'https://github.com/i42maroa/english-training'
}
