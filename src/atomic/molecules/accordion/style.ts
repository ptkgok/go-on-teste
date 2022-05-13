import styled from 'styled-components'
import theme from 'styles/theme'
import { AccordionProps } from './props'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`

export const Title = styled.div<AccordionProps>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: ${props => props.justifyText || 'left'};
  align-items: ${props => props.alignText || 'center'};
  background-color: ${theme.colors.foreground};
  padding: 0px 1rem;
  cursor: pointer;
  user-select: none;

  h4 {
    color: white;
  }
`

export const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${theme.colors.text};
  padding: 15px 1rem;
  transition: 0.4s;

  span {
    color: white;
  }
`
