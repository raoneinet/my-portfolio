import Link from "next/link"
import { Terminal } from "../terminal/terminal"
import TerminalBody from "../terminal/terminalBody"

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
        <div className="mx-auto flex items-center bg-[#080810] md:h-screen py-15 min-h-screen" id="banner">
            <div className="flex gap-15 lg:flex-row flex-col items-center justify-between mt-20 p-3 text-[#5a5a78]">
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
                        <div className="flex items-center gap-5 mt-10">
                            <button
                                onClick={handleDowloadCv}
                                className={`px-6 py-3 border
                                            rounded-lg text-[#6ef0c8] 
                                            border-[#6ef0c8] bg-[#6ef0c8]/30 hover:bg-black cursor-pointer`}
                            >
                                Vizualizar CV
                            </button>
                            <Link
                                href="#contact"
                                className="py-3 px-6 border rounded-lg hover:text-[#6ef0c8] 
                                            hover:border-[#6ef0c8] hover:bg-[#6ef0c8]/10 cursor-pointer text-[#dde0f0]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex md:items-center lg:absolute lg:right-10 justify-center">
                    <TerminalBody />
                </div>
            </div>
        </div>
    )
}