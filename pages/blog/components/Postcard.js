import Link from "next/link"

export default function Postcard({title,date,subTitle, href}) {

    return (
        <main className="w-full flex justify-center">
            <div className="flex flex-col md:w-2/5 p-3 space-y-2 rounded-lg border border-gray-400 bg-white shadow-md">
                <section className="text-sm font-thin text-orange-400 text-gray-400">
                    Published On:&nbsp;
                    {date}
                </section>
                <section className="text-3xl font-bold text-black pb-2">
                    {title}
                </section>
                <section className="font-normal text-md text-gray-700">
                    {subTitle}
                </section>
                <section className="flex justify-end">
                    <Link href={href}>
                        <a>
                            <button type="button" className="bg-gray-600 text-white px-3 py-1 rounded-md">Read more</button>
                        </a>
                    </Link>
                </section>
            </div>
        </main>
    )
}
