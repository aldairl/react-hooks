import { todoReducer } from "../../src/08-useReducer/todoReducer";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../../src/config/actions";

describe("Tset in todoReducer.js", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
  ];
  it("Should return the initial state", () => {
    const state = todoReducer(initialState, {});
    expect(state).toBe(initialState);
  });

  it("Should add a new todo", () => {
    const action = {
      type: ADD_TODO,
      payload: { id: 2, description: "Todo added", done: false },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  it("Should toggle the todo state", () => {
    const action = {
      type: TOGGLE_TODO,
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    const todo = newState.find((todo) => todo.id === action.payload);
    expect(todo.done).toBeTruthy();
  });

  it("Should remove a todo", () => {
    const action = {
      type: REMOVE_TODO,
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    
    // must not contain the todo object
    const existTodo = newState.find((todo) => todo.id === action.payload);
    expect(existTodo).toBeFalsy();

    // the length of new state must be -1 length initial state
    const lengthState = initialState.length;
    expect(newState.length).toBe(lengthState - 1);
  });
});
