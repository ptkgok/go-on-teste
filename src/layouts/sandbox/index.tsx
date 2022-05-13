import TopMenu from '@molecules/top_menu'
import React from 'react'
import * as S from './styles'

const SandboxLayout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <TopMenu />
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default SandboxLayout
