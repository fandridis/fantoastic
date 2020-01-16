import React from "react";
import { ToastOptions } from './types';
declare const ToastContext: React.Context<{
    add: (textContent: string, options?: ToastOptions) => any;
    remove: (id: string) => any;
}>;
export default ToastContext;
