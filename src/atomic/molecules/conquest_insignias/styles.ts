import styled from 'styled-components'
import theme from 'styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;

  span {
    color: ${theme.colors.primary};
  }
`

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`
