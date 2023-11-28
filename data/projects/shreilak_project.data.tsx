import { ProjectInterface } from '@/app/interface/project.interface'
import { FIREBASE, NEXTJS } from '../technology.data'

export const SHREILAK_PROJECT: ProjectInterface = {
  title: 'SHREILAK',
  shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
  technologies: [
    NEXTJS, FIREBASE
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
  urlGithub: 'https://github.com/i42maroa/sheilaWebpage',
  status: 'DEPLOY',
  url: 'https://github.com/i42maroa/english-training'
}
