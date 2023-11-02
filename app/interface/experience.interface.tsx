import { ImageInterface, TechnologyInterface } from './image.interface'

export interface DescriptionsExperienceInterface{
    title:string,
    description:string,
    tecnologies: TechnologyInterface[]
}

export interface ExperienceInterface {
    logo: string,
    year: string,
    title: string,
    subtitle: string,
    descriptions: DescriptionsExperienceInterface[]
}
