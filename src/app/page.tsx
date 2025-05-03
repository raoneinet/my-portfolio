"use client"
import {ThemeProvider} from "@/contexts/themeContext"
import {Container} from "@/components/container"


const Page = ()=>{
  return (
    <ThemeProvider>
      <Container/>
    </ThemeProvider>
  )
}

export default Page