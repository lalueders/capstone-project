import {render, screen} from '@testing-library/react'
  import Navigation from './Navigation'
    
  describe('Navigation', () => {
      it('renders', () => {
          render(<Navigation />)
          expect(screen.getByText('Navigation')).toBeInTheDocument()
      })
  })
            