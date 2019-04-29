import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  id,
  placeholder,
  className,
  type,
  name,
  value,
  onChange,
  label,
  onClick
}) => (
  <div className="input-wrapper">
    <input
      id={id}
      placeholder={placeholder}
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
    <span>{label}</span>
  </div>
);

InputField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default InputField;
