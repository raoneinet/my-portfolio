"use client"
import { ThemeProvider } from "@/contexts/themeContext"
import { PageContainer } from "@/components/container/container"
import { ParticleEffect } from "@/components/effects/particleEffect"


const Page = () => {

  return (
    <ThemeProvider>
      <PageContainer />
      <ParticleEffect/>
    </ThemeProvider>
  )
}

export default Page