import { ImageInterface, TechnologyInterface } from "./image.interface";

export interface ProjectInterface{
    title:string;
    shortDescription:string;
    features:string[];
    images: ImageInterface[];
    descriptionSolution:string;
    descriptionImprovements:string[];
    urlGithub:string;
    technologies: TechnologyInterface[];
    urlDeployment?:string;
}
