import React from 'react'

export default function Insta() {
  return (
    <div>Insta</div>
  )
}

// export const getServerSideProps = async ()=> {
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.INSTAGRAM_KEY}`;
//   const data = await fetch(url)
//   const feed = await data.json();
//   console.log(feed);
// }