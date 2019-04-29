import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, className }) => <h2 className={className}>{text}</h2>;

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export default Title;
