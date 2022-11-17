import './App.css';
import AppBar from "./components/AppBar";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';

import { AppRouter } from './routes';
import { LightTheme } from './shared/themes';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>  
      <BrowserRouter>
        <AppBar />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}


