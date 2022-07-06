import { render, screen } from '@testing-library/react';
import App from '../../../../client/components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Starter Kit/i);
  expect(linkElement).toBeTruthy();
});
