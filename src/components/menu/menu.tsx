import Link from "next/link"

export const Menu = ()=>{

    return (
        <div className="">
            <nav className="flex gap-2 items-center">
                <ul className="flex gap-3 list-none text-sm">
                    <Link href="#banner" className="hover:text-[#6ef0c8]"><li>Home</li></Link>
                    <Link href="#whoami" className="hover:text-[#6ef0c8]"><li>About me</li></Link>
                    <Link href="#projects" className="hover:text-[#6ef0c8]"><li>Portfolio</li></Link>
                    <Link href="#contact" className="hover:text-[#6ef0c8]"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}