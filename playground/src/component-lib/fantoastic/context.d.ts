import React from "react";
interface IContextProps {
    add: (textContent: string, options: {
        position?: string;
        variant?: string;
        duration?: number;
    }) => void;
    remove: (id: string, position: string) => void;
}
declare const ToastContext: React.Context<IContextProps>;
export default ToastContext;
