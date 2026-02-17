import { TerminalBody } from "./terminalBody"
import Terminal2 from "./terminalBody2"
import { TerminalHeader } from "./terminalHeader"

export const Terminal = ()=> {
    return (
        <div className="absolute z-40 left-50">
            <Terminal2/>
        </div>
    )
}