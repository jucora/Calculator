import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;
  return (
    <div>
      <button type="button">{buttonName}</button>
    </div>
  );
};

Button.defaultProps = {
  buttonName: '',
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
