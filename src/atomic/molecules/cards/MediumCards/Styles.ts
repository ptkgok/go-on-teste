import styled from 'styled-components'
import { ICardProps } from './ICardProps'

export const Container = styled.a<ICardProps>`
  width: ${prop => prop.width || '100%'};
  height: ${prop => prop.width || '15vh'};
  text-decoration: none;
  padding: 20px;
  margin: ${prop => prop.margin || '0px 20px 20px 0px'};
  overflow: hidden;
  display: flex;
  background: ${prop => prop.theme.colors.foreground};
  border-radius: 15px;
  color: #6f8396;
  font-size: 13px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.5s;
  font-weight: bold;

  border: solid 1px;
  border-color: rgba(0, 0, 0, 0.25);

  :hover {
    transform: scale(1.01);
  }

  h3 {
    color: #38d430;
    font-size: 1.8vw;
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

export const IconMediumCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${prop => prop.theme.colors.background}; */
  color: ${prop => prop.theme.colors.primary};
  font-size: 1.2vw;
  width: 70px;
  height: 50px;
  border-radius: 5px;
  margin-right: 15px;
  font-size: 2.2vw;

  @media (max-width: 770px) {
    font-size: 3.2vw;
  }
  @media (max-width: 428px) {
    font-size: 5.2vw;
  }
`
