import {projectsData} from "@/projects/projectsData"
import {ProTypes} from "@/types/projectsType"

export const Projects = ()=>{
    const itemsCard = projectsData.map(item => item)
    return (
        <div className="md:max-w-7xl w-full mx-auto flex flex-col items-center" id="project-session">
            <h1 className="text-5xl text-gray-800">&lt;PROJECTS /&gt;</h1>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-5 p-1 my-5">
                {itemsCard.map(item => (
                    <div className="flex flex-col w-full gap-2 shadow inset-shadow-sm inset-shadow-indigo-600 p-3 rounded-md hover:scale-105">
                        <div className="flex gap-1 items-center">
                            <img src="/icons/safari.png" className="w-6 h-6"/>
                            <input type="text" className="border text-sm border-gray-300 w-full h-7 rounded-full overflow-none pl-3" value={item.url}/>
                            <a href={item.url} target="blank"><img src="/icons/search.png" className="w-6 h-6"/></a>
                        </div>
                        <div className="flex flex-col md:flex-row w-full p-2 gap-2">
                            <div className="flex-1">
                                <img src={item.img} className=""/>
                                <div className="text-2xl">{item.title}</div>
                            </div>
                            <div className="mt-3 flex flex-col md:w-1/2 gap-2">
                                <div className="text-sm">{item.description}</div>
                                <div>
                                    {item.development.map(it => <div className="text-xs text-gray-400 inline mr-2 shadow rounded-md">{it}</div>)}
                                </div>
                                <a href={item.url} target="blank" className="text-gray-600"><img src="/icons/link.png" className="w-4" alt="abrir link"/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}