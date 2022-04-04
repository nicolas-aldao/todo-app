import React from "react";
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

const UI = () => {
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
};

export { UI };
