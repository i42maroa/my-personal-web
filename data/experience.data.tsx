import { ExperienceInterface } from '@/app/interface/experience.interface'

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    title: 'Grado Informática',
    subtitle: 'Universidad de Córdoba',
    year: '2020',
    logo: '/images/uco.png',
    descriptions: [
      {
        title: 'Especialidad Software',
        description: '',
        tecnologies: [
          {
            alt: 'scrum',
            height: 200,
            width: 200,
            url: '/images/scrum.png'
          },
          {
            alt: 'java',
            height: 200,
            width: 200,
            url: '/images/java.png'
          }
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
          {
            alt: 'angular',
            height: 200,
            width: 200,
            url: '/images/angular.png'
          },
          {
            alt: 'html',
            height: 200,
            width: 200,
            url: '/images/html.png'
          },
          {
            alt: 'css',
            height: 200,
            width: 200,
            url: '/images/css.png'
          },
          {
            alt: 'javascript',
            height: 200,
            width: 200,
            url: '/images/js.png'
          }
        ]
      },
      {
        title: 'Backend',
        description: 'Desarrollo microservicios para el cliente PagoNxt',
        tecnologies: [
          {
            alt: 'spring',
            height: 200,
            width: 200,
            url: '/images/spring.png'
          },
          {
            alt: 'graphql',
            height: 200,
            width: 200,
            url: '/images/graphql.png'
          },
          {
            alt: 'mongodb',
            height: 200,
            width: 200,
            url: '/images/mongodb.png'
          },
          {
            alt: 'kafka',
            height: 200,
            width: 200,
            url: '/images/kafka.png'
          }
        ]
      }
    ]
  }
]
