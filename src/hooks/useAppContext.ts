import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AuthContextProps } from "../interfaces/AppContext.interface";

export const useAppContext = () => {
  const context = useContext<AuthContextProps | undefined>(AppContext);
  if (context === undefined) {
    throw new Error("Error");
  }
  return context;
};
