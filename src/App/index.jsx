import React from "react";
import { UI } from "./UI";
import { AppContextProvider } from "../context/AppContext";

// context
// import { AppContextProvider } from "./context/AppContext";


function App() {

  
  return (
    <AppContextProvider>
<UI
    />
    </AppContextProvider>
    
  );
}

export default App;
