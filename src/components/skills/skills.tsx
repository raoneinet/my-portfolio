export const SkillAndTools = () => {

    const frontend = [
        {
            framework: "React / Next.js",
            language: "TypeScript",
            structure: "HTML / CSS / JS",
            style: "TailwindCSS / Bootstrap"
        }
    ]

    const tools = [
        {
            cms: "WordPress / Hybris SAP",
            pagebuilder: "Elementor / Gutenberg",
            seo: "SEO"
        }
    ]

    const infra = [
        {
            git: "Git / Github",
            deploy: "Web hosting"
        }
    ]

    const tecnologies = ["React", "Next.js", "Javascript", "Typescript", "Tailwind", "Bootstrap", "HTML", "CSS", "PHP", "MySQL", "GIT", "Github", "WordPress", "SEO", "Elementor", "Rest API", "JSON", "AI",]

    return (
        <div className="min-h-screen py-5">
            <div className="flex flex-col h-full justify-center px-4">
                <div className="px-5">
                    <div>
                        <h3 className="text-[#6ef0c8] text-xs tracking-widest">// 01 - SKILLS & TOOLS</h3>
                    </div>
                    <div className="text-[#5a5a78] md:text-6xl text-5xl font-bold my-4">
                        <h1>
                            <span className="text-[#dde0f0]">Skills</span>&
                            <span className="text-[#dde0f0]">Tools</span>
                        </h1>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-5 mt-15">
                    <div className="p-5 border rounded-lg flex flex-1 flex-col gap-5 hover:border-[#6ef0c8] hover:scale-103">
                        <div className="text-2xl">⚛️</div>
                        <div className="text-[#dde0f0] font-bold">Frontend</div>
                        {frontend.map((item, index) => (
                            <div
                                key={index}
                                className="text-[#5a5a78] tracking-wide font-mono">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-3 text-sm">
                                        <div className="">{item.framework}</div>
                                        <div className="">{item.language}</div>
                                        <div className="">{item.style}</div>
                                        <div className="">{item.structure}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-5 border rounded-lg flex flex-1 flex-col gap-5 hover:border-[#6ef0c8] hover:scale-103">
                        <div className="text-2xl">🌐</div>
                        <div className="text-[#dde0f0] font-bold">CMS & SEO</div>
                        {tools.map((item, index) => (
                            <div
                                key={index}
                                className="text-[#5a5a78] tracking-wide font-mono w-3/4">
                                <div className="flex flex-col gap-2 items-start">
                                    <div className="flex flex-col gap-3 text-sm">
                                        <div className="">{item.cms}</div>
                                        <div className="">{item.pagebuilder}</div>
                                        <div className="">{item.seo}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-5 border rounded-lg flex flex-1 flex-col gap-5 hover:border-[#6ef0c8] hover:scale-103">
                        <div className="text-2xl">🔧</div>
                        <div className="text-[#dde0f0] font-bold">Infra</div>
                        {infra.map((item, index) => (
                            <div
                                key={index}
                                className="text-[#5a5a78] tracking-wide font-mono w-3/4">
                                <div className="flex flex-col gap-2 items-start">
                                    <div className="flex flex-col gap-3 text-sm">
                                        <div className="">{item.git}</div>
                                        <div className="">{item.deploy}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-15">
                    <div className="flex gap-3 text-[#5a5a78] flex-wrap">
                        {tecnologies.map((item, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 border rounded-4xl text-sm hover:text-[#6ef0c8] hover:bg-[#6ef0c8]/10">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}