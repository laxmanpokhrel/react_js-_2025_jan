import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
