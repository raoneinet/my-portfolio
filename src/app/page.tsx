"use client"
import { ThemeProvider } from "@/contexts/themeContext"
import { PageContainer } from "@/components/container"
import { ParticleEffect } from "@/components/particleEffect"


const Page = () => {

  return (
    <ThemeProvider>
      <PageContainer />
      <ParticleEffect/>
    </ThemeProvider>
  )
}

export default Page