import React, { useEffect } from 'react'
import { NotificationProps } from './props'

import * as S from './styles'

function Notification({ active, setActive, text, type }: NotificationProps) {
  const ref = React.useRef()

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false)
      }, 6000)
    }
  }, [active])

  return active ? (
    <S.Container ref={ref} type={type}>
      <span>{text}</span>
    </S.Container>
  ) : null
}

export default Notification
