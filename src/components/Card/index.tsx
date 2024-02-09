import { ReactNode } from 'react'
import * as S from './styles'

interface CardProps {
  title: string
  children?: ReactNode
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <S.Container>
      {' '}
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
