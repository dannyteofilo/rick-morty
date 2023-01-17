import { Dispatch } from "react";
import { CharactersInterface } from "./Characters.interface";

export interface AuthContextProps {
  user: string;
  setUser: Dispatch<string>;
  characters: Array<CharactersInterface>;
  setCharacters: Dispatch<Array<CharactersInterface>>;
  setLoading: Dispatch<boolean>;
  loading: boolean;
}
