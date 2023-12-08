import React from 'react'
import "./GetinTouch.css"
import { FaLocationDot , FaMicrophone  } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function GetinTouch() {
  return (
    <div className='getinTouch'>
             <h2 className='getincontact'>CONTACT US</h2>
              <h1 className='heading'>Let&apos;s keep in Touch <span style={{ color:'#ed002e'}}>Entrepreneurs</span></h1>
              <h4 className='getintouchtext'>Tortor at auctor urna nunc id cursus metus aliquam eleifend at elementum eu.</h4>
        <div className='getintouch-container'>
            <div className='contact-form'>
                <div className='contact-details'>
                    <div className='getinNames'>
                        <div className='name-container'>
                            <label>First Name *</label>
                            <input className='input'  placeholder='Enter your name'/>
                        </div>
                        <div className='name-container'>
                            <label>Last Name *</label>
                            <input className='input'  placeholder='Enter your Last Name'/>
                        </div>
                    </div>
                    <div className='getinEmail'>
                    <label>Email*</label>
                    <input className='input'  placeholder='Enter your name'/>
                    </div>
                    <div className='getinQuestions'>
                    <label>Questions/Comments*</label>
                    <input className='input' />
                    </div>
                    <p style={{color:'#dddddd',marginLeft:50,fontSize:20}}>How can we help you?</p>
                    <button className='btn'>Contact</button>
                </div>
               
            </div>
            <div className='address'>
                    <h1 className='heading-address'>PERFECT SOLUTION <span style={{ color:'#ed002e'}}>ENTREPRENEUR</span></h1>
              <h4 className='getintouchtext'>Tortor at auctor urna nunc id cursus metus aliquam eleifend..</h4>
              <p className='adress-para'>
              Erat nam at lectus urna duis convallis convallis tellus id. Interdum varius sit amet mattis vulputate enim nulla aliquet. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.
              </p>
              <div className='addess-icons'>
              <FaLocationDot size={30} color='#d51d40' />
              <p>Rammurthy Nagar, Bangalore</p>
              </div>
              <div className='addess-icons'>
              <FaMicrophone  size={30} color='#d51d40'/>
              <p>91103 14465</p>
              </div>
              <div className='addess-icons'>
              <IoMdMail size={30} color='#d51d40' />
              <p>sravan@angadiworldtech.com</p>
              </div>
            </div>

        </div>
    </div>
  )
}
