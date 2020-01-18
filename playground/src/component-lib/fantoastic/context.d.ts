import React from "react";
import { ToastOptions } from './types';
declare const ToastContext: React.Context<{
    add: (content: React.ReactNode, options?: ToastOptions) => any;
    remove: (id: string) => any;
}>;
export default ToastContext;
