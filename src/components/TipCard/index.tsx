import React from 'react'
import { type ReactNode } from 'react'

interface TCard {
  children: ReactNode
  value: number
  onClick: (value: number) => void
  isSelected: boolean
}

export const TipCard = ({ children, value, onClick, isSelected }: TCard): JSX.Element => (
    <div className={`tipcard ${isSelected ? 'tipcard-selected' : ''}`} onClick={() => { onClick(value) }} key={value}>
        {children}
    </div>
)
