import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const SubHeader = (props) => (
  <div className="sub-header">
    <div className="content-container">
      <h4 className="sub-header__title">{props.title}</h4>
    </div>
  </div>
);

SubHeader.propTypes = {
  title: PropTypes.string,
};

export default SubHeader;
