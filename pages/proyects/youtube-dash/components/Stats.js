export default function Stats({title,data,text}) {
    return (
        <div className="bg-white shadow-md rounded-lg py-3">
            <div className="flex justify-center mb-1 text-gray-700 font-semibold"><h1>{title}</h1></div>
            <div className="flex justify-center mb-1 text-gray-700 font-medium text-sm"><p>{data}</p></div>
            <div className="flex justify-center mb-1 text-gray-700 font-extralight text-xs"><p>{text}</p></div>
        </div>
    )
}
