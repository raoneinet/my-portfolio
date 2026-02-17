
export const Promotion = () => {

    const downloadCv = "/downloadCv/raone-ferreira-cv.pdf"

    const handleDowloadCv = () => {
        const link = document.createElement("a")
        link.href = "/downloadCv/raone-ferreira-cv.pdf"
        link.target = "blank"
        //link.download = "raone-ferreira.pdf"

        document.body.appendChild(link)
        link.click()
    }

    return (
        <div className="md:max-w-7xl lg:h-100 mx-auto my-20 p-3">
            <h1 className="text-4xl md:text-5xl font-bold">&lt; Raone_Ferreira /&gt;</h1>
            <div className=" grid md:grid-cols-2 items-center">
                <div className="grid lg:grid-cols-2">
                    <div>
                        <p className="text-5xl">Transformando ideias em realidade</p>
                    </div>
                    <div>
                        <img src="/projectsImg/lamp.svg" className="w-50" />
                    </div>
                </div>
                <div>
                    <p>Seja bem-vindo ao meu portfólio!</p>
                    <p className="text-justify">Sou Raone Ferreira. Brasileiro que mora em Lisboa, Portugal. Sou um profissional e estudante dedicado, apaixonado por tecnologia, em busca de uma oportunidade no mercado
                        tecnológico. Atualmente, cursando Engenharia Informática na Universidade Aberta de Portugal (<a href="https://portal.uab.pt/" target="_blank" className="text-indigo-500/90">UAB Pt</a>), e experiência em
                        desenvolvimento web com Wordpress, HTML, CSS, JavaScript, React.JS, PHP e MySQL. Também falo algumas línguas, nomeadamente: Português, Inglês, francês, italiano e espanhol. </p>
                    <div className="flex gap-1 items-center">
                        <a href="https://github.com/raoneinet" target="_blank">
                            <img src="/icons/github.png" className="w-11 hover:animate-spin" />
                        </a>
                        <a href="https://www.linkedin.com/in/raone-ferreira-dev/" target="_blank">
                            <img src="/icons/linkedin.png" className="w-11 hover:animate-spin" />
                        </a>
                        <button
                            onClick={handleDowloadCv}
                            className={`mt-3 px-2 py-2 border border-gray-400 text-gray-200
                                rounded-2xl font-bold hover:opacity-70 cursor-pointer`}
                        >
                            Vizualizar CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}