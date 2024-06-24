import { ExperienceInterface } from '@/app/interface/experience.interface'
import * as TEC from '@/data/technology.data'

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    title: 'FullStack Engineer',
    subtitle: 'SopraSteria',
    year: '2021',
    logo: '/images/sopra.png',
    descriptions: [
      {
        title: 'Banco Santander',
        description: [
          '- Frontal para servicio de consulta de pagos',
          '- Migración de antiguos frontales'
        ],
        tecnologies: [
          TEC.ANGULAR,
          TEC.HTML,
          TEC.CSS,
          TEC.JAVASCRIPT
        ]
      },
      {
        title: 'PagonNxt',
        description: [
          '- Librería que genera los eventos que se van a usar para comunicar los diferentes microservicios a través de tópicos Kafka',
          '- Microservicio que adminstra la base de datos Mongo para recoger los eventos generados por cada uno de losmicroservicios',
          '- Api Graphql para consulta de pagos',
          '- Microservicio encargado de generar los eventos Bizum'
        ],
        tecnologies: [
          TEC.SPRING,
          TEC.GRAPHQL,
          TEC.MONGO_DB,
          TEC.KAFKA
        ]
      }
    ]
  },
  {
    title: 'Grado Ingeniería Informática',
    subtitle: 'Universidad de Córdoba',
    year: '2017',
    logo: '/images/uco.png',
    descriptions: [
      {
        title: 'Especialidad Software',
        description: [
          '- Gestión y administración de proyectos',
          '- Metodologías ágiles'
        ],
        tecnologies: [
          TEC.SCRUM, TEC.JAVA, TEC.ANDROID
        ]
      }
    ]
  }
]
