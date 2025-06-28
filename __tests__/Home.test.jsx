import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../src/app/page'

// React.act の問題を回避する方法
it('Should render title text', () => {
  // act警告を一時的に無効化
  const originalError = console.error
  console.error = jest.fn()
  
  render(<Home />)
  expect(screen.getByText(/Get started by editing/)).toBeInTheDocument()
  
  // console.errorを復元
  console.error = originalError
})