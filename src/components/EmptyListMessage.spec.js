import {render, screen} from '@testing-library/react'
  import EmptyListMessage from './EmptyListMessage'
    
  describe('EmptyListMessage', () => {
      it('renders', () => {
          render(<EmptyListMessage />)
          expect(screen.getByText('EmptyListMessage')).toBeInTheDocument()
      })
  })
            