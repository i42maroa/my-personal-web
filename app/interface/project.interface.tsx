import { ImageInterface, TechnologyInterface } from './image.interface'

export type ProyectStatusType = 'DEPLOY' | 'DOWNLOAD' | 'NONE';
export interface ProjectInterface{
    title:string;
    shortDescription:string;
    images: ImageInterface[];
    urlGithub:string;
    technologies: TechnologyInterface[];
    url?:string;
    status: ProyectStatusType;

}
