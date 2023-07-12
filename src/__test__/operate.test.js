import operate from '../logic/operate';

describe('test_the_operator_logic', () => {
  // Tests that addition works with positive numbers
  it('test_addition_positive', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  // Tests that subtraction works with positive numbers
  it('test_subtraction_positive', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  // Tests that multiplication works with positive numbers
  it('test_multiplication_positive', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  // Tests that division by zero returns an error message
  it('test_division_by_zero', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });

  // Tests that addition works with very large numbers
  it('test_addition_very_large_numbers', () => {
    expect(operate('99999999999999999999999999999999999999999999999999', '1', '+')).toBe('1e+50');
  });

  // Tests that an unknown operation returns an error message
  it('test_unknown_operation', () => {
    expect(() => operate(2, 3, 'z')).toThrow("Unknown operation 'z'");
  });
});
