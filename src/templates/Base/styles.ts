import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${theme.spacings.small} 0px;
  gap: 40px;
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
