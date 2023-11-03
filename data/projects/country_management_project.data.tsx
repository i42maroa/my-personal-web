import { ProjectInterface } from "@/app/interface/project.interface";
import { ANDROID, GRAPHQL, MONGO_DB, SPRING } from "../technology.data";

export const COUNTRY_MANAGEMENT_BACK_PROJECT: ProjectInterface = {
    title: 'Country Management',
    features: [
      'Permite agregar la palabra de una forma sencilla'
    ],
    descriptionImprovements: [
      'Organización de las palabras según temas'
    ],
    descriptionSolution: ' El motivo por el cuál he querido desarrollar una aplicación que mantenga el registro de palabras en inglés es para poder usarlo en aquellos momentos que estoy viendo alguna serie, pelicula o leyendo un libro y justo aparece una palabra que no conozco y no me gustaría dejar pasar. Por este motivo elegí un desarrollo Movile First, ya que esta aplicación está pensada para ser usada en el dispositivo móvil.',
    shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
    technologies: [
      SPRING, GRAPHQL, MONGO_DB
    ],
    images: [
    ],
    urlGithub: 'https://github.com/i42maroa/country-management'
}

export const COUNTRY_MANAGEMENT_APP_PROJECT: ProjectInterface = {
    title: 'Country Management Android',
    features: [
      'Permite agregar la palabra de una forma sencilla'
    ],
    descriptionImprovements: [
      'Organización de las palabras según temas'
    ],
    descriptionSolution: ' El motivo por el cuál he querido desarrollar una aplicación que mantenga el registro de palabras en inglés es para poder usarlo en aquellos momentos que estoy viendo alguna serie, pelicula o leyendo un libro y justo aparece una palabra que no conozco y no me gustaría dejar pasar. Por este motivo elegí un desarrollo Movile First, ya que esta aplicación está pensada para ser usada en el dispositivo móvil.',
    shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
    technologies: [
      ANDROID
    ],
    images: [
    ],
    urlGithub: 'https://github.com/i42maroa/country-management-android'
}