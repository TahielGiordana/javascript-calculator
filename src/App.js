import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="calculator">
      <div id="display">
        <p id="display-formula"></p>
        <p id="display-result"></p>
      </div>
      <div className="button-wrapper">
        <button id="equals">=</button>
        <button id="zero">0</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="add">+</button>
        <button id="substract">-</button>
        <button id="multiply">x</button>
        <button id="divide">/</button>
        <button id="decimal">.</button>
        <button id="clear">AC</button>
      </div>
    </div>
  );
}

export default App;
