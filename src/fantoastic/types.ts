export interface IToast {
  textContent: string, // TODO: Maybe make it a node or a component
  id: string;
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom',
  variant: string;
  duration: number;
}

export interface IToastOptions {
  id: string;
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom',
  variant: string;
  duration: number;
}
