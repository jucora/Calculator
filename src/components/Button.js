import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandler, buttonName } = this.props;
    return clickHandler(buttonName);
    // return this.props.clickHandler(this.props.buttonName);
  }

  render() {
    const { buttonName, color, wide } = this.props;
    return (
      <button
        onClick={this.handleClick}
        className="button"
        type="button"
        style={{
          width: `${wide ? '50%' : '25%'}`,
          background: `${color || null}`,
        }}
      >
        {buttonName}
      </button>
    );
  }
}

Button.defaultProps = {
  color: 'orange',
  buttonName: '',
  wide: false,
  clickHandler: null,
};

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
