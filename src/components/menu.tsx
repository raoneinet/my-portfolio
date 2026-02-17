
export const Menu = ()=>{

    return (
        <div className="">
            <nav className="flex gap-2 items-center">
                <ul className="flex gap-3 list-none text-lg text-gray-200">
                    <a href="#banner" className="hover:text-gray-400 hover:scale-110"><li>Home</li></a>
                    <a href="#project-session" className="hover:text-gray-400 hover:scale-110"><li>Portfolio</li></a>
                    <a href="#footer" className="hover:text-gray-400 hover:scale-110"><li>About me</li></a>
                </ul>
            </nav>
        </div>
    )
}