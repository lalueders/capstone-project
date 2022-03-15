import { render, screen } from '@testing-library/react';
import AddButton from './AddButton';

describe('AddButton', () => {
  it('renders a button with an image as content', () => {
    render(<AddButton />);

    expect(screen.getByText('AddButton')).toBeInTheDocument();
  });
});
