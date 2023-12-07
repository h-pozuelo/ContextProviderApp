/**
 * 2.
 * To `./src/components/MainComponent.js`
 */
import React from "react";

export const AppContext = React.createContext({
  getListaPacientes: () => [],
  getPaciente: (nombre) => {},
});
