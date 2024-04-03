import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = (newTheme) => {
        if (newTheme === 'light') {
            setIsDarkMode(false); 
        } else if (newTheme === 'dark') {
            setIsDarkMode(true); 
        }
    }
    

    const theme = isDarkMode ? 'dark' : 'light';

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
