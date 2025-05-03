import {createContext, ReactNode, useState, useEffect} from "react"
import {ThemeContextType} from "@/types/projectsType"

const STORAGE_KEY = "theme"

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({children}: {children: ReactNode})=>{

    const [theme, setTheme] = useState(()=>{
        if(typeof window !== "undefined"){
            return localStorage.getItem(STORAGE_KEY) || "light"
        }

        return "light"
    })
    
    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}