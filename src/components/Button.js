import React from "react";
import PropTypes from "prop-types";

const setWidth = (wide) => {
  return wide ? "50%" : "25%";
};

const Button = (props) => {
  const { buttonName, color, wide } = props;
  const buttonStyle = {
    backgroundColor: color,
    width: setWidth(wide),
    height: "100px",
    fontSize: "32px",
  };
  return (
    <button className="button" type="button" style={buttonStyle}>
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  buttonName: "",
  color: "orange",
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
