import { MouseEventHandler, ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <S.Button className={className} onClick={onClick}>
      {children}
    </S.Button>
  )
}
