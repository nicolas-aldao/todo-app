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
import { CloseButton } from "../components/CloseButton";

const App = () => {
  const {
    showTodos,
    completeTodo,
    deleteTodo,
    error,
    loading,
    completedTodos,
    todosTotal,
    setSearchValue,
    openModal,
    setOpenModal,
    addTodo,
  } = useTodos();
  const closeModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Layout className="layout">
      <>
        <TodoCounter state={{ completedTodos, todosTotal }} />
        <TodoSearch state={{ setSearchValue }} />
        <TodoList TODOs={showTodos}>
          {error && <p>Oops, there was a problem...</p>}
          {loading && <p>Loading, wait please...</p>}
          {!loading && !showTodos.length && <p>¡Create your first TODO!</p>}
          {showTodos.length > 0 &&
            showTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
        </TodoList>
      </>
      <CreateTodoButton state={{ openModal, setOpenModal }} />
      {openModal && (
        <Modal>
          <CloseButton state={{openModal, setOpenModal}}/>
          <FormAdd
            state={{ setOpenModal, addTodo }}
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
