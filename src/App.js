import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="calculatorContainer">
        <div className="displayContainer">
          <div className="displayTop"></div>
          <div className="displayBottom">
            <span className="prevNumbers">0</span>
            <span className="currentNumbers">0</span>
          </div>
        </div>
        <div className="operatorContainer">
          <button>%</button>
          <button>CE</button>
          <button>C</button>
          <button>DEL</button>
          <button>1/x</button>
          <button>x2</button>
          <button>logx</button>
          <button>÷</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>+/-</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
