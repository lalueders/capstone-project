import { render, screen } from '@testing-library/react';
import App from './App.js';

describe('App', () => {
  it('renders date, heading and text', () => {
    render(<App />);
    const list = screen.getAllByRole('heading');
    expect(list.length).toBe(5);
  });
});
