export default function TableofVideos({tableData}) {
    return (
        <table className="border-separate border border-gray-500">
            <thead className="bg-gray-400">
            <tr className="p-4">
                <th>Title</th>
                {/*<th className="px-5">Comments</th>*/}
                <th className="px-5">PublishedAt</th>
                {/*<th className="px-5">Likes</th>*/}
                {/*<th>Views</th>*/}
            </tr>
            </thead>
            <tbody>
            {tableData.map(({title,viewCount,commentCount,publishedAt,video_id, likeCount, link})=>(
            <tr key={video_id} className="hover:bg-gray-300">
                <a href={link} target="_blank" title={title} className="cursor-pointer hover:text-gray-400"><td className="text-gray-600">{title}</td></a>
                {/*<td className="text-gray-600 text-center">{commentCount.toLocaleString('en-US')}</td>*/}
                <td className="text-gray-600 text-center">{publishedAt.split('T')[0]}</td>
                {/*<td className="text-gray-600 text-center">{likeCount.toLocaleString('en-US')}</td>*/}
                {/*<td className="text-gray-600 text-center">{viewCount.toLocaleString('en-US')}</td>*/}
            </tr>
            ))}
            </tbody>
      </table>
    )
}
