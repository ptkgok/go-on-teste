import styled, { css } from 'styled-components'
import { ButtonProps } from './props'

export const Container = styled.button<ButtonProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: max-content;
  gap: 1rem;
  border: none;
  i {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  transition: all 0.2s ease-in-out;

  ${({ theme, outline, primary, secondary, animationIcon }) => {
    switch (outline || primary || secondary || animationIcon) {
      case outline:
        return css`
          border: 1px solid ${primary ? theme.colors.primary : '#ced4da'};
          border-radius: 0.25rem;
          color: ${primary ? theme.colors.primary : '#ced4da'};
          background-color: transparent;
          transition: all 0.15s ease-in-out;

          &:hover {
            background-color: ${primary ? theme.colors.primary : '#ced4da'};
            color: #000;
          }
        `
      case primary:
        return css`
          color: #fff;
          background-color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          transition: all 0.15s ease-in-out;

          &:hover {
            background-color: #85d430;
            border-color: #85d410;
          }
        `
      case secondary:
        return css`
          color: #fff;
          background-color: ${theme.colors.foreground};
          border-color: ${theme.colors.foreground};
          transition: all 0.15s ease-in-out;

          &:hover {
            background-color: #5a6268;
            border-color: #545b62;
          }
        `
      case animationIcon:
        return css`
          i {
            display: none;
          }
          &:hover {
            i {
              display: block;
            }
            animation: 0.2s ease-in-out;
          }
        `
    }
  }}
`
