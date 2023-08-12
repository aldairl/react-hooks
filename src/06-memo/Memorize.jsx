import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(1);
  return (
    <>
      <h1>Memorize</h1>
      <hr />

      <h1>
        Counter: <Small value={counter} />
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
