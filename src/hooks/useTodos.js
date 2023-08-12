import { useEffect, useReducer } from "react";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../config/actions";
import { todoReducer } from "../08-useReducer/todoReducer";

const initState = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    const action = {
      type: ADD_TODO,
      payload: todo,
    };
    dispatch(action);
  };

  const onDeleteTodo = (id) => {
    const action = {
      type: REMOVE_TODO,
      payload: id,
    };
    dispatch(action);
  };

  const onTogleTodo = (id) => {
    const action = {
      type: TOGGLE_TODO,
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodos: todos.filter((todo) => !todo.done).length,
    onNewTodo,
    onDeleteTodo,
    onTogleTodo,
  };
};
