export const TOAST_POSITIONS = <const>['topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'top', 'bottom'];
export const TOAST_VARIANTS = <const>['default', 'primary', 'success', 'danger'];

export type ToastPositions = typeof TOAST_POSITIONS[number];
export type ToastVariants = typeof TOAST_VARIANTS[number];

export interface ToastOptions {
  position?: ToastPositions,
  variant?: ToastVariants,
  duration?: number,
  persist?: boolean,
  withCloseIcon?: boolean
}

export interface Toast {
  id: string,
  content: React.ReactNode,
  options: ToastOptions
}
