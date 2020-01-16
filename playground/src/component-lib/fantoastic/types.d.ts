export interface IToast {
    textContent: string;
    id: string;
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom';
    variant: string;
    duration: number;
}
export interface IToastOptions {
    id: string;
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom';
    variant: string;
    duration: number;
}
