import { ProjectInterface } from '@/app/interface/project.interface'
import { ANGULAR, FIREBASE, REDUX } from '../technology.data'

export const ENGLISH_TRAINNING_PROJECT: ProjectInterface = {
  title: 'English Training',
  features: [
    'Permite agregar la palabra de una forma sencilla',
    'Permite ver el listado de palabras según el tipo elegido',
    'Permite ver el detalle de la palabra, que puede ser ampliado por el usuario',
    'Permite exportar a pdf tu listado de palabras'
  ],
  descriptionImprovements: [
    'Organización de las palabras según temas',
    'Autentificación del usuario',
    'Relación de palabras que sean sinónimas o antónimas',
    'Búsqueda de palabras en caliente',
    'Desarrollo de una API propia'
  ],
  descriptionSolution: ' El motivo por el cuál he querido desarrollar una aplicación que mantenga el registro de palabras en inglés es para poder usarlo en aquellos momentos que estoy viendo alguna serie, pelicula o leyendo un libro y justo aparece una palabra que no conozco y no me gustaría dejar pasar. Por este motivo elegí un desarrollo Movile First, ya que esta aplicación está pensada para ser usada en el dispositivo móvil.',
  shortDescription: 'Permite almacenar palabras en inglés para llevar un registro y luego su posterior aprendizaje',
  technologies: [
    ANGULAR, REDUX, FIREBASE
  ],
  images: [
    {
      alt: '/images/english-training.jpeg',
      url: '/images/english-training.jpeg'
    }
  ],
  urlGithub: 'https://github.com/i42maroa/english-training'
}
