import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("test in useForm custom hook", () => {
  const initialForm = {
    name: "Aldair",
    email: "aldairl@gmail.com",
  };

  test("should return default object", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputchange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("sould change the name field of initial form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputchange } = result.current;

    const newName = "pepito";

    const event = {
      target: {
        name: "name",
        value: newName,
      },
    };

    act(() => {
      onInputchange(event);
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test("sould reset the form value if reset function is called", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputchange, onResetForm } = result.current;

    const newName = "pepito";

    const event = {
      target: {
        name: "name",
        value: newName,
      },
    };

    act(() => {
      onInputchange(event);
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
