import {Menu} from "@/components/menu"
import {HeroBanner} from "@/components/heroBanner"
import { ActiveDot } from "./activeDot"

export const Header = ()=>{

    return (
        <div className="shadow bg-[#0f0f1a]">
            <div className="">
                <div className="flex justify-between items-center py-3 px-3">
                    <div className="text-4xl font-bold text-[#dde0f0]">RF.</div>
                    <Menu/>
                    <ActiveDot/>
                </div>
            </div>
        </div>
    )
}