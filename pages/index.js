import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import Blogcard from '../components/Blogcard'
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const getStaticProps = async () =>{
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
  // const res = await fetch("http://localhost:1337/posts")

  // const data = await res.json();

  // return {
  //   props:{"posts": data}
  // }
  
}

const navcard=[{
  "title":"Youtube Dashboard",
  "paragraph":"This project analyzes the performance of the last 1,000 videos of any channel on youtube.",
  "href":"/proyects/youtube-dash",
  "src":"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj5.png"
},{
  "title":"Youtube Trending",
  "paragraph":"Analyze what's trending on Youtube around the 🌎. More than 20 countries analyzed",
  "href":"/proyects/trending_dash",
  "src":"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj6.png"
}]

const tech = [{
  "title":"requests-html",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech1.png",
  "alt": "Requests html is used to scrap websites.",
  "link":"https://docs.python-requests.org/projects/requests-html/en/latest/"
},{
  "title":"youtube api",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech2.png",
  "alt": "Created by Google, the youtube API let's you interact with data from the popular video platform.",
  "link":"https://developers.google.com/youtube/v3"
},{
  "title":"fastapi",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech3.png",
  "alt": "Python library capable of creating API's at a breakneck speed.",
  "link":"https://fastapi.tiangolo.com/"
},{
  "title":"html5",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech4.png",
  "alt": "",
  "link":"https://docs.python-requests.org/projects/requests-html/en/latest/"
},{
  "title":"chartjs",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech5.png",
  "alt": "Library capable of creating innteractive javascript charts.",
  "link":"https://www.chartjs.org/"
},{
  "title":"pandas",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech6.png",
  "alt": "Python library capable of performing complex data manipulation.",
  "link":"https://pandas.pydata.org/"
},{
  "title":"nextjs",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/nextjs.png",
  "alt": "React Framework created by Vercel.",
  "link":"https://nextjs.org/"
},{
  "title":"aws lambdas",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech10.png",
  "alt": "Programatically run tasks on AWS.",
  "link":"https://aws.amazon.com/es/lambda/"
},{
  "title":"firebase",
  "src": "https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech9.png",
  "alt": "Google platform design to deploy sites.",
  "link":"https://firebase.google.com/"
}]

export default function Home({data, dataTwo}) {
  const navigationTwo = [data, dataTwo]

  return (
    <div>
      <Head>
        <title>Gerardo M. | Marketing Analytics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="min-h-full bg-white flex items-center justify-center py-10">
          <img className="h-1/4 w-1/4 md:h-1/6 md:w-1/6 shadow-xl rounded-lg" src="https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/header_image.png" alt="" />
          <div className="flex-col ml-5">
            <h1 className="font-thin text-5xl md:text-6xl text-black">hello i am</h1>
            <h2 className=" font-bold text-4xl md:text-5xl text-black">gerardo m.</h2>
            <div className="bg-pink-800 grid col-start-1 text-left w-72 p-1 mt-2 md:mt-4">
              <p className=" text-white text-sm md:text-lg font-semibold">marketing analytics professional.</p>
            </div>
          </div>
          </div>
        <div className="bg-hero-img py-10 md:py-32">
          <div className="pb-12">
            <div className="flex justify-center pt-5">
              <h2 className="text-4xl font-bold text-gray-200">what i do 🤓</h2>
            </div>
            <div className="divide-y-2 divide-yellow-500 flex-row justify-center lg:mx-96 md:mx-60 mx-52 text-center">
              <p>	&nbsp;</p>
              <p>&nbsp;</p>
            </div>
            <div className="flex-row md:grid md:grid-cols-3 mx-8 space-y-7 md:space-y-0">
              <div>
                <div className="flex justify-center">
                  <h3 className="text-2xl font-semibold text-gray-200">data analysis</h3>
                </div>
                <div className="flex justify-center">
                  <p className="text-lg font-extralight text-gray-100 text-center">python, r and sql are my tools of choice</p>
                </div>
              </div>
              <div>
                <div className="flex justify-center">
                  <h3 className="text-2xl font-semibold text-gray-200">business intelligence</h3>
                </div>
                <div className="flex justify-center">
                  <p className="text-lg font-extralight text-gray-100 text-center">excel, power bi and tableau. from =sum() to macros.</p>
                </div>
              </div>
              <div>
                <div className="flex justify-center">
                  <h3 className="text-2xl font-semibold text-gray-200">digital marketing</h3>
                </div>
                <div className="flex justify-center">
                  <p className="text-lg font-extralight text-gray-100 text-center">managing facebook and google ads since 2013.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="bg-white py-8 md:grid md:grid-cols-12 flex-row">        
            <div className="md:col-start-2 md:col-span-5 mx-7 md:mt-36">
              <div className="mb-1"><h1 className="text-4xl md:text-6xl font-bold text-gray-800">who am i</h1></div>
              <div><h3 className="text-md font-semibold text-white bg-gray-600 p-1">Data Enthusiast. Currently Living in the 🇺🇸 but originally from 🇲🇽</h3></div>
              <div className="space-y-6 mt-2">
                <p className="text-gray-700 text-lg md:text-2xl font-normal">I've spent the last 7 years working in digital strategy, business intelligence and marketing analytics.</p>
                <p className="text-gray-700 text-lg md:text-2xl font-normal">From 2012 to 2019 I got the awesome opportunity to work for 2 of the most popular automotive brands in the world and on 2020, while finishing my master's degree, I changed gears and went on to do consulting work for Rappi (one of Latam's biggest startups) and Planet Fitness (one of the largest gym chains in the US).</p>
                <p className="text-gray-700 text-lg md:text-2xl font-normal"> Currently I'm working for Corsair as a Marketing Analytics specialist for their E-commerce platform.</p>
              </div>
            </div>        
            <div className="md:col-start-7 md:col-span-5 mx-7 mt-6">
              <div><h1 className="text-4xl md:text-6xl font-bold text-gray-800 p-1">favorite tech</h1></div>
              <div><h3 className="text-md font-semibold text-white bg-gray-600 p-1">most of my projects are done with</h3></div>
              <div className="p-1">
                <div className="grid grid-cols-3">
                  {tech.map(({title,src,alt,link})=>(
                    <a key={link} className="hover:cursor-pointer" title={title} href={link} target="_blank">
                      <p className="text-gray-900 font-thin mt-3">{title}</p>
                      <img className="shadow-lg p-2" src={src} alt={alt}/>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="pb-20 pt-8"> 
              <div className="md:mr-32 sm:mr-0 mb-5">
                <div className="flex justify-center md:justify-end items-center">
                  <a href="/proyects" className="
                  transition duration-500 ease-in-out text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 hover:scale-110     
                  text-4xl font-bold  hover:pointer">recent projects 🧪</a>
                </div>
                <div className="flex justify-center md:justify-end items-center">
                  <p className="text-gray-700 text-lg font-normal">i ❤️ react and experimenting with apis.</p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-start-2 md:col-span-5"><ProjectCard href={navcard[0]["href"]} title={navcard[0]["title"]} src={navcard[0]["src"]} paragraph={navcard[0]["paragraph"]}/></div>
                <div className="col-span-12 md:col-start-7 md:col-span-5"><ProjectCard href={navcard[1]["href"]} title={navcard[1]["title"]} src={navcard[1]["src"]}  paragraph={navcard[1]["paragraph"]}/></div>
              </div>
            </div>
            <div className="py-11 bg-white"> 
              <div className="md:ml-32 sm:ml-0 mb-5">
                <div className="flex justify-center md:justify-start items-center">
                  <a href="/blog" className="
                  transition duration-500 ease-in-out text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 hover:scale-110
                  text-4xl font-bold  hover:pointer">latest blog entries 📚</a>
                </div>
                <div className="flex justify-center items-center md:justify-start">
                  <p className="text-gray-700 text-lg font-normal">i mainly write about marketing analytics.</p>
                </div>
              </div>
              <div className="divide-y-2 divide-gray-500 md:mx-32">
                <div><Blogcard slug={navigationTwo[0]["slug"]} Content={navigationTwo[0]["Subtitle"]} publishedAt={navigationTwo[0]["date"]} Title={navigationTwo[0]["Title"]}/></div>
                <div><Blogcard slug={navigationTwo[1]["slug"]} Content={navigationTwo[1]["Subtitle"]} publishedAt={navigationTwo[1]["date"]} Title={navigationTwo[1]["Title"]}/></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
