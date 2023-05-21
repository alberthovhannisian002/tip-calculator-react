import React, { type ReactNode } from 'react'

const Label: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="label">{children}</div>
)

export default Label
