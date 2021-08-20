import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gerardo M. | Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="./blog/every-video-on-youtube-channel">
        <a>
          Blog
        </a>
      </Link>
      <div className="text-blue-700 text-6xl">
        <h1>Holi</h1>
      </div>
      
    </div>
  )
}

// export async function getStaticProps() {
//   return (
//     <div>
      
//     </div>
//   )
// }
