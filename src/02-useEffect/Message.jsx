import { useEffect, useState } from "react";

export const Message = () => {
  const [coors, setCoors] = useState({});

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coors = { x, y };
      console.log(coors);
      setCoors(coors);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User alredy exist</h3>
      {JSON.stringify(coors)}
    </>
  );
};
