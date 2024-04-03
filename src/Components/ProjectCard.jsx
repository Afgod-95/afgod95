import React from 'react'

const ProjectCard = ({image, projectName, number, handleClick}) => {
    const formatNumber = (num) => {
        return num.toString().padStart(2, '0');
    };

    return (
    <div className="project-card project-card-mobile" onClick={handleClick}>
        <div className="image-container image-container-mobile">
            <img src={image} alt="" />
        </div>
        <div className="name-project">
            <p>{projectName}</p>
            <div className="counter counter-mobile">
                <p style={{color: '#fff', fontSize: '13px'}}>{formatNumber(number)}</p>
            </div>
        </div>
             
    </div>
  )
}

export default ProjectCard
