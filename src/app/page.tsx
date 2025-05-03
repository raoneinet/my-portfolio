"use client"
import {Header} from "@/components/header"
import {Stacks} from "@/components/stacks"
import {Projects} from "@/components/projects"
import {Footer} from "@/components/footer"
import {Promotion} from "@/components/promotion"


const Page = ()=>{
  return (
    <div className="mx-auto">
      <Header/>
      <Stacks/>
      <Projects/>
      <Promotion/>
      <Footer/>
    </div>
  )
}

export default Page