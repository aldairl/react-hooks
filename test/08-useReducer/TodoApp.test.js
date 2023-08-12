import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks";

jest.mock("../../src/hooks");

describe("Test in <TodoApp /> component", () => {
  it("Should show correctly the component", () => {
    useTodos.mockReturnValue({
      todos: [
        { id: 1, description: "Todo #1", done: false },
        { id: 2, description: "Todo #2", done: true },
      ],
      onDeleteTodo: jest.fn(),
      onTogleTodo: jest.fn(),
      onNewTodo: jest.fn(),
      todosCount: 2,
      pendingTodos: 1,
    });

    render(<TodoApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByText("pendientes: 1")).toBeTruthy();

  });
});
