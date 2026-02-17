import { Header } from "@/components/header"
import { Stacks } from "@/components/stacks"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { Promotion } from "@/components/promotion"
import { HeroBanner } from "./heroBanner"

export const Container = () => {

    return (
        <div className="bg-[#080810] w-full">
            <Header />
            <div className="mx-auto">
                <HeroBanner/>
                <Stacks />
                <Projects />
                <Promotion />
            </div>
            <Footer />
        </div>
    )
}