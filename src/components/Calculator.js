import './Calculator.css';
import Buttons from './buttons';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="display">0</div>
      <Buttons />
    </div>
  );
}

export default Calculator;
