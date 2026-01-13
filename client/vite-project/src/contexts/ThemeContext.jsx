import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      // Handle both string values and boolean values
      if (saved === 'dark' || saved === 'true') {
        return true
      } else if (saved === 'light' || saved === 'false') {
        return false
      }
      // Try to parse as JSON for backward compatibility
      try {
        return JSON.parse(saved)
      } catch {
        return false
      }
    }
    return false
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    // Create explosion effect
    const explosion = document.createElement('div')
    explosion.className = 'theme-explosion'
    document.body.appendChild(explosion)
    
    setTimeout(() => {
      setIsDark(!isDark)
      document.body.removeChild(explosion)
    }, 300)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}