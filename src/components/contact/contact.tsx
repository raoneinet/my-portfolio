import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
export const Contact = () => {

    const social = {
        email: "raoneinet.ing@gmail.com",
        linkedin: "https://www.linkedin.com/in/raone-ferreira-dev/",
        github: "https://github.com/raoneinet"
    }
    return (
        <div className="flex lg:h-screen min-h-screen items-center" id="contact">
            <div className="flex flex-1 md:flex-row flex-col gap-10 px-4">
                <div className="px-5 flex-1">
                    <div>
                        <h3 className="text-[#6ef0c8] tracking-widest">// 01 - CONTACT</h3>
                    </div>
                    <div className="text-[#5a5a78] text-6xl font-bold my-4">
                        <h1><span className="text-[#dde0f0]">Cont</span>act</h1>
                    </div>
                    <div className="text-[#5a5a78] tracking-wide font-mono text-sm">
                        <p className="my-4">If you have a project in mind or just want exchange some ideas, just hit me on the following mideas.</p>
                    </div>
                </div>
                <div className="flex flex-1 justify-end text-[#5a5a78]">
                    <div className="flex flex-col gap-5">
                        <div className="flex py-4 px-3 border rounded-lg items-center hover:border-[#6ef0c8] hover:text-[#6ef0c8] hover:bg-[#6ef0c8]/10">
                            <div className="px-2"><Mail /></div>
                            <div className="flex justify-between flex-1 items-center">
                                {social.email}
                                <ExternalLink className="w-5 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex py-4 px-3 border rounded-lg items-center hover:border-[#6ef0c8] hover:text-[#6ef0c8] hover:bg-[#6ef0c8]/10">
                            <div className="px-2"><Linkedin /></div>
                            <div className="flex justify-between flex-1 items-center">
                                {social.linkedin}
                                <ExternalLink className="w-5 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex py-4 px-3 border rounded-lg items-center hover:border-[#6ef0c8] hover:text-[#6ef0c8] hover:bg-[#6ef0c8]/10">
                            <div className="px-2"><Github /></div>
                            <div className="flex justify-between flex-1 items-center">
                                {social.github}
                                <ExternalLink className="w-5 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}