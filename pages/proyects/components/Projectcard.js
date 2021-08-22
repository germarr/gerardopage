import Link from "next/link"
export default function Projectcard({name, projectImg,href,description,techOne, techTwo, techThree, github}) {
    return (
        <div className="p-10 pb-2">  
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src={projectImg} alt="Mountain" />
                <div className="px-6 py-4">
                    <div className="text-xl mb-2 text-gray-800 font-semibold">
                        {name}
                    </div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div>         
                    <div className="px-6 text-lg mb-2 text-gray-800 font-semibold">
                        Some tech used in this project
                    </div>      
                    <div className="flex space-x-6 items-center justify-center">
                        <img className="w-1/4 shadow-md rounded-sm" src={techOne} />
                        <img className="w-1/4 shadow-md rounded-sm" src={techTwo} />
                        <img className="w-1/4 shadow-md rounded-sm" src={techThree} />
                    </div>
                </div>
                <div className="flex space-x-3 my-4 px-5 pt-4 pb-2">
                    <Link href={github}>
                        <p className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">
                            Github
                        </p>
                    </Link>
                    <Link href={href}>
                    <p className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">
                        Live Project
                    </p>
                    </Link>
                </div>
            </div>
    </div>    
    )
}
