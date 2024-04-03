import React from 'react'
import './SkillsContainer.css'
import { useMediaQuery } from 'react-responsive'

const SkillsContainer = ({ icon, heading, paragraph }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
    <div className='skills-contain' style = {{width: `${isTabletOrMobile ? "70vw" : "30vw"}`}}>
        <div className="skills-image">
            <img src= {icon} alt="" />
        </div>
        <h4 style={{fontSize: "18px", color: "rgb(27, 108, 126)", padding: '5px 5px'}}>{heading}</h4>
        <p className='para'>{paragraph}</p>
    </div>
  )
}

export default SkillsContainer
