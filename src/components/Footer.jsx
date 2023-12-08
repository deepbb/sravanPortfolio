import React from 'react'
import "./Footer.css"
import Image from 'next/image'

function Footer() {
  return (
    <div style={{background:"#000",width:'100%',height:50}}>
        <div className='footer-wraper'>
          <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
            <span className='footer-disclaimer'>© 2023 ASK. All Rights Reserved.</span>
          </div>
        </div>
    </div>
  )
}

export default Footer