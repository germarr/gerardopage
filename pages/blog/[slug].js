import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import marked from "marked"

export default function Post({htmlString, data}) {
    return (
        <>
        <Head>
            <title>{data.title}</title>
            <meta title="description" content={data.description}/>
        </Head>
        <div className="prose mt-8 max-w-max md:mx-48 mx-10 prose-indigo" dangerouslySetInnerHTML={{__html:htmlString}}></div>
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

    const htmlString = marked(parsedMarkdown.content)

    return{
        props:{
            htmlString,
            data:parsedMarkdown.data
        }
    }
}
