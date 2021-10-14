import React, { useContext, createContext } from "react";

const UnitContext = createContext();

export default function UnitProvider({ children }) {
  const units = ["Matriz", "Curitiba", "Castro", "Carambeí"];

  return (
    <UnitContext.Provider value={{ units }}>{children}</UnitContext.Provider>
  );
}

export const useUnit = () => useContext(UnitContext);
