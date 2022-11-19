import AppBar from './components/AppBar';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './routes';
import { AppDrawerProvide, AppThemeProvide } from './shared/contexts';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';


export const App = () => {
  return (
    <AppThemeProvide>
      <AppDrawerProvide>
        <BrowserRouter>

          <MenuLateral>
            <AppBar />
            <AppRouter />
          </MenuLateral>

        </BrowserRouter>
      </AppDrawerProvide>
    </AppThemeProvide>
  );
};