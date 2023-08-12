import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="name"
        className="form-control"
      />

      <button onClick={onClick} className="btn btn-primary mt-2">
        set focus
      </button>
    </>
  );
};
