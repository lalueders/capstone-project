import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchNotes from './SearchNotes';

describe('Searchbar', () => {
  it('renders a search input', () => {
    render(<SearchNotes />);

    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
  it('click on search input change state of active', () => {
    const mockSetActive = jest.fn();
    render(<SearchNotes setActive={mockSetActive} />);

    const searchInput = screen.getByRole('searchbox');
    userEvent.click(searchInput);
    expect(mockSetActive).toHaveBeenCalled();
  });
  it('type in search input change state of searchInput', () => {
    const mockSetActive = jest.fn();
    const mockSetSearchInput = jest.fn();
    render(<SearchNotes setActive={mockSetActive} setSearchInput={mockSetSearchInput} />);

    const searchInput = screen.getByRole('searchbox');
    userEvent.type(searchInput, 'search');
    expect(mockSetSearchInput).toHaveBeenCalled();
  });
});
