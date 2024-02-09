import { ReactNode } from 'react'
import * as S from './styles'

interface CardProps {
  title: string
  children?: ReactNode
  data: any
  datatype?: string
}

export const Card = ({ title, data, datatype }: CardProps) => {
  return (
    <S.Container className={!data ? 'danger' : ''}>
      {' '}
      <S.Title>{title}</S.Title>
      <S.Content>
        {!data ? '0' : data}
        <small>{datatype}</small>
      </S.Content>
    </S.Container>
  )
}
