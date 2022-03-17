import {render, screen} from '@testing-library/react'
  import EditNote from './EditNote'
    
  describe('EditNote', () => {
      it('renders', () => {
          render(<EditNote />)
          expect(screen.getByText('EditNote')).toBeInTheDocument()
      })
  })
            