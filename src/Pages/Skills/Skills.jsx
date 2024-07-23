import React, { useRef, useState, useEffect } from 'react';
import './Skills.css'; 
import Skill from '../../Components/Skill';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from 'react-responsive';
import SkillsContainer from '../../Components/Skills-Container/SkillsContainer.jsx';

import Data from '../../Components/Data.jsx';
import ScrollUp from '../../Components/ScrollUp.jsx';

const Skills = () => {
  const [actualWidth, setActualWidth] = useState(0);
  const carousel = useRef();

  const mainPage = useRef()
  const [height, setHeight] = useState(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const languages = [
    {
      id: 1,
      name: "React Native",
      percentage: "70",
    },

    {
      id: 2,
      name: "ReactJS",
      percentage: "90",
    },

    {
      id: 3,
      name: "NodeJS",
      percentage: "80",
    },

    {
      id: 4,
      name: "JavaScript",
      percentage: "90",
    },

    {
      id: 5,
      name: "MongoDB",
      percentage: "100",
    },

    {
      id: 6,
      name: "Firebase",
      percentage: "70",
    },


  ]

  const designSoftwares = [
    {
      id: 1,
      name: "Corel Draw",
      percentage: "100",
    },

    {
      id: 2,
      name: "Adobe Photoshop",
      percentage: "90",
    },

    {
      id: 3,
      name: "Figma",
      percentage: "80",
    },

    {
      id: 4,
      name: "Microsoft Suite",
      percentage: "100",
    },
  ]

 

  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  
  return (
    <>
      {isDesktopOrLaptop && (
        <motion.div className="page">
            <motion.div className='page-inside'
              ref={mainPage}
              drag = "y"
              whileTap={{cursor: "grabbing"}}
              dragConstraints = {{top: 0, bottom: height}}
            >

            <div className="specialty">
              <h3 style = {{color: 'rgb(27, 108, 126)', padding: '15px 0px 0px 0px', textTransform: 'uppercase'}}>Specialties</h3>
            </div>
              <div className="skills-container">
                  {Data.map(item => {
                    return(
                      <SkillsContainer
                        icon={item.icon}
                        heading={item.title}
                        paragraph={item.paragraph}
                      />
                    )
                  })}
              </div>  
              <motion.div className='carousel'>
              <h5 style={{padding: "15px", color: "rgb(27, 108, 126)"}}>Frameworks and Softwares</h5>
                <motion.div className='inner-carousel'
                  ref={carousel}
                  drag = "x"
                  
                  whileTap={{cursor: "grabbing"}}
                  dragConstraints = {{right: 0, left:-actualWidth}}
                >
                  {languages.map((language, index) => {
                    return (
                      <div key={index.id} className='items'>
                        <Skill 
                          name={language.name}
                          percentage={language.percentage}
                        />
                      </div>
                      
                    )
              })}

              {designSoftwares.map((language, index) => {
                return (
                  <div key={index.id} className='items'>
                    <Skill 
                      name={language.name}
                      percentage={language.percentage}
                    />
                  </div>
                  
                )
              })}

            </motion.div>

          </motion.div>


              
            </motion.div>     
        </motion.div>
      )}

      {isTabletOrMobile && (
        <div className="page">
            <div className="specialty">
              <h3 style = {{color: 'rgb(27, 108, 126)', padding: '15px 0px 0px 0px', textTransform: 'uppercase'}}>Specialties</h3>
            </div>
            <div className="skills-container skills-container-mobile">
              {Data.map(item => {
                return(
                  <SkillsContainer
                    icon={item.icon}
                    heading={item.title}
                    paragraph={item.paragraph}
                  />
                )
              })}
            </div>
            <div className="slider-width">
              <h5 style={{padding: "20px 20px", color: "rgb(27, 108, 126)"}}>Frameworks and Softwares</h5>
              <Slider {...settings}>
                    {languages.map((language, index) => {
                      return (
                        <div key={index.id} className='items'>
                          <Skill 
                            name={language.name}
                            percentage={language.percentage}
                          />
                        </div>
                       
                      )
                    })}

                    {designSoftwares.map((language, index) => {
                      return (
                        <div key={index.id} className='items'>
                          <Skill 
                            name={language.name}
                            percentage={language.percentage}
                          />
                        </div>
                      )
                    })}
              </Slider>
            </div>
        </div>
      )}

      {isTabletOrMobile && 
         <ScrollUp />
      }
    </>
  );
};

export default Skills;




