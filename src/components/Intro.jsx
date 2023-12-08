import React from 'react'
import "./Intro.css"
import Image from 'next/image'

function Intro() {
  return (
    <div className='intro-wrap'>
        <div style={{flex:6}}>
          <div style={{backgroundColor:'white',marginTop:20,height:500,width:500,borderRadius:"50%",display:'flex',alignItems:'center'}}>
            <Image style={{}}
             src="/profile.png"
             width={800}
             height={400}
             alt="instagram"
            />
            </div>
        </div>
        <div style={{flex:6,marginTop:100}}>
          <div className='text-wraper'>
             <span className='name'><span className='first-name'>Sravan</span> Kumar Angadi</span>
          </div>
          <div className='text-wraper'>
            <div className="wrapper">
              <div className="static-txt">I&apos;m a</div>
               <ul className="dynamic-txts">
               <li><span>YouTuber</span></li>
               <li><span>Designer</span></li>
               <li><span>Developer</span></li>
               <li><span>Freelancer</span></li>
            </ul>
          </div>
        </div>
        <div className='contents-wraper'>
            <span style={{fontSize:19,fontWeight:800}}>Inspiring to chase your dream with a passion to Build an Empire!</span>
            <span style={{fontSize:20,fontWeight:800,color:"#ff6900",paddingTop:10}}>Join to Explore the world of business & leadership with me!</span>
          </div>
          <div className='contact-buttons'>
            <button className='know-btn'>KNOW MORE</button>
            <button className='work-btn'>WORK WITH ME</button>
          </div>
          <div style={{display:'flex',marginTop:50,justifyContent:'flex-end'}}>
          <div style={{display:"flex",alignItems:'center',justifyContent:'space-between',width:"35%",border: '1px solid grey',padding:5,borderRadius:10}}>
          <Image style={{cursor:'pointer'}}
                src="/instagram.png"
                 width={30}
                 height={30}
                 alt="instagram"
            />
             <Image  style={{cursor:'pointer'}}
                src="/facebook.png"
                 width={30}
                 height={30}
                 alt="instagram"
            />
             <Image  style={{cursor:'pointer'}}
                src="/linkedin.png"
                 width={30}
                 height={30}
                 alt="instagram"
            />
             <Image  style={{cursor:'pointer'}}
                src="/twitter.png"
                 width={30}
                 height={30}
                 alt="instagram"
            />
             <Image  style={{cursor:'pointer'}}
                src="/youtube.png"
                 width={30}
                 height={30}
                 alt="instagram"
            />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Intro