import './App.css';
import AppBar from "./components/AppBar";
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <AppRouter />
    </BrowserRouter>
    
  );
}


