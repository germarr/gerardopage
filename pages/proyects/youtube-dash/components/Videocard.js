function Videocard({status, title,img,views,likes,comments,link, published}) {
    return (
        <div className="flex-row justify-items-center bg-gray-50 shadow-lg rounded-md p-5">
          <div className="flex justify-center mb-1"><h1 className="text-gray-800 font-semibold text-xl">{status}</h1></div>
          <div className="flex justify-center mb-3"><p className="text-gray-700 font-medium text-sm">{title}</p></div>
          <div className="flex justify-center mb-3"><a href={link} target="_blank"><img title={title} className="rounded-sm shadow-md" src={img} alt={title} /></a></div>
          <div className="lg:ml-12 ml-1">
            <p className="text-gray-600 font-semibold">Views: <span className="text-gray-600 font-light text-sm">{views}</span></p>
            <p className="text-gray-600 font-semibold">Likes: <span className="text-gray-600 font-light text-sm">{likes}</span></p>
            <p className="text-gray-600 font-semibold">Comments: <span className="text-gray-600 font-light text-sm">{comments}</span></p>
            <p className="text-gray-600 font-semibold">Date: <span className="text-gray-600 font-light text-sm">{published.split('T')[0]}</span></p>
          </div>
        </div>
    )
}

export default Videocard
