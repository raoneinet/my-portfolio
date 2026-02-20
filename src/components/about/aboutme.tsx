export const AboutMe = () => {

    const curriculum = [
        {
            year: "2025 - present",
            title: "Webmaster / Frontend",
            company: "Nespresso Nestle SA",
            description: "As a Webmaster at Nespresso, I am responsible for the technical and operational management of the e-commerce platform, ensuring an optimized and high-performance digital experience."
        },
        {
            year: "2022 - 202",
            title: "Web developer",
            company: "Workana / Freelancer",
            description: " Designed, developed, and maintained WordPress-based websites, including e-commerce stores, corporate websites, landing pages, and blogs."
        },
        {
            year: "2018 - present",
            title: "Web developer / Personal projects & learning",
            company: "Self study / Freelancer",
            description: "Studies with HTML5 and CSS3 and Javascript for danamic pages, also learning WordPress and page builders, like Elementor"
        }
    ]

    return (
        <div className="flex md:flex-row flex-col gap-10 lg:h-screen justify-center">
            <div className="px-5 flex-1">
                <div>
                    <h3 className="text-[#6ef0c8] text-xs tracking-widest">// 01 - ABOUT ME</h3>
                </div>
                <div className="text-[#5a5a78] text-6xl font-bold my-4">
                    <h1><span className="text-[#dde0f0]">Who</span>ami</h1>
                </div>
                <div className="text-[#5a5a78] tracking-wide font-mono text-sm">
                    <p className="my-4">Computer Engineering student at Universidade Aberta de Portugal (UAb-PT) with hands-on experience in web development and front-end engineering, building responsive, high-performance, and user-focused web applications. Proficient in HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, with back-end experience in PHP and MySQL.</p>

                    <p>Skilled in version control (Git), performance optimization, SEO basics, cross-browser testing, responsive design, and accessibility (WCAG). Strong problem-solving skills, continuously learning new technologies, and actively seeking opportunities to contribute to innovative, data-driven, and impactful digital projects.</p>
                </div>
            </div>
            <div className="flex flex-1">
                <div className="flex flex-col gap-5 items-center place-self-center">
                    {curriculum.map((item, index) => (
                        <div
                            key={index} 
                            className="text-[#5a5a78] tracking-wide font-mono w-3/4">
                            <div className="flex flex-col gap-2 items-start">
                                <div className="border-2 border-[#7c6dfa] w-3 h-3 rounded-full"></div>
                                <div className="border-l-2 pl-3 ml-1">
                                    <div className="text-[#7c6dfa] text-xs mb-2">{item.year}</div>
                                    <div className="text-[#dde0f0] font-bold">{item.title}</div>
                                    <div className="text-xs font-medium">{item.company}</div>
                                    <div className="text-sm mt-2">{item.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}