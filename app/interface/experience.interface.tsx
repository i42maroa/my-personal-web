import { ImageInterface } from './image.interface'

export interface DescriptionsExperienceInterface{
    title:string,
    description:string,
    tecnologies: ImageInterface[]
}

export interface ExperienceInterface {
    logo: string,
    year: string,
    title: string,
    subtitle: string,
    descriptions: DescriptionsExperienceInterface[]
}
