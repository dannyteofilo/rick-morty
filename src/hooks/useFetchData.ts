import { getCharacters } from "../helpers/request";
import { useAppContext } from "./useAppContext";

export const useFetchData = () => {
  const { setCharacters, setLoading } = useAppContext();

  const handleGetCharacters = (data: string) => {
    setLoading(true);
    getCharacters(data).then((resp) => {
      setCharacters(resp);
      setLoading(false);
    });
  };

  return {
    handleGetCharacters,
  };
};
