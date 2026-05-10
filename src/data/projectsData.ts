import { ProjectTypes } from "@/types/projectsType"

export const projectsData: ProjectTypes[] = [
    {
        id: 1,
        title: "Feelinvest",
        url: "https://www.feelinvest.com.br/",
        github: "https://github.com/raoneinet/feelinvest",
        img: "/projectsImg/feelinvest-dashboard-proj.png",
        description: "Feelinvest is a platform that analyzes market and stock sentiment using AI-powered processing of financial news. By aggregating and interpreting data from multiple sources, it provides a clear view of how the market feels about specific assets and the broader market environment.",
        development: ["ReactJs", "NextJs", "Javascript", "Typescript", "Tailwind", "CSS", "AI Powered", "Supabase"],
        miniProject: false,
        category: "Web App"
    },
    {
        id: 2,
        title: "Estudaki",
        url: "https://studyhouse-one.vercel.app/",
        img: "/projectsImg/estudaki.png",
        description: "Full-stack study cards management platform designed to organize learning resources through categorized cards. Features include dashboard analytics, favorites system, list/grid visualization, external link access, and full CRUD operations. Built with React, Next.js, TypeScript, and PHP/MySQL, including user authentication and account management. Developed as an MVP with planned features such as study roadmaps and progress tracking.",
        development: ["React", "Next", "Typescript", "Tailwind", "Redux toolkit", "PHP", "MySQL"],
        miniProject: false,
        category: "WEB APP"
    },
    {
        id: 3,
        title: "Lusobrasil",
        url: "https://lusobrasil.com",
        img: "/projectsImg/lusobrasil.png",
        description: "Personal WordPress project developed with SEO-oriented architecture. The website includes an article management system focused on immigration and travel content, with performance optimization techniques applied to ensure fast rendering and an intuitive user experience.",
        development: ["WordPress", "SEO", "Elementor", "Google Analitics"],
        miniProject: false,
        category: "Blog"
    },
    {
        id: 4,
        title: "Dancers_Tuk_Tuk",
        url: "https://dancerstuktuk.com/",
        img: "/projectsImg/tuktuk.png",
        description: "Institutional website developed using WordPress, implementing SEO best practices for improved search engine visibility. The platform was designed to promote tour services in Lisbon, featuring performance-optimized content for fast loading times and a user-centered interface focused on usability and accessibility.",
        development: ["WordPress", "SEO", "Elementor", "Google Analitics"],
        miniProject: false,
        category: "institutional"
    },
    {
        id: 5,
        title: "Pixel Ruller - Chrome Extension",
        users: 18,
        url: "https://chromewebstore.google.com/detail/llfegojlgbpcjpcdgpjlpakioihlijnc?utm_source=item-share-cb",
        github: "https://github.com/raoneinet/chrome_ruler_extension",
        img: "/projectsImg/pixel_ruler.png",
        description: "A lightweight extension created for the dev community that solves a common need among front-end developers and designers: quickly measuring areas of a web page. With Pixel Ruler, you can measure the dimensions of any element on the page where the extension is active. Displays the result in the formats: w: 0px | h: 0px",
        development: ["HTML", "CSS", "Javascript"],
        miniProject: true,
        category: "Chrome extension"
    },
    {
        id: 6,
        title: "CSS Hover Inspector",
        url: "",
        github: "https://github.com/raoneinet/chrome_hover_inspector",
        img: "/projectsImg/cssInspector.png",
        description: "The CSS Hover Inspector is a powerful, lightweight extension designed for front-end developers and designers who want to skip the complexity of DevTools. Inspect and modify the CSS of any element on a page simply by hovering your mouse, all within a floating, professional-grade interface.",
        development: ["Html", "CSS", "Javascript", "Chrome Ext.", "JSON"],
        miniProject: true,
        category: "Chrome Extention"
    },
    {
        id: 7,
        title: "Moviepedia",
        url: "https://moviepedia-phi.vercel.app/",
        github: "https://github.com/raoneinet/movie-pedia",
        img: "/projectsImg/movie-pedia.png",
        description: "Web application for browsing movie information, using the powerful TMDB (The Movie Database) API. The idea is to provide a clean, fast, and responsive interface to explore details such as synopsis, ratings, and much more.",
        development: ["React", "Next", "Tailwind", "Typescript", "Rest API"],
        miniProject: true,
        category: "Web App"
    },
]