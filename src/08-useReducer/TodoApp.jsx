import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    onDeleteTodo,
    onTogleTodo,
    onNewTodo,
    todosCount,
    pendingTodos,
  } = useTodos();

  return (
    <main>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodos}</small>
      </h1>
      <hr />

      <section className="row">
        <article className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onTogleTodo={onTogleTodo}
          />
        </article>

        <article className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo onNewTodo={onNewTodo} />
        </article>
      </section>
    </main>
  );
};
