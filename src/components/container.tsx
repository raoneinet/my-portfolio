import { Header } from "@/components/header/header"
import { Projects } from "@/components/projects/projects"
import { Footer } from "@/components/footer"
import { Promotion } from "@/components/promotion"
import { HeroBanner } from "@/components/hero/heroBanner"
import { AboutMe } from "./about/aboutme"
import { SkillAndTools } from "./skills/skills"

export const Container = () => {

    return (
        <div className="bg-[#080810] w-full">
            <Header />
            <div className="mx-auto md:max-w-6xl w-full tracking-widest">
                <HeroBanner />
                <AboutMe />
                <SkillAndTools/>
                <Projects/>
                <Promotion />
            </div>
            <Footer />
        </div>
    )
}