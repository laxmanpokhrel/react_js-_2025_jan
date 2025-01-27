// NOTES:
// 1. Global state management
// 2. Theme management
// 3. Authentication State
// 4. npm packages

import { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [authentication, setAuthentication] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const logout = () => {
    setAuthentication(false);
  };

  const login = () => {
    setAuthentication(true);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, authentication, toggleTheme, logout, login }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
