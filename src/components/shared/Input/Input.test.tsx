import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Input from './index'

describe('Input', () => {
  it('renders the input field with the provided value', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(<Input value="Test value" onChange={handleChange} placeholder='Enter text'/>)
    const inputElement = getByPlaceholderText('Enter text') as HTMLInputElement
    expect(inputElement.value).toBe('Test value')
  })

  it('calls the onChange handler when the input value changes', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(<Input onChange={handleChange} placeholder="Enter text" />)
    const inputElement = getByPlaceholderText('Enter text') as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'New value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(inputElement.value).toBe('New value')
  })

  it('displays the error message when the error prop is provided', () => {
    const { getByText } = render(<Input error="Invalid value" />)
    const errorElement = getByText('Invalid value')
    expect(errorElement).toBeInTheDocument()
  })

  it('applies the errored class when the error prop is provided', () => {
    const { container } = render(<Input error="Invalid value" />)
    expect(container.firstChild).toHaveClass('input-container--errored')
  })
})
