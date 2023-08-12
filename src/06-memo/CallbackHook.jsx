import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(12);

//   memo and usecallback work together

  const increment = useCallback((value=1)=>{
    setCounter( counter => counter + value)
  }, [])

//   const increment = () => {
//     setCounter(counter + 1);
//   };

  return (
    <>
      <h1>Use callback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
