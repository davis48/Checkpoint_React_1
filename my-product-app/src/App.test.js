import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => content.includes('Bonjour') && element.tagName.toLowerCase() === 'h3');
  expect(linkElement).toBeInTheDocument();
});
