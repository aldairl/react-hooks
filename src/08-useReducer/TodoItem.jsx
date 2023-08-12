import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onTogleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => onTogleTodo(todo.id)}
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ''
        }`}
        aria-label="description"
      >
        {todo.description}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onTogleTodo: PropTypes.func.isRequired,
};
