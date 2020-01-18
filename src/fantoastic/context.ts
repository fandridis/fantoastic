import React, { ReactNode } from "react";
import { ToastOptions } from './types';

const ToastContext = React.createContext({
  add: (content: ReactNode, options?: ToastOptions) => null,
  remove: (id: string) => null
});

export default ToastContext;
