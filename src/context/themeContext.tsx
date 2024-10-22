import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as ReStyleThemeProvider } from '@shopify/restyle';
import { darkTheme, theme } from '../theme';

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeType = isDarkMode ? darkTheme : theme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ReStyleThemeProvider theme={themeType}>
        {children}
      </ReStyleThemeProvider>
    </ThemeContext.Provider>
  );
};
