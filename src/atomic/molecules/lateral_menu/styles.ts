import styled from 'styled-components'

export const LateralMenuContainer = styled.div`
  width: 3.5rem;
  max-width: 250px;
  height: 100vh;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.theme.colors.background};
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); */
  border: solid;
  border-width: 0px;
  border-right-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
`

export const ItemMenu = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span:first-child {
    margin-left: 0px;
    margin-right: 18px;
  }

  color: ${props => props.theme.colors.primary};
  font-size: 17px;
  font-weight: 300;

  svg {
    width: 30px;
  }

  transition: all 0.5s;
  :hover {
    width: 2.5rem;
    height: 2.5rem;
    background: #363638;
  }
`
