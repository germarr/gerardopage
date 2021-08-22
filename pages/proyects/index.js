import Head from 'next/head'
import Link from 'next/link'
import Projectcard from './components/Projectcard'


const navigation = [
    {
        name: 'Youtube Dashboard',
        projectImg: 'https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj5.png', 
        href: '/proyects/youtube-dash', 
        description: 'This web app tracks the top metrics of any youtube channel using the Youtube API.',
        techOne:'https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech5.png',
        techTwo:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech2.png",
        techThree:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech3.png",
        github:"/"
    },
    {
        name: 'Youtube Trending',
        projectImg: 'https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj6.png', 
        href: '/proyects/trending_dash', 
        description: "What's Trending on Youtube around the world? This app will help you find out.",
        techOne:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech7.png",
        techTwo:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech2.png",
        techThree:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech6.png",
        github:"/"
    },
    {
        name: 'CongresApp',
        projectImg: 'https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj4.png', 
        href: 'https://master.d1bq2z1gzqb5nt.amplifyapp.com/', 
        description: "Web Scrape the congress site from 🇲🇽 and create a UX for the data.",
        techOne:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech7.png",
        techTwo:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech1.png",
        techThree:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech10.png",
        github:"/"
    },
    {
        name: 'Netflix Clone',
        projectImg: 'https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj3.png', 
        href: 'https://main.dpe4562848mf7.amplifyapp.com/', 
        description: "A clone of the Netflix Homepage.",
        techOne:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech7.png",
        techTwo:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech20.png",
        techThree:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech8.png",
        github:"/"
    },
    {
        name: 'Airbnb Clone',
        projectImg: 'https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj2.png', 
        href: 'https://main.doqgkgkrua5cd.amplifyapp.com/', 
        description: "A clone of the Airbnb Homepage.",
        techOne:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech7.png",
        techTwo:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech23.png",
        techThree:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech8.png",
        github:"/"
    },
    {
        name: 'Robinhood Clone',
        projectImg: 'https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/pj1.png', 
        href: 'https://robinhood-clone-a56b1.web.app/', 
        description: "A clone of the Robinhood Homepage.",
        techOne:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech7.png",
        techTwo:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech21.png",
        techThree:"https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/tech5.png",
        github:"/"
    }
    
  ]
  
export default function ytb_dash() {
    console.log(navigation)
    return (
        <div>
            <Head>
            <title>Projects</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className='flex justify-center mt-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-16 sticky'>
                    <h1 className='font-bold text-3xl text-white'>Check out some of my projects.</h1>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2'>
                    {navigation.map(({name,projectImg, href,description, techOne,techTwo,techThree, github})=>(
                        <Projectcard name={name} projectImg={projectImg} href={href} description={description} techOne={techOne} techTwo={techTwo} techThree={techThree} github={github}/>
                    ))}
                </div>
            </div>
            <div>    
            </div>
        </div>
    )
}
