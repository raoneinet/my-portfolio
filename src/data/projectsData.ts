import { ProjectTypes } from "@/types/projectsType"

export const projectsData: ProjectTypes[] = [
    {
        id: 1,
        title: "Estudaki",
        url: "https://studyhouse-one.vercel.app/",
        img: "/projectsImg/estudaki.png",
        description: "Full-stack study cards management platform designed to organize learning resources through categorized cards. Features include dashboard analytics, favorites system, list/grid visualization, external link access, and full CRUD operations. Built with React, Next.js, TypeScript, and PHP/MySQL, including user authentication and account management. Developed as an MVP with planned features such as study roadmaps and progress tracking.",
        development: ["React", "Next", "Typescript", "Tailwind", "Redux toolkit", "PHP", "MySQL"],
        miniProject: false,
        category: "WEB APP"
    },
    {
        id: 2,
        title: "Lusobrasil",
        url: "https://lusobrasil.com",
        img: "/projectsImg/lusobrasil.png",
        description: "Personal WordPress project developed with SEO-oriented architecture. The website includes an article management system focused on immigration and travel content, with performance optimization techniques applied to ensure fast rendering and an intuitive user experience.",
        development: ["WordPress", "SEO", "Elementor", "Google Analitics"],
        miniProject: false,
        category: "Blog"
    },
    {
        id: 3,
        title: "Dancers_Tuk_Tuk",
        url: "https://dancerstuktuk.com/",
        img: "/projectsImg/tuktuk.png",
        description: "Institutional website developed using WordPress, implementing SEO best practices for improved search engine visibility. The platform was designed to promote tour services in Lisbon, featuring performance-optimized content for fast loading times and a user-centered interface focused on usability and accessibility.",
        development: ["WordPress", "SEO", "Elementor", "Google Analitics"],
        miniProject: false,
        category: "institutional"
    },
    {
        id: 4,
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
        id: 5,
        title: "Moviepedia",
        url: "https://moviepedia-phi.vercel.app/",
        github: "https://github.com/raoneinet/movie-pedia",
        img: "/projectsImg/movie-pedia.png",
        description: "Web application for browsing movie information, using the powerful TMDB (The Movie Database) API. The idea is to provide a clean, fast, and responsive interface to explore details such as synopsis, ratings, and much more.",
        development: ["React", "Next", "Tailwind", "Typescript", "Rest API"],
        miniProject: true,
        category: "Web App"
    },
    {
        id: 6,
        title: "Previsão_do_Tempo",
        url: "https://weather-app-seven-pi-37.vercel.app/",
        github: "https://github.com/raoneinet/weather",
        img: "/projectsImg/weather.png",
        description: "Platform for checking weather forecasts with location-based search. It uses the OpenWeather API to obtain accurate results.",
        development: ["Html", "Bootstrap", "Javascript", "Rest API"],
        miniProject: true,
        category: "Web App"
    },
    {
        id: 7,
        title: "Pizza_store",
        url: "https://pizza-store-lac.vercel.app/",
        github: "",
        img: "/projectsImg/pizza-store.png",
        description: "Online pizza ordering platform with a shopping cart system. Ideal for those who want to create a simple and minimalist business with an easy-to-use user experience.",
        development: ["Html", "CSS", "Javascript", "JSON"],
        miniProject: true,
        category: "Web App"
    }
]