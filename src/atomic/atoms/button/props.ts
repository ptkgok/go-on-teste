export interface ButtonProps {
  icon?: any
  text?: string
  onClick?: (event: any) => void
  href?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  outline?: boolean
  primary?: boolean
  secondary?: boolean
  animationIcon?: boolean
  width?: string
  height?: string
}
