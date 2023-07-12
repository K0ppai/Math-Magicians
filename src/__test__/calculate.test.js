import calculate from '../logic/calculate';

const object = {
  total: null,
  next: null,
  operation: null,
};

describe('testing calculate function', () => {
  it('when AC button is clicked, the result should be cleared', () => {
    const buttonName = 'AC';
    const obj = { ...object, next: '5' };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });

  it('when next and total is 0, then it should return an empty object', () => {
    const buttonName = '0';
    const obj = { ...object, next: '0', total: '0' };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });

  it('when there is no operation, update next and clear the value', () => {
    const buttonName = '5';
    const obj = { ...object };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });

  it('when the button is . ', () => {
    const buttonName = '.';
    const obj = { ...object, next: '0.985' };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });

  it('when the button is = ', () => {
    const buttonName = '=';
    const obj = { total: '5050', next: '0505', operation: '+' };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });

  it('when user puts an operation after pressing = ', () => {
    const buttonName = '-';
    const obj = { ...object, total: '55' };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });
});
