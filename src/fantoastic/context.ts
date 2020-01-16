import React from "react";
import { IToast } from './types';

interface IContextProps {
  add: (textContent: string, options: { position?: string, variant?: string, duration?: number }) => void;
  remove: (id: string, position: string) => void;
}


// interface IContextProps {
//   add: (textContent: string, options: { position?: string, variant?: string, duration?: number }) => void;
//   remove: (id: string, position: string) => void;
// }

const ToastContext = React.createContext<IContextProps>({
  add: (textContent: string, options: { position?: string, variant?: string, duration?: number }) => null,
  remove: (id: string, position: string) => null
});

export default ToastContext;
