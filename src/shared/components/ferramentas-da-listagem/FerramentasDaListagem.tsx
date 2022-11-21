import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


interface IFerramentasDaListagem {
  textoDaBusca?: string;
  mostrarImputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> = ({
  textoDaBusca = '',
  aoMudarTextoDeBusca,
  mostrarImputBusca = false,
  aoClicarEmNovo,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      {mostrarImputBusca && (
        <TextField size="small" placeholder="Pesquisar..."
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }} />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            color='secondary'
            disableElevation={true}
            variant='contained'
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}>
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};