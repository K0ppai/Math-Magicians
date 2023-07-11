import { useState } from 'react';
import '../styles/calculator.css';
import Buttons from './buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [display, setDisplay] = useState({ total: null, next: null, operation: null });

  const handleClick = (e) => {
    setDisplay(calculate(display, e.target.innerHTML));
  };

  const { total, next, operation } = display;
  return (
    <div className="container">
      <h1>Let&apos;s do some math!</h1>
      <div className="calculator-container">
        <div className="display">{next || operation || total || 0}</div>
        <Buttons
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Calculator;
