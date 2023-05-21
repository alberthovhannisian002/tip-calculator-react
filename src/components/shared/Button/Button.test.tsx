import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './index'

describe('Button', () => {
  test('renders children correctly', () => {
    const { getByText } = render(<Button>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>)
    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick} disabled>Click me</Button>)
    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)
    expect(handleClick).not.toHaveBeenCalled()
  })

  test('applies disabled styles when disabled prop is true', () => {
    const { getByText } = render(<Button disabled>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toHaveClass('button-disabled')
  })
})
