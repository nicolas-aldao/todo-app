import React from "react";
import { useState } from "react/cjs/react.development";
// containers
import { Layout } from "../containers/Layout";
import { TodoCounter } from "../containers/TodoCounter";
import { TodoSearch } from "../containers/Search";
import { TodoList } from "../containers/TodoList";
import { TodoItem } from "../components/TodoItem";
// components
import { CreateTodoButton } from "../components/CreateTodoButton";
// assets
import ".././global.scss";
// context
// import { AppContextProvider } from "./context/AppContext";
// const defaultTodos = [
//   { text: "Cut onios", completed: true },
//   { text: "Take React course", completed: false },
//   { text: "Cry with the Weeping Woman", completed: false },
// ];

function App() {
  const localStorageTODOs = localStorage.getItem("TODOs_V1");
  let parsedTODOS;
  if (!localStorageTODOs) {
    localStorage.setItem("TODOs_V1", JSON.stringify([]));
    parsedTODOS = [];
  } else {
    parsedTODOS = JSON.parse(localStorageTODOs);
  }
  const saveTODOs = (todos) => {
    localStorage.setItem("TODOs_V1", JSON.stringify(todos));
    setTODOs(todos);
  };
  const [searchValue, setSearchValue] = useState("");
  const [TODOs, setTODOs] = useState(parsedTODOS);
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
    saveTODOs(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = TODOs.findIndex((todo) => todo.text === text);
    const newTodosD = [...TODOs];
    newTodosD.splice(todoIndex, 1);
    saveTODOs(newTodosD);
  };
  return (
    <Layout className="layout">
      <TodoCounter todosTotal={todosTotal} completedTodos={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>

      <TodoList todos={showTodos}>
        {TODOs.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </Layout>
  );
}

export default App;
