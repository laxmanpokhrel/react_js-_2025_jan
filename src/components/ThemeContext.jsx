import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const setTheme = (mode) => {
    setThemeMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
