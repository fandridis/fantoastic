/// <reference types="react" />
export declare const TOAST_POSITIONS: readonly ["topRight", "topLeft", "bottomRight", "bottomLeft", "top", "bottom"];
export declare const TOAST_VARIANTS: readonly ["default", "primary", "success", "danger"];
export declare type ToastPositions = typeof TOAST_POSITIONS[number];
export declare type ToastVariants = typeof TOAST_VARIANTS[number];
export interface ToastOptions {
    position?: ToastPositions;
    variant?: ToastVariants;
    duration?: number;
    persist?: boolean;
    withCloseIcon?: boolean;
}
export interface Toast {
    id: string;
    content: React.ReactNode;
    options: ToastOptions;
}
