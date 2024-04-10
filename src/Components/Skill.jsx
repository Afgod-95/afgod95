import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from '../ThemeProvider';

const Skill = ({ name, percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);
  let animationInterval;

  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme === 'light') {
      setIsDarkMode(!isDarkMode);
    } else {
      setIsDarkMode(isDarkMode);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(skillRef.current);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(skillRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && animatedPercentage < percentage) {
      animationInterval = setInterval(() => {
        setAnimatedPercentage((prevPercentage) => {
          const nextPercentage = prevPercentage + 1;
          return nextPercentage >= percentage ? percentage : nextPercentage;
        });
      }, 50);
    } else {
      clearInterval(animationInterval);
    }

    return () => clearInterval(animationInterval);
  }, [isVisible, percentage, animatedPercentage]);

  return (
    <div className="skill" ref={skillRef}>
      <div style={{ width: 80 }}>
        <CircularProgressbar
          value={animatedPercentage}
          text={`${animatedPercentage}%`}
          label={name}
          strokeWidth={10}
          styles={{
            root: { width: '100%' },
            path: {
              stroke: `rgb(27, 108, 126, ${animatedPercentage / 150})`,
              transition: 'stroke-dashoffset 0.5s ease-in-out',
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
