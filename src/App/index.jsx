import React from "react";
import { useTodos } from "./useTodos";
// containers
import { Layout } from "../containers/Layout";
import { TodoCounter } from "../containers/TodoCounter";
import { TodoSearch } from "../containers/Search";
import { TodoList } from "../containers/TodoList";
import { TodoItem } from "../components/TodoItem";
import { Modal } from "../components/Modal";
import { FormAdd } from "../containers/FormAdd";
// components
import { CreateTodoButton } from "../components/CreateTodoButton";
// assets
import ".././global.scss";

const App = () => {
  const {
    showTodos,
    completeTodo,
    deleteTodo,
    error,
    loading,
    completedTodos,
    setSearchValue,
    openModal,
    setOpenModal,
    addTodo,
    totalTodos,
    searchValue
  } = useTodos();
  const closeModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Layout className="layout">
      <>
        <TodoCounter state={{ completedTodos, totalTodos }} />
        <TodoSearch state={{ setSearchValue }} />
        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={showTodos}
          onError={() => <p>Oops, there was a problem...</p>}
          onLoading={() => <p>Loading, wait please...</p>}
          onEmptyTodos={() => <p>¡Create your first TODO!</p>}
          searchText={searchValue}
          onEmptySearchResults={(searchText) => (
            <p>No hay resultados para '{searchText}'</p>
          )}
          // render={(todo) => (
          //   <TodoItem
          //     key={todo.text}
          //     text={todo.text}
          //     completed={todo.completed}
          //     onComplete={() => completeTodo(todo.text)}
          //     onDelete={() => deleteTodo(todo.text)}
          //   />
          // )}
        >
          {(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
      </>
      <CreateTodoButton state={{ openModal, setOpenModal }} />
      {openModal && (
        <Modal>
          <FormAdd
            state={{ setOpenModal, addTodo, openModal }}
            onClose={() => closeModal()}
            title="Add todo"
            buttonAdd="add"
            placeholder="Cut onion for lunch"
          ></FormAdd>
        </Modal>
      )}
    </Layout>
  );
};

export default App;
