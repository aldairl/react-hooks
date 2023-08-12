const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe("test in useCounter custom hook", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should return counter equal 100 if 100 is passed as parameter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("should increment counter if increment function is called", () => {
    const { result } = renderHook(() => useCounter(30));
    const { increment } = result.current;

    act(() => {
      increment(); //increment in 1
      increment(2); //increment in 2
    });

    expect(result.current.counter).toBe(33);
  });

  it("should decrement counter is decrement function is called", () => {
    const { result } = renderHook(() => useCounter(50));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(4);
    });

    expect(result.current.counter).toBe(45);
  });

  it("sould reset counter if reset function is called after having called the decrement or increment functions", () => {
    const { result } = renderHook(() => useCounter(35));
    const { increment, decrement, reset } = result.current;

    act(() => {
      increment(5);
      decrement(10);
      reset();
    });

    expect(result.current.counter).toBe(35);
  });
});
