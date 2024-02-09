import { ReactNode } from 'react'
import * as S from './styles'

interface InputProps {
  label?: string
  children?: ReactNode
}

export const Input = ({ children, label }: InputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      {children}
    </S.Container>
  )
}
