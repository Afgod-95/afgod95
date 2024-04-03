import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='page'>
      <div className="about-container" 
      style={{
        width: '90%', 
        margin: 'auto',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}
      >
        <img src="" alt="" />
        <div className="">
          <h4>Discover Godwin</h4>
          <p>
            Welcome to my digital sanctuary, where pixels meet 
            purpose and creativity knows no bounds. I'm <b>Afari Boadu Godwin</b>, 
            a multifaceted digital artisan on a mission to redefine 
            the way we interact with technology. Through a blend of 
            technical expertise, artistic flair, and unwavering dedication, 
            I weave compelling narratives and shape immersive experiences 
            that resonate with audiences worldwide.
          </p>
       </div>

       <div className="">
          <h4>Who Am I?</h4>
          <p>
            I am a dreamer, a creator, and a relentless problem-solver. 
            With a background in web development, mobile app development, 
            graphic design, and UI/UX design, I thrive on the intersection 
            of innovation and aesthetics. My journey began with a curiosity 
            to understand the inner workings of the digital realm, and it has 
            since evolved into a passionate pursuit of excellence in every 
            project I undertake.
          </p>
       </div>

       <div className="">
          <h4>Why Choose Me?</h4>
          <p>
            I am more than just a technologist or an artist—I am a partner on 
            your digital journey. With a keen understanding of market trends, 
            user behaviors, and emerging technologies, I bring a strategic mindset to 
            every project, ensuring that your vision is not only realized but also 
            optimized for success. I am committed to transparency, communication, 
            and collaboration, working closely with you every step of the way to 
            turn ideas into reality.
          </p>
       </div>
      </div>
    </div>
  )
}

export default About
