import React from 'react'
import './Home.css'
import { useMediaQuery } from 'react-responsive'
import { WhatsApp, FacebookOutlined, GitHub } from '@mui/icons-material'
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { SiFiverr, SiFreelancer } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import About from '../About/About.jsx'

import { Link } from 'react-router-dom'
import Image from '../../assets/image.png'

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      {isDesktopOrLaptop && (
        <div className='page'>
          <div className="home-page">
            <div className="home-details">
              <p className='my-name'>My name is <b className='person '>GODWIN</b></p>
              <p style={{marginBlock: '10px', lineHeight: '25px'}}>
                I am  an expert in software development (Web, Android and
                iOS platforms), Graphic Designer, UIX Designer and I have 
                over two (2) years of working experience.
              </p>
                
              <Link to={'https://wa.me/qr/RJ752P67ZRJML1'}>
                <div className="button but">
                  <p>Hire me</p>
                </div>
              </Link>
              
              <p style = {{color: 'rgba(39, 133, 154, 1', justifyContent: 'center', display: 'flex'}}>Connect with me on</p>
              
              <div className="handles">
                <Link to={'https://github.com/Afgod-95'} >
                  <GitHub className='icon-icon'/>
                </Link>
                
                <Link to={'https://wa.me/qr/RJ752P67ZRJML1'} >
                  <WhatsApp className='icon-icon'/>
                </Link>
                
                <Link to={'https://www.instagram.com/sulphatopressureto?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D'} >
                  <FiInstagram className='icon-icon'/>
                </Link>

                <Link to={'https://twitter.com/Afgod98'} >
                  <FaXTwitter className='icon-icon'/>
                </Link>

                <Link to={'https://www.linkedin.com/in/godwin-afari-boadu-8a587622b/'} >
                  <AiFillLinkedin className='icon-icon'/>
                </Link>

                <Link to={'https://www.freelancer.com/u/Afgod95'} >
                  <SiFreelancer className='icon-icon'/>
                </Link>
              </div>

            </div>
            <div className="contact">
              <Link to ='tel:+233550310996' className="button but butt">
                <p>Contact Me</p>
              </Link>
              <div className="banner">
                <img src= { Image } alt="" />
              </div>
            </div>
          </div>
        </div>
        
      )}

      {isTabletOrMobile && (
        <div className='page pages'>
          <div className="home-phone">
            <div className="title _title">
              <div className="person _person">
                <h3>Personal</h3>
                <h3>Portforlio</h3>
              </div>
              <Link to='tel:+233550310996' className="button mobile-but">
                <p className = "text">Contact Me</p>
              </Link>
            </div>
            <div className=" _details ">
              <p className='my-name'>My name is <b className='person '>GODWIN</b></p>
              
                <div className="img banner">
                  <img src= { Image } alt="" />
                </div>
              
              <p style={{marginBlock: '10px', lineHeight: '25px'}}>
                I am  an expert in software development (Web, Android and
                iOS platforms), Graphic Designer, UIX Designer and I have 
                over two (2) years of working experience.
              </p>
                
              <div className="button bt">
                <p className = "text">Hire me</p>
              </div>

              <p style = {{color: 'rgba(39, 133, 154, 1', justifyContent: 'center', display: 'flex', paddingTop: '30px'}}>Connect with me on</p>
            
            <div className="handles hand">
              <Link to={'https://github.com/Afgod-95'} >
                <GitHub className='icon-icon'/>
              </Link>
              
              <Link to={'https://wa.me/qr/RJ752P67ZRJML1'} >
                <WhatsApp className='icon-icon'/>
              </Link>
              
              <Link to={'https://www.linkedin.com/in/godwin-afari-715293273/'} >
                <FacebookOutlined className='icon-icon'/>
              </Link>

              <Link to={'https://www.instagram.com/sulphatopressureto?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D'} >
                <FiInstagram className='icon-icon'/>
              </Link>

              <Link to={'https://twitter.com/Afgod98'} >
                <FaXTwitter className='icon-icon'/>
              </Link>

              <Link to={'https://www.linkedin.com/in/godwin-afari-boadu-8a587622b/'} >
                <AiFillLinkedin className='icon-icon'/>
              </Link>

              <Link to={'https://www.freelancer.com/u/Afgod95'} >
                <SiFreelancer className='icon-icon'/>
              </Link>
            </div>

                
            </div>
          </div>
          
        </div>
        
      )}

      

    </>
  )
}

export default Home
