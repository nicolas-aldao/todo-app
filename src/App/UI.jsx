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
        <p className="textsize1">
          Lorem ipsum dolor sit amet. Vel incidunt mollitia in officiis
          laudantium id quasi fugit est voluptate corporis. Ad unde labore sit
          sint voluptatibus qui mollitia fugiat non nesciunt consequuntur! Ex
          sint cumque et nesciunt ullam in beatae nesciunt ea facere voluptas
          rem neque similique in illum consequatur. Nam quis magni ea voluptatem
          quia ad optio omnis sequi eaque At quis adipisci. Et rerum dicta qui
          perferendis quam eum voluptatem dolores et quibusdam iusto.
        </p>
        <p className="textsize2">Lorem ipsum dolor sit amet</p>
        <p className="textsize3">Lorem ipsum dolor sit amet</p>
      </Layout>
    </React.Fragment>
  );
};

export { UI };
