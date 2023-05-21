import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Icon from './index'

describe('Icon', () => {
  it('renders with the provided className', () => {
    const { container } = render(<Icon name="user" className="custom-icon" />)
    expect(container.querySelector('.icon')).toHaveClass('custom-icon')
  })

  it('renders null if the provided name is not supported', () => {
    const warnSpy = jest.spyOn(console, 'warn')
    warnSpy.mockImplementation(() => {})
    // @ts-expect-error: Checking for invalid name prop
    const { container } = render(<Icon name="invalid" />)
    expect(container.firstChild).toBeNull()
    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy).toHaveBeenCalledWith('Icon \'invalid\' is not supported.')

    warnSpy.mockRestore()
  })
})
