

export const Menu = ()=>{
    return (
        <div className="">
            <nav>
                <ul className="flex gap-3 list-none text-lg text-gray-300">
                    <a href="#banner" className="hover:text-gray-400 hover:scale-110"><li>Home</li></a>
                    <a href="#project-session" className="hover:text-gray-400 hover:scale-110"><li>Portfolio</li></a>
                    <a href="#footer" className="hover:text-gray-400 hover:scale-110"><li>Sobre mim</li></a>
                </ul>
            </nav>
        </div>
    )
}