import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../src/app/page'

it('Should render title text', () => {
  render(<Home />)
  expect(screen.getByText(/Get started by editing/)).toBeInTheDocument()
})