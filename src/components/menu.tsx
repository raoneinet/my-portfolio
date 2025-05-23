import {useContext} from "react"
import { ThemeContext } from "@/contexts/themeContext"

export const Menu = ()=>{

    const themeCtx = useContext(ThemeContext)

    const handleThemeSwitch = ()=>{
        if(themeCtx){
            themeCtx?.setTheme(themeCtx.theme === "dark" ? "light" : "dark")
        }
    }

    return (
        <div className="">
            <nav className="flex gap-2 items-center">
                <img 
                    src="/icons/day-and-night.png" 
                    className="w-5 h-5 cursor-pointer transform hover:scale-110 hover:animate-spin"
                    onClick={handleThemeSwitch}/>
                <ul className="flex gap-3 list-none text-lg text-gray-200">
                    <a href="#banner" className="hover:text-gray-400 hover:scale-110"><li>Home</li></a>
                    <a href="#project-session" className="hover:text-gray-400 hover:scale-110"><li>Portfolio</li></a>
                    <a href="#footer" className="hover:text-gray-400 hover:scale-110"><li>Sobre mim</li></a>
                </ul>
            </nav>
        </div>
    )
}