import Image from 'next/image'
import React from 'react'
import "./Aboutwork.css"
import { FaPhone } from "react-icons/fa6";
import { FaCaretSquareRight } from "react-icons/fa";

export default async function WorkwithMe() {
  return (
    <div className='workwithme-wraper'>
      <div className='work-service-container'>
        <div className='work-text'>
              <p className='work-title'>SERVICES</p>
              <h1 className='growing-title'>Growing World Class Leader <span style={{ color:'#ed002e'}}>Entrepreneurs</span></h1>
              <p className='work-paragraph'>Fringilla est ullamcorper eget nulla. Vel turpis nunc eget lorem dolor. Vehicula ipsum a arcu cursus vitae. Senectus et netus et malesuada fames.
                  Lacus vestibulum sed arcu non odio euismod. Bibendum enim facilisis gravida neque convallis a. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nunc sed velit dignissim sodales ut eu. Iaculis eu non diam phasellus.</p> 

                    <div className='work-contact'>
                      <div className='phone-logo'>
                      <FaPhone  size={30}  color='white' />
                      </div>
                      <div className='work-detais'>
                          <p>FOR FURTHUR  INQUIRY</p>
                          <p>91103 14465</p>
                        </div>
                    </div>

        </div>
        <div className='work-image'>
            <div>
             <Image src="/colaboration.png" width={600} height={550} style={{borderRadius:10}} />

            </div>
        </div>

      </div>
      <div className='work-services'>
        <div className='service-card'>
        <Image src="/icon-6.png" width={100} height={100} />
        <h2 style={{margin:0,}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
        <div className='service-card'>
        <Image src="/icon-7-1.png" width={100} height={100} />
        <h2 style={{margin:0}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
        <div className='service-card'>
        <Image src="/icon-8.png" width={100} height={100} />
        <h2 style={{margin:0}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
        <div className='service-card'>
        <Image src="/icon-1.png" width={100} height={100} />
        <h2 style={{margin:0}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
        <div className='service-card'>
        <Image src="/icon-2.png" width={100} height={100} />
        <h2 style={{margin:0}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
        <div className='service-card'>
        <Image src="/icon-3.png" width={100} height={100} />
        <h2 style={{margin:0}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
        <div className='service-card'>
        <Image src="/icon-4.png" width={100} height={100} />
        <h2 style={{margin:0}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
        <div className='service-card'>
        <Image src="/icon-5.png" width={100} height={100} />
        <h2 style={{margin:0}}>Learning to Lead​</h2>
        <p style={{padding:0,textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        </div>
      </div>
      <div>
        <div className='work-engage'>
          <div className='work-engage-container'>
          <h1>The work I engage in is...</h1>
        <Image src="/work-profile.jpg" width={600} height={300} />
        </div>
        <div className='work-engage-cards'>
          <div className='work-cards'>
            <p style={{margin:0,fontSize:25}}>01</p>
            <p style={{margin:0,fontSize:25}}>Innovative</p>
            <div className='work-list-wraper'>
            <FaCaretSquareRight size={30}  color='white'  />
              <p className='work-list'>Ideate and conceptualize disruptive solutions</p>
            </div>
            <div className='work-list-wraper'>
            <FaCaretSquareRight size={30}  color='white'  />
            <p className='work-list'>Create groundbreaking products and services</p>
            </div>
          </div>
          <div className='work-cards'>
          <p style={{margin:0,fontSize:25}}>02</p>
            <p style={{margin:0,fontSize:25}}>Collaborate</p>
            <div className='work-list-wraper'>
            <FaCaretSquareRight size={30}  color='white'  />
              <p className='work-list'>Build strong partnerships and teams</p>
            </div>
            <div className='work-list-wraper'>
            <FaCaretSquareRight size={30}  color='white'  />
            <p className='work-list'>Promote diversity and inclusivity</p>
            </div>
          </div>
          <div className='work-cards'>
          <p style={{margin:0,fontSize:25}}>03</p>
            <p style={{margin:0,fontSize:25}}>Empower</p>
            <div className='work-list-wraper'>
            <FaCaretSquareRight size={30}  color='white'  />
              <p className='work-list'>Empower young entrepreneurs to build their own empires</p>
            </div>
            <div className='work-list-wraper'>
            <FaCaretSquareRight size={30}  color='white'  />
            <p className='work-list'>Promote health, wealth, and happiness across communities</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
