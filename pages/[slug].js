import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"

export default function Post({contents, data}) {
    return (
        <>
        <Head>
            <title>{data.title}</title>
            <meta title="description" content={data.description}/>
        </Head>
        <div>
            <h1>Contents Below</h1>
            <pre>
                {contents}
            </pre>
        </div>
        </>
    )
}

export async function getStaticPaths(){
    // const response = await fetch("http://localhost:1337/posts")
    // const posts = await response.json();

    // const paths = posts.map((post)=>({
    //     params:{slug:post.Slug}
    // }))
    
    const files = fs.readdirSync("posts");
    const paths = files.map(filename=>({
        params:{
            slug:filename.replace(".md", "")
        }
    }))

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async({params:{slug}})=>{
    // post/faq.md
    const markDownWithMetaData = fs.readFileSync(path.join("posts",slug+".md")).toString()

    const parsedMarkdown = matter(markDownWithMetaData)

    return{
        props:{
            contents: parsedMarkdown.content,
            data:parsedMarkdown.data
        }
    }
}
