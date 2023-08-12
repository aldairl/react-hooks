import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterations = 100) => {
  for (let i = 0; i < iterations; i += 1) {
    console.log("iterating :)");
  }

  return `${iterations} iterations done`;
};

export const MemorizeHook = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(4000);

  const iretationsMemorized = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>Memorize Hook</h1>
      <hr />

      <h1>
        <small>{iretationsMemorized}</small>
      </h1>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        show/hidde {JSON.stringify(show)}
      </button>
    </>
  );
};
