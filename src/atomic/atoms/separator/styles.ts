import styled, { css } from 'styled-components'

type Props = {
  direction?: 'row' | 'column'
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end'
  label?: string
}

export const Container = styled.div<Props>`
  ${({ theme, direction, align, justify, label }) => css`
    width: 100%;
    display: flex;
    flex-direction: ${direction || 'row'};
    align-items: ${align || 'center'};
    justify-content: ${justify || 'center'};
    ${!label &&
    css`
      height: 1px;
      display: block;
      background: rgba(0, 0, 0, 0.25);
      border-radius: 100%;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      width: 70%;
    `}

    ${label &&
    css`
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      font-weight: 500;
      color: ${theme.colors.text};
      display: flex;
      gap: 5px;
      ::before,
      ::after {
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        background: royalblue;
      }
    `}
  `}
`
