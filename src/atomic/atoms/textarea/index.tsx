import React from 'react'
import { TextAreaProps } from './props'
import * as S from './styles'

function TextArea({ ...rest }: TextAreaProps) {
  return <S.Container {...rest} />
}

export default TextArea
