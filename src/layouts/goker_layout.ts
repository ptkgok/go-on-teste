import styled from 'styled-components'

export const ProfileResume = styled.div`
  width: 100%;
  min-height: 150px;
  height: max-content;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.foreground};
  margin-top: 50px;
  border-radius: 15px;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Conquests = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100px;
  height: max-content;
  padding: 5px;
  display: flex;
  overflow-x: scroll;
  text-overflow: ellipsis;
`
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 9px;
`
