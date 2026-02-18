import { Terminal } from "./terminal/terminal"

export const HeroBanner = () => {

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
        <div className={`mx-auto bg-[#080810] h-screen pt-30`} id="banner">
            <div className="h-full flex lg:flex-row flex-col items-center p-3 text-[#5a5a78]">
                <div className="flex flex-col justify-center items-center">
                    <div className=" w-full">
                        <div>
                            <h1 className="lg:text-9xl md:text-8xl text-5xl font-bold text-[#dde0f0]">
                                Raone 
                                <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.18)]">
                                    Ferreira
                                </span>
                            </h1>
                            <h2 className="text-xl font-normal ">Front-end Developer</h2>
                            <div className="max-w-2xl wrap-anywhere text-mono">
                                <p className="mt-5">
                                    Computer Engineering student at Universidade Aberta de Portugal (UAb-PT) with hands-on experience in web development and front-end engineering, building responsive, high-performance, and user-focused web applications.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <button
                                onClick={handleDowloadCv}
                                className={`mt-3 px-2 py-3 border border-gray-200 
                                rounded-lg font-bold hover:opacity-70 cursor-pointer`}
                            >Vizualizar CV</button>
                            <div className="flex gap-2 mt-2">
                                <a href="https://github.com/raoneinet" target="_blank">
                                    <img src="/icons/github.png" className="w-10 hover:animate-spin" />
                                </a>
                                <a href="https://www.linkedin.com/in/raone-ferreira-dev/" target="_blank">
                                    <img src="/icons/linkedin.png" className="w-10 hover:animate-spin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 items-center relative justify-center">
                    <Terminal />
                </div>
            </div>
        </div>
    )
}