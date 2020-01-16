export declare const TOAST_POSITIONS: readonly ["topLeft", "topRight", "bottomLeft", "bottomRight", "top", "bottom"];
export declare type ToastPositions = typeof TOAST_POSITIONS[number];
export interface ToastOptions {
    position?: ToastPositions;
    variant?: string;
    duration?: number;
    persist?: boolean;
}
export interface Toast {
    id: string;
    textContent: string;
    options: ToastOptions;
}
