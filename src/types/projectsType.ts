import {projectsData} from "@/projects/projectsData"

export type ProTypes = {
    id: number;
    title: string;
    url: string;
    github?: string;
    img: string;
    description: string;
    development: string[];
}