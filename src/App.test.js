import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component without crashing', () => {
  render(<App />);
  // If it renders without throwing an error, the test passes
});

test('renders all category titles', () => {
  render(<App />);
  const hatsTitle = screen.getByText('Hats');
  const jacketsTitle = screen.getByText('Jackets & Sweaters');
  const sneakersTitle = screen.getByText('Sneakers');
  const womensTitle = screen.getByText('Womens');
  const mensTitle = screen.getByText('Mens');

  expect(hatsTitle).toBeInTheDocument();
  expect(jacketsTitle).toBeInTheDocument();
  expect(sneakersTitle).toBeInTheDocument();
  expect(womensTitle).toBeInTheDocument();
  expect(mensTitle).toBeInTheDocument();
});

test('renders "Shop Now" text for each category', () => {
  render(<App />);
  const shopNowElements = screen.getAllByText('Shop Now');
  expect(shopNowElements).toHaveLength(5);
});

test('renders categories container', () => {
  render(<App />);
  // Check that the container element exists by finding its class
  const container = document.querySelector('.categories-container');
  expect(container).toBeInTheDocument();
});

test('each category has correct structure', () => {
  render(<App />);
  const categories = document.querySelectorAll('.category-container');
  expect(categories).toHaveLength(5);

  categories.forEach(category => {
    const bodyContainer = category.querySelector('.category-body-container');
    expect(bodyContainer).toBeInTheDocument();

    const title = bodyContainer.querySelector('h2');
    expect(title).toBeInTheDocument();

    const shopNowText = bodyContainer.querySelector('p');
    expect(shopNowText).toBeInTheDocument();
    expect(shopNowText.textContent).toBe('Shop Now');
  });
});
