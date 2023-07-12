import operate from '../logic/operate';

describe('test_the_operator_logic', () => {
  // Tests that addition works with positive numbers
  it('test_addition_positive', () => {
    expect(operate(2, 3, '+')).toMatchSnapshot();
  });

  // Tests that subtraction works with positive numbers
  it('test_subtraction_positive', () => {
    expect(operate(5, 3, '-')).toMatchSnapshot();
  });

  // Tests that multiplication works with positive numbers
  it('test_multiplication_positive', () => {
    expect(operate(2, 3, 'x')).toMatchSnapshot();
  });

  // Tests that division by zero returns an error message
  it('test_division_by_zero', () => {
    expect(operate(2, 0, '÷')).toMatchSnapshot();
  });

  // Tests that addition works with very large numbers
  it('test_addition_very_large_numbers', () => {
    expect(operate('99999999999999999999999999999999999999999999999999', '1', '+')).toMatchSnapshot();
  });

  // Tests that an unknown operation returns an error message
  it('test_unknown_operation', () => {
    expect(() => operate(2, 3, 'z')).toThrowErrorMatchingSnapshot();
  });
});
