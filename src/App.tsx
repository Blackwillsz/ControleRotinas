import AppBar from './components/AppBar';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './routes';
import { AppThemeProvide } from './shared/contexts';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';


export const App = () => {
  return (
    <AppThemeProvide>  
      <BrowserRouter>
        <MenuLateral>
          <AppBar />
          <AppRouter />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvide>
  );
};


