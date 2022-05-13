import styled from 'styled-components'
import { NotificationProps } from './props'

export const Container = styled.div<NotificationProps>`
  width: max-content;
  max-width: 200px;
  padding: 10px;
  position: fixed;
  top: 5rem;
  right: 3rem;
  background: ${props =>
    props.type === 'success'
      ? props => props.theme.colors.primary
      : props.type === 'error'
      ? '#F44336'
      : '#2196F3'};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 99999999;
  span {
    text-align: left;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
`
