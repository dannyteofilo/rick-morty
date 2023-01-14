import React, { createContext, useState } from "react";
import { fakeAuthProvider } from "../api/auth";
import { AuthContextProps } from "../interfaces/AppContext.interface";
import { CharactersInterface } from "../interfaces/Characters.interface";

export const AppContext = createContext<AuthContextProps | undefined>(
  undefined
);
const Provider = AppContext.Provider;

export const AppProvider = ({ children }: any) => {
  const [characters, setCharacters] = useState<Array<CharactersInterface>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  let signIn = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  let signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };
  return (
    <Provider
      value={{
        characters,
        setCharacters,
        loading,
        setLoading,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </Provider>
  );
};
