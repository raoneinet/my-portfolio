import {Menu} from "@/components/menu"
import {HeroBanner} from "@/components/heroBanner"
import { ActiveDot } from "./activeDot"

export const Header = ()=>{

    return (
        <div className="shadow bg-[#0f0f1a] fixed w-full z-50">
            <div className="text-[#5a5a78]">
                <div className="flex justify-between items-center py-3 px-3">
                    <div className="font-bold">&lt;<span className="text-[#6ef0c8]">RF</span> /&gt;</div>
                    <Menu/>
                    <ActiveDot/>
                </div>
            </div>
        </div>
    )
}