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
`
export const Container = styled.div`
  background-color: ${theme.colors.gray};
  border-radius: 10px;
  padding: 10px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  small {
    font-size: 20px;
  }

  &.danger {
    border: 2px solid ${theme.colors.red};

    h4 {
      color: ${theme.colors.red};
    }

    div {
      color: ${theme.colors.red};
    }
  }
`

export const Title = styled.h4`
  width: 100%;
  font-size: 14px;
  color: ${theme.colors.darkGray};
`

export const Content = styled.div`
  width: 100%;
  font-size: 40px;
  color: ${theme.colors.green};
`
