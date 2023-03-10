import "./App.css";
import { useState } from "react";
function App() {
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [prevDisplay, setPrevDisplay] = useState("");

  const symbols = ["+", "-", "÷", "*"];

  const numbers = (e) => {
    let value = e.target.innerText;

    if (value == "." && prevDisplay.includes(".")) {
      return null;
    }
    if (!symbols.includes(prevDisplay.at(-1)) || !symbols.includes(value)) {
      setPrevDisplay(prevDisplay + value);
    }
  };

  const deleteHandler = () => {
    let newNumbers = prevDisplay.slice(0, -1);
    setPrevDisplay(newNumbers);
  };

  const calculate = () => {
    if (!symbols.includes(prevDisplay.charAt(prevDisplay.length - 1))) {
      setCurrentDisplay(eval(prevDisplay));
    }
  };
  // const executeHandler = () => {};
  const clearHandler = () => {
    setCurrentDisplay(" ");
    setPrevDisplay(" ");
  };
  return (
    <div className="App">
      <div className="calculatorContainer">
        <div className="displayContainer">
          <div className="displayTop"></div>
          <div className="displayBottom">
            <span className="prevNumbers">{prevDisplay}</span>
            <span className="currentNumbers">{currentDisplay}</span>
          </div>
        </div>
        <div className="operatorContainer">
          <button>%</button>
          <button>CE</button>
          <button onClick={clearHandler}>C</button>
          <button onClick={deleteHandler}>DEL</button>
          <button>1/x</button>
          <button>x2</button>
          <button>logx</button>
          <button onClick={numbers}>÷</button>
          <button onClick={numbers}>7</button>
          <button onClick={numbers}>8</button>
          <button onClick={numbers}>9</button>
          <button onClick={numbers}>*</button>
          <button onClick={numbers}>4</button>
          <button onClick={numbers}>5</button>
          <button onClick={numbers}>6</button>
          <button onClick={numbers}>-</button>
          <button onClick={numbers}>1</button>
          <button onClick={numbers}>2</button>
          <button onClick={numbers}>3</button>
          <button onClick={numbers}>+</button>
          <button>+/-</button>
          <button onClick={numbers}>0</button>
          <button onClick={numbers}>.</button>
          <button onClick={calculate} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
