import styled from 'styled-components'

export const TopMenuContainer = styled.div`
  width: 100%;
  height: 60px;
  z-index: 99;
  padding-left: 270px;
  position: fixed;
  right: 0;
  display: flex;

  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.background};

  max-height: 3rem;
  padding: 0.5rem;
  border-bottom-width: 1px;
  height: 3rem;
  border: solid;
  border-width: 0px;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);

  @media (max-width: 380px) {
    padding-left: 15vw;
  }
`

export const ProfilePart = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Notification = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 8px;
  background: #363638;
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`
export const BalloonContainer = styled.div`
  width: 200px;
  background-color: ${props => props.theme.colors.foreground};
  position: fixed;
  display: none;
  flex-direction: column;
  padding: 10px;
  top: 70px;
  right: 10px;
  border-radius: 8px;

  @keyframes OptionAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: OptionAnimation;
  animation-duration: 0.6s;

  :hover {
    display: flex;
  }
`

export const ItensBalloon = styled.div`
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.colors.background};
  }
  color: ${props => props.theme.colors.primary};
  span {
    letter-spacing: 1px;
    padding-left: 15px;
    margin-right: 15px;
  }
`

export const ProfileImage = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  border: solid 1px black;
  margin-right: 35px;
  cursor: pointer;

  :hover + ${BalloonContainer} {
    display: flex;
  }
`
