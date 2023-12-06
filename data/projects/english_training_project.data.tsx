import { ProjectInterface } from '@/app/interface/project.interface'
import { ANGULAR, FIREBASE, REDUX } from '../technology.data'

export const ENGLISH_TRAINNING_PROJECT: ProjectInterface = {
  title: 'English Training',
  shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
  technologies: [
    ANGULAR, REDUX, FIREBASE
  ],
  images: [

  ],
  urlGithub: 'https://github.com/i42maroa/english-training',
  status: 'DEPLOY',
  url: 'https://github.com/i42maroa/english-training'
}
