import { useState } from "react";
import { useLocalStorage } from "../context/useLocalStorage";

function useTodos() {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const {
    item: TODOs,
    saveItem: setTODOs,
    synchronize: synchronizeTODOs,
    error,
    loading,
  } = useLocalStorage("TODOs_V1", []);
  const completedTodos = TODOs.filter((todo) => todo.completed).length;
  const totalTodos = TODOs.length;
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

  const addTodo = (text) => {
    const newTodo = {
      text: text,
      completed: false,
    };
    const newTodos = [...TODOs];
    newTodos.push(newTodo);
    setTODOs(newTodos);
  };
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

  return {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    showTodos,
    TODOs,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    error,
    loading,
    synchronizeTODOs
  };
}

export { useTodos };
