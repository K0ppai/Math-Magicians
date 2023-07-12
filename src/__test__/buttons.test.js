import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Buttons from '../components/buttons';

test('all buttons should render', () => {
  const handleClick = jest.fn();
  render(<Buttons handleClick={handleClick} />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(19);
});
