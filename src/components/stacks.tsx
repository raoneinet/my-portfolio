

export const Stacks = () => {
    return (
        <div className="md:max-w-7xl mx-auto my-10">
            <div className="flex flex-col items-center">
                <div className="text-5xl text-gray-800">&lt;Stacks /&gt;</div>
                <div className="w-full flex justify-between flex-wrap p-1 text-sm my-10 animate-bounce">
                    <fieldset className="flex flex-wrap justify-center gap-2 border border-gray-400 rounded-md p-2 transition delay-150 duration-200 ease-iin-out hover:-translation-y-1 hover:border-indigo-600 hover:scale-110">
                        <legend>Front-end</legend>
                        <div className="flex flex-col gap-2 items-center transition delay-150 duration-200 ease-iin-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/html.png" className="w-13 h-auto" />
                            HTML
                        </div>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-125">
                            <img src="/icons/css.png" className="w-13 h-auto" />
                            CSS
                        </div>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-125">
                            <img src="/icons/bootstrap.png" className="w-13 h-auto" />
                            BOOTSTRAP
                        </div>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/tailwind.png" className="w-13 h-auto" />
                            TAILWIND
                        </div>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/js.png" className="w-13 h-auto " />
                            JAVASCRIPT
                        </div>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1  hover:scale-125">
                            <img src="/icons/react.png" className="w-13 h-auto" />
                            REACT.JS
                        </div>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/typescript.png" className="w-13 h-auto" />
                            TYPESCRIPT
                        </div>
                    </fieldset>
                    <fieldset className="flex justify-center gap-2 border border-gray-400 rounded-md p-2 transition delay-150 duration-200 ease-iin-out hover:-translation-y-1 hover:border-indigo-600 hover:scale-110">
                        <legend>Back-end</legend>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/php.png" className="w-13 h-auto" />
                            PHP
                        </div>
                    </fieldset>
                    <fieldset className="flex justify-center gap-2 border border-gray-400 rounded-md p-2 transition delay-150 duration-200 ease-iin-out hover:-translation-y-1 hover:border-indigo-600 hover:scale-110">
                        <legend>CMS</legend>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/wordpress.png" className="w-13 h-auto" />
                            WORDPRESS
                        </div>
                    </fieldset>
                    <fieldset className="flex justify-center gap-2 border border-gray-400 rounded-md p-2 transition delay-150 duration-200 ease-iin-out hover:-translation-y-1 hover:border-indigo-600 hover:scale-110">
                        <legend>Database</legend>
                        <div className="flex flex-col gap-2 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/mysql.png" className="w-13 h-auto" />
                            MYSQL
                        </div>
                    </fieldset>
                    <fieldset className="flex justify-center gap-2 border border-gray-400 rounded-md p-2 transition delay-150 duration-200 ease-iin-out hover:-translation-y-1 hover:border-indigo-600 hover:scale-110">
                        <legend>VCS</legend>
                        <div className="flex flex-col gap-1 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/git.png" className="w-13 h-auto" />
                            GIT
                        </div>
                        <div className="flex flex-col gap-1 items-center transition delay-100 duration-200 ease-in-out hover:-translation-y-1 hover:scale-125">
                            <img src="/icons/github.png" className="w-13 h-auto" />
                            GITHUB
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}