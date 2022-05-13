import { useRouter } from 'next/router'
import React from 'react'
import { Container, Informations, ProjectImage } from './styles'
interface IImplementProjectCard {
  imgUrl?: string
  name: string
  category?: string
  goTo?: string
}

const ProjectCards: React.FC<IImplementProjectCard> = ({
  imgUrl,
  name,
  category,
  goTo = '#'
}) => {
  const history = useRouter()

  return (
    <Container onClick={() => history.push(goTo)}>
      <ProjectImage
        src={
          imgUrl ||
          'https://media.istockphoto.com/vectors/user-icon-human-person-sign-vector-id587957104?k=6&m=587957104&s=170667a&w=0&h=umaeFHgEnWFB-A45hQYZXvrcqKh-2fnsx68pwcWCR1c='
        }
        alt="Project pic"
        loading="lazy"
      />
      <Informations>
        <h3>{name}</h3>
        <h4>{category}</h4>
      </Informations>
    </Container>
  )
}

export { ProjectCards }
