"use client"
import {Header} from "@/components/header"
import {Stacks} from "@/components/stacks"
import {Projects} from "@/components/projects"
import {Footer} from "@/components/footer"
import {Promotion} from "@/components/promotion"
import {ThemeProvider} from "@/contexts/themeContext"


const Page = ()=>{
  return (
    <ThemeProvider>
      <div className="mx-auto">
        <Header/>
        <Stacks/>
        <Projects/>
        <Promotion/>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default Page