import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [formState, setFormState] = useState(initialValues);

  const onInputchange = ({ target }) => {
    const { value, name } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialValues);
  };

  return {
    ...formState,
    formState,
    onInputchange,
    onResetForm,
  };
};
