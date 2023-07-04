const buttonKeys = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Buttons() {
  return (
    <div className="buttons">
      {buttonKeys.map((key) => <button type="button" key={key}>{key}</button>)}
    </div>
  );
}

export default Buttons;
