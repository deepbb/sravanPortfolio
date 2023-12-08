import Image from 'next/image'
import React from 'react'
import "./About.css"
import { TiTick } from "react-icons/ti";



export default async function About () {

 
  return (
    <div style={{marginBottom:50}}>
      <div className='wrapper'>
        <div className='image-container'>
          <div>
          <Image src="/profession01.jpg" width={650} height={400} style={{borderRadius:10}} alt='' />
          </div>
          <div className='image-slider'>
          <Image className='img' src="/profession02.jpg" width={200} height={150} style={{borderRadius:10}} alt='' />
          <Image className='img' src="/profession03.jpg" width={200} height={150} style={{borderRadius:10}} alt=''/>
          <Image className='img' src="/profession04.jpg" width={200} height={150} style={{borderRadius:10}} alt=''/>
          <Image className='img' src="/profession04.jpg" width={200} height={150} style={{borderRadius:10}} alt=''/>
          </div>
        </div>
        <div className='introduction'>
          <h3>INTRODUCTION</h3>
          <h1 style={{fontSize:50,fontWeight:"lighter"}}>We are activity service & Coaching <span style={{color:"#ff6900"}}>Entrepreneurs</span> </h1>
          <p className='paragraph'>Lectus urna duis convallis convallis tellus id interdum. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Sapien faucibus et molestie ac.</p>
          <p className='paragraph'>Vel pretium lectus quam id leo in vitae turpis massa. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Dis parturient montes nascetur ridiculus.</p>
          <p className='paragraph'>Arcu non odio euismod lacinia at quis risus. Morbi tincidunt ornare massa eget egestas purus viverra. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Lobortis feugiat vivamus at augue eget arcu dictum varius. Ultricies mi quis hendrerit.</p>
          <div className='tasklist-wrapper'>
          <div className='task-list'>
            <div className='checked-outline'>
          <TiTick  size={30}  color='white' />
          </div>
          <p className='checked-text'>Entrepreneurs One</p>
          </div>
          <div className='task-list'>
            <div className='checked-outline'>
          <TiTick  size={30}  color='white' />
          </div>
          <p className='checked-text'>Entrepreneurs One</p>
          </div>
          <div className='task-list'>
            <div className='checked-outline'>
          <TiTick  size={30}  color='white' />
          </div>
          <p className='checked-text'>Entrepreneurs One</p>
          </div>
          <div className='task-list'>
            <div className='checked-outline'>
          <TiTick  size={30}  color='white' />
          </div>
          <p className='checked-text'>Entrepreneurs One</p>
          </div>
          <div className='task-list'>
            <div className='checked-outline'>
          <TiTick  size={30}  color='white' />
          </div>
          <p className='checked-text'>Entrepreneurs One</p>
          </div>
          <div className='task-list'>
            <div className='checked-outline'>
          <TiTick  size={30}  color='white' />
          </div>
          <p className='checked-text'>Entrepreneurs One</p>
          </div>
          </div>
        </div>
      </div>
      <div>
        <div className='enterprenur-heading'>
        <h3>WHY CHOOSE US</h3>
        <h1>Discover your Entrepreneurs Potential</h1>
        </div>
        <div className='enterprenur-wrapper'>
        <div className='enterprenur-images'>
          <div className='enterprenur-container'>
             <Image className='img' src="/training01.jpg" width={350} height={250} style={{borderRadius:20}} alt='' />
              <div className='texts-title'>
                <h2 style={{color:'white',padding:0}}>World Class Training</h2>
              </div>
          </div>
          <div className='enterprenur-container'>
             <Image className='img' src="/training02.jpg" width={350} height={250} style={{borderRadius:20}} alt='' />
              <div className='texts-title'>
                <h2 style={{color:'white',padding:0}}>Proven Methodology</h2>
              </div>
          </div>
          <div className='enterprenur-container'>
             <Image className='img' src="/training03.jpg" width={350} height={250} style={{borderRadius:20}} alt='' />
              <div className='texts-title'>
                <h2 style={{color:'white',padding:0}}>Great Comunity</h2>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:50}}>
        <h2 style={{textAlign:'center',color: '#ff6900',fontWeight:'bolder'}}>My Professional Philosophy</h2>
        <div className='enterprenur-wrapper'>
        <div className='enterprenur-philosophy-container'>
          <div className='enterprenur-philosophy'>
             <div className='texts-wrapper'>
              <p className='philosophy-heading'>Innovation</p>
              <li className='phylosophy-list'>I must be innovative to remain ahead of the competition and continuously improve our  offerings.</li>
              <li className='phylosophy-list'>We aren&apos;t afraid to attempt new things, even if they don&apos;t always work out.</li>
             </div>
          </div>
          <div className='enterprenur-philosophy'>
          <div className='texts-wrapper'>
              <h3 className='philosophy-heading'>Perseverance</h3>
              <li className='phylosophy-list'>Entrepreneurship is not simple, and setbacks are unavoidable. I view failure as an  opportunity to learn and develop, and we never give up on our dreams.</li>
             </div>
          </div>
          <div className='enterprenur-philosophy'>
          <div className='texts-wrapper'>
              <h3  className='philosophy-heading'>Approach</h3>
              <li className='phylosophy-list'>he business landscape is constantly changing, and I must remain current on the latest  trends and technologies.</li>
             </div>
          </div>
          </div>
        </div>
      </div>
      </div>
  )
}
