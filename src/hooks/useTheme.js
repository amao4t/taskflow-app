import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook to manage dark/light theme
 * @returns {Object} - { theme, toggleTheme }
 */
export const useTheme = () => {
  // Get theme from localStorage, default to 'light'
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};

