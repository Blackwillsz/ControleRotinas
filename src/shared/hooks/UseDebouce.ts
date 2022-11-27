import { useCallback, useRef } from 'react';


/**
 * Hook de timeout ao digitar no campo de pesquisa, aguardando antes de ir 
 * no banco fazer a busca, tanto o delay quanto notDelayInFirstTime pode ser
 * passado como parâmetro na função UseDebounce dentro de ListagemDePessoas
 * personalizando esse tempo de espera.
 * @param delay 
 * @param notDelayInFirstTime 
 * @returns 
 */
export const UseDebounce = (delay = 300, notDelayInFirstTime = true) => {
  const isFirstTime = useRef(notDelayInFirstTime);
  const debouncing = useRef<NodeJS.Timeout>();

  const debounce = useCallback((func: () => void) => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      func();
    } else {
      if (debouncing.current) {
        clearTimeout(debouncing.current);
      }
      debouncing.current = setTimeout(() => func(), delay);
    }
  }, [delay]);

  return { debounce };
};