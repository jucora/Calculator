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
    this.symbols = ["+", "-", "%", "÷", "x"];
    this.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }

  number(buttonName) {
    let { total, next } = this.state || {};

    if (this.numbers.includes(buttonName)) {
      this.setState({ displayText: this.state.displayText + buttonName });
      if (!total) {
        this.setState({ total: buttonName });
      } else if (
        total &&
        !next &&
        !this.symbols.includes(this.state.displayText.slice(-1))
      ) {
        this.setState({ total: this.state.total + buttonName });
      } else if (
        total &&
        !next &&
        this.symbols.includes(this.state.displayText.slice(-1))
      ) {
        this.setState({ next: buttonName });
      } else if (total && next && buttonName !== "=") {
        this.setState({ next: this.state.next + buttonName });
      }
    }
  }

  symbol(buttonName) {
    let { total, next, operation, displayText } = this.state || {};
    if (this.symbols.includes(buttonName)) {
      if (total && next) {
        this.setState({ operation: buttonName });
        let newTotal = calculate({ total, next }, operation);
        this.setState({ total: newTotal, next: null });

        this.setState({
          displayText: newTotal.toString() + buttonName,
        });
      } else if (total && !next) {
        if (!this.symbols.includes(displayText.slice(-1))) {
          this.setState({
            operation: buttonName,
            displayText: this.state.displayText + buttonName,
          });
        }
      }
    }
  }

  decimal(buttonName) {
    let { total, next } = this.state || {};
    if (buttonName === "." && (total || next)) {
      if (total && !next && !total.includes(buttonName)) {
        this.setState({ total: this.state.total + buttonName });

        this.setState({ displayText: this.state.displayText + buttonName });
      } else if (total && next && !next.includes(buttonName)) {
        this.setState({ next: this.state.next + buttonName });

        this.setState({ displayText: this.state.displayText + buttonName });
      }
    }
  }

  equal(buttonName) {
    let { total, next, operation } = this.state || {};
    if (buttonName === "=") {
      if (total && next) {
        total = calculate({ total, next }, operation);
      }
      total = total.toString();
      this.setState({ displayText: total });
      this.setState({
        total: total,
        next: null,
        afterResult: true,
      });
    }
  }

  clear(buttonName) {
    if (buttonName === "AC") {
      this.setState({
        total: null,
        next: null,
        displayText: "",
      });
    }
  }

  changeSymbol(buttonName) {
    if (buttonName === "+/-") {
      let { total, next } = this.state || {};
      let newValue;
      newValue = calculate({ total, next }, buttonName);
      if (total && next) {
        this.setState({
          next: newValue.toString(),
          displayText:
            newValue > 0
              ? this.state.total + this.state.operation + newValue.toString()
              : this.state.total +
                this.state.operation +
                "(" +
                newValue.toString() +
                ")",
        });
        console.log("state 1", this.state);
      } else if (total && !next) {
        this.setState({
          total: newValue,
          displayText: newValue.toString(),
        });
      }
    }
  }

  handleClick(buttonName) {
    this.number(buttonName);
    this.symbol(buttonName);
    this.decimal(buttonName);
    this.equal(buttonName);
    this.changeSymbol(buttonName);
    this.clear(buttonName);
  }

  render() {
    return (
      <div className="app">
        <Display result={this.state.displayText} />
        <ButtonPanel clickHandler={this.handleClick.bind(this)} />
      </div>
    );
  }
}
