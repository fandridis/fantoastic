export const TOAST_POSITIONS = <const>['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'top', 'bottom'];

export type ToastPositions = typeof TOAST_POSITIONS[number];

export interface ToastOptions {
  position?: ToastPositions,
  variant?: string,
  duration?: number,
  persist?: boolean,
  withCloseIcon?: boolean
}

export interface Toast {
  id: string,
  content: React.ReactNode, // TODO: Maybe make it a node or a component
  options: ToastOptions
}
