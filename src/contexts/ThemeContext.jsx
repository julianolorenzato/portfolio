import React, { useState, useContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import themes from '../styles/themes'

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes[0])

    const toggleTheme = () => {
		theme === themes[0] ? setTheme(themes[1]) : setTheme(themes[0])
	}
    return(
        <StyledThemeProvider theme={theme}>
            <ThemeContext.Provider value={[theme, toggleTheme]}>
                {children}
            </ThemeContext.Provider>
        </StyledThemeProvider>
    )
}

export const useToggleTheme = () => useContext(ThemeContext)