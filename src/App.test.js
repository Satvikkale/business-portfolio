import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio homepage and primary contact CTA', () => {
  render(<App />);
  expect(screen.getByText(/building modern/i)).toBeInTheDocument();
  expect(screen.getAllByText(/hire me/i).length).toBeGreaterThan(0);
});
