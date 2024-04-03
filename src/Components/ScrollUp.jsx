import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeProvider';
import { FaArrowUp } from "react-icons/fa6";

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false)
    const theme = useTheme()

    const handleScroll = () => {
        if(window.scrollY > 30 ){
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <>
        {isVisible && (
            <motion.div onClick={scrollToTop}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', stiffness: 100 }}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                gap: '10px',
                paddingBottom: "10px",
                position: 'fixed',
                bottom: '75px',
                right: '10px',
                background: theme === 'light' ? '#fff' : '#000',
                width: '50px',
                height: '40px',
                borderRadius: '100%',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
            >
            <FaArrowUp style={{color: '#fff', fontSize: '16px', alignItems: 'center', justifyContent: 'center' }}/>
        </motion.div>
        )}
    </>
        
    )
}

export default ScrollUp
