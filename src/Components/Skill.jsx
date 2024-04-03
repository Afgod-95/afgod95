import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from '../ThemeProvider';

const Skill = ({ name, percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  let animationInterval;

  const { theme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if(theme === 'light'){
      setIsDarkMode(!isDarkMode)
    }
    else{
      setIsDarkMode(isDarkMode)
    }
  })

  useEffect(() => {
    if (animatedPercentage < percentage) {
      // Start animation when the animatedPercentage is less than the percentage prop
      animationInterval = setInterval(() => {
        setAnimatedPercentage(prevPercentage => {
          const nextPercentage = prevPercentage + 1;
          return nextPercentage >= percentage ? percentage : nextPercentage; // Adjust condition to stop animation at percentage
        });
      }, 50); // Adjust interval for smoother animation or performance considerations
    } else {
      // Clear interval when animation completes
      clearInterval(animationInterval);
    }

    // Clear interval when component unmounts
    return () => clearInterval(animationInterval);
  }, [percentage, animatedPercentage]); // Re-run effect when percentage or animatedPercentage changes

  return (
    <div className="skill">
        <div style={{ width: 80, }}>
          <CircularProgressbar
            value={animatedPercentage} // Use animatedPercentage for the value
            text={`${animatedPercentage}%`}
            label = {name}
            strokeWidth={10}
            styles={{
              root: { width: '100%' },
              path: {
                stroke: `rgb(27, 108, 126, ${animatedPercentage / 150})`, // Adjust stroke color based on percentage
                transition: 'stroke-dashoffset 0.5s ease-in-out', // Adjust transition duration
              },
              trail: { stroke: '#ddd' },
              text: { fill: '#333', fontSize: '16px' },
            }}
          />
        </div>
        <p className="skill-name">{name}</p>
    </div>
    
  );
};

export default Skill;
