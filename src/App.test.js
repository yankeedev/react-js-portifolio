import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function matchMedia() {
      return {
        matches: false,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      };
    };
});

test('renders the hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Emery/i);
});

test('renders the primary navigation', () => {
  render(<App />);
  expect(
    screen.getByRole('navigation', { name: /primary/i })
  ).toBeInTheDocument();
});
