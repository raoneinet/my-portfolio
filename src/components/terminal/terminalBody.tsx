export const TerminalBody = () => {
    return (
        <div className="terminal-body">
            <div className="terminal-line">
                <span className="t-prompt">➜ </span>
                <span className="t-cmd">whoami</span>
            </div>
            <div className="terminal-line t-out hi">developer</div>
            <div className="terminal-line" >
                <span className="t-prompt">➜ </span>
                <span className="t-cmd">cat skills.json</span>
            </div>
            <div className="terminal-line t-out">&lbrace;</div>
            <div className="terminal-line t-out">&nbsp;&nbsp;"frontend": ["React","Next","Tailwind"],</div>
            <div className="terminal-line t-out">&nbsp;&nbsp;"cms": ["WordPress","Elementor","SEO"],</div>
            <div className="terminal-line t-out">&nbsp;&nbsp;"tools": ["Git","Vercel","APIs"]</div>
            <div className="terminal-line t-out">&rbrace;</div>
            <div className="terminal-line" >
                <span className="t-prompt">➜ </span>
                <span className="t-cmd">status</span>
            </div>
            <div className="terminal-line t-out gr">✔ Open to work</div>
            <div className="terminal-line">
                <span className="t-prompt">➜ </span>
                <span className="t-cursor"></span>
            </div>
        </div>
    )
}