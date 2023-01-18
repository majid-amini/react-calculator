import "./App.css";
import { useState } from "react";
function App() {
  const [currentDisplay, setCurrentDisplay] = useState([]);

  const numbers = (e) => {
    let value = e.target.innerText;
    setCurrentDisplay(currentDisplay + value);
  };
  const deleteHandler = (e) => {
    let newNumbers = currentDisplay.slice(0, -1);
    setCurrentDisplay(newNumbers);
  };
  return (
    <div className="App">
      <div className="calculatorContainer">
        <div className="displayContainer">
          <div className="displayTop"></div>
          <div className="displayBottom">
            <span className="prevNumbers">{currentDisplay}</span>
            <span className="currentNumbers">0</span>
          </div>
        </div>
        <div className="operatorContainer">
          <button>%</button>
          <button>CE</button>
          <button>C</button>
          <button onClick={deleteHandler}>DEL</button>
          <button>1/x</button>
          <button>x2</button>
          <button>logx</button>
          <button>÷</button>
          <button onClick={numbers}>7</button>
          <button onClick={numbers}>8</button>
          <button onClick={numbers}>9</button>
          <button>*</button>
          <button onClick={numbers}>4</button>
          <button onClick={numbers}>5</button>
          <button onClick={numbers}>6</button>
          <button>-</button>
          <button onClick={numbers}>1</button>
          <button onClick={numbers}>2</button>
          <button onClick={numbers}>3</button>
          <button>+</button>
          <button>+/-</button>
          <button onClick={numbers}>0</button>
          <button>.</button>
          <button className="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
