import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

interface IDashboardProps {
  children: React.ReactNode
}

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo='Página Inicial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe mostrarBotaoSalvarEFechar/>
      )}>

      Testando

    </LayoutBaseDePagina>
  );
};