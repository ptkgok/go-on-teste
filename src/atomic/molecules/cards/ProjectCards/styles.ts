import styled from 'styled-components'
import theme from 'styles/theme'
import { IProjectCardsProps } from './IProjectCardsProps'

export const Container = styled.div<IProjectCardsProps>`
  width: ${prop => prop.width || '100%'};
  height: ${prop => prop.height || 'max-content'};
  padding: ${prop => prop.padding || '15px'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${theme.colors.foreground};
  border-radius: 9px;
  margin: ${prop => prop.margin || '5px'};

  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.5s;
  font-weight: bold;

  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  h3,
  h4 {
    color: ${theme.colors.text};
  }

  @media (max-width: 770px) {
    h3 {
      font-size: 2.2vw;
    }
  }

  @media (max-width: 428px) {
    h3 {
      font-size: 4.2vw;
    }
  }
`

export const ProjectImage = styled.img<IProjectCardsProps>`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 2%;
  border-radius: 9px;
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  h3 {
    color: ${theme.colors.primary};
  }
  span {
    color: ${theme.colors.text};
  }
`
