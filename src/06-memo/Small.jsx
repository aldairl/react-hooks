import PropTypes from "prop-types";
import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("renderized again :(");
  return <small>{value}</small>;
})
Small.displayName = 'Small'
Small.propTypes = {
  value: PropTypes.any.isRequired,
};
