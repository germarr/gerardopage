import Head from 'next/head'
import { useState } from 'react';
import Cards from "./components/Cards"

const navigation={
  "items": [{
    "index": 2108,
    "channel_id": "",
    "channel_title": "",
    "video_id": "",
    "publishedAt": "",
    "title": "TBD",
    "viewCount": 0,
    "likeCount": 0,
    "dislikeCount": 0,
    "commentCount": 0,
    "duration": 0,
    "thumbnail": "https://via.placeholder.com/320x180.png?text=TBD",
    "link": "0",
    "video_lang": 0,
    "categoryId": 0,
    "description": "",
    "AR": 0,
    "CountriesTrending": 0,
    "day_trending": ""}],
  "flags": [[""]],
  "list_of_countries": [
    "AR",
    "AU",
    "BO",
    "BR",
    "CA",
    "CL",
    "CO",
    "CR",
    "DE",
    "EC",
    "ES",
    "FR",
    "GB",
    "IN",
    "IT",
    "JP",
    "KR",
    "MX",
    "PE",
    "PT",
    "US",
    "UY"]
  }

export default function Home() {

  const [videos,setVideos]=useState(navigation["items"])
  const [flags,setFlags]=useState(navigation["flags"])
  const [countries, setCountries] =useState(navigation["list_of_countries"])
  const [text, setText] = useState("")
  const [number, setNumber]= useState(28)

  const printOnScreen = async(e) =>{
    e.preventDefault();
    try{
      const res = await fetch(`http://localhost:2222/trending/${text}?values=${number}`);
      const data = await res.json();
      setFlags(data["flags"])
      setVideos(data["items"])
      console.log(">>>>",data["flags"])
    }catch(err){
        console.log(err)
    }
  };


  return (
    <div>
      <Head>
        <title>Youtube Trending</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex space-x-6 mr-4 ml-4 mb-2 mt-6">    
          <div className="m-5">
            <h1 className="text-2xl text-gray-800 font-extrabold">What's Trending on Youtube around the world?</h1>
            <p className="text-lg text-gray-700">Check the the top videos on Youtube from 22 different countries.</p>
          </div>
          <select value={text} onChange={(e)=>setText(e.target.value)} className="flex-auto text-gray-600 items-center font-semibold pl-5">
              <option>Choose a Country</option>
              {countries.map(c=>(
                <option>{c}</option>
              ))}
          </select>
          <button onClick={printOnScreen} className="bg-green-500 rounded-md flex-auto">
              Search!
          </button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
          {videos.map((item,index)=>(
            <Cards key={index} item={item} index ={index} flags={flags}/>
          ))}
        </div>
    </div>
  )
}
