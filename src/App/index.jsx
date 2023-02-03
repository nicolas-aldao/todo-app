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
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert";
// components
import { CreateTodoButton } from "../components/CreateTodoButton";
// assets
import ".././global.scss";

// TODO: queda pendiente el reto del final de la clase:
// https://platzi.com/clases/2457-react-patrones-render/40865-completando-el-storageeventlistener/

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
    searchValue,
    synchronizeTODOs,
  } = useTodos();
  const closeModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Layout className="layout">
      <>
        <TodoCounter state={{ completedTodos, totalTodos }} />
        <TodoSearch state={{ setSearchValue }} />
        <TodoList // RENDER PROPS, we separate validation from components, the validation is inside this component
          error={error} // We can put our variables
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={showTodos}
          onError={() => <p>Oops, there was a problem...</p>} // We can put our components
          onLoading={() => <p>Loading, wait please...</p>}
          onEmptyTodos={() => <p>¡Create your first TODO!</p>}
          searchText={searchValue}
          onEmptySearchResults={(searchText) => (
            <p>No hay resultados para '{searchText}'</p>
          )}
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
      {/* HOC */}
      <ChangeAlertWithStorageListener synchronize={synchronizeTODOs} />
    </Layout>
  );
};

export default App;
