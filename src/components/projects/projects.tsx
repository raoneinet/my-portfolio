import { projectsData } from "@/projects/projectsData"
import Image from "next/image"
import { MiniProjects } from "./miniProjects"

export const Projects = () => {


    return (
        <div className="min-h-screen">
            <div className="flex flex-col h-full justify-center tracking-widest">
                <div className="px-5">
                    <div>
                        <h3 className="text-[#6ef0c8] text-xs tracking-widest">// 01 - Projects</h3>
                    </div>
                    <div className="text-[#5a5a78] text-6xl font-bold my-4">
                        <h1>
                            <span className="text-[#dde0f0]">Proj</span>ects
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-10 px-4">
                    <div className="w-full flex flex-col gap-4">
                        {projectsData.map(project => (
                            project.miniProject != true &&
                            <div key={project.id} className="bg-[#0f0f1a] border rounded-lg flex md:flex-row flex-col hover:border-[#6ef0c8] hover:scale-103 pb-2">
                                <div>
                                    <img src={project.img} alt="project name" className="lg:max-w-md rounded-l-lg" />
                                </div>

                                <div className="px-3 py-2 flex flex-col justify-between">
                                    <div className="text-[#5a5a78] text-xs">
                                        <span className="text-[#fa6d9a] uppercase">{project.category}</span> | <span>{project.url}</span>
                                    </div>
                                    <div className="text-[#dde0f0] font-bold flex justify-between">
                                        <div>{project.title}</div>
                                        <a
                                            href={project.url}
                                            target="blank"
                                            className="text-[#dde0f0] bg-[#6ef0c8]/20 hover:bg-[#6ef0c8]/80 p-2 rounded-full ">
                                            <img src="/icons/link.png" className="w-3" alt="abrir link" />
                                        </a>
                                    </div>
                                    <div className="text-[#5a5a78] text-sm">
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.development.map(item =>
                                            <div className="text-[#6ef0c8]/80 p-1 border rounded-sm bg-[#6ef0c8]/10 text-xs">{item}</div>
                                        )}
                                    </div>
                                    {project.github &&
                                    <div className="text-[#5a5a78] text-xs">
                                        <p>Repo: <span>{project.github}</span></p>
                                    </div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <MiniProjects/>
            </div>
        </div>
    )
}