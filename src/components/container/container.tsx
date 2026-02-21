import { Header } from "@/components/header/header"
import { Projects } from "@/components/projects/projects"
import { Footer } from "@/components/footer/footer"
import { HeroBanner } from "@/components/hero/heroBanner"
import { AboutMe } from "@/components/about/aboutme"
import { SkillAndTools } from "@/components/skills/skills"
import { Contact } from "@/components/contact/contact"

export const PageContainer = () => {

    return (
        <div className="bg-[#080810] w-full overflow-hidden">
            <Header />
            <div className="mx-auto md:max-w-6xl w-full tracking-widest">
                <HeroBanner />
                <AboutMe />
                <SkillAndTools />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}