import React from 'react'
import { ButtonProps } from './props'

import * as S from './styles'

function Button({ icon, text, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      {icon && <i>{icon}</i>} {text && text}
    </S.Container>
  )
}

export default Button
