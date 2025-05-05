import {Menu} from "@/components/menu"
import {Banner} from "@/components/banner"
import {useContext} from "react"
import { ThemeContext } from "@/contexts/themeContext"

export const Header = ()=>{

    const themeCtx = useContext(ThemeContext)

    return (
        <div className={`shadow
            ${themeCtx?.theme === "dark" ? "bg-black text-white shadow-gray-600" : "bg-white text-black shadow-gray-400"}
        `}>
            <div className="bg-black">
                <div className="flex justify-between items-center py-3 lg:max-w-7xl mx-auto">
                    <div className="text-4xl font-bold text-gray-200">RF.</div>
                    <Menu/>
                </div>
            </div>
            <div className="flex items-center">
                <Banner/>
            </div>
        </div>
    )
}