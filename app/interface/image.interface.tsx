export interface ImageInterface {
    url: string;
    alt: string;
    height: number;
    width: number;
}

export interface TechnologyInterface {
    name: string;
    description: string;
    image:ImageInterface
}
