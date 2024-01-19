import { ExperienceInterface } from '@/app/interface/experience.interface'
import * as TEC from '@/data/technology.data'

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    title: 'Grado Ingeniería Informática',
    subtitle: 'Universidad de Córdoba',
    year: '2017',
    logo: '/images/uco.png',
    descriptions: [
      {
        title: 'Especialidad Software',
        description: [
          'Creación y administración de proyectos usando metodologías ágiles.',
          'Desarrollo microservicios para el cliente PagoNxt.',
          'Desarrollo microservicios para el cliente PagoNxt.'
        ],
        tecnologies: [
          TEC.SCRUM, TEC.JAVA, TEC.ANDROID
        ]
      }
    ]
  },
  {
    title: 'FullStack Engineer',
    subtitle: 'SopraSteria',
    year: '2021',
    logo: '/images/sopra.png',
    descriptions: [
      {
        title: 'Desarrollo Frontend',
        description: [
          'Encargado de desarrollar varios proyectos frontales para el cliente Banco Santander.',
          'Desarrollo microservicios para el cliente PagoNxt.',
          'Desarrollo microservicios para el cliente PagoNxt.',
          'Desarrollo microservicios para el cliente PagoNxt.'
        ],
        tecnologies: [
          TEC.ANGULAR,
          TEC.HTML,
          TEC.CSS,
          TEC.JAVASCRIPT
        ]
      },
      {
        title: 'Desarrollo Backend',
        description: [
          'Desarrollo microservicios para el cliente PagoNxt.',
          'Desarrollo microservicios para el cliente PagoNxt.',
          'Desarrollo microservicios para el cliente PagoNxt.',
          'Desarrollo microservicios para el cliente PagoNxt.'
        ],
        tecnologies: [
          TEC.SPRING,
          TEC.GRAPHQL,
          TEC.MONGO_DB,
          TEC.KAFKA
        ]
      }
    ]
  }
]
