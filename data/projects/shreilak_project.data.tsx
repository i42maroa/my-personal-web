import { ProjectInterface } from '@/app/interface/project.interface'
import { FIREBASE, NEXTJS } from '../technology.data'

export const SHREILAK_PROJECT: ProjectInterface = {
  title: 'SHREILAK',
  shortDescription: 'Página web con temática de Shrek en la que se cuenta una historia alternativa. Su protagonista es Shreilak, que se ha convertido en ogra debido a una nueva maldición, que habrá que ayudarla a recuperar su forma natural ayudando a otros personajes de los cuentos.',
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
