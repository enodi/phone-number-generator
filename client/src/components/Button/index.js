import React from "react";
import PropTypes from "prop-types";

const Button = ({ id, className, text, type, onClick }) => (
  <button id={id} className={className} type={type} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
