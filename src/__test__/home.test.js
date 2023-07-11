import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';

test('Heading should render', () => {
  render(<Home />);
  const headingElement = screen.getByText('Welcome to our page!');
  expect(headingElement).toBeInTheDocument();
});
