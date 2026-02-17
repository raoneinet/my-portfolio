import { Header } from "@/components/header/header"
import { Stacks } from "@/components/stacks"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { Promotion } from "@/components/promotion"
import { HeroBanner } from "./heroBanner"
import { AboutMe } from "./about/aboutme"

export const Container = () => {

    return (
        <div className="bg-[#080810] w-full">
            <Header />
            <div className="mx-auto md:max-w-7xl w-full">
                <HeroBanner />
                <AboutMe />
                <Stacks />
                <Projects />
                <Promotion />
            </div>
            <Footer />
        </div>
    )
}