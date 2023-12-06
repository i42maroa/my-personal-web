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
      alt: 'title',
      url: '/project/shreilak/shreilak-title.jpg'
    },
    {
      alt: 'landing',
      url: '/project/shreilak/landing.jpg'
    },
    {
      alt: 'book',
      url: '/project/shreilak/book.jpg'
    },
    {
      alt: 'resource',
      url: '/project/shreilak/resource.jpg'
    }
  ],
  urlGithub: 'https://github.com/i42maroa/sheilaWebpage',
  status: 'DEPLOY',
  url: 'https://github.com/i42maroa/english-training'
}
