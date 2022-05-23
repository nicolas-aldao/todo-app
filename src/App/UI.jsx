import React from "react";
import { AppContext } from "../context/AppContext";
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

const UI = () => {
  const { openModal, setOpenModal } = React.useContext(AppContext);
  const closeModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <React.Fragment>
      <Layout className="layout">
        <TodoCounter></TodoCounter>
        <TodoSearch></TodoSearch>
        <AppContext.Consumer>
          {({ showTodos, completeTodo, deleteTodo, error, loading }) => (
            <TodoList TODOs={showTodos}>
              {error && <p>Desespérate, hubo un error...</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}
              {!loading && !showTodos.length && <p>¡Crea tu primer TODO!</p>}
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
          )}
        </AppContext.Consumer>

        <CreateTodoButton />
        {openModal && (
          <Modal>
            <FormAdd
              onClose={() => closeModal()}
              title="Add todo"
              buttonAdd="add"
              placeholder="Cut onion for lunch"
            ></FormAdd>
          </Modal>
        )}
      </Layout>
    </React.Fragment>
  );
};

export { UI };
