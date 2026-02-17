import {Menu} from "@/components/menu"
import {Banner} from "@/components/banner"

export const Header = ()=>{

    return (
        <div className={`shadow bg-[#080810]`}>
            <div className="bg-[##141422]">
                <div className="flex justify-between items-center py-3 px-3 lg:max-w-7xl mx-auto">
                    <div className="text-4xl font-bold text-gray-200">RF.</div>
                    <Menu/>
                </div>
            </div>
            <div className="flex items-center">
                <Banner/>
            </div>
        </div>
    )
}