import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a link to the 3rd semester website', () => {
  render(<App />);
  const button = screen.getByText(/3rd sem website/i);
  expect(button).toBeInTheDocument();
  expect(button.closest('a')).toHaveAttribute(
    'href',
    'https://important-videos-for-3rd-semester-cse.netlify.app/'
  );
});
