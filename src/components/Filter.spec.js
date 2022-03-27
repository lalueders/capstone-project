import { render, screen } from '@testing-library/react';
import Filter from './Filter';

describe('Filter', () => {
  it('renders four buttons', () => {
    const categories = ['family', 'friends', 'vacation', 'others'];
    render(<Filter categories={categories} />);

    const button1 = screen.getByRole('button', { name: /family/i });
    const button2 = screen.getByRole('button', { name: /friends/i });
    const button3 = screen.getByRole('button', { name: /vacation/i });
    const button4 = screen.getByRole('button', { name: /others/i });

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
    expect(button4).toBeInTheDocument();
  });
});
