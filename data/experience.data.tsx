import { ExperienceInterface } from '@/app/interface/experience.interface'
import * as TEC from '@/data/technology.data'

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    title: 'Grado Ingeniería Informática',
    subtitle: 'Universidad de Córdoba',
    year: '2020',
    logo: '/images/uco.png',
    descriptions: [
      {
        title: 'Especialidad Software',
        description: 'Creación y administración de proyectos usando metodologías ágiles',
        tecnologies: [
          TEC.SCRUM, TEC.JAVA, TEC.ANDROID
        ]
      }
    ]
  },
  {
    title: 'Desarrollador fullstack',
    subtitle: 'SopraSteria',
    year: '2023',
    logo: '/images/sopra.png',
    descriptions: [
      {
        title: 'Frontend',
        description: 'Desarrollo frontales para el cliente Santander',
        tecnologies: [
          TEC.ANGULAR,
          TEC.HTML,
          TEC.CSS,
          TEC.JAVASCRIPT
        ]
      },
      {
        title: 'Backend',
        description: 'Desarrollo microservicios para el cliente PagoNxt',
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
