import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-multipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("test in <MultipleCustomHooks/>", () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should shows default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("BreakingBad Quotes"));
    expect(screen.getByText("loading..."));
    const nextButton = screen.getByRole("button", {});
    expect(nextButton.disabled).toBeTruthy();
  });

  it("should show a quote", () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: "quote of test",
          author: "aldair luna",
        },
      ],
      isLoading: false,
      error: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("quote of test"));
    expect(screen.getByText("aldair luna"));

    const nextButton = screen.getByRole("button", {});
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should call increment function", () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: "quote of test",
          author: "aldair luna",
        },
      ],
      isLoading: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", {});

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
