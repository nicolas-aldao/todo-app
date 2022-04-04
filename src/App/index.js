import React from "react";
import { useState } from "react/cjs/react.development";
import { UI } from "./UI";

// context
// import { AppContextProvider } from "./context/AppContext";
const ye = [
  { "text": "Cut onios", "completed": true },
  { "text": "Take React course", "completed": false },
  { "text": "Cry with the Weeping Woman", "completed": false }
];
function useLocalStorage(name, defaultValue){
  const localStorageItem = localStorage.getItem(name);
  let parsedItem;
  if (!localStorageItem) {
    console.log("pasa por 1");
    localStorage.setItem(name, JSON.stringify(defaultValue));
    parsedItem = defaultValue;
  } else {
    console.log("pasa por 2");
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = useState(parsedItem);
  const saveItem = (item) => {
    localStorage.setItem(name, JSON.stringify(item));
    console.log('ye ' + JSON.stringify(item));
    setItem(item);
  };
  return [
    item,
    saveItem
  ];
}

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [TODOs, setTODOs] = useLocalStorage("TODOs_V1", ye); // ponerle [] en vez de arreglo
  const completedTodos = TODOs.filter((todo) => todo.completed).length;
  const todosTotal = TODOs.length;
  let showTodos = [];
  if (searchValue.length === 0) {
    showTodos = TODOs;
  } else {
    showTodos = TODOs.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completeTodo = (text) => {
    const todoIndex = TODOs.findIndex((todo) => todo.text === text);
    const newTodos = [...TODOs];
    newTodos[todoIndex].completed = true;
    setTODOs(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = TODOs.findIndex((todo) => todo.text === text);
    const newTodosD = [...TODOs];
    newTodosD.splice(todoIndex, 1);
    setTODOs(newTodosD);
  };
  return (
    <UI/>
  );
}

export default App;
