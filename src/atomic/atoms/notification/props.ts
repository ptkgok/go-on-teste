export interface NotificationProps {
  active: boolean
  setActive: (active: boolean) => void
  text: string
  type: 'success' | 'error' | 'info'
}
