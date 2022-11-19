import { useCallback, useContext, useState } from 'react';
import { createContext } from 'react';


interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IAppThemeProviderProps {
  children: React.ReactNode
}

export const AppDrawerProvide: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};