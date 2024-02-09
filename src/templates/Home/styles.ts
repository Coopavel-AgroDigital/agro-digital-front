import theme from '@/styles/theme'
import styled from 'styled-components'

export const Section = styled.section`
  padding: 0px 30px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  color: ${theme.colors.green};
`

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`
