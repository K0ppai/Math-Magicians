import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Quote from '../components/quote';

it('Quote should render', () => {
  render(<Quote />);
  const quote = screen.getByRole('heading');
  expect(quote).toBeInTheDocument();
});
