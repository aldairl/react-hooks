import PropTypes from "prop-types";
import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("render in children");
  return (
    <button className="btn btn-primary" onClick={() => {increment(5);}}>
      incrementar + 1
    </button>
  );
});

ShowIncrement.displayName
ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
