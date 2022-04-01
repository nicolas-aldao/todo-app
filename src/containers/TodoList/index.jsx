import React from "react";
import "./TodoList.scss";
const TodoList = (props) => {
  return (
    <section>
      <ul className="todolist">
        {/* {props.todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={()=> completeTodo(todo.text)}
          />
        ))} */}
        {props.children}
      </ul>
      <p className="textsize1">
        Lorem ipsum dolor sit amet. Vel incidunt mollitia in officiis laudantium
        id quasi fugit est voluptate corporis. Ad unde labore sit sint
        voluptatibus qui mollitia fugiat non nesciunt consequuntur! Ex sint
        cumque et nesciunt ullam in beatae nesciunt ea facere voluptas rem neque
        similique in illum consequatur. Nam quis magni ea voluptatem quia ad
        optio omnis sequi eaque At quis adipisci. Et rerum dicta qui perferendis
        quam eum voluptatem dolores et quibusdam iusto.
      </p>
      <p className="textsize2">Lorem ipsum dolor sit amet</p>
      <p className="textsize3">Lorem ipsum dolor sit amet</p>
    </section>
  );
};

export { TodoList };
