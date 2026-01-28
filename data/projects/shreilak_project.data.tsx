import { ProjectInterface } from '@/app/interface/project.interface'
import { ANGULAR } from '../technology.data'

export const SHREILAK_PROJECT: ProjectInterface = {
  title: 'SHREILAK',
  shortDescription: 'Página web con temática de Shrek en la que se cuenta una historia alternativa. Su protagonista es Shreilak, una princesa que se ha convertido en ogra debido a una nueva maldición. Tendrá que hacer frente una serie de capitulos para volver a su forma original.',
  technologies: [
    ANGULAR
  ],
  images: [
    {
      alt: 'title',
      url: '/project/shreilak/shreilak-1.jpg'
    },
    {
      alt: 'landing',
      url: '/project/shreilak/shreilak-2.png'
    },
    {
      alt: 'book',
      url: '/project/shreilak/shreilak-3.png'
    },
    {
      alt: 'resource',
      url: '/project/shreilak/shreilak-4.png'
    }
  ],
  urlGithub: 'https://github.com/i42maroa/sheilaWebpage',
  status: 'DEPLOY',
  url: 'https://shreilak.es'
}
