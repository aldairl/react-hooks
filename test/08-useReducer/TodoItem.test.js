import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Test in <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Get power stone",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onTogleTodoMock = jest.fn();

  it("Should show the todo pending", () => {
    render(
      <TodoItem
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
        todo={todo}
      />
    );

    const description = screen.getByLabelText("description");
    expect(description.className).not.toContain("text-decoration-line-through");
  });

  it("Should show the todo complete if done property is true", () => {
    todo.done = true;
    render(
      <TodoItem
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
        todo={todo}
      />
    );

    const description = screen.getByLabelText("description");
    expect(description.className).toContain("text-decoration-line-through");
  });

  it("Should excute onToggleTodo if the user does click in span description", () => {
    render(
      <TodoItem
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
        todo={todo}
      />
    );

    const descriptionElement = screen.getByLabelText("description");
    fireEvent.click(descriptionElement);

    expect(onTogleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  it("Should execute onDeleteTodo id the user does click in delete button", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
