import { Dispatch } from "react";
import { CharactersInterface } from "./Characters.interface";

export interface AuthContextProps {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
  characters: Array<CharactersInterface>;
  setCharacters: Dispatch<Array<CharactersInterface>>;
  setLoading: Dispatch<boolean>;
  loading: boolean;
}
