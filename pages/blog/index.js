import Postcard from "./components/Postcard"
import fs from "fs"
import path from "path"
import matter from "gray-matter"


export const getServerSideProps = async()=>{
    // post/faq.md
    const files = fs.readdirSync("posts");
    const paths = files.map(filename=>({
        params:{
            slug:filename.replace(".md", "")
        }
    }))

    const markDownWithMetaData = fs.readFileSync(path.join("posts",paths[0]["params"]["slug"]+".md")).toString()
    const markDownWithMetaDataTwo = fs.readFileSync(path.join("posts",paths[1]["params"]["slug"]+".md")).toString()

    const parsedMarkdown = matter(markDownWithMetaData)
    const parsedMarkdownTwo = matter(markDownWithMetaDataTwo)

    return{
        props:{
            data:parsedMarkdown.data,
            dataTwo:parsedMarkdownTwo.data
        }
    }
}



export default function index({data, dataTwo}) {
    const navigationTwo = [data, dataTwo]
    
    return (
        <div className="bg-gray-200">                
            <div className='flex justify-center mt-0 bg-gradient-to-r from-green-400 to-blue-500 py-16 sticky'>
                <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem] text-white'>Blog.</h1>
            </div>
            <div className="py-6 space-y-6">
                {navigationTwo.map(({Title,date,Subtitle, slug})=>
                    <Postcard key={slug} title={Title} date={date} subTitle={Subtitle} href={`/blog/${slug}`} />
                )}
            </div>
        </div>
    )
}
