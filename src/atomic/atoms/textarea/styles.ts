import styled, { css } from 'styled-components'
import { TextAreaProps } from './props'

export const Container = styled.textarea<TextAreaProps>`
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 5px;
  border: 0.7px solid rgba(209, 213, 219, 0.8);
  font-size: 0.975rem;
  line-height: 1.25rem;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  color: white;
  background: transparent;
  box-sizing: border-box;
  resize: none;
`
