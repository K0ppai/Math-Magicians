import './Calculator.css';

const buttonKeys = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="display">0</div>
      <div className="buttons">
        {buttonKeys.map((key) => <button type="button" key={key}>{key}</button>)}
      </div>
    </div>
  );
}

export default Calculator;
