import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { buttonName, color, wide } = props;

  return (
    <button
      className="button"
      type="button"
      style={{
        width: `${wide ? "50%" : "25%"}`,
        background: `${color ? color : null}`,
      }}
    >
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  color: "orange",
  buttonName: "",
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
