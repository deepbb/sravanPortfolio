import Image from 'next/image'
import React from 'react'
import "./InstaFeeds.css"


async function getData() {
  const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY_TWO}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

async function getTweets () {
    const res = await fetch(`https://api.twitter.com/2/tweets/28114222`)
}





 
export default async function InstaPersonal () {
  const {data} =  await getData()
  console.log("FEEDS",data);


  return (
      <div style={{flexWrap:"wrap",justifyContent:'center',padding:15}}>
        {data?.slice(0, 4).map((item)=> (
          <>
          { item.media_type== "IMAGE" &&
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:250,height:270,paddingTop:20, paddingBottom:10,border: '1px solid grey',margin:10,borderRadius:10,height:'fit-content',boxShadow:' 10px 3px 5px -2px rgba(53,58,117,1)' }}>
          {/* <div style={{ width:"100%"}}> */}
            <div style={{marginLeft:190}}>
            <Image
           src="/instagram.png"
            width={15}
            height={15}
            alt="instagram"
       />
       </div>
       <div>
        {item.media_type== "IMAGE" &&
             <Image
             src={item.media_url}
              width={220}
              height={250}
              alt="instagram"
         /> }
             
            </div>
         </div>
}
         </>
        ))}
      </div>
  )
}



// export const getServerSideProps = async ()=> {
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}`;
//   const data = await fetch(url)
//   const feed = await data.json();
//   console.log(feed);
// }



