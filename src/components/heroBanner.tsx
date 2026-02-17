import { Terminal } from "./terminal/terminal"
import Terminal2 from "./terminal/terminalBody2"

export const HeroBanner = ()=>{

    const downloadCv = "/downloadCv/raone-ferreira-cv.pdf"
    
    const handleDowloadCv = ()=>{
        const link = document.createElement("a")
        link.href = "/downloadCv/raone-ferreira-cv.pdf"
        link.target = "blank"
        //link.download = "raone-ferreira.pdf"

        document.body.appendChild(link)
        link.click()
    } 

    return (
        <div className={`mx-auto bg-[#080810]`} id="banner">
            <div className="md:max-w-7xl lg:h-screen mx-auto flex p-3 text-[#5a5a78]">
                <div className="flex flex-col justify-center items-baseline">
                    <div className="p-1 w-full">
                        <h1 className="text-12xl md:text-8xl font-bold">&lt;Raone Ferreira/&gt;</h1>
                        <h2 className="text-xl font-normal ">Front-end Developer</h2>
                        <p className="mt-5">
                            Olá! Sou Raone Ferreira. Sou estudante de Engenharia Informática e especialista em Front-end. Em busca de contribuir com o meio tech.
                        </p>
                        <button 
                            onClick={handleDowloadCv} 
                            className={`mt-3 px-2 py-3 border border-gray-200 
                                rounded-2xl font-bold hover:opacity-70 cursor-pointer`}
                        >Vizualizar CV</button>
                        <div className="flex gap-2 mt-2">
                            <a href="https://github.com/raoneinet" target="_blank">
                                <img src="/icons/github.png" className="w-10 hover:animate-spin"/>
                            </a>
                            <a href="https://www.linkedin.com/in/raone-ferreira-dev/" target="_blank">
                                <img src="/icons/linkedin.png" className="w-10 hover:animate-spin"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 items-center relative">
                    <Terminal/>
                    
                </div>
            </div>
        </div>
    )
}