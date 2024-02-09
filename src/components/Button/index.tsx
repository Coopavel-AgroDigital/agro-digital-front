import { MouseEventHandler, ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <S.Button
      className={className}
      type={type ? type : 'button'}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}
