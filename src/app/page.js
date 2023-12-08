import Image from 'next/image'
import styles from './page.module.css'
import Intro from '@/components/Intro'
// import InstaFeeds from '@/components/InstaFeeds'
import Insta from '@/pages/insta'
// import InstaPersonal from '@/components/InstaPersonal'
// import YoutubeFeeds from '@/components/YoutubeFeeds'
import TagLine from '@/components/TagLine'

import React, { lazy, Suspense } from 'react';
import Footer from '@/components/Footer'

const InstaFeeds = lazy(() => import('../components/InstaFeeds'));
const InstaPersonal = lazy(() => import('../components/InstaPersonal'));
const YoutubeFeeds = lazy(() => import('../components/YoutubeFeeds'));

export default function Home() {
  return (
    <>
    <Intro />
    <TagLine />
    <div style={{display:"flex",justifyContent:'center',marginBottom:50}}>
    <Suspense fallback={<div>Loading...</div>}>
      <InstaFeeds />
      <InstaPersonal />
      <YoutubeFeeds />
    </Suspense>
      
    </div>
    <Footer />
    </>
  )
}



