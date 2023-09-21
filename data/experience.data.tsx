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
            url: '/images/scrum.png'
          },
          {
            alt: 'java',
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
            url: '/images/angular.png'
          },
          {
            alt: 'html',
            url: '/images/html.png'
          },
          {
            alt: 'css',
            url: '/images/css.png'
          },
          {
            alt: 'javascript',
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
            url: '/images/spring.png'
          },
          {
            alt: 'graphql',
            url: '/images/graphql.png'
          },
          {
            alt: 'mongodb',
            url: '/images/mongodb.png'
          },
          {
            alt: 'kafka',
            url: '/images/kafka.png'
          }
        ]
      }
    ]
  }
]
