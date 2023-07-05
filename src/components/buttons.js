import React from 'react';
import PropTypes from 'prop-types';

const buttonKeys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Buttons({ handleClick }) {
  return (
    <div className="buttons">
      {buttonKeys.map((key) => <button type="button" key={key} onClick={handleClick}>{key}</button>)}
    </div>
  );
}

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
