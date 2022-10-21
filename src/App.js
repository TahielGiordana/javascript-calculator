import "./App.css";
import React from "react";
import { createPortal } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "0",
      last: "0",
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleNumber(event) {
    let number = event.target.value;

    if (number === "0") {
      if (this.state.last !== "0") {
        this.setState({
          formula: this.state.formula + number,
          last: this.state.last + number,
        });
      }
    } else {
      if (this.state.formula[this.state.formula.length - 1] === "0") {
        this.setState({
          formula:
            this.state.formula.substring(0, this.state.formula.length - 1) +
            number,
          last: this.state.last + number,
        });
      } else if (isNaN(this.state.last)) {
        this.setState({
          formula: this.state.formula + number,
          last: number,
        });
      } else {
        this.setState({
          formula: this.state.formula + number,
          last: this.state.last + number,
        });
      }
    }
  }

  handleOperator(event) {
    let operator = event.target.value;
    if (isNaN(this.state.last)) {
      this.setState({
        formula:
          this.state.formula.substring(0, this.state.formula.length - 1) +
          operator,
        last: operator,
      });
    } else {
      this.setState({
        formula: this.state.formula + operator,
        last: operator,
      });
    }
  }

  handleClear() {
    this.setState({
      formula: "0",
      last: "0",
    });
  }

  handleEquals() {
    let result = eval(this.state.formula);
    this.setState({
      formula: result,
      last: result,
    });
  }

  handleDecimal() {
    if (this.state.last !== ".") {
      this.setState({
        formula: this.state.formula + ".",
        last: ".",
      });
    }
  }

  render() {
    return (
      <div id="calculator">
        <input id="display" value={this.state.formula} disabled />
        <div className="button-wrapper">
          <button id="equals" onClick={this.handleEquals} value="=">
            =
          </button>
          <button id="zero" onClick={this.handleNumber} value="0">
            0
          </button>
          <button id="one" onClick={this.handleNumber} value="1">
            1
          </button>
          <button id="two" onClick={this.handleNumber} value="2">
            2
          </button>
          <button id="three" onClick={this.handleNumber} value="3">
            3
          </button>
          <button id="four" onClick={this.handleNumber} value="4">
            4
          </button>
          <button id="five" onClick={this.handleNumber} value="5">
            5
          </button>
          <button id="six" onClick={this.handleNumber} value="6">
            6
          </button>
          <button id="seven" onClick={this.handleNumber} value="7">
            7
          </button>
          <button id="eight" onClick={this.handleNumber} value="8">
            8
          </button>
          <button id="nine" onClick={this.handleNumber} value="9">
            9
          </button>
          <button id="add" onClick={this.handleOperator} value="+">
            +
          </button>
          <button id="subtract" onClick={this.handleOperator} value="-">
            -
          </button>
          <button id="multiply" onClick={this.handleOperator} value="*">
            X
          </button>
          <button id="divide" onClick={this.handleOperator} value="/">
            /
          </button>
          <button id="decimal" onClick={this.handleOperator} value=".">
            .
          </button>
          <button id="clear" onClick={this.handleClear} value="AC">
            AC
          </button>
        </div>
      </div>
    );
  }
}

export default App;
