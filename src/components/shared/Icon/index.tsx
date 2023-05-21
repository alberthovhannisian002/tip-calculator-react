import React, { type FunctionComponent } from 'react'
import { ReactComponent as DollarIcon } from '../../../assets/icon-dollar.svg'
import { ReactComponent as UserIcon } from '../../../assets/icon-person.svg'
import { ReactComponent as Logo } from '../../../assets/logo.svg'

interface IconProps {
  name: 'dollar' | 'user' | 'logo'
  className?: string
  [key: string]: any
}

const icons: Record<string, FunctionComponent> = {
  dollar: DollarIcon,
  user: UserIcon,
  logo: Logo
}

/**
 * A reusable icon component.
 *
 * @component
 *
 * @param {IconProps} props - The component props.
 * @param {string} props.name - The name of the icon to render.
 * @param {string} [props.className] - Additional CSS class name for the icon. *
 * @return {JSX.Element} The rendered icon component.
 *
 * @example
 * // Basic usage
 * <Icon name="dollar" className="dollar-icon" />
 *
 */
const Icon: React.FC<IconProps> = ({ name, className, ...restProps }) => {
  const IconComponent = icons[name]
  if (!IconComponent) {
    console.warn(`Icon '${name}' is not supported.`)
    return null
  }

  return <div className={`icon ${className ?? ''}`} {...restProps}><IconComponent /></div>
}

export default Icon
