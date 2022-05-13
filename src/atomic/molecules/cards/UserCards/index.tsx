import { useRouter } from 'next/router'
import React from 'react'
import { Container, Informations, UserImage } from './styles'

interface IImplementUserCard {
  imgUrl?: string
  name: string
  category?: string
  goTo?: string
}

function UserCard({ imgUrl, name, category, goTo = '#' }: IImplementUserCard) {
  const history = useRouter()
  return (
    <Container onClick={() => history.push(goTo)}>
      <UserImage
        src={
          imgUrl ||
          'https://media.istockphoto.com/vectors/user-icon-human-person-sign-vector-id587957104?k=6&m=587957104&s=170667a&w=0&h=umaeFHgEnWFB-A45hQYZXvrcqKh-2fnsx68pwcWCR1c='
        }
        alt="profile pic"
      />
      <Informations>
        <h3>{name}</h3>
        <span>{category}</span>
      </Informations>
    </Container>
  )
}
export { UserCard }
