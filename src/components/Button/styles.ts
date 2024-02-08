import theme from '@/styles/theme'
import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${theme.colors.green};
  padding: 10px 20px;
  font-weight: bold;
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  font-family: ${theme.font.family.inter};

  &.second {
    background-color: unset;
    border: 2px solid ${theme.colors.green};
    color: ${theme.colors.green};
  }
`
