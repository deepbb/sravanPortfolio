import React from 'react'
import "./Aboutme.css"
import Image from 'next/image'

function Aboutme() {
  return (
    <div className='aboutme-wraper'>
    <div className='about-container'>
        <div className='Text-container'>
          <h1 className='name'>I&apos;m Sravan</h1>
          <h1 className='sub-title'> Founder and CEO of Angadi World Technologies Pvt. Ltd.</h1>
        </div>
        <div className='image-container'>
        <Image src="/hero_img-1.png" width={600} height={500} style={{borderRadius:10}} alt='' />
        </div>
    </div>
    <div className='about-container'>
      <div className='Text-container'>
      <Image src="/about_shap_bg.png" width={300} height={300} style={{borderRadius:10}} alt='' />
      <div className='aboutme-title'>
        <h1 className='name'>About Me</h1>
      </div>
      </div>
      <div className='image-container'>
         <p className='about-details'>
         Greetings, I&apos;m Sravan Kumar Angadi,
          a proud Founder and CEO of  Angadi World Technologies Pvt. Ltd.,
           and with the vision behind the  
           International Business Expedition Trailblazers. 
           My mission and vision are  simple yet powerful: 
           to empower aspiring entrepreneurs, collaborate  
           with like-minded individuals, and build empires that create health, 
            wealth, and happiness for everyone involved.
         </p>
      </div>
    </div>
    <div className='about-container'>
      <div className='Text-container'>
      <div className='knowmore-title'>
      <p className='know-details'>
      I strive to bring together the best minds and work 
      towards a shared goal of achieving  greatness with 
      the power of teamwork and  collaboration. My passion for
       innovation and  growth has been the driving force behind my
         journey as an entrepreneur, and I&apos;m proud to  have built a
          thriving business that has impacted  the lives of many.
         </p>
        
      </div>
      </div>
      <div className='image-container'>
      <Image src="/about_shap_bg.png" width={300} height={300} style={{borderRadius:10}} alt='' />
      <div className='knowme-title'>
      <h1 className='name'>Know More</h1>
      </div>
      </div>
    </div>
    <div>
           <h1 className='name-awt'>About</h1>
          <h1 className='sub-title-awt'> Angadi World Technologies Pvt. Ltd.</h1>
          <div className='enterprenur-wrapper'>
        <div className='enterprenur-philosophy-container'>
          <div className='enterprenur-philosophy'>
             <div className='texts-wrapper'>
             <Image src="/awt-logo.png" width={200} height={100} style={{borderRadius:10}} alt='' />

              <p className='phylosophy-list'>
              Welcome to Angadi World Technologies Pvt Ltd, where we  specialize in providing digital solutions for businesses. I&apos;m excited to  tell you about the services we offer for making your life simpler and  more value-added.

At AWT, we understand that in today&apos;s digital age, having a strong  online presence is crucial for any business. That&apos;s why we offer a  range of services to help our clients succeed in the digital realm..</p>
             </div>
          </div>
          <div className='enterprenur-philosophy'>
          <div className='texts-wrapper'>
          <Image src="/awt-logo.png" width={200} height={100} style={{borderRadius:10}} alt='' />

    <p className='phylosophy-list'>   
    We offer website design and development services that are  tailored to our client&apos;s needs. Whether you&apos;re looking for a  simple, informative website or a complex e-commerce platform,  we can help you create a website that meets your goals and  exceeds your expectations along with digital marketing  services
    </p>
         </div>
          </div>
          </div>
        </div>
    </div>
    <div>
    <div style={{ width: '100%'}}>
        
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
      <h1 className='name-awt-tech'>About</h1>
          <h1 className='sub-title-awt-tech'> International Business Expedition Trailblazers.</h1>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div className='enterprenur-philosophy-container'>
          <div className='enterprenur-philosophy'>
             <div className='texts-wrapper'>
             <Image src="/awt-logo.png" width={200} height={100} style={{borderRadius:10}} alt='' />

              <p className='phylosophy-list'>
              I am excited to start the new venture that is being launched soon, The  International Business Expedition Trailblazers. Starting a new business is no  easy feat, and it requires a lot of planning, hard work, and dedication.  However, one of the most important aspects of starting a business is ensuring  that all the legal and regulatory requirements are met. This  includes  everything from registering the business with the government to obtaining the  necessary licenses and permits.
             </p>      </div>
          </div>
          <div className='enterprenur-philosophy-tech'>
          <div className='texts-wrapper'>
          <Image src="/awt-logo.png" width={200} height={100} style={{borderRadius:10}} alt='' />

    <p className='phylosophy-list'>   
    We  understand  that  many  entrepreneurs find this is process overwhelming, which is why we have made it our mission to help  streamline this process and make it as easy and stress-free as  possible. We will work closely with our clients to ensure that all  necessary documentation is completed accurately and efficiently.
     </p>
         </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <h1 style={{textAlign:'center'}}>My Inspirations</h1>
    <div className='inspiration-section'>
      <div style={{display:'flex',flexDirection:'column',width:400}}>
      <Image className='img' src="/inspiration.png" width={350} height={250} style={{borderRadius:20}} alt='' />
      <div>
        <h2>Bryant Mcgill</h2>
      <p style={{lineHeight:2}}>
      “One of the most sincere  forms of respect is  actually listening to what  another has to say”
      </p>
      </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',width:400}}>
      <Image className='img' src="/inspiration02.png" width={350} height={250} style={{borderRadius:20}} alt='' />
      <div>
        <h2>Jenni Young Mcgill</h2>
      <p style={{lineHeight:2}}>
      “Every single event in your life,  especially the difficult lessons,  have made you smarter,  stronger, and wiser than you  were yesterday. Be thankful!”
      Be thankful!” 
      </p>
      </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',width:400}}>
      <Image className='img' src="/inspiration03.png" width={350} height={250} style={{borderRadius:20}} alt='' />
      <div>
        <h2>Grant Cardone</h2>
      <p style={{lineHeight:2}}>
      “Never quit and you  are guaranteed to  find your greatness”
      </p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Aboutme