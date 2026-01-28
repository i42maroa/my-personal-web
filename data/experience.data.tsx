import { ExperienceInterface } from '@/app/interface/experience.interface'
import * as TEC from '@/data/technology.data'

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    title: 'Grado Ingeniería Informática',
    subtitle: 'Universidad de Córdoba',
    year: '2018 - 2021',
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
  },
  {
    title: 'Senior FullStack Engineer',
    subtitle: 'SopraSteria',
    year: '2021 - Act',
    logo: '/images/sopra.png',
    descriptions: [
      {
        title: 'Responsabilidades',
        description: [
          '- Mantenimiento y migración de aplicaciones frontend legacy a Angular, mejorando funcionalidad y reduciendo deuda técnica.',
          '- Desarrollo de una aplicación web en Angular para la visualización de pagos de clientes del Banco Santander.',
          '- Desarrollo de microservicios en Java 21 y Spring que se comunican de forma asíncrona mediante Apache Kafka usando una arquitectura basada en comandos.',
          '- Desarrollo de microservicios responsables de procesar comandos y persistir información en MongoDB.',
          '- Implementación de una API GraphQL para la consulta de los pagos.'
        ],
        tecnologies: [
          TEC.ANGULAR,
          TEC.HTML,
          TEC.CSS,
          TEC.JAVASCRIPT
        ]
      },
      {
        title: 'Logros',
        description: [
          '- Lideré el desarrollo completo del frontend de pagos en Angular durante mi etapa como junior, utilizando programación reactiva para garantizar la consistencia de la información mostrada.',
          '- Participé activamente en el diseño y construcción de la arquitectura de microservicios, la cuál permite incorporar nuevos tipos de pagos de forma sencilla.',
          '- Diseñé el microservicio central de interpretación de comandos, responsable de procesar grandes volúmenes de eventos de forma concurrente y ordenada. Implementé dicho servicio utilizando Spring Reactor, convirtiéndolo en uno de los microservicios más estables y críticos del flujo de pagos.',
          '- Gracias al impacto técnico fui ascendido a Senior Software Engineer antes que otros perfiles del equipo, participando progresivamente en decisiones de diseño técnico y arquitectura.'
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
