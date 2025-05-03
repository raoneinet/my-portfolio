import {ProTypes} from "@/types/projectsType"
import {projectsData} from "@/projects/projectsData"

export const ProjectCard = (portfolio: ProTypes)=>{
    return (
        <div>
            <div>{portfolio.description}</div>
        </div>
    )
}