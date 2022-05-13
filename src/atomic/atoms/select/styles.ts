import styled, { css } from 'styled-components'
import { SelectProps } from './props'

export const Container = styled.div<SelectProps>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: ${({ theme }) => theme.borders.radius};
  border: 0.7px solid rgba(209, 213, 219, 0.8);
  color: ${({ theme }) => theme.colors.foreground};
`
export const Field = styled.select<SelectProps>`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  box-sizing: border-box;
  display: block;
  border-radius: 0.375rem;
  font-size: 0.975rem;
  line-height: 1.25rem;
  padding-left: 0.5rem;
  color: white;
`
