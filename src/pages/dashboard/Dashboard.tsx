import { LayoutBaseDePagina } from '../../shared/layouts';

interface IDashboardProps {
  children: React.ReactNode
}

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina titulo='Página Inicial' barraDeFerramentas={<>Ferramentas</>}>

      Testando
    </LayoutBaseDePagina>
  );
};