import { useState, useEffect } from "react";

const lines: any = [
    { type: "cmd", text: "whoami" },
    { type: "out", text: "developer", color: "text-violet-400" },
    { type: "cmd", text: "cat skills.json" },
    { type: "out", text: "{" },
    { type: "out", text: '  "frontend": ["React","Next","Tailwind"],' },
    { type: "out", text: '  "cms": ["WordPress","SEO"],' },
    { type: "out", text: '  "tools": ["Git","Vercel","APIs"]' },
    { type: "out", text: "}" },
    { type: "cmd", text: "status" },
    { type: "out", text: "✔ Open to work", color: "text-green-400" },
];

function BlinkCursor() {
    const [on, setOn] = useState(true);
    useEffect(() => {
        const t = setInterval(() => setOn((v) => !v), 530);
        return () => clearInterval(t);
    }, []);
    return (
        <span
            className={`inline-block w-1.5 h-[13px] bg-emerald-300 align-middle ml-0.5 rounded-[2px] transition-opacity duration-100 ${on ? "opacity-100" : "opacity-0"
                }`}
        />
    );
}

export default function TerminalBody() {
    const [rendered, setRendered] = useState<any>([]);
    const [pos, setPos] = useState<any>({ line: 0, char: 0 });
    const [done, setDone] = useState<any>(false);

    useEffect(() => {
        if (done) return;

        const { line, char } = pos;
        if (line >= lines.length) { setDone(true); return; }

        const current = lines[line];

        // Output lines: appear instantly after short delay
        if (current.type === "out") {
            const t = setTimeout(() => {
                setRendered((p: any) => [...p, { ...current, display: current.text }]);
                setPos({ line: line + 1, char: 0 });
            }, 100);
            return () => clearTimeout(t);
        }

        // Command lines: type char by char
        if (char < current.text.length) {
            const t = setTimeout(() => {
                setRendered((p: any) => {
                    const next = [...p];
                    const partial = { ...current, display: current.text.slice(0, char + 1) };
                    if (next.length === line) next.push(partial);
                    else next[line] = partial;
                    return next;
                });
                setPos({ line, char: char + 1 });
            }, 65);
            return () => clearTimeout(t);
        }

        // Finished typing cmd — short pause before next line
        const t = setTimeout(() => setPos({ line: line + 1, char: 0 }), 180);
        return () => clearTimeout(t);
    }, [pos, done]);

    return (
        <div className="w-[340px] rounded-xl overflow-hidden bg-[#0f0f1a] border border-white/[0.08] font-mono text-xs shadow-[0_24px_80px_rgba(0,0,0,0.5)]">

            {/* ── Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#141422] border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-[10px] text-[#5a5a78] tracking-[0.08em]">
                    ~/portfolio — bash
                </span>
            </div>

            {/* ── Body */}
            <div className="flex flex-col gap-1 px-5 py-4 min-h-[220px]">
                {rendered.map((line: any, i: any) =>
                    line.type === "cmd" ? (
                        <p key={i} className="leading-relaxed m-0">
                            <span className="text-emerald-300 mr-1">➜ </span>
                            <span className="text-slate-200">{line.display}</span>
                            {/* Inline cursor while this cmd line is still being typed */}
                            {i === rendered.length - 1 && !done && (
                                <span className="inline-block w-1.5 h-[13px] bg-emerald-300 align-middle ml-0.5 rounded-[2px]" />
                            )}
                        </p>
                    ) : (
                        <p
                            key={i}
                            className={`leading-relaxed m-0 pl-3.5 ${line.color ?? "text-[#5a5a78]"}`}
                        >
                            {line.display}
                        </p>
                    )
                )}

                {/* ── Final blinking cursor after all lines */}
                {done && (
                    <p className="leading-relaxed m-0">
                        <span className="text-emerald-300 mr-1">➜ </span>
                        <BlinkCursor />
                    </p>
                )}
            </div>
        </div>
    );
}