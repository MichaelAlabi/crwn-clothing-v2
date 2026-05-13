import { render, screen } from '@testing-library/react';
import App from './App';

test('renders category headings', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Hats' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Jackets & Sweaters' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Sneakers' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Womens' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Mens' })).toBeInTheDocument();
});
