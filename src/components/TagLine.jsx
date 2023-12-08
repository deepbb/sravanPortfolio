import Image from 'next/image'
import React from 'react'
import { CiStar } from "react-icons/ci";

function TagLine() {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:"space-between",height:70,background:'grey'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'nowrap'}}>
        <p style={{fontSize:22,fontWeight:'900',color:'white'}}>Belive You can and you&apos;re half way there </p>
        <div style={{}}>
        <CiStar  size={30}  color='white' />
        </div>
        <p style={{fontSize:22,fontWeight:'900',color:'white'}}>Belive You can and you&apos;re half way there </p>
        <div style={{}}>
        <CiStar  size={30}  color='white' />
        </div>
        <p style={{fontSize:22,fontWeight:'900',color:'white'}}>Belive You can and you&apos;re half way there </p>
        <div style={{}}>
        <CiStar  size={30}  color='white' />
        </div>
        </div>
    </div>
  )
}

export default TagLine