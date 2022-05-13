import React from 'react'
import { MdAccessAlarm } from 'react-icons/md'
import { SelectProps } from './props'
import * as S from './styles'

function Select({ ...rest }: SelectProps) {
  return (
    <S.Container>
      <S.Field {...rest}>
        <option value="0">Em branco</option>
        {rest.values?.map((value, key) => (
          <option key={key} value={value}>
            {value[rest.nameValues]}
          </option>
        ))}
      </S.Field>
    </S.Container>
  )
}

export default Select
