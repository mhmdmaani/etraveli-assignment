import Film from '../api/Film';
import { useData } from './useData';

export const useFilms = () => {
  const { data, isLoading } = useData(Film.getAll);

  return {
    data,
    isLoading,
  };
};
