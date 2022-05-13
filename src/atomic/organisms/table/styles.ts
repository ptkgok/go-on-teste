import styled from 'styled-components'

export const AllTable = styled.div`
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1560px) {
    margin-top: 5%;
  }
`

export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

export const RowHead = styled.div`
  width: 100%;
  border: solid;
  border-width: 0px;
  border-bottom-width: solid 0.5px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  transition: all 0.5s;
  color: #fff;
  font-weight: 700;

  -webkit-font-smoothing: antialiased;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1560px) {
    margin-top: 15px;
    overflow: scroll;

    ::-webkit-scrollbar {
      /* display: none; */
    }
  }
`

export const Row = styled.div`
  width: 100%;
  border: solid;
  border-width: 0px;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  transition: all 0.5s;
  color: #fff;
  font-weight: 700;
  -moz-font-feature-settings: on;
  -ms-font-feature-settings: on;
  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  background: #272727;
  :hover {
    filter: brightness(1.1);
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1560px) {
    overflow: scroll;

    ::-webkit-scrollbar {
      /* display: none; */
    }
  }
`

export const Column = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1000px) {
    font-size: 0.95vw;
  }
`

export const ColumnHead = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85vw;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 15px 0px;
  overflow: scroll;
  font-size: 0.95em;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1000px) {
    font-size: 0.95vw;
  }
`

export const NotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;

  h2 {
    color: #fff;
    margin-bottom: 50px;
  }
`

export const TableContent = styled.div`
  width: 100%;
  height: 50vh;
  overflow: scroll;
  background-color: #2c2c2e;

  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
`
