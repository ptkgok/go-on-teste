import React from 'react'
import {
  ProfilePart,
  TopMenuContainer,
  Notification,
  ProfileImage,
  BalloonContainer,
  ItensBalloon
} from './styles'
import { MdNotifications } from 'react-icons/md'

import { BiLogOut } from 'react-icons/bi'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'

interface Menu {
  active?: string
}

const TopMenu: React.FC<Menu> = ({ active }) => {
  const Router = useRouter()
  const handleOut = ctx => {
    destroyCookie(ctx, '@gok/token')
    destroyCookie(ctx, '@gok/user')

    Router.push('/')
  }

  return (
    <TopMenuContainer>
      <div></div>
      <ProfilePart>
        <Notification>
          <MdNotifications color="#38D430" size="14px" />
        </Notification>
        <ProfileImage
          id="profileimg"
          src="https://media.istockphoto.com/vectors/user-icon-human-person-sign-vector-id587957104?k=6&m=587957104&s=170667a&w=0&h=umaeFHgEnWFB-A45hQYZXvrcqKh-2fnsx68pwcWCR1c="
          loading="lazy"
        />
        <BalloonContainer id="balloon">
          <div
            style={{
              width: 100,
              height: 40,
              position: 'absolute',
              top: -30,
              right: 20
            }}
          ></div>
          <ItensBalloon onClick={handleOut}>
            <span>Deslogar</span> <BiLogOut />
          </ItensBalloon>
          {/* <ItensBalloon>
              <span>Perfil</span> <MdPeople />
            </ItensBalloon> */}
        </BalloonContainer>
      </ProfilePart>
    </TopMenuContainer>
  )
}

export default TopMenu
