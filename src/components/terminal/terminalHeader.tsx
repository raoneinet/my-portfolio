export const TerminalHeader = () => {
    return (
        <div className="bg-[#0f0f1a] py-2">
            <div className="flex items-center px-2">
                <div className="flex gap-1">
                    <div className="bg-[#ff5f56] w-2.5 h-2.5 rounded-full"></div>
                    <div className="bg-[#ffbd2e] w-2.5 h-2.5 rounded-full"></div>
                    <div className="bg-[#27c93f] w-2.5 h-2.5 rounded-full"></div>
                </div>
                <div className="text-xs flex-1 ml-3">
                    -/portfolio - bash
                </div>
            </div>
        </div>
    )
}