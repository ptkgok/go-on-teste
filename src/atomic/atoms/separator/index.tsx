import React from 'react'

import * as S from './styles'

type Props = {
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end'
  label?: string
}

function Separator({ label, direction, align, justify }: Props) {
  return <S.Container label={label}>{label}</S.Container>
}

export default Separator
