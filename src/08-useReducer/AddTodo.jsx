import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const AddTodo = ({ onNewTodo }) => {
  const { formState, onInputchange, onResetForm } = useForm({
    description: "",
  });
  const { description } = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Agregar TODO"
        className="form-control"
        name="description"
        required
        value={description}
        onChange={onInputchange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
