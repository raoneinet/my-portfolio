

export const Banner = ()=>{

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
        <div className="md:max-w-7xl mx-auto" id="banner">
            <div className="md:max-w-7xl lg:h-130 mx-auto grid md:grid-cols-2">
                <div className="flex flex-col flex-1 justify-center items-baseline">
                    <div className="md:w-1/2 p-1">
                        <h1 className="text-6xl md:text-8xl font-bold text-gray-800">&lt;Raone Ferreira/&gt;</h1>
                        <h2 className="text-xl font-normal text-gray-600">Front-end Developer</h2>
                        <p className="mt-5 text-gray-600">
                            Olá! Sou Raone Ferreira. Sou estudante de Engenharia Informática e especialista em Front-end. Em busca de contribuir com o meio tech.
                        </p>
                        <button 
                            onClick={handleDowloadCv} 
                            className="mt-3 px-2 py-3 bg-indigo-500 rounded-2xl text-white font-bold hover:opacity-70 cursor-pointer"
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
                <div className="flex justify-center md:justify-end">
                    <img src="/raone.png" className="w-auto"/>
                </div>
            </div>
        </div>
    )
}