"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import "./Navbar.css"
import Link from 'next/link';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
        <div className={isOpen ? "navbar-expanded" : "navbar"}>
            <div className='navbar-wrapper'>
                <div style={{padding:15,flex:2,marginLeft:10}}>
            <Image
                src="/logo.png"
                 width={50}
                 height={65}
                 alt="Picture of the author"
            />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <button>close</button> : <button>open</button>}
             </div>
            <div className={isOpen ? "menu-items-expanded" : "menu-items"}> 
            <Link style={{textDecorationLine:'none'}} href="/">
                <li className='list-items-first'>Home</li>
                </Link>
                <Link style={{textDecorationLine:'none'}} href="/about">
                <li className='list-items'>Professional Lifestyle</li>
                 </Link>
                 <Link  style={{textDecorationLine:'none'}} href="/aboutme">
                <li className='list-items'>About Me</li>
                </Link>
                <li className='list-items'>Blogs</li>
                <Link style={{textDecorationLine:'none'}} href="/workwithme">
                <li className='list-items'>Work With Me</li>
                </Link>
                <Link style={{textDecorationLine:'none'}} href="/getintouch">
                <li className='list-items'>Get In Touch</li>
                </Link>
            </div>
            </div>
       
        </div>
  )
}

export default Navbar