import Image from 'next/image'
import React from 'react'

async function getYouubeData () {
  const res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.CHANNEL_ID}&type=video&key=${process.env.YOUTUBE_KEY}`)
  if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    // UCvyDSjN9-f8PG34a030eNQg
   
    return res.json()
}

export default async function YoutubeFeeds() {


const {items} = await getYouubeData()

  console.log("YOUTUBE", items[0]?.snippet?.thumbnails?.high);
  console.log("YOUTUBE2", items[1]?.snippet?.thumbnails?.high);
  return (
    <div style={{flexWrap:"wrap",justifyContent:'center',padding:15}}>
      {items?.map((item)=> (
         <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:250,height:270,paddingTop:20, paddingBottom:10,border: '1px solid grey',margin:10,borderRadius:10,height:'fit-content',boxShadow:' 10px 3px 5px -2px rgba(53,58,117,1)' }}>
              <div style={{marginLeft:190}}>
            <Image
           src="/youtube.png"
            width={15}
            height={15}
            alt="instagram"
       />
       </div>
         <Image style={{borderRadius:10}}
              src={item?.snippet?.thumbnails?.high?.url}
               width={220}
               height={250}
               alt="instagram"
          />
          </div>
      ))}
    </div>
  )
}
