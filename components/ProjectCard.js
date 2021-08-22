function ProjectCard({title, paragraph ,href,src}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div class="grid grid-cols-12 gap-6">
                <div className="col-start-1 col-span-5">
                    <a href="/" target="_blank">
                        <img title={title} className="cursor-pointer rounded-sm shadow-md mt-1 mb-2 w-full h-full" src={src}/>
                    </a>
                </div>
                <div className="col-start-6 col-span-7">
                    <h2 className="font-bold truncate text-gray-800">{title}</h2>
                    <p className="text-gray-600">{paragraph}</p>
                    <div className="mt-3">
                        <a href={href}>
                        <button class="bg-pink-800 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">
                        Live Project
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
