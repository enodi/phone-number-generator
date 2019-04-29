import React from "react";
import PropTypes from "prop-types";

const Button = ({ id, className, text }) => (
  <button id={id} className={className}>
    {text}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string
};

export default Button;
