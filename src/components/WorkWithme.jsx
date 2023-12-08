import React from 'react'
import "./WorkwithMe.css"
import Image from 'next/image'

export default function WorkWithme() {
  return (
    <div className='workwithme-wraper'>
    <div className='work-service-container'>
      <div className='work-text'>
            <p className='work-title'>SERVICES</p>
            <h1 className='growing-title'>Growing World Class Leader Entrepreneurs</h1>
      </div>
      <div className='work-image'>
          <div>
           <Image src="/colaboration.png" width={600} height={550} style={{borderRadius:10}} />

          </div>
      </div>

    </div>
  </div>
  )
}
