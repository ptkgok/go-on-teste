import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const TitlePage = styled.h2`
  color: ${props => props.theme.colors.primary};
`

export const Content = styled.div`
  max-width: 85rem;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  padding-top: 50px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ${TitlePage} {
    margin-top: 60px;
  }

  color: black;
`
