import {Header} from "@/components/header"
import {Stacks} from "@/components/stacks"
import {Projects} from "@/components/projects"
import {Footer} from "@/components/footer"
import {Promotion} from "@/components/promotion"
import {ThemeContext} from "@/contexts/themeContext"
import {useContext} from "react"

export const Container = ()=>{

    const themeCtx = useContext(ThemeContext)

    return (
        <div className={`mx-auto 
            ${themeCtx?.theme === "dark" ? "bg-black text-gray-200" : "bg-white text-gray-800"}
        `}>
            <Header/>
            <Stacks/>
            <Projects/>
            <Promotion/>
            <Footer/>
        </div>
    )
}