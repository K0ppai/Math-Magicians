import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('Calculator should render', () => {
    render(<Calculator />);
    const calculator = screen.getByRole('heading', { name: 'Let\'s do some math!' });
    expect(calculator).toBeInTheDocument();
  });

  test('Display should change', () => {
    render(<Calculator />);
    const display = document.querySelector('.display');
    const plus = screen.getByRole('button', { name: '+' });
    const five = screen.getByRole('button', { name: '5' });
    const four = screen.getByRole('button', { name: '4' });
    const equal = screen.getByRole('button', { name: '=' });
    const AC = screen.getByRole('button', { name: 'AC' });

    fireEvent.click(plus);
    expect(display).toHaveTextContent('+');

    fireEvent.click(AC);
    expect(display).toHaveTextContent('0');

    fireEvent.click(five);
    fireEvent.click(plus);
    fireEvent.click(four);
    fireEvent.click(equal);
    expect(display).toHaveTextContent('9');
  });
});
