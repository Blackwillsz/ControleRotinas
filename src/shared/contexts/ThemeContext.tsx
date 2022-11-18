import { Box, ThemeProvider } from '@mui/material';
import { ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { createContext } from 'react';
import { DarkTheme, LightTheme } from './../themes';

interface IThemeContextData{
  themeName: 'light' | 'dark'
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

interface IAppThemeProviderProps {
  children: React.ReactNode
}

export const AppThemeProvide: React.FC<IAppThemeProviderProps> =  ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};