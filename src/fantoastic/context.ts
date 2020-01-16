import React from "react";
import { ToastOptions } from './types';

const ToastContext = React.createContext({
  add: (textContent: string, options?: ToastOptions) => null,
  remove: (id: string) => null
});

export default ToastContext;
