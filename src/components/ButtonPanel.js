import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    return (
      <div className="buttonPanel">
        <div className="buttonGroup">
          <Button
            buttonName="AC"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="+/-"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="%"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button buttonName="÷" clickHandler={this.handleClick} />
        </div>
        <div className="buttonGroup">
          <Button
            buttonName="7"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="8"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="9"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button buttonName="x" clickHandler={this.handleClick} />
        </div>
        <div className="buttonGroup">
          <Button
            buttonName="4"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="5"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="6"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button buttonName="-" clickHandler={this.handleClick} />
        </div>
        <div className="buttonGroup">
          <Button
            buttonName="1"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="2"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="3"
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button buttonName="+" clickHandler={this.handleClick} />
        </div>
        <div className="buttonGroup">
          <Button
            buttonName="0"
            wide
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button
            buttonName="."
            color="#D3D3D5"
            clickHandler={this.handleClick}
          />
          <Button buttonName="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

ButtonPanel.defaultProps = {
  clickHandler: null,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
