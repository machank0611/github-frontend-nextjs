import { render, screen } from '@testing-library/react'
import { act } from 'react'  // この行を追加
import '@testing-library/jest-dom'
import Home from '../src/app/page'

it('Should render title text', async () => {  // async を追加
  await act(async () => {  // act で囲む
    render(<Home />)
  })
  expect(screen.getByText(/Get started by editing/)).toBeInTheDocument()
})