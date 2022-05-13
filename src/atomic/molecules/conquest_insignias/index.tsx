import React from 'react'
import { Container, Img } from './styles'

function Conqueror({ title, img }) {
  return (
    <Container>
      <Img src={img} />
      <span>{title}</span>
    </Container>
  )
}

export { Conqueror }
