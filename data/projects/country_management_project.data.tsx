import { ProjectInterface } from '@/app/interface/project.interface'
import { ANDROID, GRAPHQL, MONGO_DB, SPRING } from '../technology.data'

export const COUNTRY_MANAGEMENT_BACK_PROJECT: ProjectInterface = {
  title: 'Country Management',
  shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
  technologies: [
    SPRING, GRAPHQL, MONGO_DB
  ],
  images: [
  ],
  urlGithub: 'https://github.com/i42maroa/country-management',
  status: 'NONE'
}

export const COUNTRY_MANAGEMENT_APP_PROJECT: ProjectInterface = {
  title: 'Country Management Android',
  shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
  technologies: [
    ANDROID
  ],
  images: [
  ],
  urlGithub: 'https://github.com/i42maroa/country-management-android',
  status: 'NONE'
}
