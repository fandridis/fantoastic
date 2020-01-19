export interface ToastOptions {
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom',
  variant?: 'default' | 'primary' | 'success' | 'danger',
  duration?: number,
  persist?: boolean,
  withCloseIcon?: boolean
}