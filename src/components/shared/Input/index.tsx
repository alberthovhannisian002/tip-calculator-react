import { type ReactNode } from 'react'

interface TInput {
  icon?: ReactNode
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  error?: string | boolean
}

/**
 * A reusable input component.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.icon] - The icon to be displayed within the input container.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {function} [props.onChange] - The change event handler for the input field.
 * @param {string|number} [props.value] - The current value of the input field.
 * @param {string|boolean} [props.error] - The error message or indicator for the input field.
 *
 * @example
 * // Basic usage
 * <Input placeholder="Enter a value" onChange={handleInputChange} value={inputValue} />
 *
 * @example
 * // Input field with an icon
 * <Input icon={<Icon name="user" />} placeholder="Username" />
 *
 * @example
 * // Input field with an error message
 * <Input placeholder="Enter a value" error="Invalid value" />
 */
const Input = ({ icon, placeholder, onChange, value, error }: TInput): JSX.Element => (
    <div className={`input-container ${error ? 'input-container--errored' : ''}`}>
        {icon}
        <span className="input-container--error">{error}</span>
        <input type='text' className='input-container--field' placeholder={placeholder} value={value} onChange={onChange} />
    </div>
)

export default Input
