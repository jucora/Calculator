import React, { Component } from "react";
import Display from "./Display";
import "../css/style.scss";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      displayText: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.symbols = ["+", "-", "%", "÷", "x"];
    this.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  checkAfterResult(buttonName) {
    this.setState({
      total: buttonName,
      next: null,
      displayText: buttonName,
    });
  }

  number(buttonName) {
    const { total, next, displayText } = this.state;

    this.setState({
      displayText: displayText + buttonName,
    });
    if (!total) {
      this.setState({ total: buttonName });
    } else if (
      total &&
      !next &&
      !this.symbols.includes(displayText.slice(-1))
    ) {
      this.setState({ total: total + buttonName });
    } else if (total && !next && this.symbols.includes(displayText.slice(-1))) {
      this.setState({ next: buttonName });
    } else if (total && next && buttonName !== "=") {
      this.setState({ next: next + buttonName });
    }
  }

  symbol(buttonName) {
    const { total, next, operation, displayText } = this.state;
    if (total && next) {
      this.setState({ operation: buttonName });
      const newTotal = calculate({ total, next }, operation);
      this.setState({
        total: newTotal,
        next: null,
        displayText: newTotal.toString() + buttonName,
      });
    } else if (total && !next) {
      if (!this.symbols.includes(displayText.slice(-1))) {
        this.setState({
          operation: buttonName,
          displayText: displayText + buttonName,
        });
      }
    }
  }

  decimal(buttonName) {
    const { total, next, displayText } = this.state || {};

    if (total) {
      if (displayText.slice(-1) !== buttonName && !total.includes(buttonName)) {
        this.setState({ total: total + buttonName });
        this.setState({ displayText: displayText + buttonName });
      }
    }
    if (next) {
      if (displayText.slice(-1) !== buttonName && !next.includes(buttonName)) {
        this.setState({ next: next + buttonName });
        this.setState({ displayText: displayText + buttonName });
      }
    }
  }

  equal() {
    const { next, operation, displayText } = this.state || {};
    let { total } = this.state;
    if (total && next && displayText !== "") {
      total = calculate({ total, next }, operation);
      this.setState({ displayText: `= ${total.toString()}` });
      this.setState({
        total: null,
        next: null,
      });
    }

    if (total && !next) {
      this.setState({
        displayText: total,
        next: null,
        operation,
      });
    }
    if (total && !next && displayText.slice(-1) === "%") {
      this.setState({
        displayText: calculate({ total, next }, "%").toString(),
      });
    }
    setTimeout(() => {
      this.setState({ total: null, next: null, displayText: "" });
    }, 1000);
  }

  clear() {
    this.setState({
      total: null,
      next: null,
      displayText: "",
    });
  }

  changeSymbol(buttonName) {
    if (buttonName === "+/-") {
      const { total, next, operation } = this.state || {};

      const newValue = calculate({ total, next }, buttonName);
      if (total && next) {
        this.setState({
          next: newValue.toString(),
          displayText:
            newValue > 0
              ? total + operation + newValue.toString()
              : `${total + operation}(${newValue.toString()})`,
        });
      } else if (total && !next) {
        this.setState({
          total: newValue,
          displayText: newValue.toString(),
        });
      }
    }
  }

  handleClick(buttonName) {
    if (this.numbers.includes(buttonName)) {
      this.number(buttonName);
    }
    if (this.symbols.includes(buttonName)) {
      this.symbol(buttonName);
    }
    if (buttonName === ".") {
      this.decimal(buttonName);
    }
    if (buttonName === "=") {
      this.equal(buttonName);
    }
    if (buttonName === "+/-") {
      this.changeSymbol(buttonName);
    }
    if (buttonName === "AC") {
      this.clear();
    }
  }

  render() {
    const { displayText } = this.state;
    return (
      <div className="app">
        <Display result={displayText} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
