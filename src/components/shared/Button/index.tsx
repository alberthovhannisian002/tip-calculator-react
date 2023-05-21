import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

/**
 * A reusable button component.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {function} [props.onClick] - The click event handler for the button.
 * @param {boolean} [props.disabled=false] - Indicates if the button is disabled.
 *
 * @example
 * // Basic usage
 * <Button onClick={() => console.log('Button clicked')}>Click me</Button>
 *
 * @example
 * // Button with disabled state
 * <Button disabled>Disabled Button</Button>
 */
const Button = ({ children, onClick, disabled }: ButtonProps): JSX.Element => {
  const handleClick = (): void => {
    if ((onClick != null) && !disabled) {
      onClick()
    }
  }

  return (
    <div className={`button ${disabled ? 'button-disabled' : ''}`} onClick={handleClick}>
      {children}
    </div>
  )
}

export default Button
