import { ReactNode } from 'react';

import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { Icon } from '@mui/material';

interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer open={true} variant='permanent'>
        <Box width={theme.spacing(24)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(18)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
              src="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/05/bloodborne-1024x640.jpg"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <Icon>home</Icon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            
            </List>                        

          </Box>
          
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(24)}>
        {children}
      </Box>
    </>
  );
};