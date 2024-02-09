import { FormEventHandler, ReactNode } from 'react'
import * as S from './styles'

interface FormProps {
  children?: ReactNode
  onSubmit: FormEventHandler
}

export const Form = ({ children, onSubmit }: FormProps) => {
  return <S.Container onSubmit={onSubmit}>{children}</S.Container>
}
