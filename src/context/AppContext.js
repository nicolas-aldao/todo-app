import React from "react";
import { useCompleteTodo } from "./useCompleteTodo";

const AppContext = React.createContext();

function AppContextProvider(props) {
  return (
    <AppContext.Provider value={{ useCompleteTodo }}></AppContext.Provider>
  );
}

export {AppContext, AppContextProvider};
