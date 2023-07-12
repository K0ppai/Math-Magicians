import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Nav from '../components/nav';

test('Nav should render', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
  );
  const navLinks = screen.getAllByRole('link');
  const navTitle = screen.getByRole('heading', { name: 'Math Magicians' });
  expect(navLinks).toHaveLength(3);
  expect(navTitle).toBeInTheDocument();
});
