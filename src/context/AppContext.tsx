import React, { createContext, useState } from "react";
import { AuthContextProps } from "../interfaces/AppContext.interface";
import { CharactersInterface } from "../interfaces/Characters.interface";

export const AppContext = createContext<AuthContextProps | undefined>(
  undefined
);
const Provider = AppContext.Provider;

export const AppProvider = ({ children }: any) => {
  const [characters, setCharacters] = useState<Array<CharactersInterface>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");


  return (
    <Provider
      value={{
        characters,
        setCharacters,
        loading,
        setLoading,
        user,
        setUser,        
      }}
    >
      {children}
    </Provider>
  );
};
